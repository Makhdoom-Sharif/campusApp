import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import RadioButtonsGroup from './RadioButtonsGroup';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { loginUser } from '../firebase/login';
import { useSelector, useDispatch } from "react-redux";
import {
  loginInitiate,
  clearError,
  loginStart,
  loginSuccess,
  loginFail,
  saveUid,
} from "../redux/action";
import { useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
// import CircularIntegration from './loading button';
// import LoadingButton from "@mui/lab/LoadingButton";

// import LoadingButton from '@mui/lab/LoadingButton';
// or
import { LoadingButton } from "@mui/lab";
import BasicAlerts from "./Alert";

// import { async } from '@firebase/util';
function Copyright(props) {
  const UserDetails = useSelector((state) => state.user);
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        to={UserDetails.loading ? "#" : "/"}
        style={{ color: "inherit", textDecoration: "underline" }}
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserDetails = useSelector((state) => state.user);
  console.log("UserRoll==>" + UserDetails.roll);
  useEffect(() => {
    if (UserDetails.roll === "student") {
      navigate("/homepage");
    } else if (UserDetails.roll === "company") {
      navigate("/company");
    } else {
    }
  }, [UserDetails, navigate]);

  // const [roll , setRoll]=useState('');
  // const pull_data = (roll) => {
  //   setRoll(roll);
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      // roll: roll
    });
    try {
      await loginUser({
        email: data.get("email"),
        password: data.get("password"),
        // roll: roll
      });
    } catch (error) {}
  };

  const loginUser = async (authParams) => {
    const auth = getAuth();
    const { email, password } = authParams;
    try {
      dispatch(loginStart());
      const {
        user: { uid },
      } = await signInWithEmailAndPassword(auth, email, password);
      const db = getDatabase();
      const dbRef = ref(getDatabase());
      await get(child(dbRef, `users/${uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val().roll);
            dispatch(loginSuccess(snapshot.val()));
            console.log("Login Successfull");
            dispatch(saveUid(uid));
          } else {
            console.log("Login fail");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      // alert(error)
      dispatch(loginFail());
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
            Login in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {UserDetails.error && <BasicAlerts />}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <RadioButtonsGroup func={pull_data} /> */}
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={UserDetails.loading ? true : false}
            >
              Sign In
            </LoadingButton>
            {/* <LoadingButton>Sign In</LoadingButton> */}
            {/* <LoadingButton
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={true}
          loadingPosition="end"
          >
              Sign In
            </LoadingButton> */}
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link
                  to={UserDetails.loading ? "#" : "/signup"}
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
