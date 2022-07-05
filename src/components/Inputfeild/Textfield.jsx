import { TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import React, { useState } from "react";
import "../StudentProfile.css";
const Textfield = (props) => {
  const [disable, setDisable] = useState(true);

  const handleBtn = (e) => {
    e.preventDefault();
    setDisable(false)
  };

  return (
    <div className='input-field'>
      <TextField
        onBlur={() => setDisable(true)}
        multiline
        rowsMax={4}
        id={props.id}
        label={props.label}
        required={props.required}
        value={props.value}
        name={props.name}
        fullWidth={props.fullWidth}
        onChange={props.onChange}
        disabled={disable}
        type={props.type}
        InputProps={{
          startAdornment: props.InputProps && props.InputProps.startAdornment,
          disableUnderline: disable
        }}
        inputProps={{
          minLength: props.inputProps && props.inputProps.minLength,
          maxLength: props.inputProps && props.inputProps.maxLength
        }}
        variant={props.variant}
        style={props.style}
        onKeyPress={props.onKeyPress}
        autoComplete={props.autoComplete}
      />
      {/* {disable ? ( */}
      {disable && (
        <button className='btn' onClick={handleBtn}>
          <EditIcon className='Icon-btn' />
        </button>
      )}
      {/* ) : (
        <button className='btn' onClick={handleBtn}>
          <DoneIcon className='Icon-btn' />
        </button>
      )} */}
    </div>
  );
};

export default Textfield;