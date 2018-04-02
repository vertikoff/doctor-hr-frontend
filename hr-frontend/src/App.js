import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput.js';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TextInput />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
