import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Alert from "./components/Alert";
import AlertState from "./components/alert/AlertState";
import GithubState from "./components/context/GithubState";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={UserProfile} />
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
