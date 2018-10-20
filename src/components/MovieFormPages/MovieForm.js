import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { createMovieAction, editMovieAction } from '../../actions/movieActions';
import { withRouter } from 'react-router-dom'

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.match.params.movieId){
            this.state = { enteredTitle: this.props.movie.title, enteredReleaseYear: this.props.movie.releaseYear, enteredRating: this.props.movie.rating, isTitleValid: true }
        }else{
            this.state = { enteredTitle: "", enteredReleaseYear: new Date().getUTCFullYear(), enteredRating: 5, isTitleValid: null }
        }
    }

    onTitleInputValueChanged = function (enteredValue) {
        let newText = enteredValue.target.value.toString();
        let isValid = newText.length > 0;
        this.setState({ enteredTitle: newText, isTitleValid: isValid });
    }

    onReleaseYearSelectionChanged = function (newSelection) {
        this.setState({ enteredReleaseYear: newSelection.target.value });
    }

    onRatingSelectionChanged = function (newSelection) {
        this.setState({ enteredRating: newSelection.target.value });
    }

    onCreateClicked = function (event) {
        event.preventDefault();
        this.props.createMovie(this.state.enteredTitle, this.state.enteredReleaseYear, this.state.enteredRating);
        this.props.history.push("/");
    }

    onEditClicked = function (event) {
        event.preventDefault();
        this.props.editMovie(this.props.movie.movieId, this.state.enteredTitle, this.state.enteredReleaseYear, this.state.enteredRating);
        this.props.history.push("/");
    }

    onCancelClicked = function (event) {
        event.preventDefault();
        this.props.history.push("/");
    }

    render() {
        let currentYear = new Date().getUTCFullYear();
        let yearOptions = [];
        for (let year = 1960; year <= currentYear; year++) {
            yearOptions.unshift(<option key={year}>{year}</option>)
        }
        return (
            <Form style={{ maxWidth: '30rem', margin: '2rem auto' }}>
                <FormGroup>
                    <Label for="exampleEmail">Title</Label>
                    <Input type="text" placeholder="Title"
                        value={this.state.enteredTitle} onChange={input => this.onTitleInputValueChanged(input)}
                        valid={this.state.isTitleValid} invalid={!this.state.isTitleValid} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Year of Release</Label>
                    <Input type="select" name="select" id="exampleSelect" value={this.state.enteredReleaseYear}
                        onChange={selection => this.onReleaseYearSelectionChanged(selection)}>
                        {yearOptions}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Rating</Label>
                    <Input type="select" name="select" id="exampleSelect"
                        value={this.state.enteredRating} onChange={selection => this.onRatingSelectionChanged(selection)}>
                        <option key={1}>1</option>
                        <option key={2}>2</option>
                        <option key={3}>3</option>
                        <option key={4}>4</option>
                        <option key={5}>5</option>
                        <option key={6}>6</option>
                        <option key={7}>7</option>
                        <option key={8}>8</option>
                        <option key={9}>9</option>
                        <option key={10}>10</option>
                    </Input>
                </FormGroup>
                {this.props.match.params.movieId ? 
                <div>
                    <Button color="success" onClick={(event) => this.onEditClicked(event)} style={{'margin': '0px 5px'}}>Save Changes</Button>
                    <Button color="secondary" onClick={(event) => this.onCancelClicked(event)} style={{'margin': '0px 5px'}}>Cancel</Button>
                </div>
                    : <Button color="success" onClick={(event) => this.onCreateClicked(event)}>Add Movie</Button>
                }
            </Form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let movieIdParam = ownProps.match.params.movieId;
    if(movieIdParam){
        let movieYToEdit=state.movies.filter(movie => movie.movieId === movieIdParam)[0];//there should only be one match (at index 0)
        return{
            movie: movieYToEdit
        }
    }else{
        return {
            // movies: state.movies
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createMovie: (title, releaseYear, rating) => dispatch(createMovieAction(title, releaseYear, rating)),
        editMovie: (movieId, title, releaseYear, rating) => dispatch(editMovieAction(movieId, title, releaseYear, rating))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieForm));
