import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.scss';

import wires from '../Modules/images/on-the-subject-of-wires.svg';
import theButton from '../Modules/images/on-the-subject-of-the-button.svg';
import keypads from '../Modules/images/on-the-subject-of-keypads.svg';
import simonSays from '../Modules/images/on-the-subject-of-simon-says.svg';

const suggestions = [
    { label: 'On the Subject of Wires', to: 'wires', thumbnail: wires },
    { label: 'On the Subject of The Button', to: 'the-button', thumbnail: theButton },
    { label: 'On the Subject of Keypads', to: 'keypads', thumbnail: keypads },
    { label: 'On the Subject of Simon Says', to: 'simon-says', thumbnail: simonSays },
    // { label: 'On the Subject of Who\'s on First', value: 'whos-on-first' },
    // { label: 'On the Subject of Memory', value: 'memory' },
    // { label: 'On the Subject of Morse Code', value: 'morse-code' },
    // { label: 'On the Subject of Complicated Wires', value: 'complicated-wires' },
    // { label: 'On the Subject of Wire Sequences', value: 'wire-sequences' },
    // { label: 'On the Subject of Mazes', value: 'mazes' },
    // { label: 'On the Subject of Passwords', value: 'passwords' },
]

const ModuleLink = withRouter(({ history, label, to, thumbnail }) => (
    <div className="module-link" onClick={() => { history.push(to) }}>
        <img className="thumbnail" src={thumbnail} alt={label} />
        <div className="label">{label}</div>
    </div>
))

class Home extends Component {

    handleChange = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div className="home">
                <h1>Select a Module:</h1>
                <div className="module-list">
                    {
                        suggestions.map((suggestion) => (
                            <ModuleLink key={suggestion.to} {...suggestion} />
                        ))
                    }
                </div>
            </div>
        )
    };

}

export default Home;