import SignIn from 'components/adminPages/signup/AdminSignin'
import React from 'react'
import { toJson } from 'utils/functions';

const SignInPage = (props) => {
  console.log(props.starter,"starter at index");
  return (
    <div>
    <SignIn />
    </div>
  )
}

export const getServerSideProps = async ()=> {
  const string = {
    starter:"starter"
  }

  return {
    props:{
      starter:toJson(string)
    }
   
  };
    
}

export default SignInPage