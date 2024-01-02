import CircularProgress from '@mui/material/CircularProgress';

import mycss from 'mycss'
import React from 'react'

const LoadingComp = () => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        zIndex:100,
       backgroundColor:"rgba(103, 86, 95, 0.32)",
       top:0,
         bottom:0,

        left:0,
        right:0,
            
        // want backfround with overlay rgba

        
        
      
       
    //     height: "100%",
    // width:"100%",
    }}>
    <CircularProgress disableShrink />
    
    </div>
  )
}

export default LoadingComp