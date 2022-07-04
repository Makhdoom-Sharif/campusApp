import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { logoutFail, logoutStart, logoutSuccess } from "../redux/action";

const auth = getAuth();

export const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const UserDetails = useSelector((state) => state.user);
  const handleLogOut = async () => {
    dispatch(logoutStart());

    try {
      await signOut(auth);
      dispatch(logoutSuccess());
      alert("logout Sccess");
    } catch (e) {
      dispatch(logoutFail());
    }
  };
  useEffect(() => {
    if (UserDetails.currentUser === false) {
      navigate("/");
    }
  }, [UserDetails.currentUser, navigate]);

  return (
    <div>
      <Button variant="contained" onClick={handleLogOut} disableElevation>
        Logout
      </Button>
    </div>
  );
};
