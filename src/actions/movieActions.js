import CONST from '../constants/actionConstants';
import { setMovieDataReady } from './networkActions';

export const fetchMovies = () => {
    return function(dispatch){
        return fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(movies => dispatch(getMovies(movies)))
        .then(() => dispatch(setMovieDataReady()))
    }
}

export const getMovies = (movies) => {
    return {
        type: CONST.GET_MOVIES,
        movies
    }
}

export const postMovie = (title, releaseYear, rating) => {
    
    const formData = new URLSearchParams();
    formData.append('title', title);
    formData.append('releaseYear', releaseYear);
    formData.append('rating', rating);

    return function(dispatch){
        return fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: formData.toString()
        })
        .then(response => response.json())
        .then(dispatch(fetchMovies()));
    }
}

export const putMovie = (movieId, title, releaseYear, rating) => {
    const formData = new URLSearchParams();
    formData.append('title', title);
    formData.append('releaseYear', releaseYear);
    formData.append('rating', rating);

    return function(dispatch){
        return fetch("http://localhost:3000/movies/" + movieId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: formData.toString()
        })
        .then(response => response.json())
        .then(movie => dispatch(updateMovie(movie)))
    }
}

export const updateMovie = (movie) => {
    return {
        type: CONST.UPDATE_MOVIE,
        movie
    }
}

export const deleteMovie = (movie) => {
    return function(dispatch){
        return fetch("http://localhost:3000/movies/" + movie._id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        })
        .then(response => response.json())
        .then(() => dispatch(removeMovie(movie)))
    }
}

export const removeMovie = (movie) => {
    return {
        type: CONST.REMOVE_MOVIE,
        movie
    }
}