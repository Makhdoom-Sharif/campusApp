import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar'
import AvailableJobs from '../components/StudentHomepage/AvailableJobs'
const StudentHomePage = () => {
  return (
    <div>
      <NavBar />
      <AvailableJobs />
      <Footer />
    </div>
  )
}

export default StudentHomePage