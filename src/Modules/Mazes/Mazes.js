import React, { Component } from 'react';
import BaseModule from '../../BaseModule/BaseModule';
import './Mazes.scss';

import mazes from '../images/on-the-subject-of-mazes.svg';

const MAZES = [
    {
        calibrationPoints: [
            { x: 0, y: 4 },
            { x: 5, y: 3 },
        ],
        maze: [
            ['1001', '1010', '1100', '1001', '1010', '1110'],
            ['0101', '1001', '0110', '0011', '1010', '1100'],
            ['0101', '0011', '1100', '1001', '1010', '0100'],
            ['0101', '1011', '0010', '0110', '1011', '0100'],
            ['0001', '1010', '1100', '1001', '1110', '0101'],
            ['0011', '1110', '0011', '0110', '1011', '0110'],
        ]
    },
    {
        calibrationPoints: [
            { x: 1, y: 2 },
            { x: 4, y: 4 },
        ],
        maze: [
            ['1011', '1000', '1110', '1001', '1000', '1110'],
            ['1001', '0110', '1001', '0110', '0011', '1100'],
            ['0101', '1001', '0110', '1001', '1010', '0100'],
            ['0001', '0110', '1001', '0110', '1101', '0101'],
            ['0101', '1101', '0101', '1001', '0110', '0101'],
            ['0111', '0011', '0110', '0011', '1010', '0110'],
        ]
    },
    {
        calibrationPoints: [
            { x: 3, y: 2 },
            { x: 5, y: 2 },
        ],
        maze: [
            ['1001', '1010', '1100', '1101', '1001', '1100'],
            ['0111', '1101', '0101', '0011', '0110', '0101'],
            ['1001', '0100', '0101', '1001', '1100', '0101'],
            ['0101', '0101', '0101', '0101', '0101', '0101'],
            ['0101', '0011', '0110', '0101', '0101', '0101'],
            ['0011', '1010', '1010', '0110', '0011', '0110'],
        ]
    },
    {
        calibrationPoints: [
            { x: 0, y: 5 },
            { x: 0, y: 2 }
        ],
        maze: [
            ['1001', '1100', '1011', '1010', '1010', '1100'],
            ['0101', '0101', '1001', '1010', '1010', '0100'],
            ['0101', '0011', '0110', '1001', '1110', '0101'],
            ['0101', '1011', '1010', '0010', '1010', '0100'],
            ['0001', '1010', '1010', '1010', '1100', '0101'],
            ['0011', '1010', '1110', '1011', '0110', '0111'],
        ]
    },
    {
        calibrationPoints: [
            { x: 3, y: 0 },
            { x: 4, y: 3 },
        ],
        maze: [
            ['1011', '1010', '1010', '1010', '1000', '1100'],
            ['1001', '1010', '1010', '1000', '0110', '0111'],
            ['0001', '1100', '1011', '0110', '1001', '1100'],
            ['0101', '0011', '1010', '1100', '0111', '0101'],
            ['0101', '1001', '1010', '0010', '1110', '0101'],
            ['0111', '0011', '1010', '1010', '1010', '0110'],
        ]
    },
    {
        calibrationPoints: [
            { x: 2, y: 1 },
            { x: 4, y: 5 },
        ],
        maze: [
            ['1101', '1001', '1100', '1011', '1000', '1100'],
            ['0101', '0101', '0101', '1001', '0110', '0101'],
            ['0001', '0110', '0111', '0101', '1001', '0110'],
            ['0011', '1100', '1001', '0100', '0101', '1101'],
            ['1001', '0110', '0111', '0101', '0011', '0100'],
            ['0011', '1010', '1010', '0110', '1011', '0110'],
        ]
    },
    {
        calibrationPoints: [
            { x: 1, y: 0 },
            { x: 1, y: 5 },
        ],
        maze: [
            ['1001', '1010', '1010', '1100', '1001', '1100'],
            ['0101', '1001', '1110', '0011', '0110', '0101'],
            ['0011', '0110', '1001', '1110', '1001', '0110'],
            ['1001', '1100', '0001', '1010', '0110', '1101'],
            ['0101', '0111', '0011', '1010', '1100', '0101'],
            ['0011', '1010', '1010', '1010', '0010', '0110'],
        ]
    },
    {
        calibrationPoints: [
            { x: 2, y: 2 },
            { x: 3, y: 5 },
        ],
        maze: [
            ['1101', '1001', '1010', '1100', '1001', '1100'],
            ['0001', '0010', '1110', '0011', '0110', '0101'],
            ['0101', '1001', '1010', '1010', '1100', '0101'],
            ['0101', '0011', '1100', '1011', '0010', '0110'],
            ['0101', '1101', '0011', '1010', '1010', '1110'],
            ['0011', '0010', '1010', '1010', '1010', '1110'],
        ]
    },
    {
        calibrationPoints: [
            { x: 0, y: 1 },
            { x: 2, y: 4 },
        ],
        maze: [
            ['1101', '1001', '1010', '1010', '1000', '1100'],
            ['0101', '0101', '1001', '1110', '0101', '0101'],
            ['0001', '0010', '0110', '1001', '0110', '0101'],
            ['0101', '1101', '1001', '0110', '1011', '0100'],
            ['0101', '0101', '0101', '1001', '1100', '0111'],
            ['0011', '0110', '0011', '0110', '0011', '1110'],
        ]
    }
]

const INDEX_POSITION = {
    0: 'top',
    1: 'right',
    2: 'bottom',
    3: 'left',
}

class Mazes extends Component {

    state = {
        calibrationPoints: [],
    }

    reset = () => {
        this.setState({
            calibrationPoints: [],
        });
    }

    toggleCalibrationPoint = (x, y) => {

        const calibrationPointIndex = this.findCalibrationPoint(x, y);
        this.setState((prevState) => {
            const calibrationPoints = prevState.calibrationPoints.slice(0);
            if (calibrationPointIndex >= 0) {
                calibrationPoints.splice(calibrationPointIndex, 1);
            } else {
                calibrationPoints.push({ x, y });
            }
            return {
                ...prevState,
                calibrationPoints,
            };
        })
    }

    findCalibrationPoint = (x, y) => {
        return this.state.calibrationPoints.findIndex((calibrationPoint) => calibrationPoint.x === x && calibrationPoint.y === y);
    }

    getBorderClasses = (activeMaze, x, y) => {
        if (!activeMaze) {
            return ''
        } else {
            return activeMaze.maze[5 - y][x].split('').reduce((acc, char, i) => {
                const nextAcc = acc.slice(0);
                if (char === '1') {
                    nextAcc.push(INDEX_POSITION[i]);
                }
                return nextAcc;
            }, []).join(' ');
        }
    }

    render() {

        const validMazes = MAZES.filter(({ calibrationPoints }) => {
            return calibrationPoints.every(({ x, y }) => {
                return this.state.calibrationPoints.some(({ x: x2, y: y2 }) => x === x2 && y === y2);
            });
        });

        const activeMaze = validMazes.length === 1 ? validMazes[0] : undefined;

        return (
            <BaseModule title="Mazes" reset={this.reset} thumbnail={mazes}>
                <h2>Maze</h2>
                <div className="maze">
                    {
                        [0, 1, 2, 3, 4, 5].map((j) => {
                            return [0, 1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={`${i}-${j}`}
                                    onClick={() => this.toggleCalibrationPoint(i, 5 - j)}
                                    className={`cell ${this.getBorderClasses(activeMaze, i, 5 - j)} ${this.findCalibrationPoint(i, 5 - j) >= 0 ? 'calibration-point' : ''}`}
                                >
                                    ○
                                </div>
                            ))
                        })
                    }
                </div>
                {
                    (this.state.calibrationPoints.length < 2) && (
                        <div className="instruction">
                            <h2>Instruction</h2>
                            <p>Select calibration points.</p>
                        </div>

                    )
                }

            </BaseModule>
        )
    }
}
export default Mazes;