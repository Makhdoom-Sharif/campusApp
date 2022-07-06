import { MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileNavigation = () => {
  const UserDetails = useSelector((state) => state.user);
  return (
    <div>
      <Link
        to={
          UserDetails.roll === "student" ? "/studentprofile" : "/companyprofile"
        }
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <MenuItem>Profile</MenuItem>
      </Link>
    </div>
  );
};

export default ProfileNavigation;
