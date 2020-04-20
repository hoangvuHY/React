import logo from './logo.svg';
import './App.css';
import { firebaseConnect } from './firebaseConnect';
import React, { Component } from 'react';
import * as firebase from 'firebase'



var connectData = firebase.database().ref('dataForNote');

class App extends Component {

  pushData = () => {
    connectData.push({
      title: "Ghi chu so 3",
      content: "Noi dung ghi chu so 3"
    })
    console.log("Ban vua them du lieu vao firebase");
  }
  deleteData = (id) => {
    connectData.child(id).remove();
    console.log("Da xoa xong: " + id);
  }

  render() {
    console.log(firebaseConnect);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>




        </header>

        <button onClick={this.pushData.bind(this)}>Click để thêm mới bằng hàm push</button>
        <hr/>
        <button onClick={(id) => this.deleteData('-M5MB0fl9spMZmVAftoz')}>Click để xoa</button>
      </div>
    );
  }
}

export default App;