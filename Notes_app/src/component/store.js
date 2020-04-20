import {  noteData } from './noteData';

var redux = require('redux');

const noteInitialState = {
    testConnect: "Test Thoi"
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'Add_Data':
            // console.log("Ket noi thanh cong addData, bien nhan vao la 1 action.getItem" + action.getItem);
            noteData.push(action.getItem);
            return state

        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;   