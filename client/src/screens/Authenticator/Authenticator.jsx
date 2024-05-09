import React from "react";
import "./Authenticator.css";
import qr from "../../assets/auth/QR.svg";
import Navbar3 from "../../components/navbar3_dash/Navbar3Dash";
import { Link } from "react-router-dom";

const Authenticator = () => {
  return (
    <>
      <Navbar3 />
      <div className="authenticator">
        <p>
          L'utilisation de Google Authenticator nécessite que l'heure de votre
          téléphone mobile corresponde exactement à celle du serveur Faji. Nous
          vous recommandons d’utiliser la fonction de synchronisation temporelle
          automatique de votre téléphone.
        </p>
        <div className="authenticator_cards">
          <div className="authenticator_card">
            <h2>Etape 1 - Installation</h2>
            <p>
              Installez l'application Google Authenticator sur votre téléphone
              mobile.
            </p>
            <ul>
              <li style={{ color: "#7B7B7B" }}>
                <p>iPhone</p>
              </li>
              <li style={{ color: "#7B7B7B" }}>
                <p>Appareils Android</p>
              </li>
            </ul>
          </div>
          <div className="authenticator_card authenticator_card2">
            <div className="qr_text">
              <h2>Etape 2 - Scan</h2>
              <p>Scannez ce code QR.</p>
            </div>
            <div className="qr_img">
              <img src={qr} alt="img" />
            </div>
          </div>
          <div className="authenticator_card">
            <h2>Etape 3 - Contrôle de l'entrée</h2>
            <p>
              Une fois le code QR scanné, une entrée Faji devrait apparaître
              dans l’application Google Authenticator, associée à un code à 6
              chiffres. Un nouveau code est généré toutes les 30 secondes par
              l’application
            </p>
          </div>
          <div className="authenticator_card">
            <h2>Etape 4 - Vérification</h2>
            <p>
              Saisissez ci-dessous le code à 6 chiffres pour la vérification.
            </p>
            <div className="auth_inputs">
              <div className="auth_input">
                <label htmlFor="code">
                  {" "}
                  Code
                  <span style={{ color: "red" }}>
                    {" "}
                    <b> *</b>
                  </span>
                </label>
                <input type="text" style={{ height: "38px" }} />
              </div>{" "}
              <Link to="/command1" style={{marginTop:"12px"}}>Vérifier et valider le code </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authenticator;
