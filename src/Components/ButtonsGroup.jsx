import { Box } from '@mui/system';
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ButtonsGroups = () => {
  return (
    <Box sx={{
      width: "90vw",
      m: "0 auto",
      backgroundColor: "aliceblue",
      p: "2rem",
      borderRadius: "9px",

      display: 'flex',
      flexWrap: "wrap",
      gap: "2rem"
    }}>

      <ButtonGroup variant="contained" color="primary" aria-label="">
        <Button>Register</Button>
        <Button>Login</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="secondary" aria-label="">
        <Button>Register</Button>
        <Button>Login</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="info" aria-label="">
        <Button>Register</Button>
        <Button>Login</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="warning" aria-label="">
        <Button>Register</Button>
        <Button>Login</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="error" aria-label="">
        <Button>Register</Button>
        <Button>Login</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="success" aria-label="">
        <Button>Register</Button>
        <Button>Login</Button>
      </ButtonGroup>
    </Box>
  );
};

export default ButtonsGroups;