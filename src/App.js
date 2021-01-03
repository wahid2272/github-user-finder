import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <AllUsers loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
