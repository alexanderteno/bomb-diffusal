import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import { Radio, RadioGroup, Checkbox, FormControlLabel, FormGroup, FormLabel, FormControl } from '@material-ui/core';
import './ComplicatedWires.css';

// BIT ORDER Red, Blue, *, LED
const COMPLICATED_WIRES = {
    '0000': 'C',
    '0001': 'D',
    '0010': 'C',
    '0011': 'B',
    '0100': 'S',
    '0101': 'P',
    '0110': 'D',
    '0111': 'P',
    '1000': 'S',
    '1001': 'B',
    '1010': 'C',
    '1011': 'B',
    '1100': 'S',
    '1101': 'S',
    '1110': 'P',
    '1111': 'D',
}

const FEATURES = [
    { label: 'RED', feature: 'redColoring' },
    { label: 'BLUE', feature: 'blueColoring' },
    { label: 'STAR', feature: 'hasStar' },
    { label: 'LIT LED', feature: 'litLED' },
]

const featuresToBinary = (state) => {
    const redColoring = state.redColoring ? '1' : '0';
    const blueColoring = state.blueColoring ? '1' : '0';
    const hasStar = state.hasStar ? '1' : '0';
    const litLED = state.litLED ? '1' : '0';
    return `${redColoring}${blueColoring}${hasStar}${litLED}`;
}

class ComplicatedWires extends Component {

    state = {
        hasLastDigitEven: undefined,
        hasParallelPort: undefined,
        hasTwoPlusBatteries: undefined,
        redColoring: false,
        blueColoring: false,
        hasStar: false,
        litLED: false,
        binary: '0000',
    }

    toggleFeature = (feature) => {
        return () => {
            this.setState((prevState) => {
                const nextState = {
                    ...prevState,
                    [feature]: !prevState[feature],
                }
                const binary = featuresToBinary(nextState)
                return {
                    ...nextState,
                    binary,
                };
            });
        }
    }

    toggleBombFeature = (feature) => {
        return () => {
            this.setState((prevState) => ({
                ...prevState,
                [feature]: !prevState[feature],
            }))
            console.log(feature)
        }
    }

    getInstruction = () => {
        const instruction = COMPLICATED_WIRES[this.state.binary];
        switch (instruction) {
            case 'C':
                return 'Cut the wire';
            case 'D':
                return 'Do not cut the wire';
            case 'S':
                return (this.state.hasLastDigitEven === undefined) ?
                    'Cut the wire if the last digit of the serial number is even' :
                    (this.state.hasLastDigitEven ?
                        'Cut the wire' :
                        'Do not cut the wire');
            case 'P':
                return (this.state.hasParallelPort === undefined) ?
                    'Cut the wire if the bomb has a parallel port' :
                    (this.state.hasParallelPort ?
                        'Cut the wire' :
                        'Do not cut the wire');
            case 'B':
                return (this.state.hasTwoPlusBatteries === undefined) ?
                    'Cut the wire if the bomb has two or more batteries' :
                    (this.state.hasTwoPlusBatteries ?
                        'Cut the wire' :
                        'Do not cut the wire');
            default:
                return 'Invalid selection';
        }
    }

    render() {
        return (
            <div className="header complicated-wires">
                <h1><HomeButton /> On the Subject of Complicated Wires</h1>
                <div className='bomb-questions'>
                    <FormControl component="fieldset" className="serial-even">
                        <FormLabel component="legend">Last digit of the serial number is even</FormLabel>
                        <RadioGroup
                            row
                            aria-label="Last Digit of Serial is Even"
                            name="serial-even"
                            className="serial-even"
                            value={this.state.hasLastDigitEven}
                            onChange={this.toggleBombFeature('hasLastDigitEven')}
                        >
                            <FormControlLabel value='true' control={< Radio value={true} />} label="Yes" />
                            <FormControlLabel value='false' control={<Radio value={false} />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" className="parallel-port">
                        <FormLabel component="legend">Bomb has a parallel port</FormLabel>
                        <RadioGroup
                            row
                            aria-label="Bomb has a parallel port"
                            name="parallel-port"
                            className="parallel-port"
                            value={this.state.hasParallelPort}
                            onChange={this.toggleBombFeature('hasParallelPort')}
                        >
                            <FormControlLabel value="true" control={< Radio value={true} />} label="Yes" />
                            <FormControlLabel value="false" control={<Radio value={false} />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" className="batteries">
                        <FormLabel component="legend">Bomb has two or more batteries</FormLabel>
                        <RadioGroup
                            row
                            aria-label="Bomb has two or more batteries"
                            name="batteries"
                            className="batteries"
                            value={this.state.hasTwoPlusBatteries}
                            onChange={this.toggleBombFeature('hasTwoPlusBatteries')}
                        >
                            <FormControlLabel value="true" control={< Radio value={true} />} label="Yes" />
                            <FormControlLabel value="false" control={<Radio value={false} />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <FormGroup row>
                    {
                        FEATURES.map(({ label, feature }) => (
                            <FormControlLabel
                                key={feature}
                                control={
                                    <Checkbox
                                        checked={this.state[feature]}
                                        onChange={this.toggleFeature(feature)}
                                    />
                                }
                                label={label}
                            />
                        ))
                    }
                </FormGroup>
                <div className="instruction">{this.getInstruction()}</div>
            </div >
        )
    }
}

export default ComplicatedWires;