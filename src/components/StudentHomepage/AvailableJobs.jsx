import { createTheme } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Main from '../MainCards/Main';

const theme = createTheme();

const AvailabeJobs = () => {
    const [Jobs, setJobs] = useState([])
    const UserDetails = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <Main
            Title={"Available Jobs"}
            alljobs={UserDetails.alljobs}
            DialogBoxButtonText={"Apply"}
            DialogBoxTitle={"Do you want to apply?"}
            DialogBoxText={"Note:Before apply on any job make sure you have completely fill your profile"}
            DialogAgreeButtonText={"Yes"}
            DialogCancelButtonText={"No"}
            uid={UserDetails.uid}
            DialogBox={true}
            EditModal={false}
        />
    )
}

export default AvailabeJobs