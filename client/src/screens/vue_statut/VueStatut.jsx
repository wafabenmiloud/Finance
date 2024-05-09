import React from "react";
import "./VueStatut.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function VueStatut() {
  return (
    <>
      <Navbar />
      <div className="vue_groupe">
        <h2>
        Vue d’ensemble des paramètres - Données de base - Sous-statut
        </h2>
        <div className="vue_groupe_content">
          <h3>Statut</h3>
          <div className="divider"></div>{" "}
          <table>
            <thead>
              <tr>
                <td>Désignation</td>
                <td>Nº de statut</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acquisition</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Phase d'offre</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Projet perdu</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Préparation de projet</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Projet en cours</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Phase finale du projet</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Documentation</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Livraison du projet</td>
                <td>70</td>
              </tr>
              <tr>
                <td>Révision, traitement ultérieur</td>
                <td>80</td>
              </tr>
              <tr style={{border:"none"}}>
                <td>Archives</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="vue_buttons">
          <button style={{ color: "#fff", backgroundColor: "#25A7FF" }}>
            Enregistrer
          </button>
          <button style={{ color: "#666", backgroundColor: "#D9D9D9" }}>
            Modifier
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
