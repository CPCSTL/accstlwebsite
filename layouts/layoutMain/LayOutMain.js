import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

import { useSelector, useDispatch } from 'react-redux';
import { showToast } from 'utils/functions';
import { clearNotifications } from 'store/reducers/notifications.reducer';
import { signOutUser } from 'store/reducers/user.reducer';
import CheckSession from "db/utils/CheckSession";
import { Avatar, Box, Button } from "@mui/material";



const LayOutMain = (props) => {
     
    //useState
    const [navOpen, setNavOpen] = useState(false);

    const router = useRouter();

    // redux
    const dispatch = useDispatch()
    const notifications = useSelector(state=>state.notifications)
  const user = useSelector(state=>state.user)

    useEffect(() => {
        //check if path  includes admin
        if(router.pathname.includes("admin")){
            setNavOpen(false)} else{
                setNavOpen(true)
            }

        
 console.log(user, "user at layout");
        let {global} = notifications
         
        if(notifications && global.success){
          const msg = global.msg ? global.msg : "Success"
          showToast("SUCCESS", msg);
          dispatch(clearNotifications())
        }
        if(notifications && global.error){
          const msg = global.msg ? global.msg : "Error"
          showToast("ERROR", msg)
          dispatch(clearNotifications())
        }
        
        
        }, [notifications,router.pathname])
  return (
    <>
    <CheckSession >
    {user && navOpen && user.data.role  === "admin"  ?
    <Box className="container" sx={{
        position:"fixed",
        bottom:"0",
        
       
       
       
        color:"red",
        height:"60px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
       

        backgroundColor:"rgba(3,30,0,0.9)",
       
        cursor:"pointer",
        gap:1,
        color:"white",
        borderRadius:"13px 13px 0 0"
    
    }} 
    onClick={
        ()=>{
            
            router.push('/admins/panel')
    } }
    >
    <p>Let's go to admin page</p>
<Avatar src={`https://robohash.org/${user.data.email}?set=set4&size=60x60`} />
<p>{user.data.email}</p>

    </Box> : ""

}
    <ToastContainer />
    {props.children}
    </CheckSession>
    </>
  )
}

export default LayOutMain