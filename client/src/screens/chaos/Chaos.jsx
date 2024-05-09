import React from "react";
import "./Chaos.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Chaos() {
  return (
    <>
      <Navbar />
      <div className="chaos_title">
        <h1 className="h1">
          <span className="span">De l'ordre plutôt que le chaos: </span> un logiciel CRM pour une
          gestion de la clientèle unifiée.
        </h1>
        <p>Toute la gestion des clients dans un seul logiciel.</p>
        <button>Testez gratuitement</button>
        <p className="p">
          La gestion de la clientèle est au centre de tous les processus
          opérationnels. Les contacts professionnels et le réseau personnel
          forment la base initiale de nombreuses procédures de travail. Ainsi,
          l'administration des contacts et des clients représente un rôle
          central dans la Gestion des Relations avec les Clients (GRC ou CRM).
        </p>
        <CardNr
          span="Qu'est-ce que la GRC, Gestion des Relations avec les Clients (de l'anglais CRM - Customer Relationship Management)?"
          text="CRM, l'abréviation pour Customer Relationship Management, se traduit par Gestion des Relations avec les Clients. Avec la GRC, les entreprises gèrent et orientent les relations existantes et potentielles avec leurs clients. Les liens avec les clients et la fidélisation systématique des ces relations professionnelles sont essentiels pour initier des transactions qui mèneront l'entreprise à un succès durable."
        />
      </div>
      <div className="chaos_text">
        <h1>
          Tous les clients et personnes de contact dans une même base de données
        </h1>
        <p>
          Mettez en place une gestion centralisée des contacts. Vous pouvez
          ainsi exploiter des synergies et conserver une bonne vue d'ensemble.
          Veillez à ne pas intégrer que vos clients dans la base de données,
          mais aussi toutes les autres parties prenantes avec qui vous êtes en
          contact. Pensez à vos fournisseurs, par exemple, ou encore à vos
          investisseurs et partenaires — toutes les personnes qui sont
          importantes pour votre entreprise.
        </p>
      </div>
      <br />
      <div className="chaos_text">
        <h1>Un atout pour les PME: un logiciel de gestion de la clientèle</h1>
        <p>
          Au lieu d'utiliser Excel pour la gestion de vos clients, utilisez un
          logiciel professionnel de gestion de clientèle. C'est ici que Faji
          intervient: la gestion des clients (GRC) est un élément central de
          notre logiciel d'entreprise. À l'aide de divers types de contacts et
          catégories, vous maintenez une vue d'ensemble.
        </p>
        <p>
          À partir de vos contacts enregistrés, vous créez directement des
          offres ou des devis en bonne et due forme, rédigez des factures ou
          commandez des marchandises chez votre fournisseur. Vous avez ainsi
          tout à portée de main et tout ce dont vous avez besoin pour diriger
          votre entreprise avec succès.
        </p>
      </div>
      <br />
      <div className="chaos_text">
        <h1>Avantages des programmes de gestion de clientèle</h1>
        <p>Les avantages d'un programme de gestion de clientèle pour PME en résumé: </p>
        <ul>
          <li>
            <p>
            Synergies: en partant de la gestion de clientèle centralisée, vous dirigez tous les autres processus opérationnels.
            </p>
          </li>
          <li>
            <p> Efficacité: les étapes de travail redondantes sont évitées ; vous travaillez plus vite et de manière plus efficace. </p>
          </li>
          <li>
            <p>Vue d’ensemble: grâce à un logiciel professionnel de gestion de la clientèle, vous conservez une vue d’ensemble. </p>
          </li>
          <li>
            <p>Gestion des clients: grâce au logiciel, votre PME, est à même de répondre aux besoins de vos clients et de mieux les satisfaire.</p>
          </li>
        </ul>
      </div>

      <br />
      <div className="chaos_text">
        <h1>
        Un programme de gestion de la clientèle basé sur le chaos
        </h1>
        <p>
        Une gestion de la clientèle basée sur le chaos avec Faji, vous offre des avantages supplémentaires: 
        </p>
        <ul>
          <li>
            <p>
            Synergies: en partant de la gestion de clientèle centralisée, vous dirigez tous les autres processus opérationnels.
            </p>
          </li>
          <li>
            <p> Efficacité: les étapes de travail redondantes sont évitées ; vous travaillez plus vite et de manière plus efficace. </p>
          </li>
          <li>
            <p>Vue d’ensemble: grâce à un logiciel professionnel de gestion de la clientèle, vous conservez une vue d’ensemble. </p>
          </li>
          <li>
            <p>Gestion des clients: grâce au logiciel, votre PME, est à même de répondre aux besoins de vos clients et de mieux les satisfaire.</p>
          </li>
        </ul>
      </div>

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

const CardNr = ({ span, title, text }) => {
  return (
    <div className="time_card_normal">
      <div className="time_card_normal_blue"></div>
      <div className="time_card_normal_content">
        <h1>
          <span> {span} </span>
          {title}
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};


