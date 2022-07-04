import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SchoolIcon from "@mui/icons-material/School";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Title from "./Title";
import "./StudentProfile.css";
import UpdateIcon from "@mui/icons-material/Update";
import { useState } from "react";
import { AccountCircle } from "@material-ui/icons";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDatabase, ref, child, get } from "firebase/database";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoneIcon from "@mui/icons-material/Done";

export default function StudentProfile() {
  const UserDetails = useSelector((state) => state.user);
  const [date, setDate] = useState(null);
  const [disable, setDisable] = useState(true);

  const handleUpdate = (event) => {
    event.preventDefault();
    setDisable(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get);
    console.log({
      fullname: data.get("fullname"),
      email: data.get("email"),
      password: data.get("password"),
      fathername: data.get("fathername"),
    });
    setDisable(true);
  };
  useEffect(() => {
    const dbRef = ref(getDatabase());
    const fetchData = async () => {
      await get(child(dbRef, `users/${UserDetails.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("Data not exist");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
    console.log(UserDetails.uid);
  }, [disable]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: "128vh",
            height: "128vh",
          },
        }}
      >
        <Paper
          elevation={3}
          component="form"
          onSubmit={disable ? handleUpdate : handleSubmit}
        >
          <div className="profile">
            <div className="profile-left">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: "25vh",
                    height: "25vh",
                    marginLeft: "2%",
                    marginTop: "4%",
                  }}
                />
              </div>
            </div>
            <div style={{ width: "65%" }}>
              <div className="Personal-info">
                <Title>Personal Info</Title>
                <div>
                  <TextField
                    multiline
                    rowsMax={4}
                    id="input-with-icon-textfield"
                    label="Full Name"
                    required
                    value={UserDetails.name}
                    name="fullname"
                    fullWidth
                    disabled={disable}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                      disableUnderline: disable,
                    }}
                    variant="standard"
                    style={{ marginBottom: "10px" }}
                  />
                  <EditIcon />
                  <DoneIcon />
                </div>
                <TextField
                  id="input-with-icon-textfield"
                  label="Father Name"
                  fullWidth
                  multiline
                  name="fathername"
                  rowsMax={4}
                  disabled={disable}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                    disableUnderline: disable,
                  }}
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                />
                <TextField
                  variant="standard"
                  id="standard-basic"
                  label="CNIC No"
                  type="tel"
                  disabled={disable}
                  fullWidth
                  multiline
                  rowsMax={4}
                  name="cnic no."
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  inputProps={{
                    minLength: 13,
                    maxLength: 13,
                  }}
                  InputProps={{ disableUnderline: disable }}
                  autoComplete="off"
                  style={{ marginBottom: "10px" }}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disabled={disable}
                    renderInput={(props) => (
                      <TextField
                        fullWidth
                        disabled={disable}
                        variant="standard"
                        id="standard-basic"
                        multiline
                        rowsMax={4}
                        label="Date Of Birth"
                        name="DOB"
                        autoComplete="off"
                        {...props}
                        InputProps={{ disableUnderline: disable }}
                      />
                    )}
                    label="Date Of Birth"
                    value={date}
                    onChange={(newValue) => {
                      setDate(new Date(newValue).toString());
                    }}
                  />
                </LocalizationProvider>
                <br />
                <Title>Contact Info</Title>
                <TextField
                  id="input-with-icon-textfield"
                  label="Email"
                  fullWidth
                  required
                  disabled={disable}
                  multiline
                  rowsMax={4}
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                    disableUnderline: disable,
                  }}
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Permenant Address"
                  fullWidth
                  multiline
                  disabled={disable}
                  rowsMax={4}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    ),
                    disableUnderline: disable,
                  }}
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                />
                <TextField
                  variant="standard"
                  id="input-with-icon-textfield"
                  label="Contact No"
                  disabled={disable}
                  type="tel"
                  fullWidth
                  multiline
                  rowsMax={4}
                  name="contact no."
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  inputProps={{ minLength: 11, maxLength: 11 }}
                  autoComplete="off"
                  style={{ marginBottom: "10px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CallIcon />
                      </InputAdornment>
                    ),
                    disableUnderline: disable,
                  }}
                />
                <br />
                <Title>Academic Info</Title>
                <TextField
                  multiline
                  rowsMax={4}
                  id="input-with-icon-textfield"
                  label="Highest Qualification"
                  fullWidth
                  disabled={disable}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                    disableUnderline: disable,
                  }}
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                />
              </div>
            </div>
          </div>

          {disable === true ? (
            <Button
              variant="contained"
              disableElevation
              style={{ marginRight: "10px" }}
              type="submit"
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              disableElevation
              style={{ marginRight: "10px" }}
              type="submit"
            >
              Apply Changes
            </Button>
          )}
        </Paper>
      </Box>
    </>
  );
}
