
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';
import Edit from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import React from 'react'

export const BrandsToolBar = () => {
    return (

        <CustomToolBar
       
        >
       
        
        
        <Stack
        direction="row"
        sx={{p:1 }}
        >
        <Button>
        <Edit />
        </Button>
        <Button
        variant="outlined"
       
        startIcon={<AddBoxOutlined />}
        >
        Add A New Brand
        </Button>
        </Stack>
       
        </CustomToolBar>
    )
}

const  CustomToolBar = ({children, bgcolor,title}) => {
    return (
        <GridToolbarContainer style={{backgroundColor:bgcolor}}>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
         
          <Box
          style={{  marginLeft:"auto"}}
          >
        {children}
        </Box>
    
        </GridToolbarContainer>
      );
}
export default CustomToolBar
