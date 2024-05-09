import React from "react";
import "./VuePackages.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function VuePackages() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>
          Vue d’ensemble des paramètres - Packages, options et utilisateurs
        </h1>
        <br />
        <div className="dashboard_cards">
          <div className="col1_cards">
            <div className="card col1_card2">
              <h3>Activez votre compte Faji</h3>
              <div className="divider"></div>
              <p>
                Vous pouvez essayer Faji gratuitement pendant encore 22
                jours.Activez votre compte Faji dès maintenant, vos jours de
                test restants vous seront offerts.
              </p>
            </div>
            <div className="card col1_card3">
              <h3>Gestion des utilisateurs </h3>
              <div className="divider"></div>
              <p>
                Gérez les utilisateurs de votre compte Faji et modifiez leurs
                droits en fonction de vos besoins.
              </p>
            </div>
          </div>
          <div className="col2_cards">
            <div className="card col2_card2">
              <h3>Compte d’essai</h3>
              <div className="divider"></div>
              <p>
                Sélectionnez le package que vous souhaitez tester ainsi que les
                apps vous souhaitez activer.
              </p>
            </div>
            <div className="card col2_card3">
              <h3>Supprimer les données</h3>
              <div className="divider"></div>
              <p>
                Attention: la suppression des données d'utilisateur est
                irréversible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
