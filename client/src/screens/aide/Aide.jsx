import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Card from "../../components/service_card/Card";
import arrowDown from "../../assets/images/arrow down header.svg";
import icon1 from "../../assets/dem_icon1.svg";
import icon2 from "../../assets/dem_icon2.svg";
import icon3 from "../../assets/dem_icon3.svg";
import ic1 from "../../assets/aide_i1.svg";
import ic2 from "../../assets/aide_i2.svg";
import ic3 from "../../assets/aide_i3.svg";
import ic4 from "../../assets/aide_i4.svg";
import img from "../../assets/trucs_img.svg";
import "./Aide.css";
import { Link } from "react-router-dom";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Aide() {
  return (
    <>
      <Navbar />
      <Header1
        title="Les utilisateurs aident les utilisateurs"
        span=""
        paragraph="Devenez expert Faji et gagnez de l'argent grâce à vos connaissances du logiciel!"
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
      <div className="aidee_text">
        <div>
          <span>
            Vous êtes un vrai spécialiste de Faji et connaissez le logiciel sur
            le bout des doigts? Pourquoi ne pas convertir votre savoir-faire en
            revenu complémentaire?
          </span>
          <p>
            Répondez aux questions posées par d'autres clients Faji et recevez 2
            CHF sur votre compte bancaire pour chaque réponse évaluée
            positivement. Il s'agit d'une activité entièrement volontaire: vous
            pouvez répondre aux questions d'autres utilisateurs quand vous en
            avez l'envie et le temps, sur votre ordinateur ou votre Smartphone.
          </p>
        </div>
      </div>
      <div className="aide_cards">
        {" "}
        <Card
          icon={ic1}
          title="L'assistance des utilisateurs par les utilisateurs"
          body="Gagnez de l'argent grâce à votre expertise Faji. Répondez en ligne aux questions posées par d'autres clients Faji sur le logiciel. Recevez 2 CHF pour chaque réponse évaluée de manière positive."
        />
        <Card
          icon={ic2}
          title="Développez votre savoir-faire"
          body="Enrichissez vos propres connaissances de Faji en répondant aux questions des autres utilisateurs. Vous pourrez ainsi tirer pleinement profit du logiciel pour votre entreprise."
        />
        <Card
          icon={ic3}
          title="Pas de panique, nous restons à vos côtés!"
          body="Si vous ne connaissez pas la réponse à une question ou si des questions nécessitent l'intervention de notre équipe d'assistance, vous pouvez simplement nous les transmettre!"
        />
        <Card
          icon={ic4}
          title="Trucs et astuces"
          body="Nous vous avons également rassemblé de nombreux conseils et astuces spécialement pour les experts Faji externes. N'hésitez pas à vous y référer pour les demandes posées par chat."
        />
      </div>
      <div className="aide_trucs">
        <div><img src={img} alt="img" /></div>
        <div>
          <h2>Trucs et astuces pour les experts Faji externes</h2>
          <p>voir plus</p>
        </div>
      </div>
      <div className="test_text">
        <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
        <h3>
          Jugez par vous-même en testant toutes les fonctionnalités de Faji,
          l'outil de gestion idéal des PME.
        </h3>
        <Link to="/trial">Testez gratuitement</Link>        <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
        <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
      </div>
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

