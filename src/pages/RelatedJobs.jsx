import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
const RelatedJobs = () => {
    const { approve } = useSelector((state) => state.user);
    return (
        <div>
            <NavBar />
            {approve ?
                // <AppliedJobsView />
                <Typography>Related Jobs</Typography> : <Typography
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

export default RelatedJobs