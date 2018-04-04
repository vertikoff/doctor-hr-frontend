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
          <img src="https://media2.giphy.com/media/8jidnMiqa1r32/giphy.gif" className="App-logo" alt="logo" />
          <h1 className="App-title">BME 590S HR Dashboard</h1>
        </header>
        <TextInput />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
