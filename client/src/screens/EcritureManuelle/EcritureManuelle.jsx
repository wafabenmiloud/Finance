import React from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./EcritureManuelle.css";
import arrow from "../../assets/arrow.svg"
import Footer from "../../components/footer_dash/FooterDash";

export default function EcritureManuelle() {
  return (
    <>
      <Navbar />
      <div className="show_details">
        <div className="show_title">
          <h1>Ecriture manuelle</h1>
        </div>
        <section id="show_section3">
          <div className="show_section">
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                padding: "4% 0",
                textAlign: "start",
              }}
            >
              <div className="notes2_title_row">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Date</h4>
                  <input type="text" name="" id="" className="text_ecr image_placeholder" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  <h4>Numéro du document</h4>
                  <input type="text" name="" id="" className="text_ecr" />
                </div>
              </div>
              <div className="divider" style={{ color: "#959799;" }}></div>
              <div className="notes2_title_row">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Débit</h4>
                  <input type="text" name="" id="" className="text_ecr" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "15%",
                  }}
                >
                  <img src={arrow} alt="img" style={{width:"17px", height:"11px"}}/>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Crédit</h4>
                  <input type="text" name="" id="" className="text_ecr" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Description</h4>
                  <input type="text" name="" id="" className="text_ecr" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>TVA</h4>
                  <input type="text" name="" id="" className="text_ecr" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Montant</h4>
                  <input type="text" name="" id="" className="text_ecr" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Devise</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Taux de change</h4>
                  <input type="text" name="" id="" className="text_ecr" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Montant CHF</h4>
                  <input type="text" name="" id="" className="text_ecr" />
                </div>
              </div>
              <div className="divider" style={{ color: "#959799;" }}></div>
              <div className="ecrman_row">
                <button className="ecrman_btn1" >Nouvelle Ligne</button>
                <button className="ecrman_btn2" >Comptabilisé</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="show_details">
        <div className="show_title">
          <h3>Dernières écritures manuelles</h3>
        </div>
        <section id="show_section3">
          <div className="show_section">
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                padding: "4% 0",
                textAlign: "start",
              }}
            >
              <div className="notes2_title_row">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Date</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Numéro du document</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Débit</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Crédit</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Description</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>TVA</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Taux de change</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Montant</h4>
                </div>
              </div>
              <div className="divider" style={{ color: "#959799;" }}></div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
