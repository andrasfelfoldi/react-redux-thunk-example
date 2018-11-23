import CONST from '../constants/actionConstants';

export const addMovie = (title, releaseYear, rating) => {
    return {
        type: CONST.CREATE_MOVIE,
        movieData: {
            title,
            releaseYear,
            rating
        }
    }
}

export const editMovie = (movieId, title, releaseYear, rating) => {
    return {
        type: CONST.UPDATE_MOVIE,
        id: movieId,
        movieData: {
            title,
            releaseYear,
            rating
        }
    }
}

export const deleteMovie = (movieId) => {
    return {
        type: CONST.DELETE_MOVIE,
        id: movieId
    }
}