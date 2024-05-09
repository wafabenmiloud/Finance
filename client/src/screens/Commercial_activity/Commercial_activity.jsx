import React from "react";
import "./Commercial_activity.css";
import Navbar from "../../components/navbar_dash/NavbarDash";
import Footer from "../../components/footer_dash/FooterDash";

const CommercialActivity = () => {
  return (
    <>
      <Navbar />
      <div className="parameters_entreprise">
        <h2>
          Vue d’ensemble des paramètres - Données de base - Activités
          commerciales
        </h2>
        <div className="commercial_content">
          <h3>Activités commerciales</h3>
          <hr />
          <div className="commercial_content2">
            <table className="p_wrapper_table">
              <thead>
                <tr>
                  <td>Nom</td> <td>Taux horaire par défaut en CHF</td>
                  <td>Facturable</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Administration</td>
                  <td></td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>Général</td> <td></td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>Meeting</td> <td></td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>Gestion de projets</td> <td></td>
                  <td>Oui</td>
                </tr>
                <tr style={{border:"none"}}>
                  <td>Réalisation</td> <td></td>
                  <td>Oui</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <a className="save_logo" href="/">
          Enregistrer
        </a>
        <a className="delete_logo" href="/">
          Modifier
        </a>
      </div>
      <Footer />
    </>
  );
};

export default CommercialActivity;
