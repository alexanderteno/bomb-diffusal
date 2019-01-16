import React, { Component } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import BaseModule from '../../BaseModule/BaseModule';
import './ComplicatedWires.scss';

import complicatedWires from '../images/on-the-subject-of-complicated-wires.svg';

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

const defaultState = {
    redColoring: false,
    blueColoring: false,
    hasStar: false,
    litLED: false,
    binary: '0000',
};

class ComplicatedWires extends Component {

    state = defaultState;

    reset = () => {
        this.setState(defaultState);
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

    getInstruction = ({ parallelPort, serialNumberEven, numberOfBatteries }) => {
        const twoOrMoreBatteries = numberOfBatteries >= 2;
        const instruction = COMPLICATED_WIRES[this.state.binary];
        switch (instruction) {
            case 'C':
                return 'Cut the wire';
            case 'D':
                return 'Do not cut the wire';
            case 'S':
                return (serialNumberEven === undefined) ?
                    'Cut the wire if the last digit of the serial number is even' :
                    (serialNumberEven ?
                        'Cut the wire' :
                        'Do not cut the wire');
            case 'P':
                return (parallelPort === undefined) ?
                    'Cut the wire if the bomb has a parallel port' :
                    (parallelPort ?
                        'Cut the wire' :
                        'Do not cut the wire');
            case 'B':
                return (numberOfBatteries === undefined) ?
                    'Cut the wire if the bomb has two or more batteries' :
                    (twoOrMoreBatteries ?
                        'Cut the wire' :
                        'Do not cut the wire');
            default:
                return 'Invalid selection';
        }
    }

    render() {
        return (
            <BaseModule title="Complicated Wires" thumbnail={complicatedWires} reset={this.reset}>
                <h2>Wire Details</h2>
                <FormGroup row className="wire-details">
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
                <h2>Instruction</h2>
                <div className="instruction">{this.getInstruction(this.props)}</div>
            </BaseModule >
        )
    }
}

export default ComplicatedWires;