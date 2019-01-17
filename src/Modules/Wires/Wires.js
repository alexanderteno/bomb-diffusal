import React, { Component } from 'react';
import BaseModule from '../../BaseModule/BaseModule';
import wires from '../images/on-the-subject-of-wires.svg';
import './Wires.scss';
import { Button, Icon } from '@material-ui/core';

const defaultState = {
    wires: [],
};

const WIRES = [
    'red',
    'white',
    'blue',
    'yellow',
    'black',
]

const Wire = ({ wireColor, addWire }) => (
    <div className="wire-container" key={wireColor}>
        <span className="wire" style={{ backgroundColor: wireColor }}></span>
        {
            addWire && (<Button onClick={() => { addWire(wireColor) }}><Icon>add</Icon></Button>)
        }
    </div>
)

const countWires = (wires, color) => {
    return wires.filter((wireColor) => wireColor === color).length;
}

const getWireInstruction = (wires, serialNumberEven) => {
    switch (wires.length) {
        case 3:
            if (countWires(wires, 'red') === 0) {
                return 'Cut the second wire.';
            } else if (wires[2] === 'white') {
                return 'Cut the last wire.';
            } else if (countWires(wires, 'blue') > 1) {
                return 'Cut the last blue wire.';
            } else {
                return 'Cut the last wire.';
            }
        case 4:
            if (countWires(wires, 'red') > 1 && serialNumberEven === undefined) {
                return 'Determine if the last digit of the serial number is even.';
            } else if (countWires(wires, 'red') > 1 && !serialNumberEven) {
                return 'Cut the last red wire.';
            } else if (wires[3] === 'yellow' && countWires(wires, 'red') === 0) {
                return 'Cut the first wire.';
            } else if (countWires(wires, 'blue') === 1) {
                return 'Cut the first wire.';
            } else if (countWires(wires, 'yellow') > 1) {
                return 'Cut the last wire.';
            } else {
                return 'Cut the first wire.'
            }
        case 5:
            if (wires[4] === 'black' && serialNumberEven === undefined) {
                return 'Determine if the last digit of the serial nuber is even.';
            } else if (wires[4] === 'black' && !serialNumberEven) {
                return 'Cut the fourth wire.';
            } else if (countWires(wires, 'red') && countWires(wires, 'yellow') > 1) {
                return 'Cut the first wire.';
            } else if (countWires(wires, 'black') === 0) {
                return 'Cut the second wire.';
            } else {
                return 'Cut the first wire.';
            }
        case 6:
            if (countWires(wires, 'yellow') === 0 && serialNumberEven === undefined) {
                return 'Determine if the last digit of the serial number is even.';
            } else if (countWires(wires, 'yellow') === 0 && !serialNumberEven) {
                return 'Cut the third wire.';
            } else if (countWires(wires, 'yellow') === 1 && countWires(wires, 'white') > 1) {
                return 'Cut the fourth wire.';
            } else if (countWires(wires, 'red') === 0) {
                return 'Cut the last wire.';
            } else {
                return 'Cut the fourth wire.'
            }
        default:
            return 'More information required.';
    }



}

class Wires extends Component {

    state = defaultState;

    reset = () => {
        this.setState(defaultState);
    }

    addWire = (wireColor) => {
        this.setState((prevState) => {
            const nextWires = prevState.wires.slice(0);
            nextWires.push(wireColor);
            return {
                ...prevState,
                wires: nextWires,
            };
        });
    }

    render() {
        return (
            <BaseModule title="Wires" thumbnail={wires} reset={this.reset}>
                <div className="add-wires">
                    <h2>Add Wires</h2>
                    {
                        WIRES.map((wireColor) => (
                            <Wire key={wireColor} wireColor={wireColor} addWire={this.addWire} />
                        ))
                    }
                </div>
                {this.state.wires.length !== 0 && (<div className="current-wires">
                    <h2>Module State</h2>
                    <div className="module-state">
                        <div className="section">

                            <h3>Current Wires</h3>
                            <div className="wires-container">
                                {
                                    this.state.wires.map((wireColor, index) => (
                                        <Wire key={index} wireColor={wireColor} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="section">
                            <h3>Current Instruction</h3>
                            <div className="wire-instructions">{getWireInstruction(this.state.wires, this.props.serialNumberEven)}</div>
                        </div>
                    </div>
                </div>)}
            </BaseModule>
        )
    }

}

export default Wires;