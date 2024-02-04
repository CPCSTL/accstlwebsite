import { serviceMessages } from '@config/serviceMessages'
import MessageBox from '@layouts/ui/serviceMessageBox'
import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'

const Dabke = () => {
  const message = serviceMessages.dabke
  return (
   <Box 
   sx={{
    width: '100%',
    height: 'fit-content',
    mx: 'auto',
    px: 1,
    py: 4,
    bg: 'muted',
    borderRadius: '4px',
    display: 'flex',
   flexDirection: 'column',
  
    alignItems: 'center',
    gap: 3,


   }}>
    <h3>Enroll Your Child in <p style={{color:mycss.colors.accstlGreen}}>Dabka Classes</p> </h3>

 <MessageBox message={message} />

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScNjRaUGztrf4RGKp97drAkhJ-rmNUAKVPN_C5dsQEGKzeuaw/viewform?embedded=true" width="100%" height="2582" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

   
   </Box>
  )
}

export default Dabke