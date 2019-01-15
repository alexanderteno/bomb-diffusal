import React from 'react';
import { FormControl, TextField } from '@material-ui/core';

const NumberOfBatteries = ({ value, handleChange }) => (
    <FormControl component="fieldset" className="number-of-batteries widget">
        <TextField
            id="standard-name"
            label="Nuber of Batteries"
            onChange={handleChange}
            margin="normal"
        />
    </FormControl>
)

export default NumberOfBatteries;