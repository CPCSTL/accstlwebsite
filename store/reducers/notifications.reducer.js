import { createSlice } from "@reduxjs/toolkit";

 const notificationsSlice =  createSlice({
    name:'notifications',
    initialState:{
        global:{}
    }, 
    reducers:{ 
        successGlobal : (state,action)=>{
            state.global.success = true
            state.global.msg = action.payload
        },
        errorGlobal : (state,action)=>{
            console.log(action.payload, "action.payload at errorGlobal");
            state.global.error = true
            state.global.msg = action.payload
        },
        clearNotifications : (state)=>{
         state.global = {}
        }
    }
}); 
export const {successGlobal,errorGlobal,clearNotifications} = notificationsSlice.actions
export default notificationsSlice.reducer