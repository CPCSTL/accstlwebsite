import formidable from "formidable";
import fs from 'fs';

export const config = {
    api:{
        bodyParser: false
    }
}
const saveFile = async (file)=>{
   
  const data =   fs.readFileSync(file.filepath)
  const newFileName = Date.now() + "-" + file.originalFilename
  fs.writeFileSync(`./public/images/venues/uploads/${newFileName}`, data)
  fs.unlinkSync(file.filepath)
  return newFileName
}

const handler =  (req,res) => {
    if(req.method === 'POST'){
      
        const form = new formidable.IncomingForm({multiples:true});
        form.parse(req, async (err,fields,files)=>{
         if(err){
          return res.status(400).json({message:"error at formidable parse", err})
         }
         const upload = await  saveFile(files.file)
         console.log(upload, "at upload image api");
         return res.status(201).json({message:"uploaded", fileName:upload})
        })
       

    }
}

export default handler;