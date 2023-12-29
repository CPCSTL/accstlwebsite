import nc from "next-connect";
import { chechSession } from "db/services/middleware/user";
import {connectToDb} from "db/db";
import { checkRole } from 'db/utils/tools'

import {
    addShow,
    getAllShows,
    paginateShows,
    removeById
} from 'db/services/show.service'


const handler = nc();

handler.post(
    "/api/shows/add_show",
    chechSession,
    async(req,res)=>{
        try{
            console.log(req.body);
            await connectToDb();
            // permission
            const permission = await checkRole(req,['createAny','shows']);
            if(!permission){
                console.log("no permission");
                return res.status(401).json({message:'Unauthorized'})
            }else{
                console.log("permission");
            }

            // database post
            const show = await addShow(req);
            res.status(200).json({show});
        } catch(error){
            res.status(400).json({message:error.message, note :"shows api page"});
        }
    }
)

handler.post(
    "/api/shows/paginate",
    async(req,res)=>{
        try{
            await connectToDb();
            const page = req.body.page ? req.body.page : 1;
            const limit = req.body.limit ? req.body.limit : 5;

            const shows = await paginateShows(page,limit);
            res.status(200).json(shows)
        } catch(error){
            console.log(error);
            res.status(400).json({message:'Oops i did it again.'});
        }
    }
)


handler.delete(
    '/api/shows/remove',
    chechSession,
    async (req,res)=>{
       try {
        await connectToDb()
        
        const permission = await checkRole(req,['deleteAny','shows']);
        if(!permission){
            console.log("no permission");
            return res.status(401).json({message:'Unauthorized'})
        }else{
            console.log("permission");
        }

       const show = await removeById(req.body.id)
       res.status(200).json({success:true, message:"post deleted"})
       } catch (error) {
        res.status(500).json({msg:"something went wromg at api", error})
       }
    }
)
 
handler.patch(
    "/api/shows/edit",
    chechSession,
    
    async(req,res)=>{        
        try{
            await connectToDb();

            /// permission
            const permission = await checkRole(req,['updateAny','shows']);
            if(!permission){
                return res.status(401).json({message:'Unauthorized'})
            }

            const slug = req.body.current;
         const show = await updateBySlug(slug,req.body.data);
            res.status(200).json(show);
        } catch(error){
            res.status(400).json({message:error.message})
        }
    }
)

handler.get(
    "/api/shows/getAll",
    async(req,res)=>{        
        try{
            await connectToDb();
            const sortBy = req.query.sort ? req.query.sort : '_id';
            const order = req.query.order ? req.query.order : 'desc';
            const limit = req.query.limit ? req.query.limit : '6';
            const skip = req.query.skip ? req.query.skip : '0';

            const shows =  await getAllShows(sortBy,order,limit,skip);
            res.status(200).json({shows:shows});
        } catch(error){
            res.status(400).json({message:'Try again later',error:error})
        }
    }
)

export default handler;