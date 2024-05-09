import React from "react";
import "./Support.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import search from "../../assets/icons/search.svg";
import support from "../../assets/support_imgs/support.png";
import icon1 from "../../assets/support_imgs/gif1.gif";
import icon2 from "../../assets/support_imgs/gif2.gif";
import icon3 from "../../assets/support_imgs/gif3.gif";
import ic1 from "../../assets/support_imgs/ic1.svg";
import ic2 from "../../assets/support_imgs/ic2.svg";
import ic3 from "../../assets/support_imgs/ic3.svg";
import ic4 from "../../assets/support_imgs/ic4.svg";
import ic5 from "../../assets/support_imgs/ic5.svg";
import ic6 from "../../assets/support_imgs/ic6.svg";
import ic7 from "../../assets/support_imgs/ic7.svg";
import ic8 from "../../assets/support_imgs/ic8.svg";
import ic9 from "../../assets/support_imgs/ic9.svg";
import i10 from "../../assets/support_imgs/ic10.svg";
import i11 from "../../assets/support_imgs/ic11.svg";
import i12 from "../../assets/support_imgs/ic12.svg";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Support() {
  return (
    <>
      <Navbar />
      <div className="supportt">
        <img src={support} alt="img" className="support_img" />
        <div className="support_text">
          <h1>Comment pouvons-nous vous aider ?</h1>
          <h4>
            Aucuns frais cachés: mises à jour, sauvegardes et assistance 24h/24,
            7j/7, 365j/an, sont incluses dans tous nos packages .
          </h4>
          <div className="search_bar">
            <img src={search} alt="img" />
            <input
              type="text"
              placeholder="Poser une question ou rechercher des mots-clés"
            />
          </div>
        </div>
      </div>
      <div className="support_cards">
        <div className="support_card_left">
          <div>
            <img src={icon1} alt="img" />
            <h5>Mises à jours et nouveautés</h5>
          </div>
        </div>
        <div className="support_card_center">
          <div>
            <img src={icon2} alt="img" />
            <h5>Assistance aux Comptables </h5>
          </div>
        </div>
        <div className="support_card_right">
          <div>
            <img src={icon3} alt="img" />
            <h5>Formations</h5>
          </div>
        </div>
      </div>
      <div className="support_mini_cards">
        <Card icon={ic1} title="Comptabilité " />
        <Card icon={ic2} title="Page d’accueil" />
        <Card icon={ic3} title="Facture-FAJI" />
        <Card icon={ic4} title="Produits" />
        <Card icon={ic5} title="Salaires" />
        <Card icon={ic6} title="Projet" />
        <Card icon={ic7} title="Achat" />
        <Card icon={ic8} title="Contact" />
        <Card icon={ic9} title="Vente" />
        <Card icon={i10} title="ADD-ONS & Applications" />
        <Card icon={i11} title="Banking" />
        <Card icon={i12} title="Paramètres" />
      </div>
      <div className="support_achat_cards">
        <div className="achat_card1">
          <div className="achat_card1_head">
            <h1>Banking</h1>
          </div>
          <div className="achat_card1_body">
            <ul>
              <li>
                Comment puis-je lier mes transactions bancaires avec Faji ?
              </li>
              <li>Facture avec code QR</li>
              <li>Comment connecter mon e-banking à Faji ?</li>
              <li>Comment activer la banque PostFinance ?</li>
              <li>Comment activer la banque «UBS» bLink ?</li>
            </ul>
            <p>Afficher tout (+20)</p>
          </div>
        </div>
        <div className="achat_card2">
          <div className="achat_card2_head">
            <h1>Achat</h1>
          </div>
          <div className="achat_card2_body">
            <ul>
              <li>
                Créer des créanciers / une facture fournisseur (Nouveau Module
                d'Achat)
              </li>
              <li>Payer une facture fournisseur (Nouveau Module d'Achat)</li>
              <li>Créer une facture fournisseur</li>
              <li>Saisir des dépenses</li>
              <li>Différence dépense/facture fournisseur</li>
            </ul>
            <p>Afficher tout (+19)</p>
          </div>
        </div>
        <div className="achat_card3">
          <div className="achat_card3_head">
            <h1>Contacts</h1>
          </div>
          <div className="achat_card3_body">
            <ul>
              <li>
                A quoi faut-il veiller lors de l'importation des contacts ?
              </li>
              <li>Gérer les contacts</li>
              <li>Memos dans contacts</li>
              <li>Compte client - Vue d'ensemble des finances par contact</li>
              <li>Saisir des nouveaux contacts</li>
            </ul>
            <p>Afficher tout (+20)</p>
          </div>
        </div>
      </div>
      <div className="contact_support">
        <h1>Vous avez besoin d'assistance complémentaire   ?</h1>
        <h2>Écrivez-nous à l'adresse </h2>
        <button>contact@faji.com.tn</button>
      </div>      <BTTButton/>

      <Footer />
    </>
  );
}
const Card = ({ icon, title }) => {
  return (
    <div className="cardd_wrapper">
      <div className="cardd_img">
        <img src={icon} alt="img" />
      </div>
      <div className="cardd_title">
        <h4>{title}</h4>
      </div>
    </div>
  );
};
