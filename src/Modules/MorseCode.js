import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import TextField from '@material-ui/core/TextField';

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

class MorseCode extends Component {

    state = {
        letters: '',
    }

    onChange = (event) => {
        const inputs = event.currentTarget.value.split(' ');
        this.setState({ letters: inputs.map((input) => MORSE_CODE_TO_LETTER[input]).join('') });
    }

    render() {

        const availableWords = WORDS.filter(({ word, _ }) => word.indexOf(this.state.letters) >= 0);

        return (
            <div className="header morse-code">
                <h1><HomeButton /> On the Subject of More Code</h1>
                <h2>Please enter dots and dashs with characters separated by a space</h2>
                <TextField onChange={this.onChange} />
                <div className="current-letters">{this.state.letters}</div>
                <table>
                    <thead>
                        <tr>
                            <th>If the word is:</th>
                            <th>Respond at frequency:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            availableWords.map(({ word, frequency }) => (
                                <tr key={word}>
                                    <td>{word}</td>
                                    <td>{frequency}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MorseCode;