import React from 'react'
import AppliedJobsView from '../components/AppliedJobsView/AppliedJobsView'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer';
const AppliedJobs = () => {
    return (
        <div>
            <NavBar />
            <AppliedJobsView />
            <Footer />
        </div>
    )
}

export default AppliedJobs