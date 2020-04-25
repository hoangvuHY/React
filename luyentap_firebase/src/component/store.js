import { noteData } from './firebase';
var redux = require("redux");


const allReducerInitialState = {
    editStatus: false,
    noteEdit: {}
}
const allReducer = (state = allReducerInitialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            noteData.push(action.getData);
            // alert("Them thanh cong roi");
            return state
        case 'CHANGE_EDIT_STATUS':
            return { ...state, editStatus: action.trueOrFalse }
        case 'GET_NOTE_EDIT':
            // console.log("da lay duoc roi");
            return { ...state, noteEdit: action.getNoteEdit }
        case 'EDITED':
            noteData.child(action.getNoteEdited.id).update({
                noteTitle: action.getNoteEdited.noteTitle,
                noteContent: action.getNoteEdited.noteContent,
            })
            return { ...state, noteEdit: {} }
        case 'DELETE':
            noteData.child(action.getNoteDelete.id).remove();
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;

