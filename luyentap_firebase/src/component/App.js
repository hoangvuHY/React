import './../App.css';
import Nav from './Nav';
import Accodion from './Accodion';
import NoteAdd from './NoteAdd';
// import { noteData } from './firebase'
import React, { Component } from 'react'

class App extends Component {
  /* Them vao database  
    getNote = (item) => {
     alert("Them vao thanh cong");
     noteData.push(item);
   } */


  render() {
    return (
      <div className="App " >
        <Nav />
        <div className="container">
          <div className="row">
            <Accodion

            />
            <NoteAdd
            // Them vao database
            // getNote={(item) => this.getNote(item)}
            />
          </div>{/* End row */}
        </div>{/* End container */}
      </div>
    );
  }
}


export default App;