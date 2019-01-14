import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import { TextField } from '@material-ui/core';
import './Passwords.css';

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
        })

        console.log({ possiblePasswords });

        return (
            <div className="header passwords">
                <h1><HomeButton /> On the Subject of Passwords</h1>
                <div className="dials">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div className='dial' key={index}>
                            <TextField onKeyUp={this.handleKeyPress(index)} inputRef={(input) => this._textFields[index] = input} />
                            {
                                this.state.dials[index].map((letter, index) => (
                                    <div className="letter-list" key={index}>{letter}</div>
                                ))
                            }
                        </div>
                    ))}
                </div>
                <div className="possible-passwords">
                    <h2>Possible Passwords</h2>
                    {
                        possiblePasswords.map((password) => (
                            <div className="possible-password" key={password}>{password}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Passwords