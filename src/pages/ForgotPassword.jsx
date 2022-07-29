import React from 'react'
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Navbar/NavBar'
import ResetPassword from "../components/AuthComponent/ResetPassword";
const ForgotPassword = () => {
  return (
    <div className='container'>
      <NavBar />
      <div className='main'>
        <ResetPassword />
      </div>
      <Footer />
    </div>
  )
}

export default ForgotPassword