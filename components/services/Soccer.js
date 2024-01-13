import { Box } from '@mui/material'
import React from 'react'

const Soccer = () => {
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
    <h3>Sign up for ACC United Soccer Team </h3>



    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelNUsOMm5Ec11dc7WDojauvoFDfI47mPisAMTpYEPl37pPgA/viewform?embedded=true" width="100%" height="2632" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   
   </Box>
  )
}

export default Soccer