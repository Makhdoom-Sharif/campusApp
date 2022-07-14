import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Main from '../components/ApplicationForJobs/Main'
import Footer from '../components/Footer/Footer'
import PostedJobs from '../components/PostedJobs/PostedJobs'
const CompanyHomePage = () => {
  return (
    <div>
      <NavBar />
      <PostedJobs />
      <Footer />
    </div>
  )
}

export default CompanyHomePage