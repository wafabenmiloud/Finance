import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Ratings from "../../components/ratings/Ratings";
import arrowDown from "../../assets/images/arrow down header.svg";
import icon1 from "../../assets/dem_icon1.svg";
import icon2 from "../../assets/dem_icon2.svg";
import icon3 from "../../assets/dem_icon3.svg";
import icon4 from "../../assets/dem_icon4.svg";
import "./Demarrage.css";
import { Link } from "react-router-dom";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Demarrage() {
  return (
    <>
      <Navbar />
      <Header1
        title="Tout ce dont vous avez besoin"
        span=" pour bien démarrer"
        paragraph="Commencer à utiliser un nouveau logiciel demande parfois des efforts significatifs. Avec Faji, c'est loin d'être le cas! Nous restons à vos côtés et vous assistons à tout moment, en fonction de vos besoins. Démarrons ensemble!"
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        cardTitle1="Gagnez 3,3h par semaine"
        cardTitle2="Traitement 39% plus rapide"
        cardTitle3="67% des utilisateurs sont plus performants"
        text1="Travaillez plus efficacement grâce à Faji: les utilisateurs du logiciel réduisent leur temps de travail administratif de 3,3 heures par semaine en moyenne."
        text2="Le traitement efficace des commandes (offres, facturation et relances de paiement notamment) accélère le traitement de vos commandes de 39% en moyenne."
        text3="2 utilisateurs sur 3 déclarent avoir de meilleurs résultats depuis qu'ils utilisent le logiciel de gestion."
      />
      <div className="dem_text">
        <div>
          <h6>Tout savoir sur le cloud</h6>
          <p>
            Qu'est-ce que le cloud? Où les données sont-elles stockées? Quels
            sont les avantages du cloud? Toutes les réponses à ces questions et
            bien d'autres.
          </p>
        </div>
        <div>
          <img src={icon4} alt="img" />
        </div>
       
      </div>
 <div className="dem_cards">
          {" "}
          <CardRv span="" title="Un package optimal pour chacun" text="Tout au long de votre période d'essai, profitez gratuitement et sans engagement du package Pro+ et de toutes ses fonctionnalités. Au moment d'activer votre compte Faji, choisissez entre trois packages différents: Starter, Pro ou Pro+. Vous ne savez pas encore quel package choisir?" />
          <CardNr title="Séminaires en ligne gratuits" span="" text="Prenez part à nos webinaires gratuits! Nous vous donnerons de nombreux conseils et astuces pratiques et vous montrerons comment travailler plus efficacement avec Faji. Vous êtes intéressé?" />
          <CardRv span=" démarrage facile" title="Aide à la configuration pour un" text="Nous vous proposons des services d'aide à la configuration personnalisés. Que vous souhaitiez faire configurer votre comptabilité ou importer vos contacts et vos produits, nous sommes à votre entière disposition." />
          <CardNr title="— 24 heures sur 24" span="Vidéos explicatives " text="Retrouvez divers articles d'aide ou enregistrements de webinaires portant sur différentes fonctionnalités du logiciel sur Faji TV — 24h/24 et 7j/7." />
        </div><Ratings />
        <div className="test_text">
        <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
        <h3>
          Jugez par vous-même en testant toutes les fonctionnalités de Faji,
          l'outil de gestion idéal des PME.
        </h3>
        <Link to="/trial">Testez gratuitement</Link>        <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
        <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
      </div>
      <BTTButton/>

      <Footer />
    </>
  );
}
const Header1 = ({
  title,
  span,
  paragraph,
  icon1,
  icon2,
  icon3,
  cardTitle1,
  cardTitle2,
  cardTitle3,
  text1,
  text2,
  text3,
}) => {
  return (
    <>
      <div className="header1">
        <div className="header1_test">
          <h1>
            {title}
            <span style={{ color: "#25A7FF" }}>{span}</span>
          </h1>
          <p style={{ width: "50%" }}>{paragraph}</p>
          <a href="/" className="header1_btn">
            Testez gratuitement
          </a>
        </div>
        <div className="header1_advantages">
          <h2>
            Pourquoi choisir Faji? <img src={arrowDown} alt="img" />
          </h2>
          <h4>Pour avoir plus de temps pour ce que vous aimez faire</h4>
          <div className="header1_cards">
            <div className="header1_card">
              <img src={icon1} className="header1_card_icon" alt="img"></img>
              <h3>{cardTitle1}</h3>
              <p>{text1}</p>
            </div>
            <div className="header1_card">
              <img src={icon2} className="header1_card_icon" alt="img"></img>
              <h3>{cardTitle2}</h3>
              <p>{text2}</p>
            </div>
            <div className="header1_card">
              <img src={icon3} className="header1_card_icon" alt="img"></img>
              <h3>{cardTitle3}</h3>
              <p>{text3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CardNr = ({ span, title, text }) => {
  return (
    <div className="time_card_normal">
      <div className="time_card_normal_blue"></div>
      <div className="time_card_normal_content">
        <h1><span> {span} </span>
          {title}
          
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CardRv = ({ span, title, text }) => {
  return (
    <div className="time_card_reverse">
      <div className="time_card_reverse_blue"></div>
      <div className="time_card_reverse_content">
        <h1>
          {" "}
          {title}
          <span> {span} </span>
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
