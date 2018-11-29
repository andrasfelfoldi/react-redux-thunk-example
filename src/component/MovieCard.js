import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';


const MovieCard = ({title, releaseYear, rating, _id, ...props}) => {

  let navigateToEditMoviePage=function(movie){
    props.history.push({
        pathname: "/editmovie/" + movie._id
    });
}

  return (
    <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', width: "250px", margin: "10px"}}>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{releaseYear}</CardSubtitle>
          <CardText>{rating}</CardText>
          <Button style={{ margin: "5px" }} onClick={()=>navigateToEditMoviePage({title, releaseYear, rating, _id})}>Edit</Button>
          <Button style={{ margin: "5px" }}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(MovieCard);