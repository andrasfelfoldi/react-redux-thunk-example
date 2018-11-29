import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const MovieCard = ({title, releaseYear, rating}) => {
  return (
    <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', width: "250px", margin: "10px"}}>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{releaseYear}</CardSubtitle>
          <CardText>{rating}</CardText>
          <Button style={{ margin: "5px" }}>Edit</Button>
          <Button style={{ margin: "5px" }}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;