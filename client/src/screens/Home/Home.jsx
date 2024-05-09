import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Card from "../../components/service_card/Card";
import icon1 from "../../assets/home_imgs/icon1.svg";
import icon2 from "../../assets/home_imgs/icon2.svg";
import icon3 from "../../assets/home_imgs/icon3.svg";
import icon4 from "../../assets/home_imgs/icon4.svg";
import partner1 from "../../assets/home_imgs/partner1.svg";
import partner2 from "../../assets/home_imgs/partner2.svg";
import partner3 from "../../assets/home_imgs/partner3.svg";
import partner4 from "../../assets/home_imgs/partner4.svg";
import partner5 from "../../assets/home_imgs/partner5.svg";
import img1 from "../../assets/home_imgs/service1.png";
import img2 from "../../assets/home_imgs/service2.png";

import Testimonials from "../../components/testimonials/Testimonials";
import { BsCheckLg } from "react-icons/bs";
import Trial from "../../components/trial/Trial";
import BTTButton from "../../components/BTTButton/BTTButton";
export default function Home() {
  return (
    <div className="home_screen">
      <Navbar />
      <Header />
      <section id="about">
        <div className="textt">
          <h1>
            <span>Faji</span> facilite votre administration
          </h1>
          <br />
          <h2>
            Vous manquez de temps pour gérer vos commandes et le marketing ? Vos
            factures s'empilent et vous ne disposez pas de vue d'ensemble ? La
            comptabilité vous rend fou ? Faji offre toutes les fonctionnalités
            dont vous avez besoin pour gérer votre entreprise avec succès:
            gestion intuitive des contacts, création de devis avec design
            personnalisé, factures générées en un clic, rappels automatiques,
            interfaces e-banking et plus encore .
          </h2>
        </div>
        <div className="cards">
          <div className="cards_row">
            {" "}
            <Card
              icon={icon1}
              title="Assistance gratuite 24h/24, 7j/7"
              body="Notre équipe de conseillers compétents vous assiste gratuitement à tout moment  ."
            />
            <Card
              icon={icon2}
              title="Faites des économies"
              body="Réduisez chaque année vos frais de comptable d'un tiers  ."
            />
          </div>
          <div className="cards_row">
            <Card
              icon={icon3}
              title="Tunisia Made Software"
              body="Vos données sont stockées en toute sécurité en Suisse  ."
            />
            <Card
              icon={icon4}
              title="Gagnez du temps"
              body="L'automatisation des processus vous épargne jusqu'à 12 heures de travail administratif tous les mois  ."
            />
          </div>
        </div>
      </section>
      <section id="services">
        <div className="services">
          <div className="serv_left">
            <div className="img_wrapper1">
              <img src={img1} alt="img" />
            </div>
            <div className="img_wrapper">
              <img src={img2} alt="img" />
            </div>
          </div>
          <div className="serv_right">
            <h1>
              La solution pour toutes celles et ceux qui ne veulent plus perdre
              de temps avec la comptabilité .
            </h1>
            <h2>
              FAji offre toutes les fonctions dont vous avez besoin pour la
              gestion de votre entreprise .
            </h2>
            <div className="lines">
              <Line span="Gestion des contacts" text="Votre CRM personnel" />
              <Line span="Processus de vente" text="De l'offre à la facture" />
               <Line
              span="Gestion des dépenses"
              text="Un traitement optimal de vos dépenses et de vos pièces comptables"
            /> 
              <Line span="Comptabilité" text="Le bilan annuel simplifié" />
              <Line
                span="Comptabilité de la paie"
                text="Optimisée pour les petites entreprises suisses"
              />
              <Line
                span="Banking"
                text="Rapprochement automatique avec le compte bancaire"
              />
              <Line
                span="Extensions"
                text="Pour tous vos besoins spécifiques"
              />
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="btn1">Testez gratuitement pendant 30 jours</button>
          <button className="btn2">
            En savoir plus sur les fonctionnalités de Faji
          </button>
        </div>
      </section>
      <section id="testimonials">
        <Testimonials title="Plus de 60'000 indépendants, petites entreprises et start-ups font déjà confiance à " span="Faji"/>
      </section>
      <section id="partners">
        <h1>Des partenaires solides</h1>
        <h2>
          En tant que client Faji, vous bénéficiez de notre collaboration avec
          des partenaires solides .
        </h2>
        <div className="partners_logo">
          <img src={partner1} alt="img" />
          <img src={partner2} alt="img" />
          <img src={partner3} alt="img" />
          <img src={partner4} alt="img" />
          <img src={partner5} alt="img" />
        </div>
      </section>
      <Trial />
      <section id="contact">
        <h4>
          Avez-vous encore des questions ? Appelez-nous:{" "}
          <span>+216 71 808 862</span>{" "}
        </h4>
        <h4>
          Si vous préférez nous écrire: <span>contact@faji.com.tn</span>
        </h4>
      </section>
      <BTTButton/>
      <Footer />

    </div>
  );
}
const Line = ({ span, text }) => {
  return (
    <div className="line">
      <div className="tic_wrapper">
        <div className="tic">
          <BsCheckLg className="tic_icon" />
        </div>
      </div>
      <div className="line_text">
        <h4>
          <span>{span} - </span>
          {text}
        </h4>
      </div>
    </div>
  );
};
