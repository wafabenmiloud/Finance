import React from "react";
import './Card.css';
const Card = ({ icon, body, title }) => {
  return (
    <>
     <div className="card_wrapper">
        <div className="card1">
            <img src={icon} alt="img" />
        </div>
        <div className="card2">
            <h3>{title}</h3>
            <h4>{body}</h4>
        </div>
     </div>
    </>
  );
};

export default Card;
