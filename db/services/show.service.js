import Show from 'db/models/show.model'; 

import { showValidation } from 'utils/validations';
import { validateBody } from 'db/utils/tools'; 
import File from 'db/models/file.model';

export const addShow = async(req) => {
    const body = req.body;
    console.log(body);
    try{
        // validation
        const valid = await validateBody(showValidation,body);
        if(!valid){
            throw new Error('Check your form')
        }

        const show = new Show({
            ...body
        })
        console.log(show);
        await show.save();
        return show;
    } catch(error){
        console.log(error);
       throw new Error("All fields are required and `Slug`  must be unique")
        return error
    }
};

export const paginateShows = async(page,limit) => {
    try{
        const options = {
            page,
            limit,
            sort:{ _id:'desc'}
        }

        const shows = await Show.aggregatePaginate({},options);
        return shows
    } catch(error){
        throw error
    }   
}

export const removeById =async (id)=>{
try {
    const show = await Show.findByIdAndRemove({_id:id})
    if (!show) {
        throw new Error("there is no show by this id")
    }
    return show
} catch (error) {
    throw error
}

}

export const getBySlug = async(query) => {
    try{
        const show = await Show.find({slug:query.slug}).exec();
        if(show.length <= 0){
            return;
        }
        return show;
    } catch(error){
        throw error;
    }

}
export const getById = async(query) => {
    try{
        const res = await File.find({_id:query.slug}).exec();
        if(res.length <= 0){
            return;
        }
        return res;
    } catch(error){
        throw error;
    }

}

export const updateBySlug = async(slug,body) => {
    try{
        const show = await Show.findOneAndUpdate(
            { slug:slug },
            { "$set":body },
            { new:true }
        );
        if(!show) throw new Error('No show found');
        return show;
    } catch(error){
        throw error
    }
}

export const getAllShows = async (sortBy, order , limit , skip)=>{
    try {
        const shows = await Show.find({}).sort([
            [sortBy,order]
        ])
        .skip(parseInt(skip))
        .limit(parseInt(limit));
         return shows 
    } catch (error) {
        throw error
    }

}
export const getAllStatments = async (sortBy, order , limit , skip)=>{
    try {
        const statements = await File.find({fileType:"statement"}).sort([
            [sortBy,order]
        ])
        .skip(parseInt(skip))
        .limit(parseInt(limit));
        console.log(statements,"__statements at service");
         return statements 
    } catch (error) {
        throw error
    }

}