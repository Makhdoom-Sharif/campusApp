import { Card } from '@material-ui/core';
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
import { ApplyJob } from '../../firebase/ApplyandCancelJob';
import Footer from '../Footer/Footer';
import Cards from "./Cards";





const theme = createTheme();


const Main = (props) => {
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
                                {props.Title}
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ py: 8 }} maxWidth="md">

                        <Grid container spacing={4}>


                            {props.alljobs.map((item, index) => (

                                item && <Cards
                                    uid={props.uid}
                                    jobID={item.jobID}
                                    item={item}
                                    index={index}
                                    DialogBoxButtonText={props.DialogBoxButtonText}
                                    DialogBoxTitle={props.DialogBoxTitle}
                                    DialogBoxText={props.DialogBoxText}
                                    DialogAgreeButtonText={props.DialogAgreeButtonText}
                                    DialogCancelButtonText={props.DialogCancelButtonText}
                                    DialogBox={props.DialogBox}
                                    EditModal={props.EditModal}
                                />

                            ))
                            }


                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        </>
    )
}

export default Main