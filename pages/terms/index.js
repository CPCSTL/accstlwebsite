import Base from '@layouts/Baseof'
import { Box } from '@mui/material'
import Terms from 'content/terms'
import React from 'react'

const index = () => {
  return (
    <Base>
    <Box sx={{
        mt:8,
        px:5,
    }}>
    <Terms />
    </Box>
    </Base>
    

  )
}

export default index