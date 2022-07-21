import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title';
import { useSelector } from 'react-redux';

function preventDefault(event) {
  event.preventDefault();
}

export default function TotalDetails() {
  const { NewApprovalStudentsArray, ApprovedStudentsArray } = useSelector((state) => state.user);
  return (
    <React.Fragment>
      <Title>Total Details</Title>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Registered Companies:
      </Typography>
      <Typography component="p" variant="h4">
        130001
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Registered Students:
      </Typography>
      <Typography component="p" variant="h4">
        {ApprovedStudentsArray.filter(Boolean).length}
      </Typography>
    </React.Fragment>
  );
}