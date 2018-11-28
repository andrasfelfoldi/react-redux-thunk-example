import React, { Component } from 'react';
import Navbar from './component/Navbar';
import MoviesTable from './component/MoviesTable';
import { connect } from 'react-redux';
import { fetchMovies } from './actions/movieActions';
import MovieForm from './component/MovieForm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    this.props.fetchMovies();
  }

  submitForm=(event)=>{
    event.preventDefault();
    console.log(this)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={() => <MoviesTable movies={this.props.movies}/>} />
            <Route path='/addmovie' component={() => <MovieForm onSubmitClicked={this.submitForm}/>} />
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
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
