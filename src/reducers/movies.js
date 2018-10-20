import { movieActions as actions } from './../constants/actionTypes';

export default function movies(state = [], action) {
    switch (action.type) {
        case actions.CREATE_MOVIE:
            return [...state, {...action.data }]
        case actions.EDIT_MOVIE:
            return [...state.filter(movie => movie.movieId !== action.data.movieId), {...action.data}]
        case actions.DELETE_MOVIE:
            return state.filter(movie => movie.movieId !== action.data.movieId);
        default:
            return state
    }
}