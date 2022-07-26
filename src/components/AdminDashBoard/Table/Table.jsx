import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../Title';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { handleBlockOrUnblock } from '../../../firebase/BlockandUblock';
import ListModalApproval from '../../Modal/ListModalApproval';
import ViewJobsModalAdmin from '../../Modal/ViewJobsModalAdmin';
import './style.css'
function preventDefault(event) {
    event.preventDefault();
}

export default function TableData(props) {

    const dispatch = useDispatch();


    const BlockOrUnblockHandler = (role, item, index) => {
        handleBlockOrUnblock(role, item, dispatch, index)

    }
    return (
        <React.Fragment>
            <Title>{props.Title}</Title>
            <Box sx={{ maxWidth: "100%", overflowX: "auto", }}>
                <Table size="small">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{ minWidth: "135px" }} >{props.TableCellHead1}</TableCell>
                            <TableCell>{props.TableCellHead2}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.Data.slice(0, 5).map((item, index) => (

                            item &&
                            <TableRow key={index}>
                                <TableCell>{item.userName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell style={{ minWidth: "160px" }} ><ViewJobsModalAdmin ListButtonText1={props.ListButtonText1} ListDilogTitle1={props.ListDilogTitle1}
                                    uid={item.uid}
                                    alljobs={props.alljobs}
                                    ListDialogCloseButton1={props.ListDialogCloseButton1}
                                    item={item} /></TableCell>

                                <TableCell><Button size='small' className="ButtonText" disableElevation onClick={() => BlockOrUnblockHandler(item.role, item, index)} >{item.blocked ? "Unblock" : "Block"}</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <ListModalApproval ListButtonText={"See more"} Data={props.Data} ListDilogTitle={props.ListDilogTitle} Blocking={true} Accepting={false} />
        </React.Fragment >
    );
}