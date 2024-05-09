import React from "react";
import "./VueCategorie.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function VueCategorie() {
  return (
    <>
      <Navbar />
      <div className="vue_groupe">
        <h2>Vue d'ensemble des paramètres - Données de base - Catégories</h2>
        <div className="vue_groupe_content">
          <h3>Catégories de contact</h3>
          <div className="divider"></div>{" "}
          <table> <thead>
                <tr>
                  <td>Nom</td>
                </tr>
              </thead>
            <tbody>
             
              <tr>
                <td>Clients</td>
              </tr>
              <tr>
                <td>Catégorie personnalisée 1</td>
              </tr>
              <tr>
                <td>Catégorie personnalisée 2</td>
              </tr>
              <tr>
                <td>Fournisseurs</td>
              </tr>
              <tr style={{border:"none"}}>
                <td>Partenaire</td>
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
