import { Button, MenuItem } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutFail, logoutStart, logoutSuccess } from "../../redux/action";
import { Link } from "react-router-dom";
import { app } from '../../firebase/firebaseConfig'
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
  // useEffect(() => {
  //   if (UserDetails.currentUser === false) {
  //     <Link to={"/"}></Link>;
  //   }
  // }, [UserDetails.currentUser]);

  return (
    <div>
      <MenuItem variant="contained" onClick={handleLogOut} disableElevation>
        Logout
      </MenuItem>
    </div>
  );
};
