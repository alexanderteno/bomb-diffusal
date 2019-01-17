import React from 'react';
import { FormControl, TextField } from '@material-ui/core';

const NumberOfBatteries = ({ handleChange }) => (
    <FormControl component="fieldset" className="number-of-batteries widget">
        <TextField
            id="standard-name"
            label="Number of Batteries"
            onChange={handleChange}
            margin="normal"
        />
    </FormControl>
)

export default NumberOfBatteries;