import React from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const LitIndicatorCAR = ({ value, handleChange }) => (
    <FormControl component="fieldset" className="lit-indicator-car widget">
        <FormLabel component="legend">Is there a lit indicator CAR?</FormLabel>
        <RadioGroup
            aria-label="Lit Indicator CAR"
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

export default LitIndicatorCAR;