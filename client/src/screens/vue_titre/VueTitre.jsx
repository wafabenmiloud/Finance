import React from "react";
import "./VueTitre.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function VueTitre() {
  return (
    <>
      <Navbar />
      <div className="vue_groupe">
        <h2>Vue d’ensemble des paramètres - Données de base - Titre</h2>
        <div className="vue_groupe_content">
          <h3>Titre</h3>
          <div className="divider"></div>{" "}
          <table>
            <thead>
              <tr>
                <td>Titre</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DR</td>
              </tr>
              <tr>
                <td>DR.med.</td>
              </tr>
              <tr>
                <td>Prof.</td>
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
