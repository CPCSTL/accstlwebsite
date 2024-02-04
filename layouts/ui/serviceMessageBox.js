import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Replace "yourMessageHere" with the specific message you want to display


const MessageBox = ({message}) => {
  return (
    <Box
      sx={{
        maxWidth: 'lg', // Adjust max width as needed
        mx: 'auto', // Margin auto for horizontal centering
        px: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
        }, // Padding
        py: 1, // Padding
        textAlign: 'center',
        backgroundColor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <Typography variant="body1" component="p">
        {message}
      </Typography>
    </Box>
  );
};

export default MessageBox;
