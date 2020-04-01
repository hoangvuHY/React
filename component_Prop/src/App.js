import React from 'react';
import logo from './logo.svg';
import './App.css';

//Dùng props cách 1
function NumberOne(props) {
  return (
    <div className="col-sm-6">
      <div className="card">
        <img className="card-img-top" src={props.linkanh} alt="" />
        <div className="card-body">
          <h4 className="card-title">{props.tieude}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>
  );
};
/* function NumberTwo(props) {
return (
<div class="col-sm-6">
  <div class="card">
    <img class="card-img-top" src="https://loremflickr.com/150/70" alt="" />
    <div class="card-body">
      <h4 class="card-title">Sản phầm 2</h4>
      <p class="card-text">Text</p>
    </div>
  </div>
</div>
);
}; */

//Cách 2: Sử dụng class để định nghĩa props

class NumberTwo extends React.Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={this.props.linkanh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{this.props.tieude}</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  }
}


//Định Nghĩa JSX
const a1 = "HoangVu";
class App1 extends React.Component {
  render() {
    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src="https://loremflickr.com/150/70/brazil,rio" alt="" />
        <div className="card-body">
          <h4 className="card-title">Hoang Tuan Vu</h4>
          <p className="card-text">Heheheheheheehehehehh</p>

        </div>
      </div>
    );
  }
}


//Định nghĩa Map
const so = [12, 23, 4, 56, 5, 101, 2020];
const so2 = so.map((x) => x * 2 + " ,"); // X là phần tử trong mảng
const so3 = so.map((x   ) => (
  <li>
    So : {x}
  </li>
));

class APP2 extends React.Component {
  render() {
    return (
      <div>
        {so3}
      </div>
    );
  }
}


function App() {
  return (
    <div class="App">
      <header class="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <APP2 />

      </header>

      <div className='container-fluid'>
        <div className='row'>
          <NumberOne tieude=" Sản phầm số 1" linkanh='https://loremflickr.com/g/150/70/paris' />
          <NumberOne tieude=" Sản phầm số 2" linkanh='https://loremflickr.com/150/70/brazil,rio' />
          <NumberTwo tieude="Sử dụng bằng Class" linkanh="https://loremflickr.com/150/70" />
          <NumberTwo tieude="Sử dụng bằng Class" linkanh="https://loremflickr.com/150/70" />
          <NumberTwo tieude="Sử dụng bằng Class" linkanh="https://loremflickr.com/150/70" />
        </div>
      </div>
    </div>
  );
}

export default App;