import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import Question from '../Question/Question';
import './SimonSays.css';

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

class SimonSays extends Component {

    state = {
        instruction: undefined,
        strikes: undefined,
    }

    setStrikes = (strikes) => {
        this.setState({ strikes });
    }

    setInstruction = (instruction) => {
        this.setState({ instruction });
    }

    render() {



        return (
            <div className="header simon-says">
                <h1><HomeButton /> On the Subject of Simon Says</h1>
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
            </div>
        )
    }
}

export default SimonSays