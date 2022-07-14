import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InfoIcon from '@mui/icons-material/Info';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PeopleIcon from '@mui/icons-material/People';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SchoolIcon from "@mui/icons-material/School";
import { LoadingButton } from "@mui/lab";
import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import * as Yup from "yup";
import { AddNewJob } from "../../firebase/PostAndUpdateJobs";
import uploadImage from "../../firebase/uploadImg";
import {
    JobPostFail,
    JobPostInit,
    JobPostSuccess
} from "../../redux/action";
import Footer from '../Footer/Footer';
import Textfield from "../Inputfeild/Textfield";
import "../StudentProfile/StudentProfile.css";
import Title from "../Title";

export default function PostNewJob() {
    const [disable, setDisable] = useState(true);
    const [ImgLoader, setImgLoader] = useState(false);
    const UserDetails = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setDisable(false);
        formik.handleChange(e);
    };
    const handleReset = () => {
        setDisable(true);
        formik.handleReset();
    };
    const validationSchema = Yup.object({
        JobDesignation: Yup.string(),
        RequiredQualification: Yup.string(),
        Location: Yup.string(),
        VacantPosition: Yup.string(),
        Category: Yup.string(),
        JobDescription: Yup.string()
    });
    const Input = styled("input")({
        display: "none"
    });

    const formik = useFormik({
        initialValues: {
            JobDesignation: '',
            RequiredQualification: '',
            Location: '',
            VacantPosition: '',
            Category: '',
            JobDescription: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            dispatch(JobPostInit());
            setDisable(true);
            try {
                AddNewJob({
                    uid: UserDetails.uid,
                    dispatch: dispatch,
                    JobDesignation: values.JobDesignation,
                    RequiredQualification: values.RequiredQualification,
                    Location: values.Location,
                    VacantPosition: values.VacantPosition,
                    Category: values.Category,
                    JobDescription: values.JobDescription,
                    jobID: `${v4()}`
                });

                handleReset()
            } catch (e) {
                console.log(e);
                dispatch(JobPostFail());
            }
        }
    });

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    "& > :not(style)": {
                        m: 1,
                        width: "128vh",
                        height: "128vh"
                    }
                }}
            >
                <Paper
                    elevation={3}
                    component='form'
                    onSubmit={formik.handleSubmit}
                >
                    <div className='profileHead'>
                        <div className='head'>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignCcontent: "center",
                            justifyContent: "center"
                        }}
                    >
                        <div className='profile'>
                            <Title>Post New</Title>
                            <Textfield
                                editIcon={true}
                                id='input-with-icon-textfield'
                                label='Job Designation'
                                name='JobDesignation'
                                fullWidth
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                                fullWidth
                                name="JobDescription"
                                disabled={true}
                                multiline
                                rowsMax={4}
                                value={UserDetails.JobDescription}
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

                        </div>
                    </div>
                    <div className='bottom-btns'>
                        <div className='apply-btn'>
                            <LoadingButton
                                type='submit'
                                variant='contained'
                                sx={{ mt: 3, mb: 2 }}
                                disabled={disable}
                                loading={UserDetails.loading ? true : false}
                            >
                                Apply Changes
                            </LoadingButton>
                        </div>
                        <div className='reset-btn'>
                            <LoadingButton
                                variant='contained'
                                sx={{ mt: 3, mb: 2 }}
                                disabled={disable}
                                loading={UserDetails.loading ? true : false}
                                onClick={handleReset}
                            >
                                Reset
                            </LoadingButton>
                        </div>
                    </div>
                </Paper>
                {/* <Footer /> */}
            </Box>
        </>
    );
}
