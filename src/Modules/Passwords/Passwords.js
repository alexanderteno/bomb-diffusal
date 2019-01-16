import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import BaseModule from '../../BaseModule/BaseModule';
import './Passwords.scss';

import passwords from '../images/on-the-subject-of-passwords.svg';

const PASSWORDS = [
    'about',
    'after',
    'again',
    'below',
    'could',
    'every',
    'first',
    'found',
    'great',
    'house',
    'large',
    'learn',
    'never',
    'other',
    'place',
    'plant',
    'point',
    'right',
    'small',
    'sound',
    'spell',
    'still',
    'study',
    'their',
    'there',
    'these',
    'thing',
    'think',
    'three',
    'water',
    'where',
    'which',
    'world',
    'would',
    'write',
]

const DIALS = [0, 1, 2, 3, 4];

const defaultState = {
    dials: [
        [],
        [],
        [],
        [],
        [],
    ],
}

class Passwords extends Component {

    state = defaultState;
    _textFields = [undefined, undefined, undefined, undefined, undefined, undefined];

    reset = () => {
        this.setState(defaultState);
    }

    handleKeyPress = (index) => {
        return (event) => {
            if (event.keyCode === 13) {
                this.setState((prevState) => {
                    const nextDials = prevState.dials.slice(0);
                    const nextDial = nextDials[index].slice(0);
                    const currentTextField = this._textFields[index];
                    nextDial.push(currentTextField.value.trim());
                    nextDials[index] = nextDial;
                    currentTextField.value = '';
                    return {
                        ...prevState,
                        dials: nextDials,
                    };
                });
            }
        };
    }

    render() {

        const possiblePasswords = PASSWORDS.filter((password) => {
            return password.split('').every((char, i) => {
                const currentDial = this.state.dials[i];
                return currentDial.length === 0 ? true : currentDial.includes(char);
            })
        });

        return (
            <BaseModule title="Passwords" reset={this.reset} thumbnail={passwords}>

                <div className="dial-grid">
                    <h2 className="dials-label row label">Dials</h2>
                    {
                        DIALS.map((index) => (
                            <div className='dial cell' key={index}>
                                <TextField
                                    onKeyUp={this.handleKeyPress(index)}
                                    inputRef={(input) => this._textFields[index] = input}
                                    label={`Dial ${index + 1}`}
                                    disabled={this.state.dials[index].length >= 6}
                                    inputProps={{style: {textAlign: 'center'}}}
                                />
                            </div>
                        ))
                    }
                    {
                        [0, 1, 2, 3, 4, 5].map((row) => {
                            return DIALS.map((index) => (
                                <div className="cell dial-letter">{this.state.dials[index][row] || '-'}</div>
                            ))
                        })
                    }
                    <h2 className="possible-passwords-label row label">Possible Passwords</h2>
                    {
                        possiblePasswords.map((password) => (
                            <div className="possible-password" key={password}>{password}</div>
                        ))
                    }
                </div>
            </BaseModule>
        )
    }
}

export default Passwords