import { Box } from '@mui/material'
import React from 'react'

const Translation = () => {
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
    <h3>Request Translation Service</h3>



   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScqPAFgwX9P3Hr4tEeQnwTXFJOqQiDkbqlF9FMgWKOgLZ3pCw/viewform?embedded=true" width="100%" height="2044" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   
   </Box>
  )
}

export default Translation