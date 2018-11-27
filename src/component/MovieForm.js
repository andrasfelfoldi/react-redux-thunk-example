import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class MovieForm extends React.Component {
    constructor(title, releaseYear, rating, onSubmitClicked){
        super(title, releaseYear, rating, onSubmitClicked);
    }

    render(){
        return( 
    <Form style={{padding: "15px"}}>
        <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Enter a movie title" />
        </FormGroup>
        <FormGroup>
            <Label for="releaseYear">Release Year</Label>
            <Input type="number" name="releaseYear" id="releaseYear" placeholder="Enter a release year" />
        </FormGroup>
        <FormGroup>
            <Label for="rating">Rating</Label>
            <Input type="select" name="rating" id="rating">
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
        <Button color="success" style={{margin: " 0px 5px"}} onClick={(event) => console.log(this.onSubmitClicked)}>Submit</Button>
        <Button style={{margin: "0px 5px"}}>Cancel</Button>
    </Form>
     );
    } 
}

export default MovieForm;