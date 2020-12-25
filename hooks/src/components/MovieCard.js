import React from 'react';
import Card from 'react-bootstrap/Card';
import card from "./card.css";
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({movie}) => {
    return (
        <div>
<Card  className="nader" style={{ backGroundColor:' #282c34;', width: '18rem', color:'black', margin:'20px 10px', fontSize:12, fontFamily:'monospace' }}>
  <Card.Img variant="top" src={movie.img} />
  <Card.Body >
    <Card.Title style={{fontSize:10}}>{movie.title}</Card.Title>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
         
        />
    <Card.Text style={{fontSize:8}}>{movie.description}</Card.Text>
  </Card.Body>
</Card>
        </div>
    );
};

export default MovieCard
