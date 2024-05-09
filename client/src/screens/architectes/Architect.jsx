import React from "react";
import arrowDown from "../../assets/images/arrow down header.svg";
import "./Architect.css";
import icon1 from "../../assets/artisanat_icon1.svg";
import icon2 from "../../assets/artisanat_icon2.svg";
import icon3 from "../../assets/artisanat_icon3.svg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Ratingswhitebg from "../../components/ratings_white_bg/Ratings_white_bg";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import img1 from "../../assets/arch_img1.png";
import img2 from "../../assets/arch_img2.png";
import img3 from "../../assets/arch_img3.png";
import img4 from "../../assets/arch_img4.png";
import img from "../../assets/trucs_img.svg";
import c1 from "../../assets/client1.png";
import c2 from "../../assets/client2.png";
import c3 from "../../assets/client3.png";
import {BsStarFill, BsStarHalf,BsStar} from "react-icons/bs";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Architect() {
  return (
    <>
      <Navbar />
      <Header
        span="Mieux dans les affaires grâce à Faji "
        title="- aussi pour les architectes et les ingénieurs"
        paragraph="Plus de 60'000 PME font déjà confiance à Faji, dont des architectes suisses. Découvrez comment Faji soutient également les bureaux d'architectes et d'ingénieurs et pourquoi la comptabilité ainsi que l'administration peuvent aussi être simples."
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        cardTitle1="Tout dans un seul logiciel"
        cardTitle2="La flexibilité est un atout"
        cardTitle3="Gestion des finances optimale"
        text1="La solution complète, simple et économique."
        text2="Comptabilité automatisée - travail numérique de n'importe où, n'importe quand."
        text3="Vous avez ainsi tout ce qui concerne les finances bien en main."
      />
      <div className="architect_diagram_wrapper">
        <h1 className="architect_h1">
          <span className="architect_span">Le logiciel de gestion</span> pour
          les bureaux d'architectes et d'ingénieurs
        </h1>
        <p className="architect_p">
          Découvrez comment les bureaux d'architectes et d'ingénieurs se
          simplifient le travail au quotidien
        </p>
        <div className="architect_diagram">
          <div className="architect_diagram_right">
            <h1>
              Avec Faji, votre administration devient simple comme bonjour :
            </h1>
            <h2>Vos avantages</h2>
            <h3>
              Vous êtes indépendant en tant qu'architecte ou ingénieur ? Vous
              souhaitez enfin vous concentrer sur votre travail et moins sur la
              comptabilité ? Gérer vos clients de manière simple et claire ?
              Écrire rapidement et facilement des offres et des factures ? Vous
              manquez de temps pour les nouvelles commandes et le marketing ?
              Alors il est temps d'utiliser notre logiciel de gestion :
              l'administration en toute simplicité - avec Faji ! Économisez plus
              de 3 heures de travail de bureau chaque semaine ! Faji n'est pas
              compliqué, met rapidement de l'ordre dans vos factures et vous
              facilite le travail de bureau quotidien, tandis que la
              comptabilité s'effectue presque automatiquement en arrière-plan.
              Vous avez ainsi enfin plus de temps à consacrer à ce qui vous fait
              vraiment plaisir !
            </h3>
          </div>
          <div className="architect_diagram_left">
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
      <div className="architect_imgs">
        <p>
          Client Faji depuis 2017, «Dein Maler» est une entreprise de peinture
          basée à Dübendorf qui a adopté le logiciel avec enthousiasme :
        </p>
        <div className="architect_imgs_row">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </div>
      </div>
      <div className="architect_trucs">
        <div>
          <img src={img} alt="img" />
        </div>
        <div>
          <h2>Trucs et astuces pour les Ingénieurs </h2>
          <Link to="#" className="trucs_btn">
            Testez gratuitement
          </Link>
        </div>
      </div>
      <div className="architect_content">
        <h2>
          Plus de 60'000 indépendants, de petites entreprises et de start-up
          font déjà confiance à Faji{" "}
          <span>
            {" "}
            - y compris de nombreux bureaux d'architectes et d'ingénieurs.
          </span>
        </h2>

        <div className="architect_imgs_row">
          <Card
            image={c1}
            name="Tom Slogn"
            rate={5}
            title="Lorem ipsum dolor"
            body="En tant que petite agence de Design, le temps et la vue d'ensemble sont des valeurs précieuses . Avec Faji, la comptabilité devient simple et pratique et laisse plus d'espace à la créativité ."
          />
          <Card
            image={c2}
            name="Lukas Schnurrenberger
           "
            rate={5}
            title="AVP Media-Design GmbH
           "
            body="Grâce à Faji, il est facile de garder une vue d'ensemble de l'offre à la facture. Cela libère des ressources que nous pouvons investir dans notre activité principale."
          />
          <Card
            image={c3}
            name="Jörg Schäfer
"
            rate={5}
            title="Lorem ipsum dolor"
            body="J'ai découvert Faji en 2015, grâce à des collègues. Entre fin 2017 et début 2018, j'ai décidé de l'utiliser et l'ai mis en place pour ma propre entreprise. Je suis particulièrement enthousiasmé par la fonction bancaire, qui a d'ailleurs été installée immédiatement à l'époque. De plus, la mise en page est très bonne et claire. C'est très utile pour l'utilisation quotidienne. L'assistance est également super, tout comme le rapport qualité-prix."
          />
        </div>
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
      </div>      <BTTButton/>

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
            Pourquoi Faji - le logiciel de gestion pour les <br /> bureaux
            d'architectes et d'ingénieurs
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
const Card = ({ image, name, rate, title, body }) => {
  return (
    <>
      <div className="architect_test_card_wrapper">
        <div className="architect_test_card1">
          <img src={image} alt="img" />
        </div>
        <div className="architect_test_card2">
          <h2>{name}</h2>
          <h3>{title}</h3>
          <div className="rate">
            <StarRating rating={rate} />
          </div>
          <h4>{body}</h4>
        </div>
      </div>
    </>
  );
};
const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i}> <BsStarFill color="#FFD600" size={20}/></span>);
    }
    if (hasHalfStar) {
      stars.push(<span key={filledStars}><BsStarHalf color="#FFD600" size={20} className="bs"/></span>);
    }
    for (let i = filledStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      stars.push(<span key={i}><BsStar color="#FFD600" size={20}/></span>);
    }
    return stars;
  };
  return <div className="star-rating">{renderStars()}</div>;
};