
import { Alert, AlertTitle, Box, Button, Collapse, IconButton, Stack } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const AlertVariants = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Box sx={{
        backgroundColor: "lightslategray",
        width: "90vw",
        m: "0 auto",
        p: "2rem"


      }}>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">This is a warning alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </Stack>

        <Stack sx={{ width: '100%', marginTop: "2rem" }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert>
        </Stack>

        <Stack sx={{ width: '100%', marginTop: "2rem" }} spacing={2}>
          <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>
          <Alert
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </Box>

      <Box sx={{
        backgroundColor: "lightslategray",
        width: "90vw",
        m: "0 auto",
        p: "2rem"
      }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="contained"
          color="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
    </>
  );
};

export default AlertVariants;