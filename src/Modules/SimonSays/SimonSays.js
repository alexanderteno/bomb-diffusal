import React, { Component } from 'react';
import Question from '../../Question/Question';
import './SimonSays.scss';
import BaseModule from '../../BaseModule/BaseModule';

import simonSays from '../images/on-the-subject-of-simon-says.svg';

const VOWEL = 'vowel';
const NO_VOWEL = 'no-vowel';

const DIRECTIONS = {
    [VOWEL]: {
        0: ['Blue', 'Red', 'Yellow', 'Green'],
        1: ['Yellow', 'Green', 'Blue', 'Red'],
        2: ['Green', 'Red', 'Yellow', 'Blue'],
    },
    [NO_VOWEL]: {
        0: ['Blue', 'Yellow', 'Green', 'Red'],
        1: ['Red', 'Blue', 'Yellow', 'Green'],
        2: ['Yellow', 'Green', 'Blue', 'Red'],
    }
}

const defaultState = {
    instruction: undefined,
    strikes: undefined,
}

class SimonSays extends Component {

    state = defaultState;

    reset = () => {
        this.setState(defaultState);
    }

    setStrikes = (strikes) => {
        this.setState({ strikes });
    }

    setInstruction = (instruction) => {
        this.setState({ instruction });
    }

    render() {
        return (
            <BaseModule title="Simon Says" thumbnail={simonSays} reset={this.reset}>
                <div className="questions-container">
                    <Question
                        condition={this.state.instruction === undefined}
                        question="Does the serial number contains a vowel?"
                        options={[{ label: "Yes", instruction: VOWEL }, { label: "No", instruction: NO_VOWEL }]}
                        onChoice={this.setStage}
                        onInstruction={this.setInstruction}
                    />
                    <Question
                        condition={this.state.strikes === undefined}
                        question="How many strikes?"
                        options={[{ label: "No Strikes", value: 0 }, { label: "1 Strike", value: 1 }, { label: "2 Strikes", value: 2 }]}
                        onChoice={this.setStrikes}
                        onInstruction={this.setInstruction}
                    />
                </div>
                {
                    this.state.strikes !== undefined && this.state.instruction !== undefined ?
                        (

                            <table className="solution-table">
                                <thead>
                                    <tr>
                                        <th>Red Flash</th>
                                        <th>Blue Flash</th>
                                        <th>Green Flash</th>
                                        <th>Yellow Flash</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            DIRECTIONS[this.state.instruction][this.state.strikes].map((color) => (<td key={color}>{color}</td>))
                                        }
                                    </tr>
                                </tbody>
                            </table>

                        ) : null
                }
            </BaseModule>
        )
    }
}

export default SimonSays