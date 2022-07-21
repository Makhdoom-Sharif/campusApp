import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar'
import StudentProfile from '../components/StudentProfile/StudentProfile'
const StudentProfilePage = () => {
  const { approve } = useSelector((state) => state.user);
  return (
    <div>
      <NavBar />
      {approve ?
        <StudentProfile />
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

export default StudentProfilePage