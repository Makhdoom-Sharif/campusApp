import React from 'react'
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Navbar/NavBar'
import ResetPassword from "../components/AuthComponent/ResetPassword";
const ForgotPassword = () => {
  return (
    <div>
      <NavBar />
      <ResetPassword />
      <Footer />
    </div>
  )
}

export default ForgotPassword