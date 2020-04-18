import './App.css';
import React, { Component } from 'react';

class App extends Component {

  render() {
    var redux = require('redux');
    var oldState = {
      num: ['manhinh', 'chuot', 'banphim'],
      editStatus: true
    }

    var reducer1 = (state = oldState, action) => {
      switch (action.type) {
        case 'CHANGE_EDIT_STATUS':
          return { ...state, editStatus: !state.editStatus };
        // break;

        case 'ADD_NEW':
          return { ...state, num: [...state.num, action.newItem] };
        // break;

        case 'DELETE':
          return { ...state, num: [...state.num.filter((val, key) => key !== action.index)] };
        // break;

        default: return state;
        // break;
      }


    }


    var store1 = redux.createStore(reducer1);

    store1.subscribe(() => {
      console.log('state thay doi');
      console.log(store1.getState());
    })

    // store1.subscribe

    store1.dispatch({
      type: "CHANGE_EDIT_STATUS"
    });

    store1.dispatch({
      type: "ADD_NEW",
      newItem: "tainghe"
    });

    store1.dispatch({
      type: 'DELETE',
      index: 0
    })

    return (
      <div>

      </div>
    );
  }
}

export default App;