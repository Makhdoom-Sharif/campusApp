import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';







function Copyright(props) {
    const { roll } = useSelector((state) => state.user);
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}
        >
            {"Copyright © "}
            <Link to={roll === 'student' ? '/student' : '/company'} style={{ color: "inherit", textDecoration: "underline" }}>
                Campus Recruitment System
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            {/* <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography> */}
            {/* <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Something here to give the footer a purpose!
            </Typography> */}
            <Copyright />
        </Box>
    )
}

export default Footer