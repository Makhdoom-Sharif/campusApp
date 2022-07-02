import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from "react-redux";
export default function BasicAlerts() {
    const UserDetails = useSelector((state) => state.user);
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="error">
        {UserDetails.error}
      </Alert>
      {/* <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert> */}
    </Stack>
  );
}
