import React from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./Boite.css";
import Footer from "../../components/footer_dash/FooterDash";
import img2 from "../../assets/group802.png";
import img3 from "../../assets/group943.png";
export default function Boite() {
  return (
    <>
      <Navbar />
      <div className="show_details">
        <div className="show_title">
          <h1>Boîte de réception</h1>
          <button className="show_title_btn">Télécharger</button>
        </div>
        <div className="show_sections">
          <section id="show_section1">
            <div className="section-content">
              <div className="show_section">
                <div className="show_buttons">
                  <button className="boite_button1">
                    Boîte de réception uniquement
                  </button>
                  <button className="boite_button1">Archives uniquement</button>
                  <button className="boite_button1">Tous</button>
                </div>
                <div className="divider"></div>
                <div className="show_buttons">
                  <button className="boite_button2">Date</button>
                  <button className="boite_button2">Nom du fichier</button>
                  <button className="boite_button2">Télécharger</button>
                  <button className="boite_button2">Statut</button>
                  <button className="boite_button2">Utilisé</button>
                </div>
                <div className="show_center">
                  <p>Il n’y a pas encore d’entrées</p>
                </div>
              </div>
            </div>
          </section>

          <section id="show_section2">
            <div className="section-content">
              <div
                className="show_section"
                style={{
                  padding: "5% 0",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="divider"
                  style={{
                    height: "180px",
                    backgroundColor: "#efefef",
                    borderTop: "0.5px solid #959799",
                    borderBottom: "0.5px solid #959799",
                  }}
                ></div>
                <div className="boite_p2">
                  <img src={img2} alt="img" />
                  <h6>Aucun aperçu disponible</h6>
                  <p>
                    Formats pouvant être affichés dans l'aperçu: JPG, JPEG, PNG,
                    GIF, PDF
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
        <br />
        <section id="show_section3">
          <div className="section-content">
            <div className="boite_modif">
              <img src={img3} alt="img" />
              <h5>Faire glisser les fichiers ici</h5>
              <p>
                Taille de fichier max.: 12 MB <br />
                Formats de fichiers acceptés:
                doc,docx,gif,jpeg,jpg,pdf,png,ppt,pptx,xls,xlsx,svg
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
