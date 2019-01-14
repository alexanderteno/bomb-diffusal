import React, { Component } from 'react';
import Question from '../Question/Question';
import HomeButton from '../HomeButton/HomeButton';

const HOLD_BUTTON = 'hold-button';
const PRESS_RELEASE = 'press-release';

class TheButton extends Component {

    state = {
        stage: 0,
        instruction: undefined,
    }

    setStage = (stage) => {
        this.setState({ stage });
    }

    setInstruction = (instruction) => {
        this.setState({ instruction });
    }

    render() {
        return (
            <div className="header the-button">
                <h1><HomeButton /> On the Subject of The Button</h1>
                {
                    !this.state.instruction && (
                        <div className="questions">
                            <Question
                                condition={this.state.stage === 0}
                                question="Is the button blue and says Abort?"
                                options={[{ label: "Yes", instruction: HOLD_BUTTON }, { label: "No", value: 1 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.stage === 1}
                                question="Is there more than one battery on the bomb and it says 'Detonate'?"
                                options={[{ label: "Yes", instruction: PRESS_RELEASE }, { label: "No", value: 2 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.stage === 2}
                                question="Is the button white with a lit CAR indicator?"
                                options={[{ label: "Yes", instruction: HOLD_BUTTON }, { label: "No", value: 3 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.stage === 3}
                                question="Are there more than 2 batteries with a lit FRK indicator?"
                                options={[{ label: "Yes", instruction: PRESS_RELEASE }, { label: "No", value: 4 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.stage === 4}
                                question="Is the button yellow?"
                                options={[{ label: "Yes", instruction: HOLD_BUTTON }, { label: "No", value: 5 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.stage === 5}
                                question="Is the button red with the word 'Hold'?"
                                options={[{ label: "Yes", instruction: PRESS_RELEASE }, { label: "No", instruction: HOLD_BUTTON }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                        </div>
                    )
                }
                {
                    this.state.instruction && <div className="instruction">
                        {
                            this.state.instruction === PRESS_RELEASE ?
                                (<div>Press and immediately release.</div>) :
                                (
                                    <div>
                                        <ul>
                                            <li><span style={{ fontWeight: 'bold' }}>Blue strip:</span> Release on a 4 in any position</li>
                                            <li><span style={{ fontWeight: 'bold' }}>White strip:</span> Release on a 1 in any position</li>
                                            <li><span style={{ fontWeight: 'bold' }}>Yellow strip:</span> Release on a 5 in any position</li>
                                            <li><span style={{ fontWeight: 'bold' }}>Any other color strip:</span> Release on a 1 in any position</li>
                                        </ul>
                                    </div>
                                )

                        }
                    </div>
                }
            </div>
        )
    }

}

export default TheButton;