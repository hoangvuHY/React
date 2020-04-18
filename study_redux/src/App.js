import './App.css';
import React, { Component } from 'react';
import News from './News';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
class App extends Component {
  //this.props.dulieu

  render() {
    return (
      <div>
        {
          this.props.dulieu
        }
        <News />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }

}
export default connect(mapStateToProps)(App);
