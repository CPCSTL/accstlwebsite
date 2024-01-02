import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import  {useFormik} from 'formik'
import { useState } from 'react'
import { errorHelper } from 'utils/functions'
import { Loader } from 'utils/loader'
import * as yup from 'yup'
import  {useRouter} from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser,signInUser } from 'store/actions/user.actions'
import { getSession } from 'next-auth/react'
import { useSession } from "next-auth/react";
import { getToken } from 'next-auth/jwt'
import Image from 'next/image'
import AdminSignUp from 'components/adminPages/signup/AdminSignUp'
import { getServerSession } from 'next-auth/next'



const SignIn = (props)=>{
    if (props.user) {
        console.log(props.user);
    }
  

    const [formType, setformType] = useState(true)
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const user = useSelector(state=>state.user)
    const router = useRouter()
    const dispatch = useDispatch()
     

    const formik = useFormik({
       initialValues:{email:"", password:"" },
       validationSchema:yup.object({
        email:yup.string().required("email required").email("invalid email"),
        password:yup.string().required("password required").max(30,"max char 30").min(5,"minimum char 5")
       }),
       onSubmit:async (values)=>{
         formSubmit(values)
       }

    }); 

    const formSubmit = async  (values)=>{
        
        if(formType){
            dispatch(signInUser({values,router}))
            
            
        }else{
         dispatch(registerUser({values,router}))
            
        }
    }

    const handleFormType = ()=>{
        setformType(!formType)
    }

    return (
        <div className="container full_vh small top-space ">
        <Box 
        sx={{
          display:"flex",
          flexWrap:"wrap",
          width:"100%",
          pt:"10%",
          gap:3,
          marginLeft:"auto",
          marginRight:"auto",
        }}
        
        >
       
       
      
       
        
        <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
          
          
        }}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        >
        <h1>{formType ? "Sign in":"Register"}</h1>
        <TextField 
            name="email"
            variant='outlined'
            label='enter your email'
            {...formik.getFieldProps("email")}
            {...errorHelper(formik,"email")}

        />
        <TextField 
            name="password"
            variant='outlined'
            label='enter your password'
            type='password'
        
            {...formik.getFieldProps("password")}
            {...errorHelper(formik,"password")}

        />
       <Box
       sx={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"flex-start",
          alignItems:"center",
          width:"100%",
          marginTop:"10px",
        
       }}
       >
      
        <Button 
        type="submit"
        variant="contained"
        color='primary'
        size="small"
        className='me-2'
        disabled={user.loading ? true : false}
        style={{backgroundColor:"green"}}
         >
         {formType ? "Sign in":"Register"}
        {user.loading ? <CircularProgress size={30} color='secondary' thickness={2} /> :""}
        </Button>
        <AdminSignUp open={open} setOpen={setOpen} />
        </Box>

      

        </Box>
        <Box sx={{
          width:{
            md:"100%",
            lg:"50%"
          },
          height:"20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
           
          
        }} >
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        <p style={{width:"80%"}} className="text-center">
      This section of the site is restricted to authorized administrative personnel only. Unauthorized access is strictly prohibited.</p>
      <Button 
      variant='contained'
      onClick={()=>router.push("/")}
      style={{
        backgroundColor :"red",
      }}
      
      >Go To HOME PAGE</Button>
        </Box>
        </Box>
        </div>
    )
};

export const getServerSideProps = async (context)=>{
    //const session =  await getSession({req:context.req})
    const req = context.req
    let session 
  //   try {
  //    session = await getSession({req})
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(session , "session at signin");
  //   if(session){
  //     return {
  //         redirect:{
  //             destination:"/admins/panel",
  //             permanent:false
  //         },
  //         props:{
  //           user:{session,reod:"user session"}
  //         } 
  //     }
  // }
    return {
        props:{
            user:{}
        }
        
    }
}


export default SignIn