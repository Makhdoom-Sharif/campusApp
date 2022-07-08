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
import { InputAdornment } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InfoIcon from '@mui/icons-material/Info';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PeopleIcon from '@mui/icons-material/People';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SchoolIcon from "@mui/icons-material/School";
import { LoadingButton } from '@mui/lab';
import { UpdateJob } from '../../firebase/PostAndUpdateJobs';

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

export default function EditModal(props) {
    const { JobDetails } = props
    // console.log("modal==>", JobDetails)
    const [open, setOpen] = useState(false);
    const handleEdit = () => setOpen(true);
    const handleClose = () => setOpen(false);







    const dispatch = useDispatch();
    const UserDetails = useSelector((state) => state.user);
    const validationSchema = Yup.object({
        JobDesignation: Yup.string(),
        RequiredQualification: Yup.string(),
        Location: Yup.string(),
        VacantPosition: Yup.string(),
        Category: Yup.string(),
        JobDescription: Yup.string()
    });

    const formik = useFormik({
        initialValues: {
            JobDesignation: JobDetails.JobDesignation,
            RequiredQualification: JobDetails.RequiredQualification,
            Location: JobDetails.Location,
            VacantPosition: JobDetails.VacantPosition,
            Category: JobDetails.Category,
            JobDescription: JobDetails.JobDescription
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log("submit works")
            // dispatch(JobPostInit());
            // setDisable(true);
            try {
                await UpdateJob({
                    uid: UserDetails.uid,
                    dispatch: dispatch,
                    JobDesignation: values.JobDesignation,
                    RequiredQualification: values.RequiredQualification,
                    Location: values.Location,
                    VacantPosition: values.VacantPosition,
                    Category: values.Category,
                    jobID: JobDetails.jobID
                });
                // dispatch(JobPostSuccess());
            } catch (e) {
                console.log(e);
                // dispatch(JobPostFail());
            }
        }
    });










    // useEffect(() => {
    //     console.log("card", props.card)
    //     console.log("item", props.item)
    // }, [])



















    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
                        onSubmit={formik.handleSubmit}>








                        <Textfield
                            editIcon={true}
                            id='input-with-icon-textfield'
                            label='Job Designation'
                            name='JobDesignation'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.JobDesignation}
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
                            editIcon={true}
                            id='input-with-icon-textfield'
                            label='Required Qualification'
                            fullWidth={true}
                            name='RequiredQualification'
                            onChange={formik.handleChange}
                            value={formik.values.RequiredQualification}
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
                            editIcon={true}
                            id='input-with-icon-textfield'
                            label='Location'
                            fullWidth={true}
                            name='Location'
                            onChange={formik.handleChange}
                            value={formik.values.Location}
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
                            editIcon={true}
                            variant='standard'
                            id='input-with-icon-textfield'
                            label='No. Of Vacant Position'
                            type='tel'
                            fullWidth={true}
                            name='VacantPosition'
                            onChange={formik.handleChange}
                            value={formik.values.VacantPosition}
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
                            editIcon={true}
                            id='input-with-icon-textfield'
                            label='Category'
                            name='Category'
                            fullWidth={true}
                            onChange={formik.handleChange}
                            value={formik.values.Category}
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
                            editIcon={true}
                            id='input-with-icon-textfield'
                            label='Job Description'
                            onChange={formik.handleChange}
                            fullWidth
                            name="JobDescription"
                            disabled={true}
                            multiline
                            rowsMax={4}
                            value={formik.values.JobDescription}
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


                        <div className='bottom-btns'>
                            <div className='apply-btn'>
                                <LoadingButton
                                    type='submit'
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2 }}
                                // disabled={disable}
                                // loading={UserDetails.loading ? true : false}
                                >
                                    Apply Changes
                                </LoadingButton>
                            </div>
                            <div className='reset-btn'>
                                <LoadingButton
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2 }}
                                // disabled={disable}
                                // loading={UserDetails.loading ? true : false}
                                // onClick={handleReset}
                                >
                                    Reset
                                </LoadingButton>
                            </div>
                        </div>


















                        {/* <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                    </Box>
                </Fade>
            </Modal>
            <Button size="small">Delete</Button>
            <Button size="small" onClick={handleEdit}>Edit</Button>
        </div>
    );
}