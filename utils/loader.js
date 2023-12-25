import { CircularProgress } from '@mui/material'
import React from 'react'

export const Loader = ({full}) => (
    <div className={`root_loader ${full ? "full":""}`}>
    <CircularProgress  
    sx={{
        color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
      }} />
    </div>
)