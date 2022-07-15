import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useEffect } from 'react';
import Textfield from '../Inputfeild/Textfield';
import { Avatar, InputAdornment } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InfoIcon from '@mui/icons-material/Info';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PeopleIcon from '@mui/icons-material/People';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SchoolIcon from "@mui/icons-material/School";
import { LoadingButton } from '@mui/lab';
import { DeleteJob, UpdateJob } from '../../firebase/PostAndUpdateJobs';
import { JobDeleteInit, JobDeleteSuccess, JobUpdateFail, JobUpdateInit, JobUpdateSuccess } from '../../redux/action';
import DialogBox from '../DialogBox/DialogBox';
import ListDialog from './ListModal';
import { GetAppliedStudentData } from '../../firebase/GetAppliedStudentData';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProfileModal(props) {
    const dispatch = useDispatch();
    const { ApplicantsDetails, index } = props
    console.log("props", props)
    const [open, setOpen] = useState(false);
    const handleView = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [disable, setDisable] = useState(true)



    // const handleReset = () => {
    //     setDisable(true);
    //     formik.handleReset();
    // };
    // const handleChange = (e) => {
    //     setDisable(false)
    //     formik.handleChange(e)
    // }
    // const handleDelete = async () => {
    //     dispatch(JobDeleteInit())
    //     console.log(JobDetails)
    //     await DeleteJob(JobDetails, UserDetails.uid, dispatch, index)


    // }
    // const handleListModalOpen = async () => {
    //     console.log("list open click", JobDetails.ApplicantsIDs)
    //     const ListArray = [...Object.entries(JobDetails.ApplicantsIDs).map(entry => entry[0])]
    //     console.log("list array", ListArray)
    //     ListArray.map(async (item, index) =>
    //         await GetAppliedStudentData(item, dispatch)

    //     )



    //     // await applicantsLinks()
    // }


    // useEffect(() => {
    //     console.log("list modal", UserDetails.AppliedStudents)

    // }, [UserDetails]);

    // const AppliedStudent = UserDetails.AppliedStudents

    // const validationSchema = Yup.object({
    //     JobDesignation: Yup.string(),
    //     RequiredQualification: Yup.string(),
    //     Location: Yup.string(),
    //     VacantPosition: Yup.string(),
    //     Category: Yup.string(),
    //     JobDescription: Yup.string()
    // });

    // const formik = useFormik({
    //     initialValues: {
    //         JobDesignation: JobDetails.JobDesignation,
    //         RequiredQualification: JobDetails.RequiredQualification,
    //         Location: JobDetails.Location,
    //         VacantPosition: JobDetails.VacantPosition,
    //         Category: JobDetails.Category,
    //         JobDescription: JobDetails.JobDescription
    //     },
    //     validationSchema,
    //     onSubmit: async (values) => {
    //         console.log("submit works")
    //         dispatch(JobUpdateInit());
    //         setDisable(true);
    //         try {
    //             await UpdateJob({
    //                 uid: UserDetails.uid,
    //                 dispatch: dispatch,
    //                 JobDesignation: values.JobDesignation,
    //                 RequiredQualification: values.RequiredQualification,
    //                 Location: values.Location,
    //                 VacantPosition: values.VacantPosition,
    //                 Category: values.Category,
    //                 jobID: JobDetails.jobID
    //             })

    //             dispatch(JobUpdateSuccess({ ...values, jobID: JobDetails.jobID, index }));
    //         } catch (e) {
    //             console.log(e);
    //             dispatch(JobUpdateFail());
    //         }
    //     }
    // });



    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 750,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} component='form'
                    >





                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "15px"
                        }}>

                            <Avatar alt={ApplicantsDetails?.fullname} src={ApplicantsDetails?.ImgUrl} style={{
                                width: "90px",
                                height: "90px ",
                            }} />

                        </div>
                        <Textfield
                            editIcon={false}
                            id='input-with-icon-textfield'
                            label='Full Name'
                            fullWidth
                            value={ApplicantsDetails?.fullname || ""}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PersonSearchIcon />
                                    </InputAdornment>
                                )
                            }}
                            variant='standard'
                            style={{ marginBottom: "10px" }}
                        />

                        <Textfield
                            editIcon={false}
                            id='input-with-icon-textfield'
                            label='Father Name'
                            fullWidth={true}
                            value={ApplicantsDetails?.fathername}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SchoolIcon />
                                    </InputAdornment>
                                )
                            }}
                            variant='standard'
                            style={{ marginBottom: "10px" }}
                        />
                        <Textfield
                            editIcon={false}
                            id='input-with-icon-textfield'
                            label='Email'
                            fullWidth={true}
                            value={ApplicantsDetails?.email}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <FmdGoodIcon />
                                    </InputAdornment>
                                )
                            }}
                            variant='standard'
                            style={{ marginBottom: "10px" }}
                        />
                        <Textfield
                            editIcon={false}
                            variant='standard'
                            id='input-with-icon-textfield'
                            label='CNIC'
                            fullWidth={true}
                            value={ApplicantsDetails?.cnic}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            inputProps={{ minLength: 3, maxLength: 3 }}
                            autoComplete='off'
                            style={{ marginBottom: "10px" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PeopleIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Textfield
                            editIcon={false}
                            id='input-with-icon-textfield'
                            label='Student ID'
                            fullWidth={true}
                            value={ApplicantsDetails?.userName}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <LabelImportantIcon />
                                    </InputAdornment>
                                )
                            }}
                            variant='standard'
                            style={{ marginBottom: "10px" }}
                        />
                        <Textfield
                            editIcon={false}
                            id='input-with-icon-textfield'
                            label='Highest Qualification'
                            fullWidth
                            disabled={true}
                            multiline
                            rowsMax={4}
                            value={ApplicantsDetails?.qualification}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <InfoIcon />
                                    </InputAdornment>
                                ),
                                disableUnderline: true
                            }}
                            variant='standard'
                            style={{ marginBottom: "10px" }}
                        />


                        {/* <div className='bottom-btns'>
                            <div className='apply-btn'>
                                <LoadingButton
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2 }}
                                // disabled={disable}
                                // loading={UserDetails.loading ? true : false}
                                >
                                    Accept
                                </LoadingButton>
                            </div>
                            <div className='reset-btn'>
                                <LoadingButton
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2 }}

                                >
                                    Delete
                                </LoadingButton>
                            </div>
                        </div> */}
                    </Box>
                </Fade>
            </Modal>
            <div style={{ display: "flex" }}>
                {/* <DialogBox ButtonText={"Delete"} size="small" DialogBoxTitle={"Do you want to delete this posted job?"} DialogBoxText={"Note:This post will be deleted permenantly."} AgreeButtonText={"Yes"} CancelButtonText={"No"} handleAgreeClick={handleDelete} /> */}
                <Button size="small" onClick={handleView}>View Profile</Button>
                {/* <ListDialog ListButtonText={"View Applicants"} ListDilogTitle={"Applicants:"}
                    ListDialogCloseButton={"Close"} handleListModalOpen={handleListModalOpen}
                    AppliedStudent={AppliedStudent} /> */}
            </div>

        </div>
    );
}
