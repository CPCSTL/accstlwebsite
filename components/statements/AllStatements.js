import { Box, Card, Chip, Typography } from '@mui/material'
import moment from 'moment'
import mycss from 'mycss'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const AllStatements = (props) => {
    const {statements} = props
const router = useRouter()

    
 useEffect(() => {
    // add param page to url

 }, [])



  return (
    <Box 
    sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
       
        gap:2,
        width:"100%",
        height:"100%",
        minHeight:"100vh",
        backgroundColor:"white",
        mt:2,
    textAlign:"center"
    
    }}
    >
    <h5 style={{width:"100%", marginBottom:"30px", marginTop:"30px"}}>Arab Culture Center Official Statements</h5>
    <Box sx={{
        //column flex
        width:{
            xs:"100%",
            sm:"100%",
            md:"100%",
            lg:"80%",
            xl:"80%",
        
        },
        
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:4,
    }} >
   {statements?.map((statement)=>(
    <Card sx={{
        //row flex
        display:"flex",
       flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-between",
        gap:1,
        width:"95%",
        padding:1,
        color:"white",
        backgroundColor:mycss.colors.grey2,
        overflow:"auto",
        cursor:"pointer",
        borderBottom:"6px solid black",
        borderTop:"3px solid red",
        borderLeft:"1px solid red",
        borderRight:"1px solid red",

    
    }} 
    onClick={
        ()=>{
            router.push(`/statements/${statement._id}`)
        }
    }
    
    >
    <Chip label={statement.sNumber} sx={{width:{
        xs:"20%",
        sm:"10%",
        md:"5%",
        lg:"5%",
        xl:"5%",
    }, color:"black"}} />
    <Typography variant="h6" sx={{width:"60%", color:"black"}}>{statement.sTitle}</Typography>
    <Typography variant="body2" sx={{color:"black", width:"30%"}} >Date : {moment(statement.sDate).format("MM DD YYYY")}</Typography>
    <Typography variant="body1" sx={{color:"white", width:"100%", bgcolor:"green", height:"25px"}} >view</Typography>

    </Card>
    ))
}
    
    </Box>

    
    </Box>
  )
}



export default AllStatements