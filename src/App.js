import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
/* Bomb Information */
import SerialNumberEven from './Widgets/SerialNumberEven';
import SerialNumberVowel from './Widgets/SerialNumberVowel';
import LitIndicatorCAR from './Widgets/LitIndicatorCAR';
import LitIndicatorFRK from './Widgets/LitIndicatorFRK';
import NumberOfBatteries from './Widgets/NumberOfBatteries';
import NumberOfStrikes from './Widgets/NumberOfStrikes';
import ParallelPort from './Widgets/ParallelPort';
/* Needy Modules */
import Knobs from './NeedyModules/Knobs';
/* Modules */
import Home from './Home/Home';
import Wires from './Modules/Wires/Wires';
import TheButton from './Modules/TheButton/TheButton';
import Keypads from './Modules/Keypads/Keypads';
import SimonSays from './Modules/SimonSays/SimonSays';
import WhosOnFirst from './Modules/WhosOnFirst/WhosOnFirst';
import Memory from './Modules/Memory/Memory';
import MorseCode from './Modules/MorseCode/MorseCode';
import ComplicatedWires from './Modules/ComplicatedWires/ComplicatedWires';
import WireSequences from './Modules/WireSequences/WireSequences';
import Mazes from './Modules/Mazes';
import Passwords from './Modules/Passwords';
import './App.scss';

const defaultState = {
  serialNumberEven: undefined,
  serialNumberVowel: undefined,
  litIndicatorCAR: undefined,
  litIndicatorFRK: undefined,
  numberOfBatteries: undefined,
  numberOfStrikes: 0,
  parallelPort: undefined,
};

class App extends Component {

  state = defaultState;

  reset = () => {
    this.setState(defaultState);
  }

  handleNumberOfStrikes = (event) => {
    const { value } = event.target;
    this.setState({ numberOfStrikes: value });
  }

  handleSerialNumberEven = (event) => {
    const { value } = event.target;
    this.setState({ serialNumberEven: value === 'even' ? true : false });
  }

  handleSerialNumberVowel = (event) => {
    const { value } = event.target;
    this.setState({ serialNumberVowel: value === 'yes' ? true : false });
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

  handleParallelPortChange = (event) => {
    const { value } = event.target;
    this.setState({ parallelPort: value === 'yes' ? true : false });
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
            <NumberOfStrikes value={this.state.numberOfStrikes} handleChange={this.handleNumberOfStrikes} />
            <SerialNumberEven value={this.state.lastDigitSerialNumberEven} handleChange={this.handleSerialNumberEven} />
            <SerialNumberVowel value={this.state.serialNumberVowel} handleChange={this.handleSerialNumberVowel} />
            <LitIndicatorCAR value={this.state.litIndicatorCAR} handleChange={this.handleLitIndicatorCARChange} />
            <LitIndicatorFRK value={this.state.litIndicatorFRK} handleChange={this.handleLitIndicatorFRKChange} />
            <NumberOfBatteries value={this.state.numberOfBatteries} handleChange={this.handleNumberOfBatteriesChange} />
            <ParallelPort value={this.state.parallelPort} handleChange={this.handleParallelPortChange} />
          </div>
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/wires" render={() => (<Wires {...props} />)} />
            <Route path="/the-button" render={() => (<TheButton {...props} />)} />
            <Route path="/keypads" render={() => (<Keypads {...props} />)} />
            <Route path="/simon-says" render={() => (<SimonSays {...props} />)} />
            <Route path="/whos-on-first" component={WhosOnFirst} />
            <Route path="/memory" component={Memory} />
            <Route path="/morse-code" component={MorseCode} />
            <Route path="/complicated-wires" render={() => (<ComplicatedWires {...props} />)} />
            <Route path="/wire-sequences" component={WireSequences} />
            <Route path="/mazes" component={Mazes} />
            <Route path="/passwords" component={Passwords} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
