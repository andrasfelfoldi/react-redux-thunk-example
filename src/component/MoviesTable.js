import React from 'react';
import MovieCard from './MovieCard';

const MoviesTable = ({movies}) => {
    return ( 
    <div style={{display:"flex"}}>
        {movies.map((movie, index) => (
            <MovieCard {...movie}/>
        ))}
    </div>
    );
}
 
export default MoviesTable;