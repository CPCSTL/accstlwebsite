import nc from 'next-connect';
import {connectToDb} from 'db/db';
import { contactEmail } from 'db/services/email.service';

const handler = nc();

handler.post(async(req,res)=>{
    console.log(req.body);
    try{
        await connectToDb();
        await contactEmail(req.body);
        res.status(200).json({success:true});
    } catch(error){
        res.status(400).json({message:'Try again later',error:error});
    }
})


export default handler;