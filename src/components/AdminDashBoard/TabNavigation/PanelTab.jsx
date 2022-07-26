import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AcceptApprovals } from '../../../firebase/handleApproval';
import ListModalApproval from '../../Modal/ListModalApproval';

function preventDefault(event) {
    event.preventDefault();
}

export default function PanelTab(props) {
    const dispatch = useDispatch();
    const { NewApprovalStudentsArray } = useSelector((state) => state.user);


    const handleAcceptRequest = async (index, uid, item, role) => {
        AcceptApprovals(role, index, uid, dispatch, item)
        // console.log(index, uid)
    }
    return (
        <React.Fragment>
            <Box sx={{ maxWidth: "100%", overflowX: "auto", }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>{props.TableHead1}</TableCell>
                            <TableCell>{props.TableHead2}</TableCell>
                            <TableCell></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.Data?.slice(0, 3).map((item, index) => (
                            item &&
                            <TableRow key={index}>
                                <TableCell>{item.userName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell><Button size='small' onClick={() => handleAcceptRequest(index, item.uid, item, item.role)} >Accept</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more approval requests
            </Link> */}



                <ListModalApproval ListButtonText={"See more"} Data={props.Data} ListDilogTitle={props.ListDilogTitle} Blocking={false} Accepting={true} />
            </Box >
        </React.Fragment>
    );
}