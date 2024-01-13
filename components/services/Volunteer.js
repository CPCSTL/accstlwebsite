import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'

const Volunteer = () => {
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
    <h3>We need help  <p style={{color:mycss.colors.accstlGreen}}>Volunteer </p> </h3>

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfG3iPCLnyCtOPcmxyHw95pQOmFKfrslBLixE2qcKfvLznbzw/viewform?embedded=true" width="100%" height="1473" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   
   </Box>
  )
}

export default Volunteer