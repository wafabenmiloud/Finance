import React from "react";
import "./VueApps.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";
import img from "../../assets/sear.svg";

export default function VueApps() {
 
  return (
    <>
      <Navbar />
      <div className="vue_groupe">
        <h2>Vue d’ensemble des paramètres - Apps et API - Jeton d'API</h2>
        <div className="vue_groupe_content">
          <div className="ventes_head">
            <div className="ventes_buttons">
              <button
              >
                Nom
              </button>
              <button
              >
                Jeton
              </button>
              <button
              >
                Description
              </button>
            </div>
          </div>{" "}
          <div className="divider"></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: "40px",
              padding: "5% 0",
            }}
          >
            <div>
              {" "}
              <img src={img} style={{ width: "100%" }} alt="img"/>
            </div>
            <div
              style={{
                width: "40%",
                display: "flex",

                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p className="achat_comm_p">
              Aucun entrée{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
