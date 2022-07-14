// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import Footer from '../Footer/Footer';
// import JobsCard from "./JobsCards";



// function Copyright() {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }



// const theme = createTheme();










// const AvailabeJobs = () => {

//     const [Jobs, setJobs] = useState([])
//     // const [FlatJobs, setFlatJobs] = useState([])


//     const UserDetails = useSelector((state) => state.user)
//         ;
//     const dispatch = useDispatch();



//     useEffect(() => {
//         console.log();
//         UserDetails.alljobs && setJobs([...Object.values(UserDetails?.alljobs).map(values => values)])
//     }, [UserDetails])


//     useEffect(() => {
//         console.log("Jobs", Jobs)
//         console.log("redux", UserDetails.alljobs)
//     }, [Jobs])




//     return (
//         <>
//             <ThemeProvider theme={theme}>
//                 <CssBaseline />
//                 <main>
//                     {/* Hero unit */}
//                     <Box
//                         sx={{
//                             bgcolor: 'background.paper',
//                             pt: 8,
//                             pb: 6,
//                         }}
//                     >
//                         <Container maxWidth="sm">
//                             <Typography
//                                 component="h1"
//                                 variant="h3"
//                                 align="center"
//                                 color="text.primary"
//                                 gutterBottom
//                             >
//                                 Available Jobs
//                             </Typography>
//                         </Container>
//                     </Box>
//                     <Container sx={{ py: 8 }} maxWidth="md">

//                         <Grid container spacing={4}>


//                             {UserDetails.alljobs.map((item, index) => (

//                                 <JobsCard card={item.jobID} item={item} index={index} />

//                             ))
//                             }



//                         </Grid>
//                     </Container>
//                 </main>
//                 {/* Footer */}
//                 {/* <Footer /> */}
//                 {/* End footer */}
//             </ThemeProvider>
//         </>
//     )
// }

// export default AvailabeJobs



































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
import Footer from '../Footer/Footer';
import Main from '../MainCards/Main';
import JobsCard from "./JobsCards";




const theme = createTheme();










const AvailabeJobs = () => {


    const [Jobs, setJobs] = useState([])
    const UserDetails = useSelector((state) => state.user);
    const dispatch = useDispatch();




    // useEffect(() => {
    //     console.log();
    //     UserDetails.alljobs && setJobs([...Object.values(UserDetails?.alljobs).map(values => values)])
    // }, [UserDetails])
    // useEffect(() => {
    //     console.log("Jobs", Jobs)
    //     console.log("redux", UserDetails.alljobs)
    // }, [Jobs])





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