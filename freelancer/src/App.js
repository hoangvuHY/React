import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Masthead from './Components/MastHead/Masthead';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footers from './Components/Footer/Footers';
import SectionFotter from './Components/SectionFotter/SectionFotter';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Masthead />
      <Portfolio />
      <About></About>
      <Contact></Contact>
      <Footers></Footers>
      <SectionFotter></SectionFotter>
    </div>
  );
}

export default App;
