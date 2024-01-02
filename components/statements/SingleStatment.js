import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import React from 'react'
import moment from 'moment'
import Image from 'next/image'

const SingleStatment = ({statement}) => {
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:2,
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        mt:2,


    
    
    
    }}>
    <Box 
    sx={{
        display:"flex",
        flexDirection:"column",
       textAlign:"center",
        alignItems:"center",
        width:"100%",
        mt:3,
        

    }}>
    <Card 
    sx={{
        width:"90%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        bgcolor:"#1f6f78",
    }}
    >

    <Typography variant="h6" sx={{color:"black", width:"30%"}} >Date: {moment(statement.sDate).format("MM-DD-YYYY")}</Typography>
    <Typography variant="h6" sx={{width:"70%", color:"white"}}>{statement.sTitle}
     <p style={{fontWeight:"bolder" , color:"black"}}>
      Statement Number {statement.sNumber}</p>
       </Typography>
    </Card>

    
    
    </Box>
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:2,
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        py:7
    
    
    
    }}>
    <Image src={statement.sImageUrl} alt={statement.sTitle} width={300} height={400} />
    </Box>

    
    </Box>
  )
}

export default SingleStatment