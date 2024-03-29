import MessageBox from '@layouts/ui/serviceMessageBox'
import { Message } from '@mui/icons-material'
import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'
import { serviceMessages } from '@config/serviceMessages'

const ArabicSchool = () => {
  const message = serviceMessages.school
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
   
   <h3>Sign up for <span style={{ color: mycss.colors.accstlGreen }}>ACC Arabic Language School</span></h3>

   <MessageBox message={message} />


    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScvIjkC5rdV6-VfF8eKjcjTLVg6UTE3NRM9f1cVDm2k25RU4g/viewform?embedded=true" width="100%" height="2556" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   
   </Box>
  )
}

export default ArabicSchool