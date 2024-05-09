import React from "react";
import "./Testimonials.css";
import Card from "../testimonial_card/Card";
import c1 from "../../assets/client1.png";
import c2 from "../../assets/client2.png";
import c3 from "../../assets/client3.png";

export default function Testimonials({span,title}) {
  return (
    <div className="testimonials">
      <h1>
      {title} <span>{span}</span></h1>
        <div className="testimonials_cards">
          <Card
            image={c1}
            name="Tom Slogn"
            title="Lorem ipsum dolor"
            body="En tant que petite agence de Design, le temps et la vue d'ensemble sont des valeurs précieuses  . Avec Faji, la comptabilité devient simple et pratique et laisse plus d'espace à la créativité  ."
            rate={3.5}
          />
          <Card
            image={c2}
            name="Tom Slogn"
            title="Lorem ipsum dolor"
            body="En tant que petite agence de Design, le temps et la vue d'ensemble sont des valeurs précieuses  . Avec Faji, la comptabilité devient simple et pratique et laisse plus d'espace à la créativité  ."
            rate={5}
          />
          <Card
            image={c3}
            name="Tom Slogn"
            title="Lorem ipsum dolor"
            body="En tant que petite agence de Design, le temps et la vue d'ensemble sont des valeurs précieuses  . Avec Faji, la comptabilité devient simple et pratique et laisse plus d'espace à la créativité  ."
            rate={5}
          />
        </div>
      
    </div>
  );
}
