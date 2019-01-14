import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import './Memory.css'
import Button from '@material-ui/core/Button';

const POSITION_WORDS = {
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'fourth',
}

const DISPLAY = {
    1: {
        1: { instruction: 'Press the button in the second position', label: undefined, position: 2 },
        2: { instruction: 'Press the button in the second position', label: undefined, position: 2 },
        3: { instruction: 'Press the button in the third position', label: undefined, position: 3 },
        4: { instruction: 'Press the button in the fourth position', label: undefined, position: 4 },
    },
    2: {
        1: { instruction: 'Press the button labeled "4"', label: 4, position: undefined },
        2: { instruction: 'Press the button {}', checkState: { stage: 1, info: 'position' } },
        3: { instruction: 'Press the button in the first position', label: undefined, position: 1 },
        4: { instruction: 'Press the button {}', checkState: { stage: 1, info: 'position' } },
    },
    3: {
        1: { instruction: 'Press the button {}', checkState: { stage: 2, info: 'label' } },
        2: { instruction: 'Press the button {}', checkState: { stage: 1, info: 'label' } },
        3: { instruction: 'Press the button in the third position', label: undefined, position: 3 },
        4: { instruction: 'Press the button labeled, "4"', label: 4, position: undefined },
    },
    4: {
        1: { instruction: 'Press the button {}', checkState: { stage: 1, info: 'position' } },
        2: { instruction: 'Press the button in the first position', label: undefined, position: 1 },
        3: { instruction: 'Press the button {}', checkState: { stage: 2, info: 'position' } },
        4: { instruction: 'Press the button {}', checkState: { stage: 2, info: 'position' } },
    },
    5: {
        1: { instruction: 'Press the button {}', checkState: { stage: 1, info: 'label' } },
        2: { instruction: 'Press the button {}', checkState: { stage: 2, info: 'label' } },
        3: { instruction: 'Press the button {}', checkState: { stage: 4, info: 'label' } },
        4: { instruction: 'Press the button {}', checkState: { stage: 3, info: 'label' } },
    }
}

const defaultState = {
    stage: 1,
    results: [],
    instruction: undefined,
    display: undefined,
}

const Buttons = ({ onClick }) => (

    <div className="buttons">
        {
            [1, 2, 3, 4].map((index) => (
                <Button
                    className={`button ${index}`}
                    variant="outlined"
                    onClick={() => { onClick(index); }}
                    key={index}
                >
                    {index}
                </Button>
            ))
        }
    </div>
)

class Memory extends Component {

    state = defaultState;

    resetState = () => {
        this.setState({
            ...defaultState
        });
    }

    setStage = (stage) => {
        this.setState({ stage });
    }

    setInstruction = (instruction) => {
        this.setState({ instruction });
    }

    processDisplay = (display) => {
        const step = DISPLAY[this.state.stage][display];
        if (step['checkState']) {
            const { stage, info } = step['checkState'];
            console.log({ results: this.state.results, info, stage })
            const value = this.state.results[stage - 1][info]
            const message = info === 'position' ?
                `Press the button in the ${POSITION_WORDS[value]} position` :
                `Press the button labeled "${value}"`;
            this.setState({ display, instruction: message })
        } else {
            this.setState({ display, instruction: step['instruction'] });
        }
    }

    resolveState = (step) => {
        const { stage, info } = step;
        const value = this.state.results[stage - 1][info];
        return {
            label: info === 'label' ? value : undefined,
            position: info === 'position' ? value : undefined,
        };
    }

    processInput = (input) => {
        const step = DISPLAY[this.state.stage][this.state.display];
        const { label, position } = step['checkState'] ? this.resolveState(step['checkState']) : step;

        this.setState((prevState) => {
            const result = { label: label ? label : input, position: position ? position : input };
            const results = prevState.results.slice(0);
            results.push(result);
            return {
                stage: prevState.stage + 1,
                display: undefined,
                instruction: undefined,
                results,
            }
        });

    }

    seek = () => {
        const step = DISPLAY[this.state.stage][this.state.display];
        if (step.checkState) {
            const { info } = step.checkState
            return info === 'position' ? 'What does the label read?' : 'Which position was pressed?';
        } else {
            return step['label'] === undefined ? 'What does the label read?' : 'Which position was pressed?';
        }
    }

    render() {
        return (
            <div className="header memory">
                <h1><HomeButton /> On the Subject of Memory</h1>
                <h2>Stage {this.state.stage}</h2>
                {this.state.stage === 6 && (<div className="complete">Complete!</div>)}
                {
                    this.state.stage < 6 ? (
                        !this.state.display ? (
                            <div className="display">
                                <h3>Display:</h3>
                                <Buttons onClick={this.processDisplay} />
                            </div>
                        ) : (
                                <div className="seek">
                                    <div className="instruction">{this.state.instruction}</div>
                                    <h3>{this.seek()}</h3>
                                    <Buttons onClick={this.processInput} />
                                </div>
                            )
                    ) : null
                }
                <Button onClick={this.resetState}>Reset</Button>
            </div>
        )
    }
}

export default Memory;