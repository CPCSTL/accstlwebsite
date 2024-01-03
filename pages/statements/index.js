import Base from '@layouts/Baseof'
import LayOutMain from '@layouts/layoutMain/LayOutMain'
import Box from '@mui/material/Box'
import AllStatements from 'components/statements/AllStatements'
import { connectToDb } from 'db/db'
import {  getAllStatments } from 'db/services/show.service'
import React from 'react'
import { toJson } from 'utils/functions'

const index = ({statements, testing}) => {
    console.log(statements,"__statements");
    console.log(testing,"__testing at statments");
  return (
   <Base>
    <Box>
    <AllStatements statements={statements} />
    
    
    </Box>
    </Base>
   
  )
}




export const getServerSideProps = async (context) => {
    await connectToDb();
    // const { req } = context;

    // // Check if 'page' query parameter exists and is a valid number, default to 1 if not
    // const page = parseInt(req.query.page, 10);
    // const skip = !isNaN(page) && page > 0 ? (page - 1) * 20 : 0;

    try {
        const statements = await getAllStatments('_id', 'desc', 20, 0);
        console.log(statements,"__statements at index");
        return { props: { statements: toJson(statements),
        testing:"testing"
        } };
    } catch (error) {
        return { props: { statements: [] } };
    }
};
export default index
