import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

export default function RowRadioButtonsGroup(props) {
const [roll,setRoll]=useState('');
props.func(roll);

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onChange={(e)=>{setRoll(e.target.value)}} value="student" control={<Radio />} label="Student" />
        <FormControlLabel onChange={(e)=>{setRoll(e.target.value)}} value="company" control={<Radio />} label="company" />
      </RadioGroup>
    </FormControl>
  );
}
