import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import BaseModule from '../../BaseModule/BaseModule';
import './MorseCode.scss';

import morseCode from '../images/on-the-subject-of-morse-code.svg';

const WORDS = [
    { word: 'shell', frequency: '3.505' },
    { word: 'halls', frequency: '3.515' },
    { word: 'slick', frequency: '3.522' },
    { word: 'trick', frequency: '3.532' },
    { word: 'boxes', frequency: '3.535' },
    { word: 'leaks', frequency: '3.542' },
    { word: 'strobe', frequency: '3.545' },
    { word: 'bistro', frequency: '3.552' },
    { word: 'flick', frequency: '3.555' },
    { word: 'bombs', frequency: '3.565' },
    { word: 'break', frequency: '3.572' },
    { word: 'brick', frequency: '3.575' },
    { word: 'steak', frequency: '3.582' },
    { word: 'sting', frequency: '3.592' },
    { word: 'vector', frequency: '3.595' },
    { word: 'beats', frequency: '3.600' },
]

const LETTER_TO_MORSE_CODE = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
}

const MORSE_CODE_TO_LETTER = Object.keys(LETTER_TO_MORSE_CODE).reduce((acc, letter) => {
    return {
        ...acc,
        [LETTER_TO_MORSE_CODE[letter]]: letter,
    };
}, {})

const defaultState = {
    letters: '',
};

class MorseCode extends Component {

    state = defaultState;
    textField;

    reset = () => {
        this.textField.value = '';
        this.setState(defaultState)
    }

    handleChange = (event) => {
        const inputs = event.currentTarget.value.split(' ');
        this.setState({ letters: inputs.map((input) => MORSE_CODE_TO_LETTER[input]).join('') });
    }

    render() {

        const availableWords = WORDS.filter(({ word }) => word.indexOf(this.state.letters) >= 0);

        return (
            <BaseModule title="Morse Code" reset={this.reset} thumbnail={morseCode}>
                {
                    (availableWords.length === 1) && (
                        <div className="response-with">
                            <h2>Respond with...</h2>
                            <p>Frequency: <strong>{availableWords[0].frequency}</strong></p>
                        </div>
                    )
                }
                <h2>Instruction</h2>
                <p>Enter dots and dashes separated by spaces.</p>
                <TextField
                    label="Morse Code"
                    onChange={this.handleChange}
                    inputRef={(textField) => this.textField = textField}
                />

                {
                    this.state.letters && (
                        <div className="current-input">
                            <h2>Current Input</h2>
                            <div className="current-letters">{this.state.letters}</div>
                        </div>

                    )
                }

                <div className="possible-words">
                    <h2>Available Words</h2>
                    <div className="word-list">
                        <div className="cell header">If the<br />word is:</div>
                        <div className="cell header">Respond<br />at<br />frequency:</div>
                        {
                            availableWords.map(({ word, frequency }) => ([
                                (<div className="cell word" key={word}>{word}</div>),
                                (<div className="cell frequency" key={frequency}>{frequency} MHz</div>),
                            ]))
                        }
                    </div>
                </div>
            </BaseModule>
        );
    }
}

export default MorseCode;