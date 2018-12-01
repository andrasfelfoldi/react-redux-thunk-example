import actions from '../constants/actionConstants';

export default (state=[], action) => {
    switch (action.type) {
        case actions.GET_MOVIES:
            return [...action.movies]
        
        case actions.UPDATE_MOVIE:
            let movies=state.filter(mov=>mov._id !== action.movie._id);
            movies.push(action.movie);
            return movies;
            
        default:
            return state;
    }
}