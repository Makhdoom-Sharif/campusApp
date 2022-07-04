import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button } from '@mui/material';


const Data = [
    {
      Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"
    },
   { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"},
      { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"},
      { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"},
      { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"},
      { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"},
      { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"},
      { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"},
      { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"},
      { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"},
      { Name:"ABC",
      Email:"ABC@gmail.com",
      Category:"Fresher"}

  ];

function preventDefault(event) {
  event.preventDefault();
}

export default function CompanyData() {
  return (
    <React.Fragment>
      <Title>Registered Companies</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.slice(0,7).map((Data) => (
            <TableRow key={Data.id}>
              <TableCell>{Data.Name}</TableCell>
              <TableCell>{Data.Email}</TableCell>
              <TableCell>See Posted Jobs</TableCell>
              <TableCell><Button variant="contained" disableElevation>Block</Button></TableCell>
              <TableCell><Button variant="contained" disableElevation>Unblock</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </React.Fragment>
  );
}