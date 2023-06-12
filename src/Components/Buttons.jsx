import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Buttons = () => {
  return (
    <>
      <Typography variant='h6' gutterBottom sx={{
        width: "30%",
        margin: "0 auto",
        backgroundColor: "skyblue",
        textAlign: "center"
      }}>
        Buttons with variants and colors
      </Typography>
      <Box sx={{
        width: "90vw",
        m: "0 auto",
        backgroundColor: "#eee",
        p: "2rem",
        borderRadius: "9px",
        marginTop: "2rem",

        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center"

      }}>
        <Button variant="text" color="primary" sx={{
          marginRight: "1.5rem"
        }}>

          Send
        </Button>
        <Button variant="outlined" color="primary" sx={{
          marginRight: "1.5rem"
        }}>

          Submit
        </Button>
        <Button variant="contained" color="primary" sx={{
          marginRight: "1.5rem"
        }}>
          Sign up
        </Button>

        <Button variant="text" color="secondary" sx={{
          marginRight: "1.5rem"
        }}>
          Send
        </Button>
        <Button variant="outlined" color="secondary" sx={{
          marginRight: "1.5rem"
        }}>
          Submit
        </Button>
        <Button variant="contained" color="secondary" sx={{
          marginRight: "1.5rem"
        }}>
          Sign up
        </Button>

        <Button variant="text" color="info" sx={{
          marginRight: "1.5rem"
        }}>
          Send
        </Button>
        <Button variant="outlined" color="info" sx={{
          marginRight: "1.5rem"
        }}>
          Submit
        </Button>
        <Button variant="contained" color="info" sx={{
          marginRight: "1.5rem"
        }}>
          Sign up
        </Button>

        <Button variant="text" color="success" sx={{
          marginRight: "1.5rem"
        }}>
          Send
        </Button>
        <Button variant="outlined" color="success" sx={{
          marginRight: "1.5rem"
        }}>
          Submit
        </Button>
        <Button variant="contained" color="success" sx={{
          marginRight: "1.5rem"
        }}>
          Sign up
        </Button>

        <Button variant="text" color="warning" sx={{
          marginRight: "1.5rem"
        }}>
          Send
        </Button>
        <Button variant="outlined" color="warning" sx={{
          marginRight: "1.5rem"
        }}>
          Submit
        </Button>
        <Button variant="contained" color="warning" sx={{
          marginRight: "1.5rem"
        }}>
          Sign up
        </Button>

        <Button variant="text" color="error" sx={{
          marginRight: "1.5rem"
        }}>
          Send
        </Button>
        <Button variant="outlined" color="error" sx={{
          marginRight: "1.5rem"
        }}>
          Submit
        </Button>
        <Button variant="contained" color="error" sx={{
          marginRight: "1.5rem"
        }}>
          Sign up
        </Button>

        <Button variant="text" color="inherit" sx={{
          marginRight: "1.5rem"
        }}>
          Send
        </Button>
        <Button variant="outlined" color="inherit" sx={{
          marginRight: "1.5rem"
        }}>
          Submit
        </Button>
        <Button variant="contained" color="inherit" sx={{
          marginRight: "1.5rem"
        }}>
          Sign up
        </Button>
      </Box>
    </>
  );
};

export default Buttons;