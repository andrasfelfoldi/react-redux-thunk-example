import React, { Component } from 'react';
import Navbar from './component/Navbar';
import MoviesTable from './component/MoviesTable';
import { connect } from 'react-redux';
import { fetchMovies } from './actions/movieActions';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state={movies: [{title: "Game of Thrones", releaseYear: "2006", rating: 9}]};
  // }

  componentDidMount(){
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <MoviesTable movies={this.props.movies} />
      </div>
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
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
