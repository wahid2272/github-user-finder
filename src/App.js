import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Alert from './components/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type }});

    setTimeout(() => this.setState({ alert: null }), 3000)
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert}/>
          <SearchBar
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <AllUsers loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
