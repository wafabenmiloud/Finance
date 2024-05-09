import React from "react";
import "./VueFormule.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function VueFormule() {
  return (
    <>
      <Navbar />
      <div className="vue_groupe">
        <h2>Vue d’ensemble des paramètres - Données de base - Formules d'appel</h2>
        <div className="vue_groupe_content">
          <h3>Formules d'appel</h3>
          <div className="divider"></div>{" "}
          <table>
            <thead>
              <tr>
                <td>Formules d'appel</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Famille</td>
              </tr>
              <tr>
                <td>Monsieur</td>
              </tr>
              <tr>
                <td>Mr & Mrs</td>
              </tr>
              <tr>
                <td>Madame</td>
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
