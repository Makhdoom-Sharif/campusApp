import { AccountCircle } from "@material-ui/icons";
import CallIcon from "@mui/icons-material/Call";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Avatar, InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { child, get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Textfield from "./Inputfeild/Textfield";
import "./StudentProfile.css";
import Title from "./Title";
import NumbersIcon from "@mui/icons-material/Numbers";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { LoadingButton } from "@mui/lab";
import * as Yup from "yup";
import { useFormik } from "formik";
import studentDataUpdate from "../firebase/studentDataUpdate";
import { StudentProfileUpdateInit } from "../redux/action";

export default function StudentProfile() {
  const [disable, setDisable] = useState(true);
  const UserDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setDisable(false);
    formik.handleChange(e);
  };
  const handleReset = () => {
    setDisable(true);
    formik.handleReset();
  };

  const validationSchema = Yup.object({
    fullname: Yup.string(),
    fathername: Yup.string(),
    cnic: Yup.number(),
    address: Yup.string(),
    contact: Yup.number(),
    qualification: Yup.string()
  });
  const Input = styled("input")({
    display: "none"
  });

  const formik = useFormik({
    initialValues: {
      fullname: UserDetails.fullname,
      fathername: UserDetails.fathername,
      cnic: UserDetails.cnic,
      address: UserDetails.address,
      contact: UserDetails.contact,
      qualification: UserDetails.qualification
    },
    validationSchema,
    onSubmit: async (values) => {
      dispatch(StudentProfileUpdateInit())
      setDisable(true);
      console.log("dsds", values);

      await studentDataUpdate({
        uid: UserDetails.uid,
        dispatch: dispatch,
        fullname: values.fullname,
        fathername: values.fathername,
        cnic: values.cnic,
        address: values.address,
        contact: values.contact,
        qualification: values.qualification
      });
    }
  });

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
            height: "128vh"
          }
        }}
      >
        <Paper
          elevation={3}
          component='form'
          onSubmit={formik.handleSubmit}
          // onSubmit={disable ? handleUpdate : handleSubmit}
        >
          <div className='profileHead'>
            <div className='head'>
              <div>
                <label htmlFor='icon-button-file' className='uploadBtn'>
                  <Input accept='image/*' id='icon-button-file' type='file' />
                  <IconButton aria-label='upload picture' component='span'>
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
              <Avatar alt='Remy Sharp' src='#' className='Avatar' />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignCcontent: "center",
              justifyContent: "center"
            }}
          >
            <div className='profile'>
              <Title>Personal Info</Title>
              <Textfield
                id='input-with-icon-textfield'
                label='Full Name'
                name='fullname'
                fullWidth
                onChange={handleChange}
                value={formik.values.fullname}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
                variant='standard'
                style={{ marginBottom: "10px" }}
              />

              <Textfield
                id='input-with-icon-textfield'
                label='Father Name'
                fullWidth={true}
                name='fathername'
                onChange={handleChange}
                value={formik.values.fathername}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
                variant='standard'
                style={{ marginBottom: "10px" }}
              />
              <Textfield
                variant='standard'
                id='standard-basic'
                label='CNIC No'
                type='tel'
                fullWidth={true}
                name='cnic'
                onChange={handleChange}
                value={formik.values.cnic}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <NumbersIcon />
                    </InputAdornment>
                  )
                }}
                inputProps={{
                  minLength: 13,
                  maxLength: 13
                }}
                autoComplete='off'
                style={{ marginBottom: "10px" }}
              />
              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disabled={disable}
                    renderInput={(props) => (
                      <TextField
                        fullWidth
                        disabled={disable}
                        variant='standard'
                        id='standard-basic'
                        multiline
                        rowsMax={4}
                        label='Date Of Birth'
                        name='DOB'
                        autoComplete='off'
                        {...props}
                        InputProps={{ disableUnderline: disable }}
                      />
                    )}
                    label='Date Of Birth'
                    value={date}
                    onChange={(newValue) => {
                      setDate(new Date(newValue).toString());
                    }}
                  />
                </LocalizationProvider> */}
              {/* {disable ? (
                  <button className='btn'>
                    <EditIcon className='Icon-btn' />
                  </button>
                ) : (
                  <button className='btn'>
                    <DoneIcon className='Icon-btn' />
                  </button>
                )}
              </div>*/}
              <br />
              <Title>Contact Info</Title>
              <TextField
                id='input-with-icon-textfield'
                label='Email'
                fullWidth
                disabled={true}
                multiline
                rowsMax={4}
                type='email'
                value={UserDetails.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true
                }}
                variant='standard'
                style={{ marginBottom: "10px" }}
              />
              <Textfield
                id='input-with-icon-textfield'
                label='Permenant Address'
                fullWidth={true}
                name='address'
                onChange={handleChange}
                value={formik.values.address}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <HomeIcon />
                    </InputAdornment>
                  )
                }}
                variant='standard'
                style={{ marginBottom: "10px" }}
              />
              <Textfield
                variant='standard'
                id='input-with-icon-textfield'
                label='Contact No'
                type='tel'
                fullWidth={true}
                name='contact'
                onChange={handleChange}
                value={formik.values.contact}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                inputProps={{ minLength: 11, maxLength: 11 }}
                autoComplete='off'
                style={{ marginBottom: "10px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CallIcon />
                    </InputAdornment>
                  )
                }}
              />
              <br />
              <Title>Academic Info</Title>
              <Textfield
                id='input-with-icon-textfield'
                label='Highest Qualification'
                name='qualification'
                fullWidth={true}
                onChange={handleChange}
                value={formik.values.qualification}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SchoolIcon />
                    </InputAdornment>
                  )
                }}
                variant='standard'
                style={{ marginBottom: "10px" }}
              />
            </div>
          </div>
          <div className='bottom-btns'>
            <div className='apply-btn'>
              <LoadingButton
                type='submit'
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                disabled={disable}
                loading={UserDetails.loading ? true : false}
              >
                Apply Changes
              </LoadingButton>
            </div>
            <div className='reset-btn'>
              <LoadingButton
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                disabled={disable}
                loading={UserDetails.loading ? true : false}
                onClick={handleReset}
              >
                Reset
              </LoadingButton>
            </div>
          </div>
        </Paper>
      </Box>
    </>
  );
}
