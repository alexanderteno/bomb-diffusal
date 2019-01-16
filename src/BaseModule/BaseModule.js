import React, { Component } from 'react';
import { Button, Icon } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import './BaseModule.scss';

const HomeButton = withRouter(({ history, buttonRef }) => (
    <Button
        type='button'
        onClick={() => { history.push('/') }}
        buttonRef={buttonRef}
    >
        <Icon fontSize="large">home</Icon>
    </Button>
))

const processTitle = (title) => {
    return title.toLowerCase()
        .split('\'').join('')
        .split(' ').join('-');
}

class BaseModule extends Component {

    buttonRef;

    componentDidMount() {
        if (!this.props.sticky) {
            document.addEventListener('keydown', this.closeModule);
        }
    }

    componentWillUnmount() {
        if (!this.props.sticky) {
            document.removeEventListener('keydown', this.closeModule);
        }
    }

    closeModule = (event) => {
        if (event.key === "Escape") {
            this.buttonRef.click();
        }
    }

    render() {
        return (
            <div className={`base-module ${processTitle(this.props.title)}${this.props.sticky ? ' sticky' : ''}`}>
                <div className="header">
                    {
                        !this.props.sticky && (<HomeButton buttonRef={(buttonRef) => { this.buttonRef = buttonRef }} />)
                    }
                    <h1 className="title">On the Subject of<br />{this.props.title}</h1>
                    <div className="thumbnail"><img src={this.props.thumbnail} alt={this.props.title} /></div>
                </div>
                <hr className="divider" />
                <div className="content">
                    {this.props.children}
                </div>
                <hr className="divider" />
                <div className="footer">
                    <Button variant="outlined" onClick={this.props.reset}>Reset</Button>
                </div>
            </div>
        )

    }

}

export default BaseModule;