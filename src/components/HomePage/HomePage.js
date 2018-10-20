import React, { Component } from 'react';
import MovieTable from './MovieTable';
import { connect } from 'react-redux'

class HomePage extends Component {
    render() {
        return (
            <MovieTable movies={this.props.movies} />
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(HomePage);
