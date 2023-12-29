import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, IconButton, Modal, Button, TextField, LinearProgress } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import Image from 'next/image';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { storage } from 'utils/firebase';



const AddStatement = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const formik = useFormik({
    initialValues: {
      title: "",
      date: new Date().toISOString().split('T')[0], // Format date as YYYY-MM-DD
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required").max(300, "Max 300 characters").min(5, "Min 5 characters"),
      date: Yup.string().required("Date is required"),
    }),
    onSubmit: async (values) => {
      if (file) {
        const storageRef = ref(storage, `statements/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error("Error uploading file:", error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            const statementData = { ...values, imageUrl: downloadURL, action: 'add' };

            try {
              const response = await axios.post('/api/statements/crud', statementData);
              console.log('Statement added:', response.data);
              setOpen(false); // Close the modal upon successful upload
            } catch (error) {
              console.error('Error submitting statement:', error);
            }
          }
        );
      }
    }
  });

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <AddCircleOutline />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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
            width: "80%",
            height: "90%",
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "10%",
              display: "flex",
              mt: "2%",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              padding: 2,
              gap: 2,
            }}
          >
            <TextField
              type="text"
              label="Title"
              variant="outlined"
              sx={{ width: "70%" }}
              {...formik.getFieldProps("title")}
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
              width: "100%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
            }}
          >
            <h6>Preview</h6>
            <Box
              sx={{
                width: "97%",
                height: "97%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                border: "1px solid black",
                p: 2,
                overflowY: "auto"
              }}
            >
              <Box sx={{ height: "50px" }}>
                <h5>{formik.values.title}</h5>
              </Box>
              <Image src={file ? URL.createObjectURL(file) : "/images/logo.png"} alt="Preview" width={500} height={500} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 2,
              width: "100%",
              height: "10%",
            }}
          >
            <Button type="submit" variant="contained">Save</Button>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddStatement;
