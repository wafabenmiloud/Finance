import React from "react";
import "./VueModifier.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function VueModifier() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="vue_groupe">
        <h2>Vue d'ensemble des paramètres - Données de base - Modifier</h2>
        <div className="vue_groupe_content">
          <h3>Données de base</h3>
          <div className="divider"></div> <br />
          <div className="ventes_section1">
            <form onSubmit={handleContactSubmit}>
              <div className="contact_textfield_row">
                  <div className="contact_textfield">
                <label>
                  <input type="checkbox" name="type_contact" value="" class="bigger-checkbox"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attribuer automatiquement un numéro de projet
                </label>
              </div>
              </div><br />
              <div className="contact_textfield_row">
                  <div className="contact_textfield" >
                <label>
                  <input type="checkbox" name="type_contact" value="" class="bigger-checkbox"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recommencer chaque année                </label>
              </div>
              </div>
            <br /><br />
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>
                    Numéro de début <span>*</span>
                  </label>
                  <input type="text" />
                </div>
                <div className="contact_textfield">
                  <label>
                    Longueur minimale <span>*</span>
                  </label>
                  <input type="text" />
                </div>
                <div className="contact_textfield">
                  <label>
                    Format <span>*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
            </form>
            <br />
            <br />
          </div>
        </div>
        <div className="vue_buttons">
          <button style={{ color: "#fff", backgroundColor: "#25A7FF" }}>
            Enregistrer
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
