import React from 'react';
import logo from './logo.svg';
import './App.css';
function One() {
  return (<div>Cách số 1
    <div>Cách số 1</div>
    <div>So 3</div>
  </div>
  );
};

var Two = function () {
  return (
    <div>
      <h2>Cách sô 2</h2>
    </div>
  )
};

var Three = () => (
  <div>
    <h2>Cách sô 3</h2>
  </div>
);

/* class Four extends Component {
  render() {
    return (
      <div>
        <button>React JS so 4</button>
      </div>
    );
  }
} */

class Five extends React.Component {
  render() {
    return (
      <div>
        <h2>Cách bằng Class</h2>
      </div>
    );
  }
}





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ứng dụng đầu tiên</h1>
        <p>
          <One></One>
          <One />
          <Two />
          <Three />
          <Five />
        </p>
      </header>
    </div>
  );
}

export default App;

