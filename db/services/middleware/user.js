import { getToken } from "next-auth/jwt"
import { getSession } from "next-auth/react"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"



export const chechSession = async (req,res,next)=>{
    const token = await getToken({ req })
    // if (!getToken) {
    //   // Signed in
    //    res.status(500).json({message:"you are not signed"})
    //   console.log("JSON Web Token", JSON.stringify(token, null, 2))
    // } 
    
    
    console.log(token,"___token");
    console.log(req.body,"__req.body");
    const session = await getServerSession(req, res, authOptions)

   if(!session){
    return res.status(500).json({message:"you are not signed from session check"})
   }
   console.log(session,token, "___session and token +++");
   req.token = token
   req.session = session;
   
   next()

}