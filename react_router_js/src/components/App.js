import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Component_home from './Component_home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {/* <Component_home></Component_home> */}
      {/* <NewsDetail></NewsDetail> */}
      <Contact />
      {/* <News></News> */}
      <Footer />
    </div>
  );
}

export default App;
