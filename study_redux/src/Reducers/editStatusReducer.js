
const editStatusReducerInitialState = false;
const editStatusReducer = (state = editStatusReducerInitialState, action) => {
    switch (action.type) {
        case 'CHANGE_EDIT_STATUS':
            return !state;
        // break; 
        default:
            return state
    }
}
export default editStatusReducer;