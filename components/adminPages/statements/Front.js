import { AddCircleOutline, Close, Delete, Edit, SearchOffOutlined } from '@mui/icons-material'
import { Box, Button, Chip, IconButton, TextField, Typography } from '@mui/material'
import ConfirmModal from 'mui/confirmModal'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import AddStatement from './AddStatement'
import EditStatement from './EditStatement'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { errorHelper } from 'utils/functions'

import SearchBox from './SearchBox'

const Front = (props) => {
    const {data} = props
    // give me mockdata for statements includes title, date, and image  
    const [statements, setStatements] = useState(null)
    const [search, setSearch] = useState(false)
   

    // redux
    const refresh = useSelector(state => state.refresh)
    const dispatch = useDispatch()

  
    //     {   
    //         _id:"1", 
    //         number:"1",
    //         title:"Statement 1",
    //         date:"2021-08-01",
    //         image:"https://images.unsplash.com/photo-1627860783855-7f1d6e9b0e0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    //     },
    //     {
    //         _id:"2",
    //         number:"2",
    //         title:"Statement 2",
    //         date:"2021-08-02",
    //         image:"https://images.unsplash.com/photo-1627860783855-7f1d6e9b0e0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

    //     },
    //     {
    //         _id:"3",
    //         number:"3",
    //         title:"Statement 3",
    //         date:"2021-08-03",
    //         image:"https://images.unsplash.com/photo-1627860783855-7f1d6e9b0e0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

    //     },
    //     {
    //         _id:"4",
    //         number:"4",
    //         title:"Statement 4",
    //         date:"2021-08-04",
    //         image:"https://images.unsplash.com/photo-1627860783855-7f1d6e9b0e0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

    //     },
    //     {
    //         _id:"5",
    //         number:"5",
    //         title:"Statement 5",
    //         date:"2021-08-05",
    //         image:"https://images.unsplash.com/photo-162786"
    //     }
    //     ];


        // const handleDelete = async ({_id}) => { 
        //     setLoading(true)
        //     await axios.post('/api/statements/crud',{id:_id,action:"delete"})
        //     .then( ()=>{
        //         dispatch(successGlobal('Pocket deleted, congrats !!'))
        //         dispatch(refreshReducer())
        //         handleClose()
        //         // setCreatObjectUrl(null)
        //     }).catch(error=>{
        //         console.log(error);
        //         dispatch(errorGlobal(error.response.data.message))
        //     }).finally(()=>{
        //         setLoading(false)
        //     });
        // }

        useEffect(() => {
            console.log("useEffect" , refresh)
            const query = { action: 'getAll' };
            if (search) {
                query.stateNumber = search;
            }
            const getStatements = async () => {
                try {
                    const response = await axios.post('/api/statements/crud', query);
                    setStatements(response.data.statements);
                    
                } catch (error) {
                    console.error('Error getting statements:', error);
                }
            };
           
                getStatements()
            


        }, [refresh ,search])

      

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
    <SearchBox search={search} setSearch={setSearch}  />
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
   
    {statements?.map((statement)=>(

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
        overflow:"auto",
    }}>
      <Chip label={statement.sNumber ? statement.sNumber : "#"} sx={{color:"black", width:"50px", borderRadius:"2px"}} />
      <Typography variant="body2" sx={{color:"black", width:"30%"}} >{statement.sTitle}</Typography>
        </Box>


        <Typography variant="body2" sx={{color:"black", width:"30%"}} >{statement.sDate}</Typography>
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
       <EditStatement statement={statement} />
       
        
        </Box>
        </Box>
    ))
        }
   
    </Box>
  )
}

export default Front