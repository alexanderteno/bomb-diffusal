import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const NumberOfStrikes = ({ value, handleChange }) => (
    <FormControl className="number-of-strikes">
        <InputLabel htmlFor="number-of-strikes">Number of Strikes</InputLabel>
        <Select
            value={value}
            onChange={handleChange}
            inputProps={{
                name: 'numberOfStrikes',
                id: 'number-of-strikes',
            }}
        >
            <MenuItem value={0}>No Strikes</MenuItem>
            <MenuItem value={1}>1 Strike</MenuItem>
            <MenuItem value={2}>2 Strikes</MenuItem>
        </Select>
    </FormControl>
)

export default NumberOfStrikes;