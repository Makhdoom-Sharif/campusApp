import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../Title';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { handleBlockOrUnblock } from '../../../firebase/BlockandUblock';
import ListModalApproval from '../../Modal/ListModalApproval';

function preventDefault(event) {
    event.preventDefault();
}

export default function TableData(props) {

    const dispatch = useDispatch();

    // const { ApprovedCompaniesArray } = useSelector((state) => state.user);

    const BlockOrUnblockHandler = (role, item, index) => {
        handleBlockOrUnblock(role, item, dispatch, index)

    }
    return (
        <React.Fragment>
            <Title>{props.Title}</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>{props.TableCellHead1}</TableCell>
                        <TableCell>{props.TableCellHead2}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.Data.slice(0, 5).map((item, index) => (

                        item &&
                        <TableRow key={index}>
                            <TableCell>{item.userName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell><Link style={{ color: "inherit", textDecoration: "underline" }}>
                                {props.TableCellLinkText}
                            </Link></TableCell>

                            <TableCell><Button size='small' disableElevation onClick={() => BlockOrUnblockHandler(item.role, item, index)} >{item.blocked ? "Unblock" : "Block"}</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ListModalApproval ListButtonText={"See more"} Data={props.Data} ListDilogTitle={props.ListDilogTitle} Blocking={true} Accepting={false} />
        </React.Fragment >
    );
}