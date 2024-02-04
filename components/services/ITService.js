import { serviceMessages } from '@config/serviceMessages'
import MessageBox from '@layouts/ui/serviceMessageBox'
import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'

const ItServices = () => {
  const message = serviceMessages.itServices
  return (
    <Box sx={{
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
        <h3>Request one of <p style={{color:mycss.colors.accstlGreen}}>ACC IT Services</p> </h3>
    <MessageBox message={message} />
    
    
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfSXixY1uRcqoJXBgcuP1TRV4pM8B633dzr5NSaXtV7P5AaQ/viewform?embedded=true" width="100%" height="1994" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
       
       </Box>
  )
}

export default ItServices