import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import CharacterSheet from './components/CharacterSheet/CharacterSheet';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/home" component={Profile}/>
          <Route exact path="/sheet" component={CharacterSheet} />
        </Switch>
      </Router>
    )
  }
}
