import { noteData } from './noteData';

var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'Add_Data':
            // console.log("Ket noi thanh cong addData, bien nhan vao la 1 action.getItem" + action.getItem);
            noteData.push(action.getItem);
            return state
        case 'CHANGE_EDIT_STATUS':
            return { ...state, isEdit: action.trueOrFalse };
        case 'GET_EDIT_DATA':
            return { ...state, editItem: action.editObject };
        case 'EDIT':
            //Update len tren fireBase
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent,

            })
            console.log("Da cap nhat du thanh cong:" + JSON.stringify(action.getItem));
            return { ...state, editItem: {} };
        case 'DELETE':
            // console.log(action.deleteData);
            noteData.child(action.deleteID).remove();
            return state;

        default:
            return state
    }
}

var store = redux.createStore(allReducer);
store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
});



export default store;   