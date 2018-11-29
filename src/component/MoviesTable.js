import React from 'react';
import MovieCard from './MovieCard';

const MoviesTable = ({movies}) => {
    return ( 
    <div style={{display: "flex", flexWrap: "wrap", margin: "3px auto", justifyContent: "center"}}>
        {movies.map((movie, index) => (
            <MovieCard {...movie} key={index}/>
        ))}
    </div>
    );
}
 
export default MoviesTable;