import Base from '@layouts/Baseof';

import Box from '@mui/material/Box';
import AllStatements from 'components/statements/AllStatements';
import { connectToDb } from 'db/db';
import { getAllStatments } from 'db/services/show.service';
import React from 'react';
import { toJson } from 'utils/functions';

const index = ({ statements, testing }) => {
    console.log(statements, "__statements");
    console.log(testing, "__testing at statements");
    return (
        <Base>
            <Box>
                <AllStatements statements={statements} />
            </Box>
        </Base>
    )
}

export const getStaticProps = async () => {
    await connectToDb();

    try {
        const statements = await getAllStatments('_id', 'desc', 20, 0);
        console.log(statements, "__statements at index");
        return {
            props: { 
                statements: toJson(statements),
                testing: "testing"
            },
            revalidate: 60 * 60 * 24, // Revalidate every 24 hours
        };
    } catch (error) {
        return { props: { statements: [] } };
    }
};

export default index;
