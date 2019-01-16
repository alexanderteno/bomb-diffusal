import React, { Component } from 'react';
import { Button, Icon } from '@material-ui/core';
import BaseModule from '../../BaseModule/BaseModule';
import './WhosOnFirst.scss';

import whosOnFirst from '../images/on-the-subject-of-whos-on-first.svg';


const TOP_LEFT = 'top-left';
const TOP_RIGHT = 'top-right';
const MIDDLE_LEFT = 'middle-left';
const BOTTOM_LEFT = 'bottom-left';

const MIDDLE_RIGHT = 'middle-right';
const BOTTOM_RIGHT = 'bottom-right';

const POSITION_INDEX = {
    [TOP_LEFT]: 0,
    [TOP_RIGHT]: 1,
    [MIDDLE_LEFT]: 2,
    [MIDDLE_RIGHT]: 3,
    [BOTTOM_LEFT]: 4,
    [BOTTOM_RIGHT]: 5,
};

const DISPLAY = {
    '': BOTTOM_LEFT,
    'BLANK': MIDDLE_RIGHT,
    'C': TOP_RIGHT,
    'CEE': BOTTOM_RIGHT,
    'DISPLAY': BOTTOM_RIGHT,
    'FIRST': TOP_RIGHT,
    'HOLD ON': BOTTOM_RIGHT,
    'LEAD': BOTTOM_RIGHT,
    'LED': MIDDLE_LEFT,
    'LEED': BOTTOM_LEFT,
    'NO': BOTTOM_RIGHT,
    'NOTHING': MIDDLE_RIGHT,
    'OKAY': TOP_RIGHT,
    'READ': MIDDLE_RIGHT,
    'RED': MIDDLE_RIGHT,
    'REED': BOTTOM_LEFT,
    'SAYS': BOTTOM_LEFT,
    'SEE': BOTTOM_RIGHT,
    'THEIR': MIDDLE_RIGHT,
    'THERE': BOTTOM_RIGHT,
    'THEY ARE': MIDDLE_LEFT,
    'THEY\'RE': BOTTOM_LEFT,
    'UR': TOP_LEFT,
    'YES': MIDDLE_LEFT,
    'YOU ARE': BOTTOM_RIGHT,
    'YOU': MIDDLE_RIGHT,
    'YOU\'RE': MIDDLE_RIGHT,
    'YOUR': MIDDLE_RIGHT,
}

const LABELS = {
    'BLANK': 'WAIT, RIGHT, OKAY, MIDDLE, BLANK, PRESS, READY, NOTHING, NO, WHAT, LEFT, UHHH, YES, FIRST',
    'DONE': 'SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU\'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE',
    'FIRST': 'LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST',
    'HOLD': 'YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU\'RE, NEXT, HOLD, UH HUH, YOUR, LIKE',
    'LEFT': 'RIGHT, LEFT, FIRST, NO, MIDDLE, YES, BLANK, WHAT, UHHH, WAIT, PRESS, READY, OKAY, NOTHING',
    'LIKE': 'YOU\'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE, SURE, YOU ARE, YOUR',
    'MIDDLE': 'BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE, RIGHT, FIRST, UHHH, YES',
    'NEXT': 'WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT, LIKE, DONE, YOU ARE, UR, YOU\'RE, U, YOU',
    'NO': 'BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO, MIDDLE',
    'NOTHING': 'UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING, READY',
    'OKAY': 'MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY, LEFT, READY, BLANK, PRESS, WHAT, RIGHT',
    'PRESS': 'RIGHT, MIDDLE, YES, READY, PRESS, OKAY, NOTHING, UHHH, BLANK, LEFT, FIRST, WHAT, NO, WAIT',
    'READY': 'YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY, NO, FIRST, UHHH, NOTHING, WAIT',
    'RIGHT': 'YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT, MIDDLE, LEFT, UHHH, BLANK, OKAY, FIRST',
    'SURE': 'YOU ARE, DONE, LIKE, YOU\'RE, YOU, HOLD, UH HUH, UR, SURE, U, WHAT?, NEXT, YOUR, UH UH',
    'U': 'UH HUH, SURE, NEXT, WHAT?, YOU\'RE, UR, UH UH, DONE, U, YOU, LIKE, HOLD, YOU ARE, YOUR',
    'UH HUH': 'UH HUH, YOUR, YOU ARE, YOU, DONE, HOLD, UH UH, NEXT, SURE, LIKE, YOU\'RE, UR, U, WHAT?',
    'UH UH': 'UR, U, YOU ARE, YOU\'RE, NEXT, UH UH, DONE, YOU, UH HUH, LIKE, YOUR, SURE, HOLD, WHAT?',
    'UHHH': 'READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH, MIDDLE, WAIT, FIRST',
    'UR': 'DONE, U, UR, UH HUH, WHAT?, SURE, YOUR, HOLD, YOU\'RE, LIKE, NEXT, UH UH, YOU ARE, YOU',
    'WAIT': 'UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT, NOTHING, READY, RIGHT, MIDDLE',
    'WHAT?': 'YOU, HOLD, YOU\'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?, SURE',
    'WHAT': 'UHHH, WHAT, LEFT, NOTHING, READY, BLANK, MIDDLE, NO, OKAY, FIRST, WAIT, YES, PRESS, RIGHT',
    'YES': 'OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES, LEFT, BLANK, NO, WAIT',
    'YOU ARE': 'YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU\'RE, SURE, UR, YOU ARE',
    'YOU': 'SURE, YOU ARE, YOUR, YOU\'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU, UH UH, LIKE, DONE, U',
    'YOU\'RE': 'YOU, YOU\'RE, UR, NEXT, UH UH, YOU ARE, U, YOUR, WHAT?, UH HUH, SURE, DONE, LIKE, HOLD',
    'YOUR': 'UH UH, YOU ARE, UH HUH, YOUR, NEXT, UR, SURE, U, YOU\'RE, YOU, WHAT?, HOLD, LIKE, DONE',
}

const SightTable = ({ display }) => {
    const sightIndex = POSITION_INDEX[DISPLAY[display]];
    return (
        <div className="sight-table">
            <div className="display">{display}</div>
            {
                [0, 1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className={`position${sightIndex === index ? ' active' : ''}`}>
                        {sightIndex === index ? (<Icon>remove_red_eye</Icon>) : null}
                    </div>
                ))
            }
        </div>
    )
}

const defaultState = {
    display: undefined,
    label: undefined,
};

class WhosOnFirst extends Component {

    state = defaultState;

    reset = () => {
        this.setState(defaultState);
    }

    setDisplay = (display) => {
        this.setState({ display });
    }

    setLabel = (label) => {
        this.setState({ label });
    }

    render() {
        return (
            <BaseModule title="Who's On First" reset={this.reset} thumbnail={whosOnFirst}>
                {
                    (this.state.display === undefined) && (
                        <div className="display">
                            <h2>What is on the display?</h2>
                            <div className="display-options">
                                {
                                    Object.keys(DISPLAY).map((displayWord) => (
                                        <Button
                                            key={displayWord}
                                            variant="outlined"
                                            className="display-word"
                                            onClick={() => { this.setDisplay(displayWord) }}
                                        >
                                            {displayWord}
                                        </Button>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
                {
                    (this.state.display !== undefined && this.state.label === undefined) && (
                        <div className="display-response">
                            <h2>Display Response</h2>
                            <SightTable display={this.state.display} />
                            <h2>What is on the label?</h2>
                            <div className="label-options">
                                {
                                    Object.keys(LABELS).map((labelWord) => (
                                        <Button
                                            key={labelWord}
                                            variant="outlined"
                                            className="label-word"
                                            onClick={() => { this.setLabel(labelWord) }}
                                        >
                                            {labelWord}
                                        </Button>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
                {
                    (this.state.display !== undefined && this.state.label !== undefined) && (
                        <div className="label-response">
                            <h2>Label Response</h2>
                            <div className="response-options">
                                {
                                    LABELS[this.state.label].split(/,\s/).map((word) => (
                                        <Button key={word}>{word}</Button>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </BaseModule>
        )
    }
}

export default WhosOnFirst;