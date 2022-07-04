import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import {
  passordResetFail,
  passwordResetInitiaite,
  passwordResetSuccess,
} from "../redux/action";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const auth = getAuth();

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const ResetPassword = () => {
  const [open, setOpen] = useState(false);
  const [reset, setReset] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserDetails = useSelector((state) => state.user);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .required()
      .matches(
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      dispatch(passwordResetInitiaite());
      try {
        await sendPasswordResetEmail(auth, values.email);
        dispatch(passwordResetSuccess());
        setOpen(true);
      } catch (e) {
        dispatch(passordResetFail());
        alert(e);
      }
    },
  });
  const handleClose = () => {
    setOpen(false);
    setReset(true);
  };

  useEffect(() => {
    if (reset) {
      navigate("/");
    }
  }, [reset, navigate]);

  return (
    <div>
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
              <RotateLeftOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password..?
            </Typography>
            <p>Enter your registered email address in order to get reset link.</p>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && (
                <p style={{ color: "red", marginLeft: "5px" }}>
                  {formik.errors.email}
                </p>
              )}
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loading={UserDetails.loading ? true : false}
              >
                Send Email
              </LoadingButton>
            </Box>
            <Dialog
              open={open}
              onClose={handleClose}
              //   PaperComponent={PaperComponent}
              aria-labelledby="draggable-dialog-title"
            >
              <DialogTitle
                style={{ cursor: "move" }}
                id="draggable-dialog-title"
              >
                Link Sent Successfully
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Password Reset Link has been sent to your Email.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Done</Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default ResetPassword;