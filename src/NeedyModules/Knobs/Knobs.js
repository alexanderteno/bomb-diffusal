import React, { Component } from 'react';
import { Button, Icon } from '@material-ui/core';
import BaseModule from '../../BaseModule/BaseModule';
import './Knobs.scss';

import knobs from '../images/on-the-subject-of-knobs.svg';

const CONFIGURATIONS = [
    {
        columns: [
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
        columns: [
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
        columns: [
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
        columns: [
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
        columns: [
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
        columns: [
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
        columns: [
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
        columns: [
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

const OPTIONS = {
    up: [true, false],
    down: [false, true],
    both: [true, true],
    none: [false, false],
};

const LightCell = ({ position, lit, row }) => (
    <div className="cell"
        style={{
            gridArea: `${row} / ${position} / span 1 / span 1`
        }}
    >
        <Icon>
            {
                (lit) && (<Icon>clear</Icon>)
            }
        </Icon>
    </div>
)

const defaultState = {
    columns: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
    ],
};

class Knobs extends Component {

    state = defaultState

    reset = () => {
        this.setState(defaultState);
    }

    setColumn = (index, option) => {
        const columnValue = OPTIONS[option].slice(0);
        this.setState((prevState) => {
            const nextColumns = prevState.columns.slice(0);
            nextColumns[index] = columnValue;
            return {
                ...prevState,
                columns: nextColumns,
            };
        })
    }

    render() {

        const configurations = CONFIGURATIONS.filter(({ columns }) => {
            return this.state.columns.every((stateColumn, index) => {
                return (stateColumn === undefined) || ((stateColumn[0] === columns[index][0]) && (stateColumn[1] === columns[index][1]))
            })
        })

        const position = configurations.reduce((acc, { position }) => {
            if (acc === undefined) {
                return position;
            } else if (acc === position) {
                return acc;
            } else {
                return false;
            }
        }, undefined)

        return (
            <BaseModule title="Knobs" reset={this.reset} thumbnail={knobs} sticky={true}>
                {position ? (
                    <div className="response-mode">
                        <h2>Respond with...</h2>
                        <p>Put the knob in the '{position}' position</p>
                    </div>
                ) : (
                        <div className="challenge-mode">
                            <h2>Select LED configuration</h2>
                            <div className="leds">
                                {
                                    ['up', 'down', 'both', 'none'].map((ledOption) => {
                                        return [0, 1, 2, 3, 4, 5].map((columnIndex) => (
                                            <Button
                                                key={columnIndex}
                                                className="cell"
                                                onClick={() => { this.setColumn(columnIndex, ledOption) }}
                                                variant="outlined"
                                                style={{ minWidth: 'unset' }}
                                            >{
                                                    ledOption[0]}
                                            </Button>
                                        ))
                                    })
                                }

                            </div>
                            {
                                (this.state.columns.some((column) => column !== undefined)) && (
                                    <div className="configuration-container">
                                        <h2 key="unique">Current Configuration</h2>
                                        <div className="current-configuration">
                                            {
                                                this.state.columns.map((column, index) => {
                                                    if (column === undefined) {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="cell"
                                                                style={{
                                                                    gridArea: `1 / ${index + 1} / span 2 / span 1`,
                                                                }}
                                                            >
                                                                <Icon>error</Icon>
                                                            </div>
                                                        )
                                                    } else {
                                                        const [top, bottom] = column;
                                                        return ([
                                                            (<LightCell key={`${index}-1`} position={index + 1} lit={top} row={1} />),
                                                            (<LightCell key={`${index}-2`} position={index + 1} lit={bottom} row={2} />),
                                                        ])
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )}
            </BaseModule>
        )
    }

}

export default Knobs;