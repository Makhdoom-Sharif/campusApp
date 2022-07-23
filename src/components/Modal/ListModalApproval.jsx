import { Avatar, Table, TableBody, TableCell, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveAppliedStudent } from '../../redux/action';
import ProfileModal from './ProfileModal';
import { AcceptApprovals } from '../../firebase/handleApproval';
import { handleBlockOrUnblock } from '../../firebase/BlockandUblock';
export default function ListModalApproval(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');


    const handleClickOpen = () => {
        setOpen(true);
        setScroll('paper');
    };

    const handleClose = () => {
        // dispatch(RemoveAppliedStudent())
        setOpen(false);
    };
    const handleOpen = async () => {
        handleClickOpen()

    }
    const handleClick = () => {
        handleClose()
    }

    const handleBtnClick = (index, item) => {
        BlockOrUnblockHandler(item.role, item, index)
        handleAcceptRequest(index, item.uid, item, item.role)
    }
    const handleAcceptRequest = async (index, uid, item, role) => {
        AcceptApprovals(role, index, uid, dispatch, item)
        // console.log(index, uid)
    }
    const BlockOrUnblockHandler = (role, item, index) => {
        handleBlockOrUnblock(role, item, dispatch, index)

    }

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button onClick={() => handleOpen()}>
                {props.ListButtonText}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{props.ListDilogTitle}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <Table size="large">
                            <TableBody>
                                {props.Data?.map((item, index) => (
                                    <TableRow key={item.id}>
                                        {/* <TableCell> <Avatar alt={Data.fullname} src={Data.ImgUrl} style={{ marginRight: "10px" }} /></TableCell> */}
                                        <TableCell>{item.userName}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell><Button size='small' onClick={() => handleBtnClick(index, item)} >{props.Accepting ? "Accept" : item.blocked ? "Unblock" : "Block"}</Button></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick}>{props.ListDialogCloseButton}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
