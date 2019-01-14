import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import Question from '../Question/Question';
import { Button } from '@material-ui/core';

const TOP_LEFT = 'top-left';
const MIDDLE_LEFT = 'middle-left';
const BOTTOM_LEFT = 'bottom-left';
const TOP_RIGHT = 'top-right';
const MIDDLE_RIGHT = 'middle-right';
const BOTTOM_RIGHT = 'bottom-right';

const DISPLAY = {
    '_': BOTTOM_LEFT,
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

const CELL_STYLE = { border: '1px solid black', width: 60, height: 30 };

const SightTable = ({ display }) => (
    <table style={{ border: '1px solid black' }}>
        <thead>
            <tr>
                <th colSpan="2">{display}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={CELL_STYLE}>{DISPLAY[display] === TOP_LEFT ? '@' : null}</td><td style={CELL_STYLE}>{DISPLAY[display] === TOP_RIGHT ? '@' : null}</td>
            </tr>
            <tr>
                <td style={CELL_STYLE}>{DISPLAY[display] === MIDDLE_LEFT ? '@' : null}</td><td style={CELL_STYLE}>{DISPLAY[display] === MIDDLE_RIGHT ? '@' : null}</td>
            </tr>
            <tr>
                <td style={CELL_STYLE}>{DISPLAY[display] === BOTTOM_LEFT ? '@' : null}</td><td style={CELL_STYLE}>{DISPLAY[display] === BOTTOM_RIGHT ? '@' : null}</td>
            </tr>
        </tbody>
    </table>
)

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
            <div className="header whos-on-first">
                <h1><HomeButton /> On the Subject of Who's on First</h1>
                <Question
                    condition={this.state.display === undefined}
                    question="What is on the display?"
                    options={Object.keys(DISPLAY).map((display) => ({ label: display, value: display }))}
                    onChoice={this.setDisplay}
                    onInstruction={undefined}
                />
                {
                    this.state.display ? (<SightTable display={this.state.display} />) : null
                }
                <Question
                    condition={this.state.display !== undefined && this.state.label === undefined}
                    question="What is on the label?"
                    options={Object.keys(LABELS).map((label) => ({ label: label, value: label }))}
                    onChoice={this.setLabel}
                    onInstruction={undefined}
                />
                {
                    this.state.label ? (
                        <div className="label-readout">
                            {
                                LABELS[this.state.label]
                            }
                        </div>
                    ) : null
                }
                <Button onClick={this.reset} color="primary" variant="outlined">Reset</Button>
            </div>
        )
    }
}

export default WhosOnFirst;