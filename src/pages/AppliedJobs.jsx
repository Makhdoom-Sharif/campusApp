import React from 'react'
import AppliedJobsView from '../components/AppliedJobsView/AppliedJobsView'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
const AppliedJobs = () => {

    const { approved, blocked
    } = useSelector((state) => state.user);
    return (
        <div>
            <NavBar />

            {approved && !blocked ?
                <AppliedJobsView />
                : <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    You are not authorizes. Contact to admin team
                </Typography>
            }

            <Footer />
        </div>
    )
}

export default AppliedJobs