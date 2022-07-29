import { Typography } from '@material-ui/core';
import { createTheme } from '@mui/material/styles';
import * as React from 'react';
import { useSelector } from "react-redux";
import Main from '../MainCards/Main';

const theme = createTheme();

const AvailabeJobs = () => {
    const UserDetails = useSelector((state) => state.user);
    return (
        <div>
            {UserDetails.alljobs.length < 1 ?
                <>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        gutterBottom
                    > Sorry! No job are available</Typography>
                    <img src="https://i.ibb.co/sm1xMwz/applied.png" alt="applied" border="0" />
                </>
                : <Main
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
                />}
        </div>

    )
}

export default AvailabeJobs