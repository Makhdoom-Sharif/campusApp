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
import { LogOut } from "./LogOut";

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
  const { currentUser, loading, roll } = useSelector((state) => state.user);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
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
          </Typography>
          <div className="buttons">
            {currentUser ? (
              <>
                <div style={{ marginRight: "15px" }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <div>
                  <Link
                    to={
                      roll === "student" ? "/studentprofile" : "/companyprofile"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      disableElevation
                      style={{ marginRight: "10px" }}
                    >
                      Profile
                    </Button>
                  </Link>
                </div>
                <LogOut />
              </>
            ) : <></>}
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
