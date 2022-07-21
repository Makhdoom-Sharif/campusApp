import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar'
import AvailableJobs from '../components/StudentHomepage/AvailableJobs'
import { useSelector } from "react-redux";
import { Typography } from '@mui/material';
const StudentHomePage = () => {


  const { approve } = useSelector((state) => state.user);
  return (
    <div>

      <NavBar />
      {approve ?
        <AvailableJobs />
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

export default StudentHomePage