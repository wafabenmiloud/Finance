import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Testimonials from "../../components/testimonials/Testimonials";
import Ratings from "../../components/ratings_white_bg/Ratings_white_bg";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import img1 from "../../assets/test_img1.png";
import img2 from "../../assets/test_img2.png";
import img3 from "../../assets/test_img3.png";
import "./Activities.css"
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Activities() {
  return (
    <>
      <Navbar />
      <div className="activities_title">
      <span>Secteurs</span>
         <p>Plus de 60'000 PME issues des secteurs les plus divers font déjà confiance à Faji. Découvrez comment Faji soutient chaque branche et pourquoi la comptabilité et l'administration peuvent aussi être simples.</p>
      </div>
      <div className="activities_cards">
        
          <TestCard
            image={img1}
            span="Artisanat"
            body="Vous êtes artisan indépendant ? Vous souhaiteriez pouvoir vous concentrer sur votre travail et non sur la comptabilité ? Gérez vos clients en toute simplicité ? Rédiger des offres et des factures en quelques clics ? Vous manquez de temps pour les nouvelles commandes et le marketing ? Alors il est temps d'utiliser notre logiciel de gestion : l'administration en toute simplicité - avec Faji !"
            link="/artisanat"
            
          />
          <TestCard
            image={img2}
            span="Commerce"
            body="Vous êtes commerçant indépendant ? Vous souhaiteriez pouvoir vous concentrer sur votre activité plutôt que sur la comptabilité ? Gérer facilement vos produits et votre boutique en ligne ? Vous appuyer sur un processus de commande rapide et intuitif ? Vous manquez de temps pour le marketing ? Alors il est temps d'utiliser notre logiciel de gestion : l'administration en toute simplicité - avec Faji !"
            link="/commerce"

            
          />
          <TestCard
            image={img3}
            span="Architectes et ingénieurs"
            body="Vous êtes indépendant en tant qu'architecte ou ingénieur ? Vous souhaitez enfin vous concentrer sur votre travail et moins sur la comptabilité ? Gérer vos clients de manière simple et claire ? Écrire rapidement et facilement des offres et des factures ? Vous manquez de temps pour les nouvelles commandes et le marketing ? Alors il est temps d'utiliser notre logiciel de gestion : l'administration en toute simplicité - avec Faji !"
            link="/architect"

            
          />
          <TestCard
            image={img1}
            span="Société Immobilière"
            body="En tant que propriétaire d'une société immobilière, il est évident que vous voyagez beaucoup. Vous rencontrez des difficultés à organiser votre administration et votre comptabilité lors de vos déplacements? Nous avons la solution! Avec Faji, vous bénéficiez d'une administration simple et professionnelle. Grâce à notre logiciel basé sur le cloud, vous pouvez garder un œil sur les chiffres les plus importants à tout moment. Découvrez Faji - la solution optimale pour l'administration et la comptabilité."
            link="/immobiliere"

            
          />
          <TestCard
            image={img2}
            span="Agences et prestataires de services"
            body="L'administration et la comptabilité vous prennent trop de temps ? Vous en avez assez de passer des heures à facturer péniblement vos projets à la main ? Alors il est temps d'utiliser notre logiciel de gestion pour agences. Grâce à la gestion de projet intégrée, vous disposez de plus de temps pour vos clients et vous effectuez facilement le décompte de salaire mensuel de vos collaborateurs. Le temps est venu d'utiliser un logiciel d'administration et de comptabilité fiable et moderne - Faji."
            link="/agences"
            
          />
          <TestCard
            image={img3}
            span="Entreprises de nettoyage"
            body="L'administration de votre entreprise de nettoyage vous pèse? Vous souhaitez consacrer plus de temps à vos commandes? Alors il est temps de passer à une administration simple et rapide avec le logiciel de gestion Faji. Créez des offres professionnelles et convainquez vos clients grâce à un design unique. La gestion des salaires vous sera également facilitée. Il est temps de passer à une administration moderne - avec Faji!"
            link="/nettoyage"
            
          />
      </div>
      <Testimonials title="Ce que disent " span="nos clients"/>

      <Ratings />
      <div className="test_text">
        <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
        <h3>
          Jugez par vous-même en testant toutes les fonctionnalités de Faji,
          l'outil de gestion idéal des PME.
        </h3>
        <Link to="/trial">Testez gratuitement</Link>        <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
        <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
      </div>{" "}
      <BTTButton/>

      <Footer />
    </>
  );
}
const TestCard = ({ image, body, span,link }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <div className="activities_card">
      <div className="activities_card_img">
        <img src={image} alt="img" />
      </div>
      <div className="activities_card_content">
        
        <p><span>{span}</span><br /><br />{body}</p>
        <div className="divider"></div>
        <div className="activities_card_btn">
          <button onClick={scrollToTop}><Link  to={link} style={{color:'white'}}>Voir plus</Link></button>
        </div>
      </div>
    </div>
  );
};