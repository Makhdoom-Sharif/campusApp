import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import JobsCard from "./JobsCards";



function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const theme = createTheme();










const AvailabeJobs = () => {

    const [Jobs, setJobs] = useState([])
    const [FlatJobs, setFlatJobs] = useState([])


    const UserDetails = useSelector((state) => state.user)
        ;
    const dispatch = useDispatch();



    useEffect(() => {
        console.log();
        UserDetails.alljobs && setJobs([...Object.values(UserDetails?.alljobs).map(values => values)])
    }, [UserDetails])


    useEffect(() => {
        // if (Jobs) {
        //     setFlatJobs([Object.assign(...Jobs)])
        // }
        // const FlatJobsArray = [];
        // Jobs.map((item, index) => {
        //     FlatJobsArray.push(item)
        // })
        // Jobs && setFlatJobs(Object.assign(...Jobs));
        // console.log("merged Jobs", FlatJobs)
        console.log("Jobs", Jobs)
    }, [Jobs])




    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h3"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Posted Jobs
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ py: 8 }} maxWidth="md">

                        <Grid container spacing={4}>


                            {Jobs.map((item, index) => (

                                <JobsCard card={item.jobID} item={item} index={index} />

                            ))
                            }



                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        Something here to give the footer a purpose!
                    </Typography>
                    <Copyright />
                </Box>
                {/* End footer */}
            </ThemeProvider>
        </>
    )
}

export default AvailabeJobs