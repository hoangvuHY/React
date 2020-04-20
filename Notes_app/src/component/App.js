import './App.css';
import React, { Component } from 'react';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
// import { noteData } from './noteData';Cach 1

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  /*Cach 1 
  addData  = (item) => {
    noteData.push(item);
  } */


  render() {
    /*     console.log(
          noteData.once('value').then((snapshot) => {
            console.log(snapshot.val());
          })
        ); */
    return (

      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <NoteList />
            <NoteForm
            //Cach 1
            //  addData = {(item) => this.addData(item)}
            />
          </div>{/* End row */}
        </div>{/* End container */}

      </div>
    );
  }
}

export default App;