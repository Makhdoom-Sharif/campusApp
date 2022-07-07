import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import { Avatar, Button } from "@mui/material";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogOut } from "../LongMenu/LogOut";
import LongMenu from "../LongMenu/LongMenu";
import Drawer from "../Drawer/Drawer";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const { currentUser, loading, roll, profilePicture, fullname, userName } = useSelector((state) => state.user);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <div className="Left-Nav">
              <Drawer />


              <Link
                to={
                  currentUser
                    ? roll === "student"
                      ? "/homepage"
                      : "/company"
                    : "/"
                }
                style={{ color: "inherit", textDecoration: "none" }}
              >
                The Campus Recruitment App
              </Link>
            </div>
          </Typography>
          <div className="buttons">
            {currentUser && (
              <>
                <div style={{ marginRight: "15px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Avatar alt={fullname} src={profilePicture} style={{ marginRight: "10px" }} />
                  <p>{roll === "student" ? "StudentID:" : ""}{userName}</p>
                </div>
                <LongMenu />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
