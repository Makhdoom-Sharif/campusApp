import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import { Button } from '@mui/material';
import { AcceptApprovals, RejectUser } from '../../firebase/handleApproval';
import { useDispatch, useSelector } from 'react-redux';
function preventDefault(event) {
  event.preventDefault();
}

export default function NewApprovals() {
  const dispatch = useDispatch();
  const { NewApprovalStudentsArray } = useSelector((state) => state.user);


  const handleAcceptRequest = async (index, uid, item) => {
    AcceptApprovals("student", index, uid, dispatch, item)
    console.log(index, uid)
  }

  // const handleRejectRequest = async (index, uid) => {
  //   RejectUser("student", index, uid)
  //   console.log(index, uid)
  // }

  return (
    <React.Fragment>
      <Title>New Approval Request</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>ID</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {NewApprovalStudentsArray?.slice(0, 2).map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.userName}</TableCell>
              <TableCell><Button size='small' onClick={() => handleAcceptRequest(index, item.uid, item)} >Accept</Button></TableCell>
              {/* <TableCell><Button size='small' onClick={() => handleRejectRequest(index, item.uid)} >Reject</Button></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more approval requests
      </Link>
    </React.Fragment>
  );
}