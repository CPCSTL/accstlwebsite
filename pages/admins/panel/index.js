import AdminLayout from '@layouts/adminComps/Layout'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { signOutUser } from 'store/reducers/user.reducer'

const index = () => {
    const dispatch = useDispatch()
    const router = useRouter()

  return (
    <AdminLayout>
   
    <Box>
    <div>admin panel</div>
    < button
    className='btn btn-primary'
    variant="contained"
    
    onClick={
        ()=>{
     dispatch(signOutUser())
    router.push('/')
         
 }
     } >
     Sign-out
     </button>
    </Box>
    </AdminLayout>

  )
}

export default index