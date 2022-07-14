import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar'
import PostedJobs from '../components/PostedJobs/PostedJobs'
const PostedJobPage = () => {
    return (
        <div>
            <NavBar />
            <PostedJobs />
            <Footer />
        </div>
    )
}

export default PostedJobPage