import React from "react";
import "./Commander3.css";
import img1 from "../../assets/commander/1.svg";
import img2 from "../../assets/commander/2.svg";
import img3 from "../../assets/commander/3.svg";
import { Link } from "react-router-dom";
import Navbar3 from "../../components/navbar3_dash/Navbar3Dash";

const Commander3 = () => {
  return (
    <>
      <Navbar3 />
      <div className="commander2">
        <h1>Commander Faji</h1>
        <div className="commander2_content commander3_content">
          <h3>Informations de carte de crédit</h3>
          <p>Type de la carte</p>
          <div className="img_wrapper_commander">
            <img src={img3} alt="img" />
            <img src={img2} alt="img" />
            <img src={img1} alt="img" />
          </div>
          <div className="commander2_wrapper_input">
            <div className="commander2_input">
              <label htmlFor="">Numéro de la carte</label>
              <input placeholder="Nom de l’entreprise" type="text" />
            </div>
            <div className="commander2_input">
              <label htmlFor="">Cryptogramme visuel</label>
              <input type="text" />
            </div>
            <div className="commander2_input">
              <label htmlFor="">Nom du titulaire de la carte</label>
              <input type="text" />
            </div>
          </div>
          <div className="commander2_input">
            <label htmlFor="">Date d'expiration de la carte</label>
            <input style={{ width: "20%" }} type="text" />
          </div>
        </div>
        <div className="button_wrapper_commander2">
        <Link to="/commander2">Etape précédente</Link>
          <div
            style={{ textAlign: "start", display: "flex",  justifyContent:"space-between", alignItems:"center" }}
            className="conditions_commander"
          >
            <p>
              J'accepte les Conditions générales d’utilisation et confirmeavoir
              pris connaissance des dispositions relatives à la protection des
              données.
            </p>
            <input type="checkbox" />
          </div>
          <Link to="#">Commander maintenant</Link>
        </div>
      </div>
    </>
  );
};

export default Commander3;
