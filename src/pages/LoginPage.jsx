import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Login from '../components/AuthComponent/Login'
import Footer from '../components/Footer/Footer'
import './style.css'
const LoginPage = () => {
  return (
    <div className='container'>
      <NavBar />
      <div className='main'>
        <Login />
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage