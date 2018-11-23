import React, { Component } from 'react';
import Navbar from './component/Navbar';
import MoviesTable from './component/MoviesTable';

class App extends Component {

  constructor(props){
    super(props);
    this.state={movies: [{title: "Game of Thrones", releaseYear: "2006", rating: 9}]};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <MoviesTable movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
