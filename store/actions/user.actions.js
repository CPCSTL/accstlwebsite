import {createAsyncThunk} from '@reduxjs/toolkit';
import { successGlobal,errorGlobal } from 'store/reducers/notifications.reducer';

import axios from 'axios';
import { signIn } from 'next-auth/react'

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async({values,router},{dispatch})=>{
        console.log(values,"__values at register user thunk");
        try {
            const user = await axios.post('/api/auth/register',values);
            await signIn("credentials",{
                redirect:false,
                email:user.data.email, 
                password:values.password
            }) 
            router.push('/admins/panel')
            dispatch(successGlobal("welcome to the app"))
         
            // console.log("welcome!!!!");
            return user.data
        } catch (error) {
            console.log(error);
            dispatch(errorGlobal(error.response.data.message))
           
            // console.log("error",error.response.data.message);
            throw error
        };


    }
); 
export const signInUser = createAsyncThunk(
    'user/signInUser',
    async({values,router},{dispatch})=>{
        console.log(values,"__values at sigin thunk");
        try {
            const results =   await signIn("credentials",{
                redirect:false,
                email:values.email, 
                password:values.password
            })
            if(results.error){
                console.log(results.error, "results.error at thunk");
                return dispatch(errorGlobal(results.error, "error signing in"))
            }
            
            ///get rest of user data
            const user = await axios.get('/api/users/user');
            
            dispatch(successGlobal("you are signed in"))
            console.log(user.data, "__user data at thunk");
            router.push("/admins/panel")
            return user.data
           
        } catch (error) {
            dispatch(errorGlobal(error.response.data.message, "error signing in second"))
           
            // console.log("error",error.response.data.message);
            throw error
        };


    } 
);
export const autoSignIn = createAsyncThunk(
    'user/autoSignIn',
    async(obj,{dispatch})=>{
        try {
          
            
            ///get rest of user data
            const user = await axios.get('/api/users/user');
            console.log(user.data, "__user data at autoSignIn");
           
            return user.data
           
        } catch (error) {
            dispatch(errorGlobal(error.response.data.message))
           
            // console.log("error",error.response.data.message);
           
        };


    }
);