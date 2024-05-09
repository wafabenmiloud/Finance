import React from "react";
import "./VueFonctions.css";
import Navbar from "../../components/navbar_dash/NavbarDash";
import Footer from "../../components/footer_dash/FooterDash";

export default function VueFonctions() {
  return (
    <>
      <Navbar />
      <div className="vue_entreprise">
        <h2>Vue d’ensemble des paramètres - Fonctions et modules</h2>
        <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
          <div className="vue_entreprise_content">
            <h3>Paramètres généraux</h3>
            <hr />
            <a href="/">Traductions</a>
            <a href="/">Modèles de paiement</a>
            <a href="/">Niveaux de relance</a>
            <a href="/">Services de paiement</a>
            <a href="/">Modèles d'e-mail</a>
            <a href="/">Expéditeurs des e-mails</a>
            <a href="/">Interlocuteurs (sans login)</a>
            <hr />
            <h3>Paramètres de pays et des monnaies</h3>
            <hr />

            <a href="/">Formats de langue</a>
            <a href="/">Pays</a>
            <a href="/">Monnaies et cours</a>
          </div>
          <div className="vue_entreprise_content">
            <h3>Types de documents – Paramètres par défaut</h3>
            <hr />
            <a href="/">Offre</a>
            <a href="/">Commande client</a>
            <a href="/">Facture</a>
            <a href="/">Livraison</a>
            <a href="/">Crédit</a>
            <a href="/">Relevé de compte</a>
            <a href="/">Commande</a>
            <a href="/">Facture fournisseur</a>
            <a href="/">Dépense</a>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
