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
// import JobsCard from './JobsCard';






// const theme = createTheme();










// const PostedJobs = () => {

//     const [Jobs, setJobs] = useState([])


//     const UserDetails = useSelector((state) => state.user)
//         ;


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
//                                 Posted Jobs
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
//             </ThemeProvider>
//         </>
//     )
// }

// export default PostedJobs











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
import JobsCard from './JobsCard';






const theme = createTheme();










const PostedJobs = () => {

    const [Jobs, setJobs] = useState([])


    const UserDetails = useSelector((state) => state.user)
        ;


    return (
        <Main
            alljobs={UserDetails.alljobs}
            uid={UserDetails.uid}
            DialogBox={false}
            EditModal={true}
            Title={"Posted Jobs"}
        />
    )
}

export default PostedJobs