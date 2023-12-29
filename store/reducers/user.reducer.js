import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "next-auth/react";

import { registerUser,signInUser, autoSignIn } from "store/actions/user.actions";

const DEFAULT_STATE = {
    loading:false,
    data:{
        _id:'',
        email:'',
        firstname:'',
        lastname:'',
        role:''
    },
    auth:false
} 
const userReducer = createSlice({
    name:"user",
    initialState:DEFAULT_STATE,
    reducers:{

     signOutUser: (state)=>{
        signOut({redirect:false})
        alert("you are signed out")
        state.data = DEFAULT_STATE.data
        state.auth = false
     },
     updateUserReducer : (state,action)=>{
     state.data.firstname = action.payload.firstname
     state.data.lastname = action.payload.lastname
     }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.loading = true
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
           
            state.loading = false;
            state.data = action.payload;
            state.auth=true;
        })
        .addCase(registerUser.rejected, (state)=>{
            console.log(state.data, "state.data at user reducer rejected");
            state.loading=false;
        }
        )
        .addCase(signInUser.pending,(state)=>{
            state.loading = true
        })
        .addCase(signInUser.fulfilled, (state, action) => {
            console.log(action.payload, "action.payload at user reducer");
            state.loading = false;
            state.data = action.payload; // Setting the entire user object as the new state
            state.auth = true;
            console.log(state.data, "state.data at user reducer");
        })
        .addCase(signInUser.rejected, (state)=>{
            state.loading=false; 
        }
        )
        .addCase(autoSignIn.fulfilled,(state,action)=>{
          
            state.data = action.payload;
            state.auth=true; 
        })
    }
})
export const  {signOutUser,updateUserReducer} = userReducer.actions

export default userReducer.reducer;