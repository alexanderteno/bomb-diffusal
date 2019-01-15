import React, { Component } from 'react';
import './BaseModule.scss';
import { Button, Icon } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const HomeButton = withRouter(({ history }) => (
    <Button
        type='button'
        onClick={() => { history.push('/') }}
    >
        <Icon fontSize="large">home</Icon>
    </Button>
))

const processTitle = (title) => {
    return title.toLowerCase().replace(' ', '-');
}

class BaseModule extends Component {

    render() {
        return (
            <div className={`base-module ${processTitle(this.props.title)}`}>
                <div className="header">
                    <HomeButton />
                    <h1 className="title">{`On the Subject of ${this.props.title}`}</h1>
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