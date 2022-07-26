import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'
import PostedJobs from '../components/PostedJobs/PostedJobs'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
const CompanyHomePage = () => {
  const { approved, blocked
  } = useSelector((state) => state.user);
  return (
    <div>
      <NavBar />
      {approved && !blocked ?
        <PostedJobs />
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

export default CompanyHomePage