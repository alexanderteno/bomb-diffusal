import React, { Component } from 'react';
import { TextField, Icon } from '@material-ui/core';
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

const RED = 8;
const BLUE = 4;
const STAR = 2;
const LIGHT = 1;

const MASK = 8 | 4 | 2 | 1;

const translateWire = (wireDescription) => {
    const descriptors = wireDescription.toLowerCase().split(' ');
    const wireValue = descriptors.reduce((acc, descriptor, index) => {
        const previousDescriptor = descriptors[Math.max(0, index - 1)]
        const bitMask = (previousDescriptor === 'not') || (previousDescriptor === 'no') ? 0 : MASK;
        switch (descriptor) {
            case 'red':
                return acc | (RED & bitMask);
            case 'blue':
                return acc | (BLUE & bitMask);
            case 'star':
                return acc | (STAR & bitMask);
            case 'light':
            case 'lit':
                return acc | (LIGHT & bitMask);
            default:
                return acc;
        }
    }, 0)
    return wireValue.toString(2).padStart(4, '0');
}

const getInstruction = (wire, { parallelPort, serialNumberEven, numberOfBatteries }) => {
    const twoOrMoreBatteries = numberOfBatteries >= 2;
    const instruction = COMPLICATED_WIRES[wire];
    console.log({ instruction });
    switch (instruction) {
        case 'C':
            return 'C';
        case 'D':
            return 'D';
        case 'S':
            return (serialNumberEven === undefined) ? 'S' : (serialNumberEven ? 'C' : 'D');
        case 'P':
            return (parallelPort === undefined) ? 'P' : (parallelPort ? 'C' : 'D');
        case 'B':
            return (numberOfBatteries === undefined) ? 'B' : (twoOrMoreBatteries ? 'C' : 'D');
        default:
            return 'Invalid selection';
    }
}

const defaultState = {
    wireDescription: undefined,
    wires: [],
};

const WireInstruction = ({ wire, settings }) => {
    const isRed = wire[0] === '1';
    const isBlue = wire[1] === '1';
    const hasStar = wire[2] === '1';
    const isLit = wire[3] === '1';
    return (
        <div className="wire-instruction features">
            {hasStar && (<div className="feature star"><Icon>star_border</Icon></div>)}
            {isRed && (<div className="feature red"></div>)}
            {isBlue && (<div className="feature blue"></div>)}
            {isLit && (<div className="feature light"><Icon>brightness_low</Icon></div>)}
            <div className="feature instruction">{getInstruction(wire, settings)}</div>
        </div>
    )
}

class ComplicatedWires extends Component {

    state = defaultState;
    textFieldRef;

    reset = () => {
        this.setState(defaultState);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((prevState) => {
            const nextWires = prevState.wires.slice(0);
            nextWires.push(translateWire(prevState.wireDescription))
            return {
                ...prevState,
                wires: nextWires,
            };
        });
        this.textFieldRef.value = '';
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ wireDescription: value });
    }

    render() {
        return (
            <BaseModule title="Complicated Wires" thumbnail={complicatedWires} reset={this.reset}>
                <h2>Describe the wire</h2>
                <form className="wire-form" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="wire-detail-input"
                        label="Wire Details"
                        onChange={this.handleChange}
                        inputRef={(textFieldRef) => { this.textFieldRef = textFieldRef }}
                    />
                </form>
                {
                    (this.state.wires.length > 0) && (
                        <div className="wire-solution">
                            <h2>Respond with...</h2>
                            <p>In order from left to right</p>
                            <div className="solution-grid">
                                {
                                    this.state.wires.map((wire, index) => (
                                        <WireInstruction key={index} wire={wire} settings={this.props} />
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </BaseModule >
        )
    }
}

export default ComplicatedWires;