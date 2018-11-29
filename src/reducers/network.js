import CONST from '../constants/actionConstants';

export default (state={isMovieDataReady: false}, action) => {
    switch (action.type) {
        case CONST.SET_MOVIE_DATA_READY:
            return Object.assign({}, state, {isMovieDataReady: true});
        default:
            return state;
    }
}