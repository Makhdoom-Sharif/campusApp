import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function DropDown(props) {
  const [disable, setDisable] = useState(true);


  return (
    <Box  sx={{ minWidth: 120 }}>
      <FormControl fullWidth={props.fullWidth} >
        <InputLabel id="demo-simple-select-label" >{props.label}:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={props.id}
          value={props.value}
          label={props.label}
          onChange={props.onChange}
          fullWidth={props.fullWidth}
          name={props.name}
          variant={props.variant}
          onBlur={() => setDisable(true)}
          disabled={disable}
          onClick={() => setDisable(false)}
          
        >
          <MenuItem value={"IT Services"}>IT Service</MenuItem>
          <MenuItem value={"Banking And Finance Services"}>Banking And Finance Services</MenuItem>
          <MenuItem value={"E-Commerce Consultant"}>E-Commerce Consultant</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
