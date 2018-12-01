import actions from '../constants/actionConstants';

export default (state=[], action) => {
    let movies;
    switch (action.type) {
        case actions.GET_MOVIES:
            return [...action.movies]
        
        case actions.UPDATE_MOVIE:
            movies=state.filter(mov=>mov._id !== action.movie._id);
            movies.push(action.movie);
            return movies;
        
        case actions.DELETE_MOVIE:
            movies=state.filter(mov=>mov._id !== action.movie._id);
            return movies;
        default:
            return state;
    }
}