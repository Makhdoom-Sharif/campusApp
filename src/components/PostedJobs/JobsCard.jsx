import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import * as React from 'react';

import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InfoIcon from '@mui/icons-material/Info';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PeopleIcon from '@mui/icons-material/People';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SchoolIcon from "@mui/icons-material/School";
import { InputAdornment } from "@mui/material";
import Textfield from "../Inputfeild/Textfield";
import "../StudentProfile/StudentProfile.css";
import { useState } from 'react';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import EditModal from '../Modal/Modal';


const JobsCard = (props) => {
    const { item, card } = props
    const dispatch = useDispatch();
    const UserDetails = useSelector((state) => state.user);
    const [editIcon, SetEditIcon] = useState(false)
    const validationSchema = Yup.object({
        JobDesignation: Yup.string(),
        RequiredQualification: Yup.string(),
        Location: Yup.number(),
        VacantPosition: Yup.string(),
        Category: Yup.number(),
        JobDescription: Yup.string()
    });

    const formik = useFormik({
        initialValues: {
            JobDesignation: props.item.JobDesignation,
            RequiredQualification: props.item.RequiredQualification,
            Location: props.item.Location,
            VacantPosition: props.item.VacantPosition,
            Category: props.item.Category,
            JobDescription: props.item.JobDescription
        },
        validationSchema,
        onSubmit: async (values) => {
            // dispatch(JobPostInit());
            // setDisable(true);
            try {
                console.log({
                    uid: UserDetails.uid,
                    dispatch: dispatch,
                    JobDesignation: values.JobDesignation,
                    RequiredQualification: values.RequiredQualification,
                    Location: values.Location,
                    VacantPosition: values.VacantPosition,
                    Category: values.Category,
                    jobID: ``
                });
                // dispatch(JobPostSuccess());
            } catch (e) {
                console.log(e);
                // dispatch(JobPostFail());
            }
        }
    });










    useEffect(() => {
        console.log("card", props.card)
        console.log("item", props.item)
    }, [])

    return (

        <Grid item key={props.card} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        <PersonSearchIcon /> {props.item.JobDesignation}
                    </Typography>


                    {/* <Textfield
                        id='input-with-icon-textfield'
                        label='Job Designation'
                        name='JobDesignation'
                        fullWidth
                        // onChange={handleChange}
                        // value={formik.values.JobDesignation}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <PersonSearchIcon />
                                </InputAdornment>
                            )
                        }}
                        variant='standard'
                        style={{ marginBottom: "10px" }}
                    /> */}

                    <Textfield
                        editIcon={false}
                        id='input-with-icon-textfield'
                        label='Required Qualification'
                        fullWidth={true}
                        name='RequiredQualification'
                        // onChange={handleChange}
                        value={props.item.RequiredQualification}
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
                        label='Location'
                        fullWidth={true}
                        name='Location'
                        value={props.item.Location}
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
                        label='No. Of Vacant Position'
                        type='tel'
                        fullWidth={true}
                        name='VacantPosition'
                        value={props.item.VacantPosition}
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
                        label='Category'
                        name='Category'
                        fullWidth={true}
                        value={props.item.Category}
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
                        label='Job Description'
                        fullWidth
                        name="JobDescription"
                        disabled={true}
                        multiline
                        rowsMax={4}
                        value={props.item.JobDescription}
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
                    <Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <EditModal
                        JobDetails={item}
                    />

                </CardActions>
            </Card>
        </Grid>

    )
}

export default JobsCard