import Card from '@mui/material/Card';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import React from 'react'

import mycss from 'mycss'





const AddPopover = ({ children, popover , setPopover ,  cardColor, cardHeight,cardWidth}) => {

//const [popover , setPopover] = React.useState(false)
const [anchorEl, setAnchorEl] = React.useState(null);

// const style = {
//     // position: 'absolute',
//     top: '50%',
//     left: '50%',
//     // transform: 'translate(-50%, -50%)',
//     width: "22rem",
//     height: "15rem",
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
//   };
   
const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setPopover(true)
};

  return (
    <Box
  
    sx={{
        
        height:'100%',
        mt:0,
        p:0,
        display:"grid",
        gridTemplateColumns:"repeat(5,1fr)",
       
       
      
    }}
    
    >
    <Card
    onClick={handleClick}
    
    sx={{
        bgcolor:cardColor ? cardColor : "success.main",
       mt:0,
        p:2,
        gridColumn:"5/6",
        
      
        alignSelf:"center",
        justifySelf:"end",
        mr:1,
        height: cardHeight ? cardHeight : "7vh",
       width: cardWidth ? cardWidth : "7vh",
      
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
       alignItems: "center",

    }}
    
    >
    <IconButton sx={{
        color:mycss.colors.grey1,
    }}>
   
    <AddCircleOutline  />
    </IconButton>
    
    </Card>
    <Popover
        id={anchorEl}
        open={popover}
        anchorEl={anchorEl}
        onClose={() => setPopover(false)}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        transformOrigin={{
        vertical: 'center',
        horizontal: 'right',
        }}
    >
   { children}



    </Popover>
    
    </Box>
   
  )
}

export default AddPopover