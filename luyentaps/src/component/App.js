import React from 'react';
import './../App.css';
import RouterDom from '../router/RouterDom';
import Nav from './Nav';
import Footer from './Footer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() { 
  return (
    <Router>
      <Nav />
      <RouterDom />
      <Footer />
    </Router>
  );
}

export default App;
