import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <DieuHuongURL />
      <Footer />
    </Router>
  );
}

export default App;
