import React from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const ParallelPort = ({ value, handleChange }) => (
    <FormControl component="fieldset" className="parallel-port widget">
        <FormLabel component="legend">Has a parallel port?</FormLabel>
        <RadioGroup
            aria-label="Parallel Port"
            className="radio-group"
            name="parallelport"
            value={value}
            onChange={handleChange}
        >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
)

export default ParallelPort;