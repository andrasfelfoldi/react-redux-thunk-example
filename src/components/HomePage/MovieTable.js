import React from 'react';
import { Table, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { deleteMovieAction } from '../../actions/movieActions';
import { withRouter } from 'react-router-dom'

class MovieTable extends React.Component {
    deleteMovie=function(movieId){

        this.props.deleteMovieDispatch(movieId);
    }

    navigateToEditMoviePage=function(movie){
        this.props.history.push({
            pathname: "/editmovie/" + movie.movieId
        });
    }

    render() {
        return (
            <Table style={{maxWidth: '50rem', margin: '2rem auto' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Year of Release</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.movies.map((movie, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{movie.title}</td>
                            <td>{movie.releaseYear}</td>
                            <td>{movie.rating}</td>
                            <td>
                                <Button color="primary" value={movie} onClick={() => this.navigateToEditMoviePage(movie)} style={{'margin': '0px 5px'}}>Edit</Button>
                                <Button color="danger" value={movie.movieId} onClick={() => this.deleteMovie(movie.movieId)} style={{'margin': '0px 5px'}}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return {
        // movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMovieDispatch: (movieId) => dispatch(deleteMovieAction(movieId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieTable));
