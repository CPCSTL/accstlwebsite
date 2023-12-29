import { connectToDb } from 'db/db';

import nc from "next-connect";
import NewsLetter from 'db/models/newsLetter.model';

const handler = nc();

handler.post(

   async  (req,res)=>{
    console.log(req.body);
   await connectToDb();
   try {
    const email = await  NewsLetter.findOne({email:req.body.email})
   if(email){
    return res.status(400).json({message:"You are already there , Knock it out!!!"})
   }

   const newsLetterEmail = new NewsLetter({
    email: req.body.email
   })
   await newsLetterEmail.save()
   return res.status(200).json({message:"You Got it, G News coming your way!!"})
   } catch (error) {
    res.status(401).json({message:"something went wrong , try again later"})
   }
    }
)

export default handler