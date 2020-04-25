import './App.css';
import React, { Component } from 'react';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
// import { noteData } from './noteData';Cach 1
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  /*Cach 1 
  addData  = (item) => {
    noteData.push(item);
  } */

  showForm = () => {
    if (this.props.isEditApp) {
      return (
        <NoteForm
        //Cach 1
        //  addData = {(item) => this.addData(item)}
        />
      )
    }
  }

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
            {/* <NoteForm
            //Cach 1
            //  addData = {(item) => this.addData(item)}
            /> */}
            {
              this.showForm()
            }
          </div>{/* End row */}
        </div>{/* End container */}

      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEditApp: state.isEdit
  }
  // this.props.isEditApp
}
 

export default connect(mapStateToProps )(App);