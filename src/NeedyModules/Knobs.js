import React, { Component } from 'react';
import './Knobs.css';
import { Button } from '@material-ui/core';

const KNOBS = [
    {
        leds: [
            [false, true],
            [false, true],
            [true, true],
            [false, true],
            [true, false],
            [true, true]
        ],
        position: 'UP',
    },
    {
        leds: [
            [true, false],
            [false, true],
            [true, true],
            [false, false],
            [true, true],
            [false, true],
        ],
        position: 'UP',
    },
    {
        leds: [
            [false, true],
            [true, true],
            [true, true],
            [false, true],
            [false, false],
            [true, true],
        ],
        position: 'DOWN',
    },
    {
        leds: [
            [true, false],
            [false, true],
            [true, false],
            [false, false],
            [true, false],
            [false, true],
        ],
        position: 'DOWN',
    },
    {
        leds: [
            [false, true],
            [false, false],
            [false, false],
            [false, true],
            [true, true],
            [false, true],
        ],
        position: 'LEFT',
    },
    {
        leds: [
            [false, false],
            [false, false],
            [false, false],
            [false, true],
            [true, true],
            [false, false],
        ],
        position: 'LEFT',
    },
    {
        leds: [
            [true, true],
            [false, true],
            [true, true],
            [true, false],
            [true, true],
            [true, false],
        ],
        position: 'RIGHT',
    },
    {
        leds: [
            [true, true],
            [false, true],
            [true, true],
            [true, false],
            [false, true],
            [false, false],
        ],
        position: 'RIGHT',
    }
]

const defaultState = {
    knobs: [
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
    ],
};

class Knobs extends Component {

    state = defaultState

    reset = () => {
        console.log('clicked');
        this.setState(defaultState);
    }

    toggleLight = (knobIndex, position) => {
        this.setState((prevState) => {
            const nextKnobs = prevState.knobs.slice(0);
            const knobColumn = nextKnobs[knobIndex].slice(0);
            knobColumn[position] = !knobColumn[position];
            nextKnobs[knobIndex] = knobColumn;
            return {
                ...prevState,
                knobs: nextKnobs,
            }
        })
    }

    render() {

        const possibleSettings = KNOBS.filter(({ leds, _ }) => {
            return this.state.knobs.every(([top, bottom], index) => {
                const [desiredTop, desiredBottom] = leds[index];
                return (top === undefined ? true : desiredTop === top) && (bottom === undefined ? true : desiredBottom === bottom);
            });
        });

        const definiteSetting = possibleSettings.reduce((acc, { _, position }) => {
            if (acc === undefined) {
                return position;
            } else if (acc === false) {
                return false;
            } else {
                return acc === position ? position : false;
            }
        }, undefined)

        return (
            <div className="needy knobs">
                <h1>On the Subject of Knobs</h1>
                <div className="knobs">
                    {
                        this.state.knobs.map(([top, bottom], index) => (
                            <div className={`knob-${index}`} key={index}>
                                <div className={`top ${top ? 'lit' : 'unlit'}`} onClick={() => this.toggleLight(index, 0)}></div>
                                <div className={`bottom ${bottom ? 'lit' : 'unlit'}`} onClick={() => this.toggleLight(index, 1)}></div>
                            </div>
                        ))
                    }
                </div>
                {
                    definiteSetting ?
                        (
                            <div className="required-position">Move to the '{possibleSettings[0].position}' position</div>
                        ) : null
                }

                <Button onClick={this.reset}>Reset</Button>
            </div>
        )
    }

}

export default Knobs;