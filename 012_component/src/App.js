import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/topmenu/TopMenu';
import Header from './Component/TopMenu/Header/Header';
import Content from './Component/Content/Content';
import Fotter from './Component/Fotter/Fotter';

function App() {
  return (
    <div className="_012">
      <TopMenu />
      <Header></Header>
      <Content tieude="Cách sử dụng props bằng Class" linkanh='img/01.jpg' trichdan='Irure tortor hac mol    it arcu do qui    .' ></Content>
      <Content tieude="Tin Tức số 2" linkanh='img/02.jpg' trichdan='I it quos totam.' ></Content>
      <Content tieude="Tin Tức số 3" linkanh='img/03.jpg' trichdan='I curae culp ri '></Content>

      <Fotter />
    </div>
  );
}

export default App;
