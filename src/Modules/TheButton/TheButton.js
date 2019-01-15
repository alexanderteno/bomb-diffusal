import React, { Component } from 'react';
import theButton from '../images/on-the-subject-of-the-button.svg';
import BaseModule from '../../BaseModule/BaseModule';
import { Button } from '@material-ui/core';
import './TheButton.scss';

const WORDS = [
    'abort',
    'detonate',
    'hold',
    'press',
]

const COLORS = [
    { label: 'blue', color: 'cornflowerblue', fontColor: 'white' },
    { label: 'white', color: 'white', fontColor: 'black' },
    { label: 'yellow', color: 'yellow', fontColor: 'black' },
    { label: 'red', color: 'red', fontColor: 'white' },
]

const PressHold = () => (
    <div className="press-hold">
        <div><strong>Blue strip:</strong> release when the countdown timer has a 4 in any position.</div>
        <div><strong>White strip:</strong> release when the countdown timer has a 1 in any position.</div>
        <div><strong>Yellow strip:</strong> release when the countdown timer has a 5 in any position.</div>
        <div><strong>Any other strip:</strong> release when the countdown timer has a 1 in any position.</div>
    </div>
)

const getInstruction = (color, word, options) => {
    if (color === 'blue' && word === 'abort') {
        return (<PressHold />);
    } else if ((word === 'detonate') && (options.numberOfBatteries === undefined)) {
        return 'Determine the number of batteries.'
    } else if ((word === 'detonate') && (options.numberOfBatteries > 1)) {
        return 'Press and immediately release.';
    } else if ((color === 'white') && options.litIndicatorCAR === undefined) {
        return 'Determine if a lit indicator labelled CAR is present.'
    } else if ((color === 'white') && options.litIndicatorCAR) {
        return (<PressHold />);
    } else if ((options.numberOfBatteries === undefined)) {
        return 'Determine the number of batteries.';
    } else if ((options.numberOfBatteries > 2) && (options.litIndicatorFRK === undefined)) {
        return 'Determine if a lit indicator labelled FRK is present.'
    } else if ((options.numberOfBatteries > 2) && options.litIndicatorFRK) {
        return 'Press and immediately release.';
    } else if ((color === 'red') && (word === 'hold')) {
        return 'Press and immediately release.';
    } else {
        return (<PressHold />);
    }
}

const getButtonStyle = (color) => {
    const { color: backgroundColor, fontColor } = COLORS.find(({ label }) => color === label);
    return {
        backgroundColor,
        color: fontColor,
    };
}

const defaultState = {
    word: undefined,
    color: undefined,
};

class TheButton extends Component {

    state = defaultState;

    reset = () => {
        this.setState(defaultState);
    }

    selectWord = (word) => {
        this.setState({ word });
    }

    selectColor = (color) => {
        this.setState({ color });
    }

    render() {
        return (
            <BaseModule title="The Button" thumbnail={theButton} reset={this.reset}>
                {(!this.state.word || !this.state.color) && (
                    <div className="required-information">
                        <h2>Required Information</h2>
                        <div className="sections">
                            {
                                !this.state.word && (
                                    <div className="section word">
                                        <h3>What is the word?</h3>
                                        <div className="words-container">
                                            {
                                                WORDS.map((word) => (
                                                    <Button key={word} variant="outlined" onClick={() => this.selectWord(word)}>{word}</Button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            }
                            {
                                !this.state.color && (
                                    <div className="section color">
                                        <h3>What is the color?</h3>
                                        <div className="colors-container">
                                            {
                                                COLORS.map(({ label, color, fontColor }) => (
                                                    <Button key={label} variant="outlined" style={{ backgroundColor: color, color: fontColor }} onClick={() => this.selectColor(label)}>{label}</Button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}
                {
                    (this.state.word && this.state.color) && (
                        <div className="the-button-instruction">
                            <h2>Instruction</h2>
                            <div className="instruction">{getInstruction(this.state.color, this.state.word, this.props)}</div>
                            <h2>Sample Button</h2>
                            <div className="sample-button" style={getButtonStyle(this.state.color)}>
                                {this.state.word}
                            </div>
                        </div>
                    )
                }
            </BaseModule>
        )
    }
}

export default TheButton;