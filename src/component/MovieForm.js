import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class MovieForm extends React.Component {

    constructor(props) {
        super(props);
        if(this.props.movie){
            this.state={title: this.props.movie.title, releaseYear: this.props.movie.releaseYear, rating: this.props.movie.rating};
        }else{
            this.state={title: "", releaseYear: "", rating: ""};
        }
    }

    onTitleChanged = event => {
        this.setState({title: event.target.value});
    }

    onReleaseYearChanged = event => {
        this.setState({releaseYear: event.target.value});
    }

    onRatingChanged = event => {
        this.setState({rating: event.target.value});
    }

    render(){
        return( 
    <Form style={{padding: "15px", maxWidth: "500px"}}>
        <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Enter a movie title"
                value={this.state.title} onChange={event => this.onTitleChanged(event)}/>
        </FormGroup>
        <FormGroup>
            <Label for="releaseYear">Release Year</Label>
            <Input type="number" name="releaseYear" id="releaseYear" placeholder="Enter a release year"
                value={this.state.releaseYear} onChange={event => this.onReleaseYearChanged(event)}/>
        </FormGroup>
        <FormGroup>
            <Label for="rating">Rating</Label>
            <Input type="select" name="rating" id="rating"
                value={this.state.rating} onChange={event => this.onRatingChanged(event)}>
                <option value="">None</option>
                <option>10</option>
                <option>9</option>
                <option>8</option>
                <option>7</option>
                <option>6</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </Input>
        </FormGroup>
        <Button color="success" style={{margin: " 0px 5px"}} onClick={(event) => this.props.onSubmitClicked(event, this.state.title, this.state.releaseYear, this.state.rating)}>Submit</Button>
        <Button style={{margin: "0px 5px"}}>Cancel</Button>
    </Form>
     );
    } 
}

export default MovieForm;