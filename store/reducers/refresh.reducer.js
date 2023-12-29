import { createSlice } from "@reduxjs/toolkit";

 const refreshSlice =  createSlice({
    name:'refresh',
    initialState:{
        refresh:false,
    }, 
    reducers:{ 
        refreshReducer : (state,action)=>{
            state.refresh = !state.refresh
            
        },
      
    }
}); 
export const {refreshReducer} = refreshSlice.actions
export default refreshSlice.reducer