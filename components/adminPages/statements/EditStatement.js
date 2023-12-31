import React, { use, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, LinearProgress, Modal } from '@mui/material';
import { EditRounded } from '@mui/icons-material';
import Image from 'next/image';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import axios from 'axios';
import { storage } from 'utils/firebase';
import { deleteOldImage } from 'utils/firebase'; // Make sure this utility is correctly implemented
import { useDispatch, useSelector } from 'react-redux';
import { errorGlobal, successGlobal } from 'store/reducers/notifications.reducer';
import { refreshReducer } from 'store/reducers/refresh.reducer';
import ConfirmModal from 'mui/confirmModal';


const EditStatement = ({ statement }) => {
   
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    //redux 
    const user = useSelector(state => state.user.data)
    const dispatch = useDispatch();

    //formik 
    const formik = useFormik({
        initialValues: {
            title: statement ? statement.sTitle : '',
            imageUrl: statement ? statement.sImageUrl : '',
            id: statement ? statement._id : '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            imageUrl: Yup.string().required('Image URL is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            if (file) {
                try {
                    const newImageUrl = await handleFileUpload(file);
                    await deleteOldImage(values.imageUrl); // Ensure this utility is correctly implemented
                    values.imageUrl = newImageUrl;
                } catch (error) {
                    console.error('Error in image handling:', error);
                    setLoading(false);
                    return;
                }
            }

            try {
                await axios.post('/api/statements/crud', {...values,date:statement.sDate,action: 'update'});
                dispatch(successGlobal('Edited successfully!'));
                dispatch(refreshReducer());
                handleClose();
                resetForm();
            } catch (error) {
                console.error('Error updating statement:', error);
                dispatch(errorGlobal(error.response.data.message));
            } finally {
                setLoading(false);
            }
        },
    });

    const handleFileUpload = async (file) => {
        const storageRef = ref(storage, `statements/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Handle progress...
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
                },
                (error) => {
                    console.error('Error uploading file:', error);
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                }
            );
        });
    };
useEffect(() => {
    console.log(user, "user at edit statement");
    if (statement) {
        formik.setFieldValue('title', statement.sTitle);
        formik.setFieldValue('imageUrl', statement.sImageUrl);
        formik.setFieldValue('id', statement._id);
    }
}, [statement]);
  
    const handleDelete = async ({_id}) => { 
        setLoading(true)
        await axios.post('/api/statements/crud',{id:_id,action:"delete"})
        .then( ()=>{
            dispatch(successGlobal('Pocket deleted, congrats !!'))
            dispatch(refreshReducer())
            handleClose()
            // setCreatObjectUrl(null)
        }).catch(error=>{
            console.log(error);
            dispatch(errorGlobal(error.response.data.message))
        }).finally(()=>{
            setLoading(false)
        });
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setFile(null);
        setOpen(false);
        formik.resetForm();
    };

    return (
        <div>
            <EditRounded
                sx={{ fontSize: 25, color: 'palette.primary.main' }}
                onClick={handleOpen}
            />
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(0,0,0,0.5)',
                }}
            >
                <Box
                    component="form"
                    onSubmit={formik.handleSubmit}
                    sx={{
                        width: '80%',
                        height: '90%',
                        bgcolor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '10%',
                            display: 'flex',
                            mt: '2%',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            padding: 2,
                            gap: 2,
                        }}
                    >
                        <TextField
                            type="text"
                            label="Title"
                            variant="outlined"
                            sx={{ width: '70%' }}
                            {...formik.getFieldProps('title')}
                            error={formik.touched.title && formik.errors.title ? true : false}
                            helperText={formik.touched.title && formik.errors.title ? formik.errors.title : null}
                        />
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </Box>
                    {file && (
                        <LinearProgress variant="determinate" value={uploadProgress} />
                    )}
                    <Box
                        sx={{
                            width: '100%',
                            height: '70%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mt: 2,
                        }}
                    >
                        <h6>Preview</h6>
                        <Box
                            sx={{
                                width: '97%',
                                height: '97%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 1,
                                border: '1px solid black',
                                p: 2,
                                overflowY: 'auto',
                            }}
                        >
                            <Box sx={{ height: '50px' }}>
                                <h5>{formik.values.title}</h5>
                            </Box>
                            <Image src={file ? URL.createObjectURL(file) : statement?.sImageUrl} alt="Preview" width={500} height={500} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            gap: 2,
                            width: '100%',
                            height: '10%',
                        }}
                    >
                        <Button type="submit"  variant="outlined">Update</Button>
                        <ConfirmModal api={() => handleDelete({_id:statement._id, action:"delete"})} />
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default EditStatement;
