
import { log } from 'console';
import mongoose from 'mongoose'

export const connectToDb = async ()=>{
    const readyState =   mongoose.connection.readyState
    if (readyState === 0){
       try {
        const connect = await   mongoose.connect(`mongodb+srv://momoland:12341234@cluster0.lkpz4rs.mongodb.net/smellycats?retryWrites=true&w=majority`)
        console.log('connected successfuly');
        return connect
       } catch (error) {
        // throw new Error("server error, try again later")
        console.log(error, "error connecting to db");
        return error
       }
        
    } else {
        console.log("already connected");
    }
    
    console.log(readyState , "readyState");
    
    
}
