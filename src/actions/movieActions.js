import CONST from '../constants/actionConstants';

export const fetchMovies = () => {
    return function(dispatch){
        return fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(movies => dispatch(getMovies(movies)))
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
    // return {
    //     type: CONST.POST_MOVIE,
    //     movieData: {
    //         title,
    //         releaseYear,
    //         rating
    //     }
    // }
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