import React, { Component } from 'react';
import Navbar from './component/Navbar';
import MovieCard from './component/MovieCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MovieCard />
      </div>
    );
  }
}

export default App;
