import React from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const SerialNumberEven = ({ value, handleChange }) => (
    <FormControl component="fieldset" className="serial-number widget">
        <FormLabel component="legend">Serial Number</FormLabel>
        <RadioGroup
            aria-label="Serial Number"
            className="radio-group"
            name="serial"
            value={value}
            onChange={handleChange}
        >
            <FormControlLabel value="even" control={<Radio />} label="Even" />
            <FormControlLabel value="odd" control={<Radio />} label="Odd" />
        </RadioGroup>
    </FormControl>
)

export default SerialNumberEven;