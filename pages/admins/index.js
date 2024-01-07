import Base from '@layouts/Baseof';
import { Box } from '@mui/material';
import SignIn from 'components/adminPages/signup/AdminSignin'
import React from 'react'
import { toJson } from 'utils/functions';

const SignInPage = (props) => {
  console.log(props.starter,"starter at index");
  return (
    <Base>
    <Box sx={{
      pb:20,
      pt:5
    }}>
    <SignIn />
    </Box>
    </Base>
  )
}



export default SignInPage