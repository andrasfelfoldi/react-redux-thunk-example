import actions from '../constants/actionConstants';

export default (state=[], action) => {
    switch (action.type) {
        case actions.GET_MOVIES:
            return [...action.movies]
    
        default:
            return state;
    }
}