import numReducer from "./Reducers/numReducer";
import editStatusReducer from "./Reducers/editStatusReducer";

var redux = require("redux")
/* var oldState = {
    num: ['manhinh ', 'chuot  ', 'banphim '],
    editStatus: true
} */
/* var reducer1 = (state = oldState, action) => {
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


} */


/* 
const numInitialState = ['manhinh ', 'chuot  ', 'banphim '];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {

        case 'ADD_NEW':
            return [...state, action.newItem];
        // break;

        case 'DELETE':
            return [...state.filter((val, key) => key !== action.index)];
        // break;

        default:
            return state
    }
}
 */
/* const editStatusReducerInitialState = false;
const editStatusReducer = (state = editStatusReducerInitialState, action) => {
    switch (action.type) {
        case 'CHANGE_EDIT_STATUS':
            return !state;
        // break; 
        default:
            return state
    }
}
 */
const allReducers = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})


var store1 = redux.createStore(allReducers);

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
});

export default store1;
