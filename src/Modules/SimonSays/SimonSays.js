import React, { Component } from 'react';
import BaseModule from '../../BaseModule/BaseModule';
import { Button, Icon } from '@material-ui/core';
import './SimonSays.scss';

import simonSays from '../images/on-the-subject-of-simon-says.svg';

const COLORS = {
    'red': 0,
    'blue': 1,
    'green': 2,
    'yellow': 3,
};

const DIRECTIONS = {
    'vowel': {
        0: ['blue', 'red', 'yellow', 'green'],
        1: ['yellow', 'green', 'blue', 'red'],
        2: ['green', 'red', 'yellow', 'blue'],
    },
    'no-vowel': {
        0: ['blue', 'yellow', 'green', 'red'],
        1: ['red', 'blue', 'yellow', 'green'],
        2: ['yellow', 'green', 'blue', 'red'],
    }
}

const SimonSaysPanel = ({ onClick }) => (
    <div className="simon-says-panel">
        <div className="simon-says-buttons">
            <div className="button red" onClick={() => { onClick('red') }}></div>
            <div className="button blue" onClick={() => { onClick('blue') }}></div>
            <div className="button green" onClick={() => { onClick('green') }}></div>
            <div className="button yellow" onClick={() => { onClick('yellow') }}></div>
        </div>
    </div>
)

const defaultState = {
    moduleReady: false,
    buttons: [],
}


class SimonSays extends Component {

    state = defaultState;

    reset = () => {
        this.setState(defaultState);
    }

    readyModule = () => {
        this.setState({ moduleReady: true });
    }

    addButton = (color) => {
        this.setState((prevState) => {
            const nextButtons = prevState.buttons.slice(0);
            nextButtons.push(color);
            return {
                ...prevState,
                buttons: nextButtons,
            };
        })
    }

    render() {
        const { serialNumberVowel, numberOfStrikes } = this.props;
        return (
            <BaseModule title="Simon Says" thumbnail={simonSays} reset={this.reset}>
                {
                    this.state.moduleReady ? (
                        (serialNumberVowel === undefined) && (
                            <div className="required-information">
                                <h2>Required Information</h2>
                                <div className="question">Determine if the serial number contains a vowel.</div>
                            </div>
                        )
                    ) : (
                            <div className="ready-module">
                                <p>Please ensure that the number of strikes is correct.</p>
                                <Button variant="outlined" onClick={this.readyModule}><Icon>checkmark</Icon></Button>
                            </div>
                        )
                }
                {
                    (serialNumberVowel !== undefined) ? (
                        <div className="response">
                            <SimonSaysPanel onClick={this.addButton} />
                            {
                                <div className="instructions">
                                    <h2>Instructions</h2>
                                    <div className="response-buttons">
                                        {
                                            this.state.buttons.map((color, index) => {
                                                const directions = DIRECTIONS[serialNumberVowel ? 'vowel' : 'no-vowel'][numberOfStrikes]
                                                return (
                                                    <div key={index} className={`small button ${directions[COLORS[color]]}`}></div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    ) : null
                }
            </BaseModule>
        )
    }
}

export default SimonSays