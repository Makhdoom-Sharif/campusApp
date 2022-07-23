import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Alert, Avatar, Snackbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import LongMenu from "../LongMenu/LongMenu";
import "./NavBar.css";

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
  const { loginStatus, role, profilePicture, fullname, userName, registerSuccess } = useSelector((state) => state.user);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <div className="Left-Nav">
              {
                loginStatus && role !== "admin" && <Drawer />}


              <Link
                to={
                  loginStatus
                    ? role === "student"
                      ? "/student"
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
            {loginStatus && (
              <>
                <div style={{ marginRight: "15px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Avatar alt={fullname} src={profilePicture} style={{ marginRight: "10px" }} />
                  <p>{role === "student" ? "StudentID:" : ""}{userName}</p>
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
