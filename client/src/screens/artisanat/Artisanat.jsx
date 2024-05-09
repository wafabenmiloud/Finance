import React from "react";
import arrowDown from "../../assets/images/arrow down header.svg";
import "./Artisanat.css";
import icon1 from "../../assets/artisanat_icon1.svg";
import icon2 from "../../assets/artisanat_icon2.svg";
import icon3 from "../../assets/artisanat_icon3.svg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Ratingswhitebg from "../../components/ratings_white_bg/Ratings_white_bg";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import img1 from "../../assets/art_img1.png";
import img2 from "../../assets/art_img2.png";
import img3 from "../../assets/art_img3.png";
import img4 from "../../assets/art_img4.png";
import img from "../../assets/trucs_img.svg";
import avatar from "../../assets/time_avatar.png";
import ToggleLine from "../../components/toggle_line/Toggle_line";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Artisanat() {
  return (
    <>
      <Navbar />
      <Header
        span="Better in business grâce à Faji "
        title="- comme Dein Maler"
        paragraph="Plus de 60'000 PME dont «Dein Maler» font déjà confiance à Faji. Découvrez ce que Faji apporte à l'artisanat et comment le logiciel permet de simplifier la comptabilité et l'administration."
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        cardTitle1="Tout dans un seul logiciel"
        cardTitle2="La flexibilité est un atout"
        cardTitle3="Gestion des finances optimale"
        text1="Une solution complète, simple et économique - exactement ce qu'il nous faut."
        text2="Comptabilité automatisée - travailler en ligne, partout, à tout moment."
        text3="Grâce aux tableaux de bord clairs, nous avons toujours tout sous les yeux."
      />
      <div className="artisanat_diagram_wrapper">
        <h1 className="artisanat_h1">
          <span className="artisanat_span">Le logiciel de gestion</span> pour
          l'artisanat
        </h1>
        <p className="artisanat_p">
          Découvrez comment les commerçants travaillent plus facilement au
          quotidien
        </p>
        <div className="artisanat_diagram">
          <div className="artisanat_diagram_right">
            <h1>
              Avec Faji, votre administration devient simple comme bonjour :
            </h1>
            <h2>Vos avantages</h2>
            <h3>
              Vous êtes commerçant indépendant ? Vous souhaiteriez pouvoir vous
              concentrer sur votre activité plutôt que sur la comptabilité ?
              Gérer facilement vos produits et votre boutique en ligne ? Vous
              appuyer sur un processus de commande rapide et intuitif ? Vous
              manquez de temps pour le marketing ? Alors il est temps d'utiliser
              notre logiciel de gestion : avec Faji, l'administration de votre
              entreprise devient un jeu d'enfant! Epargnez-vous plus de 3 heures
              de travail administratif par semaine ! Faji est une solution
              intuitive qui vous permet de mettre rapidement de l'ordre dans
              votre travail au quotidien tout en effectuant votre comptabilité
              en arrière-plan, de manière quasi automatique. Résultat : vous
              avez enfin du temps pour ce que vous aimez vraiment faire !
            </h3>
          </div>
          <div className="artisanat_diagram_left">
            <DiagramRow text="Une interface utilisateur intuitive pour plus de simplicité." />
            <DiagramRow text="L'automatisation des processus vous fait économiser jusqu'à 12 heures de travail administratif tous les mois." />
            <DiagramRow text="Un Tunisia Made Software de grande qualité qui vous épargne de nombreux soucis." />
            <DiagramRow text="Un service d'assistance compétent accessible gratuitement, 24h/24 et 7j/7." />
            <DiagramRow text="Une solution accessible à tout moment et où que vous soyez grâce au cloud." />
            <DiagramRow text="Boostez les performances du logiciel grâce à plus de 80 add-ons et extensions." />
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div className="artisanat_imgs">
        <p>
          Client Faji depuis 2017, «Dein Maler» est une entreprise de peinture
          basée à Dübendorf qui a adopté le logiciel avec enthousiasme :
        </p>
        <div className="artisanat_imgs_row">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </div>
      </div>
      <div className="artisanat_trucs">
        <div>
          <img src={img} alt="img" />
        </div>
        <div>
          <h2>Trucs et astuces pour les Artisanat </h2>
          <Link to="#" className="trucs_btn">
            Testez gratuitement
          </Link>
        </div>
      </div>
      <div className="artisanat_content">
        <h1>Qui est «Dein Maler»?</h1>
        <h2>L'amour du métier et le sens des couleurs</h2>
        <p>
          Nous sommes une entreprise de peinture professionnelle basée à
          Dübendorf depuis 2012. Nous travaillons dans les cantons de Zurich,
          Schaffhouse, Thurgovie et Saint-Gall. Notre passion ? Les travaux de
          peinture et de vernissage de tous types, à l'intérieur comme à
          l'extérieur, ainsi que les travaux de tapisserie et de petite
          plâtrerie. Le propriétaire Jörg Schäfer est peintre et vernisseur de
          formation. Avec plus de 20 ans d'expérience professionnelle, son point
          fort est le conseil aux clients. <br />
          Nous proposons un artisanat traditionnel avec des techniques de
          travail modernes et un excellent choix de produits à des tarifs
          abordables. Forts de plusieurs décennies d'expérience en tant que
          peintre et vernisseur, nous sommes en mesure de fournir une qualité
          irréprochable. Grâce à notre savoir-faire et à notre amour des
          couleurs, nous apportons des idées fraîches à vos murs, aux façades de
          votre maison ou à vos meubles. Car c'est un fait : les couleurs
          rendent heureux !
        </p>
        <div className="artisanat_client">
          <div className="artisanat_client_img">
            {" "}
            <img src={avatar} alt="img" />
          </div>
          <div className="artisanat_client_content">
            <h2>Jörg Schäfer</h2>
            <h5>Patron,Dein Maler</h5>
            <p>
              J'ai découvert Faji en 2015, grâce à des collègues. Entre fin 2017
              et début 2018, j'ai décidé de l'utiliser et l'ai mis en place pour
              ma propre entreprise. Je suis particulièrement enthousiasmé par la
              fonction bancaire, qui a d'ailleurs été installée immédiatement à
              l'époque. De plus, la mise en page est très bonne et claire. C'est
              très utile pour l'utilisation quotidienne. L'assistance est
              également super, tout comme le rapport qualité-prix.
            </p>
          </div>
        </div>
      
      </div>
  <div className="artisanat_faq">
          <h1>FAQ : Questions et réponses autour de l'utilisation de Faji</h1>
          <ToggleLine
            title="Pourquoi utilisez-vous Faji pour votre comptabilité ?"
            details="Faji m'a été recommandé par un collègue il y a de nombreuses années. Aujourd'hui encore, je suis très heureux qu'il m'ait conseillé ce logiciel de gestion. Faji me permet de consacrer beaucoup plus de temps à mon véritable métier et donc à nos clients. Avec Faji, nous gagnons beaucoup de temps et pouvons gérer notre entreprise de peinture de manière professionnelle."
          />
          <ToggleLine
            title="Qu'est-ce qui fait de Faji l'outil idéal pour votre administration ?"
            details="Qu'il s'agisse de gestion des contacts, de création d'offres et de factures, du traitement des paiements et de bien d'autres choses encore, Faji nous permet de tout faire rapidement et en toute simplicité. Nous pouvons donc nous concentrer sur notre entreprise. En cas de problème, l'assistance est gratuite et compétente. Grâce à la marketplace d'applications, je peux étendre très facilement les fonctionnalités du logiciel en fonction de mes besoins. En ce qui nous concerne, l'application partenaire XfleX pour les peintres est par exemple très utile."
          />
          <ToggleLine
            title="De votre point de vue et selon votre expérience, à qui convient Faji ?"
            details="Faji est le logiciel de gestion idéal pour les entrepreneurs indépendants comme moi."
          />
        </div>
      <Ratingswhitebg />
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
const Header = ({
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
            <span style={{ color: "#25A7FF" }}>{span}</span>
            {title}
          </h1><br />
          <p>{paragraph}</p>
          <a href="/" className="header1_btn">
            Testez gratuitement
          </a>
        </div>
        <div className="header1_advantages">
          <h2>
            Vendez rapidement, facilement <br /> et en toute sécurité{" "}
            <span> - Avec votre propre boutique en ligne</span>
            <img src={arrowDown} alt="img" />
          </h2>
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
const DiagramRow = ({ text }) => {
  return (
    <div class="diagram_row">
      <div className="arch_tic_wrapper">
        <BsCheckLg className="arch_tic_icon" />
      </div>
      <div class="diagram_line"></div>
      <div class="content">
        <p class="diagram_content">{text}</p>
      </div>
    </div>
  );
};
