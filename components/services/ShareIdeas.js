import { serviceMessages } from '@config/serviceMessages'
import MessageBox from '@layouts/ui/serviceMessageBox'
import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'

const ShareIdeas = () => {
  const message = serviceMessages.shareYourIdeas
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
    <h3>Have an idea to share with   <p style={{color:mycss.colors.accstlGreen}}>ACC Community </p> </h3>
    <MessageBox message={message} />
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2x2mKoJN9kVmojs7yBlE0eD_yidUD6Zw117zVb5dN-TMleg/viewform?embedded=true" width="100%" height="1510" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   </Box>
  )
}

export default ShareIdeas