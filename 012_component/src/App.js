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
      <Content tieude="Cách sử dụng props bằng Class" vitri1="order-lg-2" linkanh='img/01.jpg' trichdan='Irure tortor hac mollit repellendus hymenaeos facilisis eveniet. Fringilla vel eget officiis, interdum dignissimos consequuntur ab. Eiusmod ratione, facere commodi odio quae, vivamus? Tenetur, euismod condimentum porta, vitae curabitur class, hymenaeos aliqua! Accumsan! Dignissimos! Nascetur tempore, aut eius sapiente euismod? Incidunt, soluta! Vivamus excepturi porro, nec, mollitia lobortis reprehenderit, hic mauris explicabo blandit hendrerit nascetur orci eligendi litora ipsa accusamus impedit dignissimos, fugit nostra, dignissimos dis aliquid montes iaculis quasi. Lorem varius curae hendrerit arcu do qui conubia, earum iure! Diam corporis eligendi quas? Rem do curae culpa mauris lectus, provident quidem, magni purus asperiores fermentum ridiculus. Elit quos totam.' ></Content>
      <Content tieude="Tin Tức số 2" linkanh='img/02.jpg' trichdan='Irure tortor hac mollit repellendus hymenaeos facilisis eveniet. Fringilla vel eget officiis, interdum dignissimos consequuntur ab. Eiusmod ratione, facere commodi odio quae, vivamus? Tenetur, euismod condimentum porta, vitae curabitur class, hymenaeos aliqua! Accumsan! Dignissimos! Nascetur tempore, aut eius sapiente euismod? Incidunt, soluta! Vivamus excepturi porro, nec, mollitia lobortis reprehenderit, hic mauris explicabo blandit hendrerit nascetur orci eligendi litora ipsa accusamus impedit dignissimos, fugit nostra, dignissimos dis aliquid montes iaculis quasi. Lorem varius curae hendrerit arcu do qui conubia, earum iure! Diam corporis eligendi quas? Rem do curae culpa mauris lectus, provident quidem, magni purus asperiores fermentum ridiculus. Elit quos totam.' ></Content>
      <Content tieude="Tin Tức số 3" vitri1="order-lg-2" linkanh='img/03.jpg' trichdan='Irure tortor hac mollit repellendus hymenaeos facilisis eveniet. Fringilla vel eget officiis, interdum dignissimos consequuntur ab. Eiusmod ratione, facere commodi odio quae, vivamus? Tenetur, euismod condimentum porta, vitae curabitur class, hymenaeos aliqua! Accumsan! Dignissimos! Nascetur tempore, aut eius sapiente euismod? Incidunt, soluta! Vivamus excepturi porro, nec, mollitia lobortis reprehenderit, hic mauris explicabo blandit hendrerit nascetur orci eligendi litora ipsa accusamus impedit dignissimos, fugit nostra, dignissimos dis aliquid montes iaculis quasi. Lorem varius curae hendrerit arcu do qui conubia, earum iure! Diam corporis eligendi quas? Rem do curae culpa mauris lectus, provident quidem, magni purus asperiores fermentum ridiculus. Elit quos totam.'></Content>
      <Fotter />
    </div>
  );
}

export default App;
