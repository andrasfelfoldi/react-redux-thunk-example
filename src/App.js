import React, { Component } from 'react';
import Navbar from './component/Navbar';
import MoviesTable from './component/MoviesTable';
import { connect } from 'react-redux';
import { fetchMovies, postMovie, editMovie } from './actions/movieActions';
import MovieForm from './component/MovieForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    this.props.fetchMovies();
  }

  submitAddMovieForm=(event, title, releaseYear, rating, _id)=>{
    event.preventDefault();
    this.props.postMovie(title, releaseYear, rating);
  }

  submitEditMovieForm=(event, title, releaseYear, rating, _id)=>{
    event.preventDefault();
    this.props.editMovie(_id, title, releaseYear, rating);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={() => <MoviesTable movies={this.props.movies}/>} />
            <Route path='/editmovie/:movieId' component={() => <MovieForm onSubmitClicked={this.submitEditMovieForm}/>} />
            <Route path='/addmovie' component={() => <MovieForm onSubmitClicked={this.submitAddMovieForm}/>} />
          </Switch>
          {/* <MoviesTable movies={this.props.movies} />
          <MovieForm /> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    postMovie: (title, releaseYear, rating) => dispatch(postMovie(title, releaseYear, rating)),
    editMovie: (_id, title, releaseYear, rating) => dispatch(editMovie(_id, title, releaseYear, rating))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
