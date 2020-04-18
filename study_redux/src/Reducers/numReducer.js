
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
export default numReducer;