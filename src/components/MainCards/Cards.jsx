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
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import DialogBox from '../DialogBox/DialogBox';
import Textfield from "../Inputfeild/Textfield";
import "../StudentProfile/StudentProfile.css";
import { ApplyJob } from '../../firebase/ApplyandCancelJob';
import EditModal from '../Modal/Modal';


const JobsCard = (props) => {
    const handleApply = () => {
        ApplyJob(props.item, props.uid)
    }

    const handleAgreeClick = () => {
        handleApply()
    }
    return (


        <Grid item key={props.jobID} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        <PersonSearchIcon /> {props.item.JobDesignation}
                    </Typography>
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

                    {props.DialogBox && <DialogBox ButtonText={props.DialogBoxButtonText} size="small" DialogBoxTitle={props.DialogBoxTitle} DialogBoxText={props.DialogBoxText} AgreeButtonText={props.DialogAgreeButtonText} CancelButtonText={props.DialogCancelButtonText}
                        handleAgreeClick={handleAgreeClick}
                    />}
                    {props.EditModal && <EditModal
                        JobDetails={props.item} index={props.index}
                    />}
                </CardActions>
            </Card>
        </Grid>

    )
}

export default JobsCard