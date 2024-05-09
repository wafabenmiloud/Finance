import React from "react";
import "./Card.css";
import {BsStarFill, BsStarHalf,BsStar} from "react-icons/bs";

const Card = ({ image, name, rate, title, body }) => {
  return (
    <>
      <div className="test_card_wrapper">
        <div className="test_card1">
          <img src={image} alt="img" />
        </div>
        <div className="test_card2">
          <h2>{name}</h2>
          <h3>{title}</h3>
          <div className="rate">
            <StarRating rating={rate} />
          </div>
          <h4>{body}</h4>
        </div>
      </div>
    </>
  );
};
export default Card;

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i}> <BsStarFill color="#FFD600"/></span>);
    }
    if (hasHalfStar) {
      stars.push(<span key={filledStars}><BsStarHalf color="#FFD600" className="bs"/></span>);
    }
    for (let i = filledStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      stars.push(<span key={i}><BsStar color="#FFD600"/></span>);
    }
    return stars;
  };
  return <div className="star-rating">{renderStars()}</div>;
};
