import { Delete } from "@mui/icons-material";
import { Box, Button, Modal } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import Popover from '@mui/material/Popover';
import {refreshReducer} from 'store/reducers/refresh.reducer';

const style = {
    // position: 'absolute',
    top: '50%',
    left: '50%',
    // transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
const ConfirmModal = ({api , message, grid,rowId, color })=> {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    //const [message, setMessage] = React.useState("");
    const dispatch = useDispatch()

    const handleOpen = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    };
    const handleClose = () => {
      setAnchorEl(null);
      setOpen(false);
    };

    const handleApi = async () => {
        try
        {
            await api()
         
          dispatch(refreshReducer())
          handleClose()
         
        }
        catch(err)
        {
            //setMessage("Something went wrong")
            console.log(err);
        }
    }
  
    return (
      <div  >
       {
            grid ? <Delete 
            onClick={handleOpen}
            id={rowId}
            aria-describedby="child-modal-description"
            /> : <Button 
            variant="outlined"
            sx={{
                color:color ? color : "error.main"
            
            
            }}
            onClick={handleOpen}> <Delete />Drop</Button>
       } 
        <Popover
         // hideBackdrop
         id={rowId}
          open={open}
          onClose={handleClose}

          // aria-labelledby="child-modal-title"
          // aria-describedby="child-modal-description"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          sx={{
            width:"100%" 
          }}
        >
          <Box sx={{ ...style, minWidth:"inherit" }}>
          {message && <p style={{
                color:"red" ,
                border:" 1px solid red",    
                padding: "10px",
          }}>{message }</p>}
            <h2 >Are you sure?</h2>
            <p >
             There is no going back!!
            </p>
            <div style={{display:"flex" , flexDirection:"row", justifyContent:"space-evenly" , width:"100%", marginTop:"10px"}}>
            <Button variant="outlined" color="success" onClick={handleClose}>Go back</Button>
            <Button variant="outlined" onClick={handleApi} sx={{
                border:"1px solid red",
                color:"red"
            
            }} >
            
            Delete</Button>
            </div>
          </Box>
        </Popover>
      </div>
    );
  }

  export default ConfirmModal;