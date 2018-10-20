import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddMoviePage from './components/MovieFormPages/AddMoviePage';
import HomePage from './components/HomePage/HomePage';
import { store } from './store';
import { Provider } from 'react-redux';
import EditMoviePage from './components/MovieFormPages/EditMoviePage';

window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="header">
              <NavBar dark={true} />
            </header>
            <main>
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/addmovie' component={AddMoviePage} />
                <Route path='/editmovie/:movieId' component={EditMoviePage} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
