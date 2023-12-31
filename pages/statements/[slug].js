import Base from '@layouts/Baseof';
import SingleStatment from 'components/statements/SingleStatment';
import { connectToDb } from 'db/db';
import { getById } from 'db/services/show.service';
import React from 'react'
import { toJson } from 'utils/functions';

const Statement = ({statement}) => {
  return (
   <Base>
   <SingleStatment statement={statement}/>
   </Base>
  )
}

export const getServerSideProps = async(context) =>{
    await connectToDb();
    const show = await getById(context.params);
   

    if(!show){
        return{
            notFound:true
        }
    }

    return {
        props:{
           statement:toJson(show[0]),
           
        }
    }

}

export default Statement