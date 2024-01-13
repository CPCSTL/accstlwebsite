import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'

const EconomicConsultation = () => {
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
        <h3>Request one of <p style={{color:mycss.colors.accstlGreen}}>ACC Economic Consultations</p> </h3>
    
    
    
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQnIYX5kUwFm3kd6fD8Ry8pAax_-3MhoVKtei4A_6eBHFN5g/viewform?embedded=true" width="100%" height="1787" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
       
       </Box>
  )
}

export default EconomicConsultation