import { movieActions as actions } from './../constants/actionTypes';
const uuidv4 = require('uuid/v4');

export function createMovieAction(title, releaseYear, rating) {
    return {
        type: actions.CREATE_MOVIE,
        data: {
            title,
            releaseYear,
            rating,
            movieId: uuidv4()
        }
    }
}

export function editMovieAction( movieId, title, releaseYear, rating) {
    return {
        type: actions.EDIT_MOVIE,
        data: {
            movieId,
            title,
            releaseYear,
            rating
        }
    }
}

export function deleteMovieAction(movieId) {
    return {
        type: actions.DELETE_MOVIE,
        data: {
            movieId
        }
    }
}