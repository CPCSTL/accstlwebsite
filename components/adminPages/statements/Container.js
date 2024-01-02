import React, { useEffect, useState } from 'react'
import Front from './Front'
import Box  from '@mui/material/Box'
import { useFormik } from 'formik'
import axios from 'axios'
import refreshReducer from 'store/reducers/refresh.reducer'
import { useDispatch, useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';


const StatementsContainer = () => {
    //useStates
    const [statements, setStatements] = useState([])
    const [loading, setLoading] = useState(false)

    //redux
    const dispatch = useDispatch()
    const refresh = useSelector(state=>state.refresh)

    //formik
const formik = useFormik({
    initialValues:{
        number:"",
        title:"",
        date:"",
       
    },
    onSubmit:values=>{
        console.log(values)
    }
})

//use effect
useEffect(()=>{
    // setLoading(true)
    const getData = async()=>{
        try {
            const res = await axios.post("/api/statements/getall" , {...formik.values})
            console.log(res);
            setStatements(res.data.statements)
            setLoading(false)

            
        } catch (error) {
            console.log(error);
         setLoading(false)
            
            
        }
    } 
    // getData()
 } , [refresh])


  return (
    <Box sx={{
        position:"relative",
        minHeight:"80vh"
    
    
    }}>
   {loading ? <CircularProgress sx={{
         position:"absolute",
         top:"50%",
         left:"50%",
         transform:"translate(-50%,-50%)"
    
   }} /> : <Front formik={formik} statements={statements} setStatements={setStatements} />}

    
    </Box>
  )
}

export default StatementsContainer