import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar'
import AvailableJobs from '../components/StudentHomepage/AvailableJobs'
import { useSelector } from "react-redux";
import { Typography } from '@mui/material';
const StudentHomePage = () => {


  const { approved, blocked } = useSelector((state) => state.user);
  return (
    <div className='container'>

      <NavBar />
      <div className='main'>
        {approved && !blocked ?
          <AvailableJobs />
          : <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            You are not authorizes. <br />Contact to admin team
          </Typography>
        }
      </div>
      <Footer />
    </div>
  )
}

export default StudentHomePage