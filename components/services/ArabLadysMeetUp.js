import { serviceMessages } from '@config/serviceMessages'
import MessageBox from '@layouts/ui/serviceMessageBox'
import { Message } from '@mui/icons-material'
import { Box } from '@mui/material'
import mycss from 'mycss'
import React from 'react'

const ArabLadysMeetUp = () => {
  const message = serviceMessages.arabLadysMeetup
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
   <h3>Sign up for gathering at <span style={{color: mycss.colors.accstlGreen}}>ACC Arab Lady&apos;s Meetup</span></h3>
   <MessageBox message={message} />

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc_tBx-ss7dboi6G6_LmaE1oytITW8aVhfaVKPS85sX3nYdYQ/viewform?embedded=true" width="100%" height="1836" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   </Box>
  )
}

export default ArabLadysMeetUp