import React from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const LitIndicatorFRK = ({ value, handleChange }) => (
    <FormControl component="fieldset" className="lit-indicator-frk widget">
        <FormLabel component="legend">Is there a lit indicator FRK?</FormLabel>
        <RadioGroup
            aria-label="Lit Indicator FRK"
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

export default LitIndicatorFRK;