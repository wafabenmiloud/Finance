import React from "react";
import "./VueProjet.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function VueProjet() {
  return (
    <>
      <Navbar />
      <div className="vue_groupe">
        <h2>
          Vue d'ensemble des paramètres - Données de base - Projets: Taux
          horaire par utilisateur{" "}
        </h2>
        <div className="vue_groupe_content">
          <h3>Gérer les utilisateurs de contact</h3>
          <div className="divider"></div>{" "}
          <table>
            <thead>
              <tr>
                <td>Nom</td>
                <td>E-mail</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>User name</td>
                <td>E-mail of user</td>
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
