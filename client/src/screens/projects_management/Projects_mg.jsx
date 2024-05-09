import React from "react";
import "./Projects_mg.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import icon1 from "../../assets/project_icon1.svg";
import icon2 from "../../assets/time_icon2.svg";
import icon3 from "../../assets/project_icon3.svg";
import icon4 from "../../assets/project_icon4.svg";
import arrowDown from "../../assets/images/arrow down header.svg";
import Testimonials from '../../components/testimonials/Testimonials';
import { Link } from "react-router-dom";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function ProjectsMg() {
  return (
    <>
      <Navbar />
      <div className="time_header">
        <h1>
          <span>Logiciel de gestion</span> de projet pour prestataires de
          services
        </h1>
        <h2 className="h2">
          Logiciel de gestion de projet professionnel, idéal pour les start-ups,
          les indépendants et les petites entreprises. Plus de 60'000 PME
          suisses font confiance au logiciel de gestion Faji:
        </h2>
        <button>Testez gratuitement</button>
        <div className="time_text">
          <p>
            Avec Faji, oubliez les listes de tâches complexes et interminables:
            gardez un œil sur tous vos projets clients et ne ratez plus jamais
            les échéances importantes. Gagnez ainsi en efficacité et évitez de
            travailler dans la précipitation. Optez pour plus de simplicité avec
            l'outil de gestion de projet en ligne de Faji!
          </p>
        </div>
        <Header
          icon1={icon1}
          icon2={icon3}
          icon3={icon2}
          icon4={icon4}
          cardTitle1="Un logiciel de gestion de projet très simple"
          cardTitle2="Suivi de projet avec vue d'ensemble"
          cardTitle3="Gestion de projet efficace"
          cardTitle4="Solution complète pour les PME"
          text1="Gérez vos projets en ligne et en toute simplicité: Faji vous permet d'avoir un aperçu clair et efficace de tous les projets, délais, clients et coûts."
          text2="Quels sont les projets clients en cours? Quels sont les projets terminés? Quels sont ceux à venir? L'application vous permet de visualiser l'avancement de chaque projet en temps réel, pour une gestion encore plus efficace."
          text3="La planification des budgets n'a jamais été aussi simple: visualisez les heures travaillées et les heures de travail prévues pour chaque projet, chaque collaborateur et chaque client, et gardez vos recettes et vos dépenses sous contrôle. Vous avez ainsi à tout moment une vision claire de la situation financière de votre entreprise."
          text4="Faji est bien plus qu'un simple outil de gestion de projet: du premier contact avec un nouveau client à la facturation, en passant par la comptabilité, le logiciel simple et intuitif vous facilite l'ensemble de vos tâches. C'est l'outil incontournable des petites entreprises, des indépendants et des start-ups."
        />
      </div>
     
        <Testimonials title="Ce que disent " span="nos clients"/>

      
      <div className="test_text">
        <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
        <h3>
          Jugez par vous-même en testant toutes les fonctionnalités de Faji,
          l'outil de gestion idéal des PME.
        </h3>
        <Link to="/trial">Testez gratuitement</Link>        <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
        <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
      </div>

      <div className="time_text">
        <span>Un logiciel de gestion de projet simple et complet</span>
        <p>
          Pour les petits entrepreneurs, les indépendants et les start-ups, le
          choix d'un logiciel de gestion de projet adapté est parfois difficile.
          De fait, les applications gratuites offrent généralement peu de
          fonctionnalités, tandis que de nombreux outils de gestion de projet
          payants s'avèrent trop complexes d'utilisation. Résultat: au lieu
          d'être simplifié, le flux de travail est encore plus difficile à
          gérer!
        </p>
        <p>
          Faji, en revanche, est l'outil incontournable des petites entreprises,
          des indépendants et des start-ups: clair, intuitif et basé sur le
          cloud, le logiciel comprend les fonctionnalités les plus importantes
          dans le domaine de la gestion de projet et a été conçu spécialement
          pour répondre aux besoins des petites entreprises.
        </p>
      </div>
      <br />
      <br />
      <div className="time_cards">
        <CardNr
          title="Concentrez-vous entièrement sur"
          span=" vos projets clients"
          text="Un bon logiciel de gestion de projet doit vous permettre d'avoir à tout moment une vision claire de vos projets clients. Grâce à l'outil de management de projet de Faji, oubliez les listes de tâches complexes et interminables. Gardez une vue d'ensemble des informations les plus importantes: combien de temps votre équipe ou vous-même avez déjà passé sur un projet? Respectez-vous le budget? Quelle est la date limite? Le tout dans un logiciel intuitif et basé sur le web. Résultat: vous travaillez plus efficacement et pouvez enfin vous concentrer sur vos projets plutôt que sur leur planification et leur gestion."
        />
        <CardRv
          span=""
          title="Une saisie des temps ultra précise"
          text="Vous ne savez pas toujours de combien de temps vous avez réellement besoin pour une tâche ou un projet spécifique? Enregistrez avec précision le temps nécessaire à l'exécution d'une tâche. Saisissez des temps à la minute près en ligne, par projet ou par tâche, en utilisant par exemple le chronomètre intégré."
        />
        <CardNr
          span=" meilleur travail d'équipe"
          title="Outil collaboratif pour un"
          text="Invitez les membres d'une équipe à rejoindre un projet et attribuez une fonction à chacun (chef d'équipe, par exemple). Attribuez des tâches individuelles ou des projets entiers à vos collaborateurs. Chacun peut ainsi savoir à tout sur quoi travaillent ses collaborateurs. Pour un travail d'équipe plus efficace et plus transparent."
        />
        <CardRv
          span=""
          title="Facturez les temps et les services en quelques clics"
          text="Votre projet est maintenant terminé. Il est temps d'envoyer une facture au client! Importez en toute simplicité les temps facturables, les taux horaires prédéfinis et les dépenses dans votre facture. Il ne vous reste plus qu'à exporter la facture au format PDF ou à l'envoyer directement par e-mail à votre client depuis votre compte Faji. C'est tout!"
        />
        <CardNr
          span=""
          title="Projets, étapes, packages de travail et tâches"
          text="Avec Faji, gérez des projets d'envergure en toute simplicité:
          Divisez vos projets en segments pour une meilleure visibilité.
          Créez des packages de travail correspondant à chaque étape.
          Créez des tâches et affectez-les à vos différents collaborateurs.
          Visualisez le statut d'une tâche (en cours ou en retard) en un clin d'œil. La fonction de rappel par e-mail vous permet par ailleurs de ne plus jamais oublier les tâches les plus importantes, même si vous n'êtes pas connecté à votre compte Faji."
        />
        <CardRv
          span=" pour une meilleure rentabilité de vos projets"
          title="Planification efficace des coûts -"
          text="Gardez une bonne vue d'ensemble du budget et des coûts d'un projet donné: Saisissez le budget de votre projet.
          Définissez un mode de facturation (prix fixe ou taux horaire, par exemple).
          Déterminez quelles activités doivent faire l'objet d'une facturation.
          Fixez les taux horaires par projet, activité et collaborateur.
          Enregistrez les dépenses et accédez facilement à l'ensemble des reçus et autres pièces comptables pour chaque projet.
          Visualisez le temps passé sur un projet par rapport au temps prévu et le budget encore disponible."
        />
        <CardNr
          span=" des relations clients ciblées"
          title="Développez"
          text="Communiquez efficacement avec vos clients en ayant toujours les informations nécessaires à portée de main: le flux de documents d'un client donné vous permet par exemple d'accéder facilement à toutes les offres, factures et autres documents qui lui sont associés. Vous pouvez également consulter un aperçu de tous les projets, tâches et temps enregistrés. Cliquez ici pour en savoir plus sur les fonctionnalités CRM de Faji."
        />
        <CardRv
          span=" simple logiciel de gestion de projet"
          title="Bien plus qu'un"
          text="Faji est bien plus qu'un simple outil de gestion de projet: le logiciel de gestion vous permet notamment d'avoir toute votre comptabilité bien en main. Créez vos offres, vos factures et générez des rappels en quelques clics. Connectez votre e-banking à Faji et affichez rapidement les factures déjà réglées. Et bien plus! Le tout en ligne et accessible sur n'importe quel appareil - que vous travailliez sur Mac, PC, tablette ou Smartphone. En savoir plus sur les différentes fonctionnalités de Faji."
        />
      </div>
      <div className="rens_test_text">
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
          {title}
          <span> {span} </span>
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
const Header = ({
  icon1,
  icon2,
  icon3,
  icon4,
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardTitle4,
  text1,
  text2,
  text3,
  text4,
}) => {
  return (
    <>
      <div className="header">
        <div className="header_advantages">
          <h2>
            Tous les avantages de JurLine, <img src={arrowDown} alt="img" />
          </h2>
          <h6>
            votre service de conseil juridique par téléphone dans toute la
            Suisse
          </h6>
          <div className="header_cards">
            <div className="header_card">
              <img src={icon1} className="header_card_icon" alt="img"></img>
              <h3>{cardTitle1}</h3>
              <p>{text1}</p>
            </div>
            <div className="header_card">
              <img src={icon2} className="header_card_icon" alt="img"></img>
              <h3>{cardTitle2}</h3>
              <p>{text2}</p>
            </div>
            <div className="header_card">
              <img src={icon3} className="header_card_icon" alt="img"></img>
              <h3>{cardTitle3}</h3>
              <p>{text3}</p>
            </div>
            <div className="header_card">
              <img src={icon4} className="header_card_icon" alt="img"></img>
              <h3>{cardTitle4}</h3>
              <p>{text4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

