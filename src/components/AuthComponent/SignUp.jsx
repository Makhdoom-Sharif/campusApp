import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signUp } from "../../firebase/signup";
import { registerFail, registerStart } from "../../redux/action";
import SnackBar from "../Snackbar/SnakBar";

const theme = createTheme();

export default function SignUp() {
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const UserDetails = useSelector((state) => state.user);
  const [role, setRoll] = useState(null);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .required()
      .matches(
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/
      ),
    password: Yup.string().min(6).max(10).required(),
    role: Yup.string().required(),
    userName: Yup.string().required("Input Must be valid"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: "",
      role: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      dispatch(registerStart());
      try {
        await signUp({
          email: values.email,
          password: values.password,
          role: values.role,
          userName: values.userName,
          dispatch
        });
        // alert("SignUp Successfully");
        values.role === 'student' ? navigate('/student') : navigate('/company')
      } catch (e) {
        dispatch(registerFail());
        setOpen(true);
        setError(e.message);
        console.log(e.message)
      }
    },
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
          <SnackBar severity="error" openSnackBar={open} handleCloseAlert={handleClose}
            AlertMessage={error}

          />
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student/Company Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
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
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {console.log("email" + formik.touched.email)}
                {formik.errors.email && (
                  <p style={{ color: "red", marginLeft: "5px" }}>
                    {formik.errors.email}
                  </p>
                )}
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
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && (
                  <p style={{ color: "red", marginLeft: "5px" }}>
                    {formik.errors.password}
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="role"
                    value={formik.values.inCompliance}
                    onChange={(e) => {
                      setRoll(e.target.value);
                    }}
                  >
                    <FormControlLabel
                      onChange={formik.handleChange}
                      value="student"
                      control={<Radio />}
                      label="Student"
                    />
                    <FormControlLabel
                      onChange={formik.handleChange}
                      value="company"
                      control={<Radio />}
                      label="company"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                {(() => {
                  if (role === "student") {
                    return (
                      <>
                        <TextField
                          required
                          fullWidth
                          id="studentID"
                          label="Student ID"
                          name="userName"
                          autoFocus
                          onChange={formik.handleChange}
                          value={formik.values.userName}
                        />
                      </>
                    );
                  } else if (role === "company") {
                    return (
                      <TextField
                        required
                        fullWidth
                        id="companyName"
                        label="Comapany Name"
                        name="userName"
                        autoComplete="given-name + family-name"
                        autoFocus
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                      />
                    );
                  } else {
                    return <></>;
                  }
                })()}
                {formik.errors.userName && (
                  <p style={{ color: "red", marginLeft: "5px" }}>
                    {formik.errors.userName}
                  </p>
                )}
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={UserDetails.loading ? true : false}
            >
              Sign Up
            </LoadingButton>
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
      </Container>
    </ThemeProvider>
  );
}
