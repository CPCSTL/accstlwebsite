import { connectToDb } from "db/db";
import nc from 'next-connect';
import { chechSession } from "db/services/middleware/user";
import { findUserByEmail , updatedUser } from "db/services/user.service";

const handler = nc();

handler
.use(chechSession)
.get(async(req,res)=>{  
    console.log(req.session, req.token , "__user at get api__");
await connectToDb()

try {
    const user = await findUserByEmail(req.token.email,{password:0})
    if(!user){
        return res.status(400).json({message:"no user found"})
    }
    console.log(user,"user at get api___");
    return res.status(200).json(user);

} catch (error) {
    console.log(error);
    res.status(500).json({message:"db error", error})
}
})
.patch(async(req,res)=>{
    console.log(req.body,"we are at the api",req.token.email);
    try{
        await connectToDb();
        const user = await findUserByEmail(req.token.email,{password:0})
        console.log(user, "user at patch");
        if(!user){
            return res.status(400).json({message:'No user found'})
        }

        const id = user._id;
        console.log(id);
        const newUser = await updatedUser(id,req.body);
        res.status(200).json(newUser)
    } catch(error){
        res.status(400).json({message:error.message})
    }
})





export default handler