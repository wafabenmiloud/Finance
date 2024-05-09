import React from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./AnalyseVente.css";
import icon1 from "../../assets/op1.svg";
import icon2 from "../../assets/op2.svg";
import icon3 from "../../assets/op3.svg";
import icon4 from "../../assets/op4.svg";
import icon5 from "../../assets/op5.svg";
import icon6 from "../../assets/op6.svg";
import icon7 from "../../assets/op7.svg";
import Footer from "../../components/footer_dash/FooterDash";

export default function AnalyseVente() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="analyse_ventes">
        <h2>Autres options</h2>
        <div className="analyse_ventes_section">
          <Card
            icon={icon1}
            title="Afficher les livraisons"
            body="Aperçu de tous les bulletins de livraison"
            className="ventes_light_bg"
          />
          <Card
            icon={icon2}
            title="Créer des factures de commandes clients récurrentes les données"
            body="Génération des factures récurrentes à la date d'échéance"
            className="ventes_dark_bg"
          />

          <Card
            icon={icon3}
            title="Exporter des données"
            body="La fonction d'exportation vous permet d'exporter facilement tous les documents que vous avez créés au cours d’une période définissable."
            className="ventes_light_bg"
          />
          <Card
            icon={icon4}
            title="Extraits de compte"
            body="Aperçu de tous les extraits de comptes clients créés"
            className="ventes_dark_bg"
          />
          <Card
            icon={icon5}
            title="Procédures de relance (rappels des factures en suspens)"
            body="Faire passer les factures en retard au niveau de relance suivant"
            className="ventes_light_bg"
          />
          <Card
            icon={icon6}
            title="Saisir des paiements (manuellement)"
            body="Compensation de crédits avec des factures en suspens et affectation de paiements reçus à des factures en suspens."
            className="ventes_dark_bg"
          />
          <Card
            icon={icon7}
            title="Factures avec avoir client disponible"
            body="Aperçu de toutes les factures clients sur lesquelles des crédits ou avoirs en suspens peuvent être appliqués"
            className="ventes_light_bg none"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}

const Card = ({ icon, title, body, className }) => {
  return (
    <div className={className}>
      <div className="ventes_card_col1">
        <img src={icon} alt="img" />
      </div>
      <div className="ventes_card_col2">
        <h5>{title}</h5>
        <h6>{body}</h6>
      </div>
    </div>
  );
};
