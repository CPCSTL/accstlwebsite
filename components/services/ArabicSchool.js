import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'

const ArabicSchool = () => {
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


    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScvIjkC5rdV6-VfF8eKjcjTLVg6UTE3NRM9f1cVDm2k25RU4g/viewform?embedded=true" width="100%" height="2256" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   
   </Box>
  )
}

export default ArabicSchool