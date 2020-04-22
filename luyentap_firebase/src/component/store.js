import { noteData} from './firebase';    
var redux = require("redux");


const allReducerInitialState = {}
const allReducer = (state = allReducerInitialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            noteData.push(action.getData);
            // alert("Them thanh cong roi");
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;

