const { SearchOffOutlined, Close } = require("@mui/icons-material")
const { IconButton, Box, TextField,Button } = require("@mui/material")
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {refreshReducer} from 'store/reducers/refresh.reducer';


const SearchBox = (props) => {
    const {search, setSearch , } = props
    const [sNumber, setSNumber] = useState(null)
    const [open, setOpen] = useState(false)

    //redux 
    const dispatch = useDispatch()
    
    return (
        <Box>
        { open ? 
            <Box 
            sx={{
                display:"flex",
                flexDirection:"column",
               
            }}
            
            >
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap:1}}>
        <TextField
        id="search"
        type="number"
        name="search"
        label="Statement Number"
        variant="outlined"
        size="small"
       onChange={(e)=>setSNumber(e.target.value)}
        />
        <Button variant="outlined" onClick={()=>setSearch(sNumber)}>Find</Button>
        </Box>
        
        <Close onClick={()=>{
            setSNumber(null)
            setSearch(false)
            dispatch(refreshReducer())
            setOpen(false)}} sx={{
            cursor:"pointer",
            color:"red"
        
        }} />
       
        </Box>
        :
        <IconButton onClick={()=>setOpen(true)}>
        <SearchOffOutlined />
        </IconButton>


        }
        </Box>
    )
}
export default SearchBox