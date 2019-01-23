import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/feed" exact component={Feed} />
            <Route path="/settings" exact component={Settings} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
