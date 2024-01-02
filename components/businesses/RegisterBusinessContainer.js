import LayOutMain from '@layouts/layoutMain/LayOutMain'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RegisterBusinessContainer = () => {
  return (
   

    <Box
    sx={{
        display:'flex',
        flexDirection:'column',
        
        alignItems:'center',
        height:'100vh',
        overflow:'auto',
        
    }}
    >
    <Image src="/images/logo.png" width={200} height={200} />
    <Typography variant="h4" sx={{mt:2}}>Register your business</Typography>
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        maxWidth:500,
        mt:2
    }}>
    <TextField
    label="Business Name"
    variant="outlined"
    fullWidth
    sx={{mt:2}}
    />
    <TextField
    label="Business Address"
    variant="outlined"
    fullWidth
    sx={{mt:2}}
    />
    <TextField
    label="Business Phone"
    variant="outlined"
    fullWidth
    sx={{mt:2}}
    />
    <TextField
    label="Business Email"
    variant="outlined"
    fullWidth
    sx={{mt:2}}
    />
    <TextField
    label="Business Website"
    variant="outlined"
    fullWidth
    sx={{mt:2}}
    />
    <TextField
    label="Business Description"
    variant="outlined"
    fullWidth
    multiline
    rows={4}
    sx={{mt:2}}
    />
    <TextField
    label="Business Category"
    variant="outlined"
    fullWidth
    sx={{mt:2}}
    />
    <TextField
    label="Business Logo"
    variant="outlined"
    fullWidth
    sx={{mt:2}}
    />

    
    </Box>
    <Box sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-venenly",
            }} >
    <Button>
    Submit
    </Button>
    </Box>
    


    </Box>
  
  )
}

export default RegisterBusinessContainer