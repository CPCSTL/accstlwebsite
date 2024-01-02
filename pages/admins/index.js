import SignIn from 'components/adminPages/signup/AdminSignin'
import React from 'react'

const index = (props) => {
  console.log(props.starter,"starter at index");
  return (
    <div>
    <SignIn />
    </div>
  )
}

export const getServerSideProps = async (context)=>{
    //const session =  await getSession({req:context.req})
    // const req = context.req
    // let session 
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
            starter:{adam:"adam miller"}
        }
        
    }
}
export default index