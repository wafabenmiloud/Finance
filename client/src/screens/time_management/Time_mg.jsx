import React from "react";
import "./Time_mg.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import icon1 from "../../assets/time_icon1.svg";
import icon2 from "../../assets/time_icon2.svg";
import icon3 from "../../assets/time_icon3.svg";
import icon4 from "../../assets/time_icon4.svg";
import arrowDown from "../../assets/images/arrow down header.svg";
import avatar from "../../assets/time_avatar.png";
import RatingsWhiteBg from "../../components/ratings_white_bg/Ratings_white_bg";
import pc from "../../assets/time_pc.png";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function TimeMg() {
  return (
    <>
      <Navbar />
      <div className="time_header">
        <h1>
          <span>La gestion du temps de travail</span> en toute simplicité
        </h1>
        <button>Testez gratuitement</button>
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
        <Header
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
          cardTitle1="Saisie du temps de travail par projet"
          cardTitle2="Facturation du temps de travail"
          cardTitle3="Taux horaires individuels"
          cardTitle4="Calcul simplifié des heures de travail"
          text1="Grâce à la gestion des projets intégrée, vous optimisez votre planning et organisez vos projets de manière optimale. Saisissez directement vos temps de travail pour chaque projet."
          text2="Importez les frais et les temps de travail dans vos factures en quelques clics et envoyez directement ces dernières à vos clients."
          text3="Définissez des taux horaires spécifiques pour chaque projet. Les tarifs horaires associés à chacun de vos collaborateurs sont facilement consultables."
          text4="Faji est un logiciel de gestion intuitif qui vous permet de saisir vos temps de travail manuellement ou à l'aide d'un compteur intégré."
        />
      </div>
      <div className="time_client">
        <div className="time_client_img">
          {" "}
          <img src={avatar} alt="img" />
        </div>
        <div className="time_client_content">
          <h2>Sam Müller</h2>
          <h5>nuun GmbH</h5>
          <p>
            «Faji nous aide à saisir rapidement notre temps de travail et à
            décompter efficacement de très petits montants. Cela facilite
            grandement la vie quotidienne au bureau.»
          </p>
        </div>
      </div>
      <div className="time_text">
        <p>
          La saisie manuelle des temps du travail (avec Excel, par exemple) peut
          s'avérer chronophage. C'est autant de temps perdu que vous pourriez
          investir de façon plus intéressante pour votre entreprise.
          <span>
            Voilà pourquoi un logiciel de gestion peut vous apporter une aide
            précieuse.
          </span>
        </p>
        <p>
          Calculez les temps de travail en direct avec un chronomètre ou
          saisissez simplement vos temps après avoir terminé vos tâches.
          Intégrez la saisie du temps à la gestion des projets et ajoutez des
          collaborateurs.
          <span>
            Travaillez plus efficacement et assurez-vous de la satisfaction de
            vos clients grâce à une plus grande transparence.
          </span>
        </p>
        <p>
          Parfaitement adapté aux besoins des{" "}
          <span> indépendants, des PME </span>
          et des startups, Faji vous offre bien plus qu'un simple logiciel de
          saisie des temps. Le calcul des temps de travail est effectué en
          quelques clics et vous pouvez vous concentrer entièrement sur votre
          entreprise.
        </p>
      </div>
      <br />
      <br />
      <div className="time_cards">
        <CardRv
          span="Gestion facile et en ligne"
          title="du temps passé sur chaque projet"
          text="Faji est parfaitement adapté aux besoins des prestataires de services. Saisissez directement les temps de travail à partir du tableau de bord de chaque projet. Démarrez simplement votre compteur en direct dans votre tableau de bord ou saisissez vos temps de travail une fois vos tâches terminées. Consultez vos temps de travail et filtrez-les en fonction de leur statut. Vous pouvez ainsi savoir en un clin d'œil quelles sont les tâches terminées, facturées ou encore en cours. Ajoutez des notes à vos temps de travail enregistrés et indiquez s'ils doivent faire l'objet d'une facturation ou non. Le cas échéant, les temps peuvent être importés directement dans vos factures. Avec Faji, le calcul du temps passé sur chaque projet devient un véritable jeu d'enfant.
"
        />
        <CardNr
          title="Projets et étapes"
          span="illimités"
          text="Avec Faji, il n'y a plus de limites! Créez un nombre illimité de projets et définissez des jalons et des tâches en quelques clics. Tous vos temps enregistrés sont facilement consultables. Définissez ou modifiez le statut - et même le sous-statut - d'un projet afin que tous vos collaborateurs soient informés de l'avancement du projet à tout moment. Vous souhaitez gérer le temps passé sur des projets internes et externes? Avec Faji, rien de plus simple!
"
        />
        <CardRv
          span="Définissez "
          title=" des taux horaires spécifiques"
          text="Le logiciel de gestion idéal pour votre petite entreprise: définissez des tarifs horaires spécifiques en quelques clics pour un projet, un client ou un collaborateur donné — et même pour différents domaines d'activité. Pour une gestion des projets et des temps de travail efficace et optimisée.

Le tableau de bord intuitif vous permet de consulter facilement et à tout moment l'ensemble de vos temps de travail enregistrés."
        />
        <CardNr2
          span="Finies les confusions: "
          title="associez les projets et les temps à vos clients"
          text="Faji vous permet également d'associer vos projets et vos temps de travail aux clients correspondants - préalablement enregistrés dans votre carnet d'adresses - depuis le module de gestion des projets. La gestion des clients s'intègre à toutes les fonctionnalités de Faji. Vous pouvez ainsi sélectionner un client donné en un seul clic. Vous savez ainsi quel projet et quels temps sont associés à chacun de vos clients."
        />
        <CardRv
          span="Gagnez un temps"
          title="précieux lors de la facturation"
          text="Définissez les conditions relatives à chaque projet (budget, méthodes d'imputation, etc.). Avec Faji, la facturation devient quasiment automatique: déterminez à l'avance si les heures de travail ou les projets doivent faire l'objet d'une facturation ou non. Les temps facturables et les taux horaires, ainsi que les données enregistrées du client, peuvent ensuite être importés en un clin d'œil dans vos factures. Vous pouvez alors les imprimer et les envoyer par la poste ou les transmettre par e-mail au format PDF."
        />
      </div>
      <div className="time_text">
        <span>
          Pour un meilleur travail d'équipe: saisie des temps en ligne pour les
          collaborateurs
        </span>
        <p>
          Ajoutez des collaborateurs à vos projets de manière à ce qu'ils
          puissent saisir leurs temps directement dans le projet sur lequel ils
          travaillent. Grâce au système de saisie des temps de Faji, le calcul
          du temps de travail de vos collaborateurs s'effectue de façon précise,
          simple et efficace.
        </p>
        <span>
          Un logiciel de gestion du temps de travail basé sur le cloud - pour
          une utilisation sur Mac, PC, Smartphone ou tablette
        </span>
        <p>
          Avec Faji, vos collaborateurs et vous-même pouvez saisir vos temps de
          travail à tout moment, où que vous soyez et depuis n'importe quel
          appareil - que vous soyez en déplacement, au bureau ou à domicile, à
          partir d'un PC, d'un Mac, d'un Smartphone ou d'une tablette. Il vous
          suffit de vous connecter à votre compte Faji sur le navigateur de
          votre choix et d'utiliser le module de saisie du temps. La saisie de
          votre temps de travail devient entièrement mobile!
        </p>
      </div>
      <div className="time_logiciel">
        <h1>
          <span>Faji: </span>plus qu'un simple logiciel de gestion du temps de
          travail
        </h1>
        <div className="time_logiciel_row">
          <div className="time_logiciel_lines">
            <Line text="Faji est plus qu'un simple système de saisie des temps basé sur le web. Il s'agit d'un logiciel d'entreprise complet, économique, facile à utiliser et parfaitement adapté aux besoins des indépendants, des PME et des startups." />
            <Line text="Avec Faji, vous pouvez créer des projets, saisir des temps de travail et les associer à des clients donnés à partir du carnet d'adresses intégré. Mais vous pouvez aussi indiquer si un temps doit faire l'objet d'une facturation ou non et générer puis envoyer une facture en seulement quelques clics." />
            <Line text="Grâce à la comptabilité intégrée, faites d'une pierre deux coups: créez facilement des commandes, des offres et des factures à partir du module de gestion des projets. Les factures créées peuvent être saisies directement dans votre comptabilité. Vous avez par ailleurs la possibilité de numériser vos documents à l'aide de l'application mobile FajiGo, puis de les comptabiliser directement." />
            <Line text="Une connexion à votre e-banking en quelques étapes seulement: réglez vos factures et rapprochez vos transactions en quelques clics depuis votre tableau de bord Faji. Vous vous épargnez ainsi une charge de travail administrative conséquente et pouvez vous concentrer sur l'essentiel!" />
          </div>
          <div className="time_logiciel_img">
            <img src={pc} alt="pc" />
          </div>
        </div>
      </div>
      <div className="time_saisie">
        <h1>La saisie du temps de travail en Suisse</h1>
        <p>
          En Suisse, la saisie du temps de travail est obligatoire. Il est donc
          crucial d'utiliser un système de saisie des temps à la fois conforme
          aux exigences du SECO et facile à utiliser.
        </p>
        <p>
          Avec Faji, vous disposez non seulement d'un système de saisie des
          temps simple et intuitif, mais d'un logiciel complet parfaitement
          adapté aux besoins des petites et moyennes entreprises.{" "}
          <b>
            Profitez de toutes les fonctionnalités essentielles pour votre
            entreprise et simplifiez l'administration de cette dernière.
          </b>
        </p>
      </div>
      <RatingsWhiteBg />
      <div className="test_text">
        <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
        <h3>
          Jugez par vous-même en testant toutes les fonctionnalités de Faji,
          l'outil de gestion idéal des PME.
        </h3>
        <Link to="/trial">Testez gratuitement</Link>{" "}
        <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
        <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
      </div>{" "}
      <BTTButton />
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
const CardNr2 = ({ span, title, text }) => {
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
const CardRv = ({ span, title, text }) => {
  return (
    <div className="time_card_reverse">
      <div className="time_card_reverse_blue"></div>
      <div className="time_card_reverse_content">
        <h1>
          <span> {span} </span>
          {title}
        </h1>
        <p>{text}</p>
      </div>
    </div>
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
            Tous les avantages en un coup d'œil{" "}
            <img src={arrowDown} alt="img" />
          </h2>
          <h6>
            Grâce à la saisie des temps en ligne, vous pouvez enregistrer votre
            temps de travail facilement et rapidement, que ce soit sur PC, Mac,
            Tablet ou Smartphone.
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
const Line = ({ text }) => {
  return (
    <div className="time_line_reverse">
      <div className="time_tic_wrapper1">
        <div className="time_tic1">
          <BsCheckLg className="time_tic_icon1" />
        </div>
      </div>
      <div className="time_line_text1">
        <h4>{text}</h4>
      </div>
    </div>
  );
};
