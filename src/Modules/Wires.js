import React, { Component } from 'react';
import Question from '../Question/Question';
import HomeButton from '../HomeButton/HomeButton';

class Wires extends Component {

    state = {
        numberOfWires: undefined,
        stage: 0,
        instruction: undefined,
    }

    setNumberOfWires = (numberOfWires) => {
        this.setState({ numberOfWires });
    }

    setStage = (stage) => {
        this.setState({ stage });
    }

    setInstruction = (instruction) => {
        this.setState({ instruction });
    }

    render() {
        return (
            <div className="header wires">
                <h1><HomeButton /> On the Subject of Wires</h1>
                {
                    !this.state.instruction && (
                        <div className="questions">
                            <Question
                                condition={!this.state.numberOfWires}
                                question="How many wires?"
                                options={[{ label: "3", value: 3 }, { label: "4", value: 4 }, { label: "5", value: 5 }, { label: "6", value: 6 }]}
                                onChoice={this.setNumberOfWires}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 3 && this.state.stage === 0}
                                question="Are there any red wires?"
                                options={[{ label: "Yes", value: 1 }, { label: "No", instruction: "Cut the second wire." }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 3 && this.state.stage === 1}
                                question="Is the last wire white?"
                                options={[{ label: "Yes", instruction: "Cut the last wire." }, { label: "No", value: 2 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 3 && this.state.stage === 2}
                                question="Is there more than one blue wire?"
                                options={[{ label: "Yes", instruction: "Cut the last blue wire." }, { label: "No", instruction: "Cut the last wire." }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 4 && this.state.stage === 0}
                                question="Is there more than one red wire and the last digit of the serial number is odd?"
                                options={[{ label: "Yes", instruction: "Cut the last red wire." }, { label: "No", value: 1 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 4 && this.state.stage === 1}
                                question="Is the last wire yellow with no red wires?"
                                options={[{ label: "Yes", instruction: "Cut the first wire." }, { label: "No", value: 2 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 4 && this.state.stage === 2}
                                question="Is there exactly one blue wire?"
                                options={[{ label: "Yes", instruction: "Cut the first wire." }, { label: "No", value: 3 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 4 && this.state.stage === 3}
                                question="Is there more than one yellow wire?"
                                options={[{ label: "Yes", instruction: "Cut the last wire." }, { label: "No", instruction: "Cut the second wire." }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 5 && this.state.stage === 0}
                                question="Is the last wire black and the last digit of the serial number odd?"
                                options={[{ label: "Yes", instruction: "Cut the fourth wire." }, { label: "No", value: 1 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 5 && this.state.stage === 1}
                                question="Is there exactly one red wire and more than one yellow wire?"
                                options={[{ label: "Yes", instruction: "Cut the first wire." }, { label: "No", value: 2 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 5 && this.state.stage === 2}
                                question="Are there any black wires?"
                                options={[{ label: "Yes", instruction: "Cut the first wire." }, { label: "No", instruction: "Cut the second wire." }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 6 && this.state.stage === 0}
                                question="Is there no yellow wires and the last digit of the serial number is odd?"
                                options={[{ label: "Yes", instruction: "Cut the third wire." }, { label: "No", value: 1 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 6 && this.state.stage === 1}
                                question="Is there is exactly one yellow wire and more than one white wire?"
                                options={[{ label: "Yes", instruction: "Cut the fourth wire." }, { label: "No", value: 2 }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                            <Question
                                condition={this.state.numberOfWires === 6 && this.state.stage === 2}
                                question="Are there any red wires?"
                                options={[{ label: "Yes", instruction: "Cut the fourth wire." }, { label: "No", instruction: "Cut the last wire." }]}
                                onChoice={this.setStage}
                                onInstruction={this.setInstruction}
                            />
                        </div>
                    )
                }
                {
                    this.state.instruction && <div className="instruction">{this.state.instruction}</div>
                }
            </div>
        )
    }

}

export default Wires;