import { serviceMessages } from '@config/serviceMessages'
import MessageBox from '@layouts/ui/serviceMessageBox'
import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'

const ReadingClub = () => {
  const message = serviceMessages.readingClub
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
        <h3>Sign up for <p style={{color:mycss.colors.accstlGreen}}>ACC Reading Club</p> </h3>
    
    <MessageBox message={message} />
    
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfS2hRRCw4dQ3u7t9MHdZZxq8b9igrDD1loocWu2Dqj5nyrYQ/viewform?embedded=true" width="100%" height="2337" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
       
       </Box>
  )
}

export default ReadingClub