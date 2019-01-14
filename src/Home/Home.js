import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const suggestions = [
    { label: 'On the Subject of Wires', value: 'wires' },
    { label: 'On the Subject of The Button', value: 'the-button' },
    { label: 'On the Subject of Keypads', value: 'keypads' },
    { label: 'On the Subject of Simon Says', value: 'simon-says' },
    { label: 'On the Subject of Who\'s on First', value: 'whos-on-first' },
    { label: 'On the Subject of Memory', value: 'memory' },
    { label: 'On the Subject of Morse Code', value: 'morse-code' },
    { label: 'On the Subject of Complicated Wires', value: 'complicated-wires' },
    { label: 'On the Subject of Wire Sequences', value: 'wire-sequences' },
    { label: 'On the Subject of Mazes', value: 'mazes' },
    { label: 'On the Subject of Passwords', value: 'passwords' },
]

class Home extends Component {

    handleChange = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div className="home">
                <h1>Select a Module:</h1>
                <div className="module-list">
                    {suggestions.map((suggestion) => (
                        <Link to={`/${suggestion.value}`} key={suggestion.value}>{suggestion.label}</Link>
                    ))}
                </div>
            </div>
        )
    };

}

export default Home;