import React, { Component } from 'react';
import { Icon, Button } from '@material-ui/core';
import BaseModule from '../../BaseModule/BaseModule';
import './WireSequences.scss';

import wireSequences from '../images/on-the-subject-of-wire-sequences.svg';

const COLORS = [
    'red', 'blue', 'black',
];

const WIRE_SEQUENCES = {
    'red': ['C', 'B', 'A', 'A or C', 'B', 'A or C', 'A, B or C', 'A or B', 'B'],
    'blue': ['B', 'A or C', 'B', 'A', 'B', 'B or C', 'C', 'A or C', 'A'],
    'black': ['A, B or C', 'A or C', 'B', 'A or C', 'B', 'B or C', 'A or B', 'C', 'C']
}

const defaultState = {
    red: 0,
    blue: 0,
    black: 0,
};

class WireSequences extends Component {

    state = defaultState

    reset = () => {
        this.setState(defaultState);
    }

    decrement = (color) => {
        this.setState((prevState) => ({
            ...prevState,
            [color]: Math.max(0, prevState[color] - 1),
        }));
    }

    increment = (color) => {
        this.setState((prevState) => ({
            ...prevState,
            [color]: Math.min(WIRE_SEQUENCES[color].length, prevState[color] + 1),
        }));
    }

    render() {
        return (
            <BaseModule title="Wire Sequences" reset={this.reset} thumbnail={wireSequences}>
                <h2>Instruction</h2>
                <p>Cut the wire indicated, then adjust the ticker.</p>
                <div className="wire-table">
                    {[
                        COLORS.map((color) => {
                            const disabled = this.state[color] <= 0;
                            return (
                                <div key={color} className="cell decrement">
                                    <Button
                                        disabled={disabled}
                                        variant="outlined"
                                        onClick={() => this.decrement(color)}
                                        title="Increment"
                                    >
                                        <Icon>keyboard_arrow_up</Icon>
                                    </Button>
                                </div>
                            )
                        }),
                        COLORS.map((color) => (<div key={color} className={`cell header ${color}`}>{color}</div>)),
                        COLORS.map((color) => (<div key={color} className="cell connection">{WIRE_SEQUENCES[color][this.state[color]]}</div>)),
                        COLORS.map((color) => {
                            const disabled = this.state[color] >= (WIRE_SEQUENCES[color].length - 1);
                            return (
                                <div key={color} className="cell increment">
                                    <Button
                                        disabled={disabled}
                                        variant="outlined"
                                        onClick={() => this.increment(color)}
                                        title="Increment"
                                    >
                                        <Icon>keyboard_arrow_down</Icon>
                                    </Button>
                                </div>
                            )
                        }),
                    ]}
                </div>
            </BaseModule>
        )
    }
}
export default WireSequences;