import AdminLayout from '@layouts/adminComps/Layout'
import Box from '@mui/material/Box';

import React from 'react'


const index = () => {
    // const dispatch = useDispatch()
    // const router = useRouter()

  return (
    <AdminLayout>
   
    <Box>
    <div>admin panel</div>
    < button
    className='btn btn-primary'
    variant="contained"
    
    onClick={
        ()=>{
    //  dispatch(signOutUser())
    // router.push('/')
         
 }
     } >
     Sign-out
     </button>
    </Box>
    </AdminLayout>

  )
}

export default index