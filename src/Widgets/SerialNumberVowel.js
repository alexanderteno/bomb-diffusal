import React from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const SerialNumberVowel = ({ value, handleChange }) => (
    <FormControl component="fieldset" className="serial-number widget">
        <FormLabel component="legend">Serial Number contains a vowel?</FormLabel>
        <RadioGroup
            aria-label="Serial Number"
            className="radio-group"
            name="serial"
            value={value}
            onChange={handleChange}
        >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
)

export default SerialNumberVowel;