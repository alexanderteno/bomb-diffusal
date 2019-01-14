import React, { Component } from 'react';
import AppRouter from './AppRouter/AppRouter';
import Knobs from './NeedyModules/Knobs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Knobs/>
        <AppRouter />
      </div>
    );
  }
}

export default App;
