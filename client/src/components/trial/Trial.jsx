import React from "react";
import "./Trial.css";
import { Link } from "react-router-dom";
export default function Trial() {
  return (
    <div id="trial">
      <h1>Testez Faji gratuitement et sans engagement pendant 30 jours</h1>
      <h2>
        Jugez par vous-même en testant toutes les fonctionnalités de Faji,
        l'outil de gestion idéal des PME .
      </h2>
      <Link to="/trial" className="btn_trial">
                Testez gratuitement
              </Link>    </div>
  );
}
