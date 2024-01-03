import LoadingComp from '@layouts/ui/LoadingComp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import mycss from 'mycss';
import React from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from 'store/actions/user.actions';
import { errorGlobal } from 'store/reducers/notifications.reducer';
import { errorHelper } from 'utils/functions';

import { useRouter } from 'next/router';

const AdminSignUp = (props) => {
    const router = useRouter()

    const {open, setOpen} = props
    // useStates
    const [loading, setLoading] = React.useState(false);
// const [open, setOpen] = React.useState(false);

//redux
const dispatch = useDispatch()

const formik = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        registrationNumber: '',
    },
    validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required').max(100, 'Max 100 characters'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        firstName: Yup.string().required('First Name is required').max(50, 'Max 50 characters'),
        lastName: Yup.string().required('Last Name is required').max(50, 'Max 50 characters'),
        registrationNumber: Yup.string().required('Registration Number is required').max(5, 'Max 5 characters')
    }),
    onSubmit: async (values, { resetForm }) => {
        setLoading(true);
        dispatch(registerUser({ values, router }))
            .unwrap() // Unwrap the returned promise
            .then((user) => {
                // Perform actions after successful registration
                dispatch(successGlobal('Signed up successfully!'));
                // Additional actions here, like navigation or state updates
               setOpen(false);
                resetForm();
            })
            .catch((error) => {
                // Handle errors from the thunk action
                console.error('Error signing up:', error);
                dispatch(errorGlobal('Error signing up'));
            })
            .finally(() => {
                setLoading(false);
            });
    },
});

  return (
    <Box>
    <Button size="small" variant="outlined" style={{color:mycss.colors.accstlGreen }} onClick={()=>setOpen(true)}>Sign-Up</Button>
    <Modal
    open={open}
    onClose={()=>setOpen(false)}
    //change the background color of the modal

    sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:1000,
        
       

    }}

     >
     <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            gap:2,
            width:"80%",
            height:"90%",
            bgcolor:"white",
            position:"relative",
            borderRadius:"8px",
           
        
        
     }}>
     {loading && <LoadingComp />}
        <Box sx={{
            display:"flex",
           flexWrap:"wrap",
           
            justifyContent:"center",
           gap:1,
            width:"70%",
            height:"70%",
            bgcolor:"white",
            overflow:"auto",
           
        
        }}>
        
       <Box component={"form"}
         onSubmit={formik.handleSubmit}
       
       sx={{width:"100%",
         display:"flex",
         alignItems:"center",
            justifyContent:"center",
           
            
    
    }} >
       <p>Register : All fields are required</p>
       </Box>
        <TextField
        name="firstName"
        variant='outlined'
        color="success"
        size='small'
        label='First name'
        InputProps={{
            endAdornment: (
              <InputAdornment position='end' sx={{bgcolor:"white"}}>
              
              </InputAdornment>
            ),
          }}
        {...formik.getFieldProps("firstName")}
        {...errorHelper(formik,"firstName")}
        sx={{width:{
            xs:"100%",
            lg:"40%",
            
        
        },
        '& .MuiOutlinedInput-root': {
            border: '0px solid red',
            "&:touched": {
                borderColor: "red"
                }
          },
        
        m:0,
        '&.MuiInputBase-input': {
            border: '10px solid yellow',
          },
      
    }}
        />
    <TextField
        name="lastName"
        variant='outlined'
        size='small'
        label='Last name'
        color="success"
        InputProps={{
            endAdornment: (
              <InputAdornment position="start">
               
              </InputAdornment>
            ),
          }}
        {...formik.getFieldProps("lastName")}
        {...errorHelper(formik,"lastName")}
        sx={{width:{
            xs:"100%",
            lg:"40%"
        
        }, m:0}}
        />
        <TextField 
            name="email"
            variant='outlined'
            color="success"
            label='enter your email'
            {...formik.getFieldProps("email")}
            {...errorHelper(formik,"email")}
           
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   
                  </InputAdornment>
                ),
              }}
              sx={{width:{
                xs:"100%",
                lg:"40%"
            
            }, m:0}}
            />
        <TextField
            name="registrationNumber"
            variant='outlined'
            label='enter your registration number'
            {...formik.getFieldProps("registrationNumber")}
            {...errorHelper(formik,"registrationNumber")}
           
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
              sx={{width:{
                xs:"100%",
                lg:"40%"
            
            }, m:0}}
            />
        <TextField 
            name="password"
            variant='outlined'
            color="success"
            label='enter your password'
            type='password'
            {...formik.getFieldProps("password")}
            {...errorHelper(formik,"password")}
           
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
              sx={{width:{
                xs:"100%",
                lg:"40%"
            
            }, m:0}}
            />
        <TextField
            name="confirmPassword"
            variant='outlined'
            color="success"
            label='confirm your password'
            type='password'
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{width:"0px"}}>
                    
                  </InputAdornment>
                ),
              }}
            {...formik.getFieldProps("confirmPassword")}
            {...errorHelper(formik,"confirmPassword")}
            sx={{width:{
                xs:"100%",
                lg:"40%"
            
            }, m:0}}
            />
      
        
            </Box>
            <Box sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center",
                width:"100%",
                p:2,
            }}>
            <Button
            type="submit"
            variant="outlined"
           
            color="success"
            size="small"
            sx={{
                width:"50%",
                color:mycss.colors.accstlGreen,
            
            }}
            onClick={
                ()=>{
                    formik.handleSubmit()
                }
            }
          
            disabled={loading ? true : false}
            
            >
            Register
            </Button>
            <Button
            variant="outlined"
            color='secondary'
            size="small"
            className='me-2'
            onClick={
                ()=>{
                    setOpen(false)
                    formik.resetForm()
                
                }
            }
            >
            Cancel
            </Button>
         </Box>
     </Box>


    </Modal>
    

    
    </Box>
  )
}

export default AdminSignUp