import React from "react";
import "./VueComptabilite.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function VueComptabilite() {
  return (
    <>
      <Navbar />
      <div className="vuecomptabilite">
        <h1>
        Vue d’ensemble des paramètres - Comptabilité
        </h1>
        <br />
        <div className="dashboard_cards">
          <div className="col1_cards">
            <div className="card col1_card2">
              <h3>Comptes</h3>
              <div className="divider"></div>
              <p>
              Vous pouvez adapter ici le plan comptable que nous fournissons par défaut en fonction de vos besoins. Si vous ne savez pas quels comptes vous devez créer ou sur quels comptes vous devez passer vos écritures, merci de vous adresser à votre comptable.
              </p>
            </div>
            <div className="card col1_card3">
              <h3>Exercice comptable</h3>
              <div className="divider"></div>
              <p>
              Définissez ici les paramètres de votre exercice comptable. Vous avez également ici une vue d'ensemble des exercices comptables précédents.
              </p>
            </div>
          </div>
          <div className="col2_cards">
            <div className="card col2_card2">
              <h3>TVA</h3>
              <div className="divider"></div>
              <p>
              Définissez ici les paramètres de base de la TVA. En cas de questions ou d'incertitudes, veuillez contacter votre comptable.
              </p>
            </div>
          
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
