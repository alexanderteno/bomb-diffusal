import React, { Component } from 'react';
import Knobs from './NeedyModules/Knobs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SerialNumberEven from './BombWidgets/SerialNumberEven';
import LitIndicatorCAR from './Widgets/LitIndicatorCAR';
import LitIndicatorFRK from './Widgets/LitIndicatorFRK';
import NumberOfBatteries from './Widgets/NumberOfBatteries';
import Home from './Home/Home';
import Wires from './Modules/Wires/Wires';
import TheButton from './Modules/TheButton/TheButton';
import './App.scss';
import { Button } from '@material-ui/core';
import Keypads from './Modules/Keypads/Keypads';
import SimonSays from './Modules/SimonSays/SimonSays';

const defaultState = {
  serialNumberEven: undefined,
  litIndicatorCAR: undefined,
  litIndicatorFRK: undefined,
};

class App extends Component {

  state = defaultState;

  reset = () => {
    this.setState(defaultState);
  }

  handleSerialNumberChange = (event) => {
    const { value } = event.target;
    this.setState({ serialNumberEven: value === 'even' ? true : false });
  }

  handleLitIndicatorCARChange = (event) => {
    const { value } = event.target;
    this.setState({ litIndicatorCAR: value === 'yes' ? true : false });
  }

  handleLitIndicatorFRKChange = (event) => {
    const { value } = event.target;
    this.setState({ litIndicatorFRK: value === 'yes' ? true : false });
  }

  handleNumberOfBatteriesChange = (event) => {
    const value = parseInt(event.target.value);
    const numberOfBatteries = !isNaN(value) ? value : undefined;
    this.setState({ numberOfBatteries });
  }

  render() {

    const props = Object.assign({}, this.state);

    return (
      <div className="app">
        <Knobs />
        <div className="bomb-information">
          <div className="header">
            <h1>Bomb Information</h1>
            <Button onClick={this.reset}>refresh</Button>
          </div>
          <div className="widgets">
            <SerialNumberEven value={this.state.lastDigitSerialNumberEven} handleChange={this.handleSerialNumberChange} />
            <LitIndicatorCAR value={this.state.litIndicatorCAR} handleChange={this.handleLitIndicatorCARChange} />
            <LitIndicatorFRK value={this.state.litIndicatorFRK} handleChange={this.handleLitIndicatorFRKChange} />
            <NumberOfBatteries value={this.state.numberOfBatteries} handleChange={this.handleNumberOfBatteriesChange} />
          </div>
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/wires" render={() => (<Wires {...props} />)} />
            <Route path="/the-button" render={() => (<TheButton {...props} />)} />
            <Route path="/keypads" render={() => (<Keypads {...props} />)} />
            <Route path="/simon-says" render={() => (<SimonSays {...props} />)} />
            {/* <Route path="/whos-on-first" component={WhosOnFirst} /> */}
            {/* <Route path="/memory" component={Memory} /> */}
            {/* <Route path="/morse-code" component={MorseCode} /> */}
            {/* <Route path="/complicated-wires" component={ComplicatedWires} /> */}
            {/* <Route path="/wire-sequences" component={WireSequences} /> */}
            {/* <Route path="/mazes" component={Mazes} /> */}
            {/* <Route path="/passwords" component={Passwords} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
