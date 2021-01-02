import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <AllUsers/>
        </div>
      </div>
    );
  }
}

export default App;
