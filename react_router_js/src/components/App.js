import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Component_home from './Component_home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';
import DieuHuongURL from '../router/DieuHuongURL';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
        <DieuHuongURL />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
