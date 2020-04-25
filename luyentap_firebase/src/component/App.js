import './../App.css';
import Nav from './Nav';
import Accodion from './Accodion';
import NoteAdd from './NoteAdd';
// import { noteData } from './firebase'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class App extends Component {
  /* Them vao database  
    getNote = (item) => {
     alert("Them vao thanh cong");
     noteData.push(item);
   } */
   checkDisplay  = () => {
     if(this.props.editStatus){
       return(

        <NoteAdd
        // Them vao database
        // getNote={(item) => this.getNote(item)}
        />
       )
     }
   }

  render() {
    return (
      <div className="App " >
        <Nav />
        <div className="container">
          <div className="row">
            <Accodion

            />
            {
              this.checkDisplay()
            }
          </div>{/* End row */}
        </div>{/* End container */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.editStatus
  }
}
export default connect(mapStateToProps)(App);
// export default App;