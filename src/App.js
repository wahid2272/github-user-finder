import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <SearchBar
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <AllUsers loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
