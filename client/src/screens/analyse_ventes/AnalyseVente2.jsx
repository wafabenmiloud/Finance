import React from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./AnalyseVente.css";
import img from "../../assets/calendar.svg";
import Footer from "../../components/footer_dash/FooterDash";

export default function AnalyseVente2() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="analyse_ventes">
        <h2>Analyse des ventes</h2>
        <div className="analyse_ventes_section">
          <div className="ventes_light_bg bg">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={img} alt="img" />
              <span>01.01.2023 - 31. 12.2023</span>
            </div>
            <p>
              Sélectionnez la période pour laquelle vous souhaitez télécharger
              vos données.
            </p>
          </div>
          <div className="ventes_dark_bg bg2">
            <h4>Télécharger les données</h4>
            <h5>
              Téléchargez les données de vos factures, commandes et offres pour
              la période sélectionnée sous forme de fichier Excel. Les données
              relatives aux positions de vos opérations seront exportées.Les
              tableaux croisés dynamiques présents dans l'exportation vous
              donnent une vue d'ensemble et peuvent être adaptés en quelques
              clics en fonction de vos besoins. Les données brutes sous-jacentes
              peuvent également être utilisées pour des analyses plus
              approfondies.
            </h5>
          </div>
          <div className="ventes_light_bg bg">
            <button>Télécharger le fichier Excel</button>
            <p>
              Optimisé pour MS Excel pour Mac à partir de la version 2011 et MS
              Excel pour Windows à partir de la version 2007
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
