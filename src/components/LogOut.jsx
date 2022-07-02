import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { logoutFail, logoutStart, logoutSuccess } from '../redux/action';
const auth = getAuth();



export const LogOut = () => {

  
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    dispatch(logoutStart())
     signOut(auth).then(() => {
       console.log("Sign-out successful.")
       dispatch(logoutSuccess())
       
     }).catch((error) => {
       alert(error)
       dispatch(logoutFail())
     });
   }
   
  
  return (
    <div>
        <Link to={'/'}  style={{ textDecoration: "none"}}>
          <Button variant="contained" onClick={handleLogOut} disableElevation >Logout</Button>
          </Link>
    </div>
  )
}
