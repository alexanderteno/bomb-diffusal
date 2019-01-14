import React from 'react';
import './Question.css';

const Question = ({ condition, question, options, onChoice, onInstruction }) => {
    return condition ? (
        <div className="question">
            <h2 className="real-question">
                {question}
            </h2>
            <div className="options">
                {options.map((option) => (
                    <div
                        className="option"
                        key={option.label}
                        onClick={
                            () => {
                                if (option.instruction) {
                                    onInstruction(option.instruction);
                                } else {
                                    onChoice(option.value);
                                }
                            }
                        }
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    ) : null;
}

export default Question;