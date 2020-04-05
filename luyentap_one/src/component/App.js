import './../css/App.css';
import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Fotter from './Fotter';
import Router_Dom from '../router/Router_Dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() {
    return (

      <Router>
        <Nav />
        <Router_Dom />
        <Fotter />
      </Router>
    );
  }
}

export default App;
