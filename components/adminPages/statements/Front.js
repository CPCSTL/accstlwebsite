import { AddCircleOutline, Delete, Edit } from '@mui/icons-material'
import { Box, Chip, Typography } from '@mui/material'
import ConfirmModal from 'mui/confirmModal'
import Image from 'next/image'
import React from 'react'
import AddStatement from './AddStatement'

const Front = (props) => {
    const {data} = props
    // give me mockdata for statements includes title, date, and image  
    const statements = [
        {   
            _id:"1", 
            number:"1",
            title:"Statement 1",
            date:"2021-08-01",
            image:"https://images.unsplash.com/photo-1627860783855-7f1d6e9b0e0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            _id:"2",
            number:"2",
            title:"Statement 2",
            date:"2021-08-02",
            image:"https://images.unsplash.com/photo-1627860783855-7f1d6e9b0e0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

        },
        {
            _id:"3",
            number:"3",
            title:"Statement 3",
            date:"2021-08-03",
            image:"https://images.unsplash.com/photo-1627860783855-7f1d6e9b0e0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

        },
        {
            _id:"4",
            number:"4",
            title:"Statement 4",
            date:"2021-08-04",
            image:"https://images.unsplash.com/photo-1627860783855-7f1d6e9b0e0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

        },
        {
            _id:"5",
            number:"5",
            title:"Statement 5",
            date:"2021-08-05",
            image:"https://images.unsplash.com/photo-162786"
        }
        ]

  return (
    <Box 
    sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:2,
        width:"100%",
        height:"100%",
        backgroundColor:"white"
    
    }}
    >
    <Box 
   
    sx={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        gap:1,
        width:"100%",
        padding:1,
        color:"white",
       
        backgroundColor:"#1f6f78",
       
    
    }}
    >
    <Typography variant="h6" sx={{width:"40%", color:"white"}}>Number-Title</Typography>
    <Typography variant="body2" sx={{color:"black", width:"30%"}} >Date</Typography>

  <AddStatement />
   
    </Box>
   
    {statements.map((statement)=>(
        <Box 
        key={statement._id}
        sx={{
          
            width:"90%",
           display:"flex",
              flexDirection:"row",
           
            backgroundColor:"#62525"
        
        }}
        >
        <Box sx={{width:"80%" ,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        cursor:"pointer",
        "&:hover":{
            backgroundColor:"#ebebeb",
            px:1,
        },

     }}>
      <Box sx={{width:"100%", 
        display:"flex",
        flexDirection:"row",
        gap:1,
    }}>
      <Chip label={statement.number} sx={{color:"black", width:"15%", borderRadius:"2px"}} />
      <Typography variant="body2" sx={{color:"black", width:"30%"}} >{statement.title}</Typography>
        </Box>


        <Typography variant="body2" sx={{color:"black", width:"30%"}} >{statement.date}</Typography>
        </Box>
        <Box
        sx={{
            width:"30%",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"flex-end",
            gap:3,
        }}
        >
        <Edit sx={{color:"black", width:"10%" , cursor:"pointer"}} />
        <ConfirmModal message={"are you sure you want to delete this statement" } color={"#3c3352"}/>
        
        </Box>
        </Box>
    ))
        }
   
    </Box>
  )
}

export default Front