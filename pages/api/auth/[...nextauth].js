 import  CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { connectToDb } from "db/db";
import { findUserByEmail } from "db/services/user.service";
import { checkPassword } from "db/utils/tools";


export const authOptions =     {
    session:{
         /// secret $ openssl rand -base64 32
       
         
            strategy: "jwt",
            maxAge: 30 * 24 * 60 * 60, // 30 days
        
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentialsProvider({
           async authorize(credentials){
            console.log(credentials,"__credentials");
               try {
                await connectToDb();
               } catch (error) {
                   console.log(error, "error connecting to db");
                     throw new Error('could not connect to db')
                
               }

                //// check if the user exists
                const user = await findUserByEmail(credentials.email,{});
                if(!user){
                    throw new Error('No email was found')
                }
 
                //// password
                const passwordChecked =await checkPassword(credentials.password,user.password)
                if(!passwordChecked){
                    throw new Error('Wrong password')
                }
                console.log(user,"__user");
                
                return {
                    email:user.email,
                    name:user.name,
                    image:user.image,
                    role:user.role,
                    id:user._id
                }
           } 
        })
    ]
}

export default NextAuth(authOptions)
