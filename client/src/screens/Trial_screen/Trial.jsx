import "./Trial.css";
import Head from "../../assets/icons/trial_header.svg";
import icon1 from "../../assets/icons/trial_icon1.svg";
import icon2 from "../../assets/icons/trial_icon2.svg";
import icon3 from "../../assets/icons/trial_icon3.svg";
import icon4 from "../../assets/icons/trial_icon4.svg";
import icon5 from "../../assets/icons/trial_icon5.svg";
import React  from "react";

export default function TrialScreen() {
  return (
    <div id="trial_screen">
      <div className="bg"></div>
      <div className="trial_head">
        <div className="trial_icons">
          <div className="trial_icon">
            <img src={icon1} alt="img" />
          </div>
          <div className="trial_icon">
            <img src={icon2} alt="img" />
          </div>
          <div className="trial_icon">
            <img src={icon3} alt="img" />
          </div>
          <div className="trial_icon">
            <img src={icon4} alt="img" />
          </div>
        </div>
        <div className="trial_header_img">
          <img src={Head} alt="img" />
        </div>
      </div>
      <div className="trial_form">
        <h1>Testez Faji gratuitement et sans engagement pendant 30 jours</h1>
        <h3>Aucune carte de crédit ou installation nécessaire .</h3>
        <div className="input_row">
          <div>
            {" "}
            <input type="text" placeholder="Prénom" name="prenom" id="prenom" />
          </div>
          <div>
            {" "}
            <input
              type="text"
              placeholder="Nom de famille "
              name="nom"
              id="nom"
            />
          </div>
        </div>
        <div className="input_row">
          <div className="input_row_small">
              <div className="small">
            <select>
              <option disabled selected>+216</option>
            </select>
          </div>
          <div className="small2">
            {" "}
            <input
              type="phone"
              placeholder="Numéro de téléphone"
              name="phone"
              id="phone"
            />
          </div>
          </div>
        
          <div>
            {" "}
            <input type="email" placeholder="E-mail" id="email" name="email" />
          </div>
        </div>
        <div className="trial_buttons">
          <button className="trial_btn1">Annuler</button>
          <button className="trial_btn2">Testez gratuitement</button>
        </div>
        <div className="trial_politic">
          <img src={icon5} alt="img" />
          <p>
            Vos données personnelles sont stockées en toute sécurité en Suisse .
            Pour en savoir plus, consultez notre{" "}
            <span> politique de confidentialité .</span>
          </p>
        </div>
      </div>
    </div>
  );
}
