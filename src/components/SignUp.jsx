import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RadioButtonsGroup from "./RadioButtonsGroup";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../firebase/signup";
import { useState } from "react";
// import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to={"/"} style={{ color: "inherit", textDecoration: "underline" }}>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, error } = useSelector((state) => state?.user);
  useEffect(() => {
    if (currentUser) {
      navigate("/homepage");
    }
  }, [currentUser, navigate]);
  const [roll, setRoll] = useState(null);
  const pull_data = (roll) => {
    setRoll(roll);
  };
  useFormik({
    initialValues: {
      firstName: "sd",
      lastName: "sdas",
      email: "asdsd",
    },
    onSubmit: (values) => {},
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get);
    console.log({
      fullname: data.get("fullname"),
      email: data.get("email"),
      password: data.get("password"),
      roll: roll,
    });
    try {
      await signUp({
        fullname: data.get("fullname"),
        email: data.get("email"),
        password: data.get("password"),
        roll: roll,
      });
      alert("SignUp Successfully");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student/Company Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={formik.handleSubmit}
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // onChange={formik.handleChange}
                  // value={formik.values.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <RadioButtonsGroup func={pull_data} />
              </Grid>
              {console.log(roll)}
              <Grid item xs={12}>
                {(() => {
                  if (roll === "student") {
                    return (
                      <TextField
                        required
                        fullWidth
                        id="fullName"
                        label="Student ID"
                        name="fullname"
                        autoComplete="given-name + family-name"
                        autoFocus
                      />
                    );
                  } else if (roll === "company") {
                    return (
                      <TextField
                        required
                        fullWidth
                        id="fullName"
                        label="Comapany Name"
                        name="fullname"
                        autoComplete="given-name + family-name"
                        autoFocus
                      />
                    );
                  } else {
                    return <></>;
                  }
                })()}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  to={"/login"}
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
