import React from "react";
import './test.css';
import { Link } from "react-router-dom";
const Test = () => {
    return(
        <div className="test_demo">
            <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
            <p>En tant que client Faji, vous bénéficiez de notre collaboration avec des partenaires solides   .</p>
            <Link to="/trial">Testez gratuitement</Link>        </div>
    )
}
export default Test;