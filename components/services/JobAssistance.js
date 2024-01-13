import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'

const JobAssistance = () => {
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
    <h3>Sign up for <p style={{color:mycss.colors.accstlGreen}}>ACC Employment Assistance </p> </h3>

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe9FwuG9W0fQSR6B8QS2lbWD4wN5eIsGuPZXbwUWC9cXn9QzA/viewform?embedded=true" width="100%" height="1894" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

   </Box>
  )
}

export default JobAssistance