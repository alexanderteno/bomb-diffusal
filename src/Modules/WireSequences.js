import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import { Button, Icon } from '@material-ui/core';
import './WireSequences.css';

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

    increment = (color) => {
        this.setState((prevState) => ({
            ...prevState,
            [color]: prevState[color] + 1,
        }));
    }

    render() {
        return (
            <div className="header wire-sequences">
                <h1><HomeButton /> On the Subject of Wire Sequences</h1>
                <table className="wires">
                    <thead>
                        <tr>
                            <th>Red</th>
                            <th>Blue</th>
                            <th>Black</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{WIRE_SEQUENCES['red'][this.state.red]}</td>
                            <td>{WIRE_SEQUENCES['blue'][this.state.blue]}</td>
                            <td>{WIRE_SEQUENCES['black'][this.state.black]}</td>
                        </tr>
                        <tr>
                            <td><Icon className="button" onClick={() => this.increment('red')}>keyboard_arrow_down</Icon></td>
                            <td><Icon className="button" onClick={() => this.increment('blue')}>keyboard_arrow_down</Icon></td>
                            <td><Icon className="button" onClick={() => this.increment('black')}>keyboard_arrow_down</Icon></td>
                        </tr>
                    </tbody>
                </table>
                <Button onClick={this.reset}>Reset</Button>
            </div>
        )
    }
}
export default WireSequences;