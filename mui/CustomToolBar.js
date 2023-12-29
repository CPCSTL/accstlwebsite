import { Add, AddBoxOutlined, Edit } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
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
