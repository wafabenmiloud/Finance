import React from "react";
import "./Automation.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Ratings from "../../components/ratings/Ratings";
import icon1 from "../../assets/auto_i1.svg";
import icon2 from "../../assets/auto_i2.svg";
import icon3 from "../../assets/auto_i3.svg";
import icon4 from "../../assets/auto_i4.svg";
import ic1 from "../../assets/auto_icon1.svg";
import ic2 from "../../assets/auto_icon2.svg";
import ic3 from "../../assets/auto_icon3.svg";
import ic4 from "../../assets/auto_icon4.svg";
import avatar from "../../assets/time_avatar.png";
import BTTButton from "../../components/BTTButton/BTTButton";

import { Link } from "react-router-dom";
export default function Automation() {
  return (
    <>
      <Navbar />
      <div className="auto_title">
        <h1><span>Automatisez les processus</span> de votre entreprise avec Faji et Zapier</h1>
        <p>Testez le logiciel de gestion Faji sans engagement et gratuitement pendant 30 jours</p>
        <Link to="/trial">Testez gratuitement</Link>      </div>
      <div className="time_header_cards">
        <HeaderCard
          className="time_header_card1"
          title="Assistance gratuite"
          body="24h/24, 7j/7"
        />
        <HeaderCard
          className="time_header_card2"
          title="Vos données en"
          body="sécurité en Suisse"
        />
        <HeaderCard
          className="time_header_card3"
          title="Essai gratuit"
          body="sans carte de crédit"
        />
        <HeaderCard
          className="time_header_card4"
          title="Plus de"
          body="60'000 clients"
        />
        <HeaderCard
          className="time_header_card5"
          title="Un logiciel plusieurs fois "
          body="récompensé"
        />
      </div>
      <div className="auto_title2">

        <p>Avec Faji, le logiciel de gestion basé sur le web conçu pour les petites entreprises, effectuez toutes vos tâches administratives au sein d'un logiciel intuitif, en toute simplicité et en vous appuyant sur l'automatisation: du traitement des commandes et des factures à la comptabilité, en passant par la saisie du temps, la gestion des clients, des produits et des projets. Pour encore plus d'automatisation, connectez Faji à la plateforme en ligne Zapier: celle-ci vous permettra de relier Faji à plus de 1000 applications web! Voici quelques-uns des processus que vous pourrez automatiser grâce à Faji et Zapier:</p>
      </div>
      <div className="auto_cards">
        {" "}
        <Card
          icon={ic1}
          title="Gagnez du temps et optimisez vos performances"
          body="Notre mission? Aider les petites entreprises à devenir plus performantes en automatisant les processus - pour que vous puissiez vous consacrer à ce que vous aimez vraiment faire. Avec Faji et l'add-on Zapier, automatisez les processus entre Faji et plus de 1000 applications! Boostez votre efficacité en éliminant vos tâches les plus chronophages."
        />
        <Card
          icon={ic2}
          title="Un logiciel simple et intuitif"
          body="Un logiciel de gestion ne doit pas faire perdre de temps. Voilà pourquoi Faji est si intuitif et facile à utiliser. La configuration de votre compte se fait en quelques étapes toutes simples. Et si vous avez besoin d'aide, notre équipe d'assistance gratuite et conviviale est à votre entière disposition pour vous aider et vous conseiller."
        />
        <Card
          icon={ic3}
          title="Le tout sur une seule plateforme."
          body="Avec le logiciel de gestion Faji, vous avez tout ce dont vous avez besoin pour votre petite entreprise sur une seule et même plateforme: traitement des commandes, comptabilité, gestion des projets et des clients, saisie des heures de travail, et bien plus. Faji propose également des interfaces entre clients, fournisseurs, collaborateurs,   comptables, banques et compagnies d'assurances, ainsi qu'une connexion à une multitude d'applications web via Zapier. La coopération s'en trouve simplifiée et l'efficacité de votre entreprise décuplée."
        />
        <Card
          icon={ic4}
          title="Accédez à Faji à tout moment, où que vous soyez"
          body="Faji est un logiciel de gestion basé sur le web. La connexion avec d'autres applications web telles que Zapier est donc on ne peut plus simple. Autre avantage: Faji est accessible à tout moment, où que vous soyez - que vous utilisiez un ordinateur de bureau, un ordinateur portable, une tablette ou un Smartphone lors de vos déplacements. Il vous suffit d'avoir une connexion Internet pour accéder à toutes les informations importantes pour votre entreprise."
        />
      </div>
      <div className="auto_client">
        <div></div>
        <div></div>
        <div className="artisanat_client_img">
          {" "}
          <img src={avatar} alt="img" />
        </div>
        <div className="artisanat_client_content">
          <h2>Matthias König</h2>
          <h5>Wood Room GmbH</h5>
          <p>
            Je peux désormais me consacrer entièrement à mon travail et à mes clients. Grâce à Faji, j'ai mon administration bien en main.
          </p>
        </div>
        <br />
        <div className="auto_client_text">
          <h1>Faji + Zapier: Comment ça marche</h1><p>Automatisez complètement vos tâches et vos processus - même si vous n'avez pas de connaissances approfondies en programmation. Faji et les autres outils connectés à Zapier «communiquent» entre eux pour effectuer automatiquement les tâches que vous avez définies. </p><p>Vous souhaitez par exemple sauvegarder automatiquement dans Faji les documents que vous recevez en pièce jointe dans Gmail en vue de leur traitement comptable? Rien de plus simple! La configuration est un véritable jeu d'enfant: Il vous suffit de sélectionner dans Zapier un déclencheur d'action ainsi qu'une action à exécuter - et voilà, votre «zap» est prêt!</p>
        </div>
        <div className="auto_client_text">
          <h1>Une automatisation quasi illimitée</h1><p>Quels sont vos processus les plus chronophages susceptibles d'être effectués automatiquement? Zapier vous permet de connecter Faji avec plus de 1000 applications web. Quelques exemples parmi bien d'autres: </p><p>outils de messagerie comme Gmail, outils CRM tels que HubSpot ou Pipedrive, boutiques en ligne tels que Magento ou Shopify, gestionnaires de fichiers comme Google Drive ou Dropbox, et gestionnaires de contacts comme Google Contacts.</p>
        </div>
      </div>
      <Ratings />
      <div className="test_text">
        <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
        <h3>
          Jugez par vous-même en testant toutes les fonctionnalités de Faji,
          l'outil de gestion idéal des PME.
        </h3>
        <Link to="/" style={{ backgroundColor: "#00F8F7" }}>Testez Gratuitement</Link>
      </div>
      <div className="auto_card_wrap">
        <CardNr />
      </div>
      <br /><br /><br /><br />
      <div className="cloud_blue_cards">
        {" "}
        <Card
          icon={icon1}
          title="Gagnez du temps et optimisez vos performances"
          body="Notre mission? Aider les petites entreprises à devenir plus performantes en automatisant les processus - pour que vous puissiez vous consacrer à ce que vous aimez vraiment faire. Avec Faji et l'add-on Zapier, automatisez les processus entre Faji et plus de 1000 applications! Boostez votre efficacité en éliminant vos tâches les plus chronophages."
        />
        <Card
          icon={icon2}
          title="Un logiciel simple et intuitif"
          body="Un logiciel de gestion ne doit pas faire perdre de temps. Voilà pourquoi Faji est si intuitif et facile à utiliser. La configuration de votre compte se fait en quelques étapes toutes simples. Et si vous avez besoin d'aide, notre équipe d'assistance gratuite et conviviale est à votre entière disposition pour vous aider et vous conseiller."
        />
        <Card
          icon={icon3}
          title="Le tout sur une seule plateforme."
          body="Avec le logiciel de gestion Faji, vous avez tout ce dont vous avez besoin pour votre petite entreprise sur une seule et même plateforme: traitement des commandes, comptabilité, gestion des projets et des clients, saisie des heures de travail, et bien plus. Faji propose également des interfaces entre clients, fournisseurs, collaborateurs,   comptables, banques et compagnies d'assurances, ainsi qu'une connexion à une multitude d'applications web via Zapier. La coopération s'en trouve simplifiée et l'efficacité de votre entreprise décuplée."
        />
        <Card
          icon={icon4}
          title="Accédez à Faji à tout moment, où que vous soyez"
          body="Faji est un logiciel de gestion basé sur le web. La connexion avec d'autres applications web telles que Zapier est donc on ne peut plus simple. Autre avantage: Faji est accessible à tout moment, où que vous soyez - que vous utilisiez un ordinateur de bureau, un ordinateur portable, une tablette ou un Smartphone lors de vos déplacements. Il vous suffit d'avoir une connexion Internet pour accéder à toutes les informations importantes pour votre entreprise."
        />
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
      <BTTButton/>

      <Footer />
    </>
  );
}
const CardNr = () => {
  return (
    <div className="time_card_normal">
      <div className="time_card_normal_blue"></div>
      <div className="time_card_normal_content">
        <h1>
          Ce dont vous avez besoin pour commencer

        </h1>
        <p>Pour automatiser vos processus avec Faji et Zapier, il vous suffit d'avoir un compte Faji et un compte Zapier gratuit:</p>
        <p><span className="spaan">Étape 1: </span>Connectez-vous à votre compte Faji. Vous n'avez pas encore de compte Faji? Saisissez simplement votre adresse e-mail et essayez gratuitement Faji sans engagement pendant 30 jours. Aucun téléchargement nécessaire!</p>
        <p><span className="spaan">Étape 2: </span>Créez un compte Zapier. Zapier propose une version de base gratuite, idéale pour les débutants. Pour plus d'informations, visitez le site web de Zapier. A noter: à l'heure actuelle, Zapier n'est disponible qu'en anglais.</p>
        <p><span className="spaan">Étape 3: </span>Sélectionnez dans Zapier le premier «zap» que vous souhaitez configurer (exemple: les factures créées dans Faji doivent automatiquement être enregistrées dans Google Drive).</p>
        <p><span className="spaan">Étape 4: </span>Connectez Faji et l'application web concernée (votre compte Gmail, par exemple) à Zapier et confirmez l'autorisation. Faites un petit test pour voir si le zap fonctionne correctement - c'est tout!</p>
      </div>
    </div>
  );
};
const Card = ({ icon, body, title }) => {
  return (
    <>
      <div className="cloud_card_wrapper">
        <div className="cloud_card1">
          <img src={icon} alt="img" />
        </div>
        <div className="cloud_card2">
          <h3>{title}</h3>
          <h4>{body}</h4>
        </div>
      </div>
    </>
  );
};
const HeaderCard = ({ title, body, className }) => {
  return (
    <div className={className}>
      <p>{title}</p>
      <h6>{body}</h6>
    </div>
  );
};