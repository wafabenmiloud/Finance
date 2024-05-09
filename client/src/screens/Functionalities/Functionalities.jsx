import React from "react";
import "./Functionalities.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Testimonials from "../../components/testimonials/Testimonials";
import { BsCheckLg } from "react-icons/bs";
import Trial from "../../components/trial/Trial";
import Ratings from "../../components/ratings/Ratings";
import laptopImg from "../../assets/images/laptop.png";
import right from "../../assets/images/right.png";
import left from "../../assets/images/left.png";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Functionalities() {
  return (
    <>
      <Navbar />
      <section id="functions">
        <h1>Fonctions - tout ce dont vous avez besoin pour votre entreprise</h1>
        <h5>
          La solution pour tous ceux qui ont déjà passé trop de temps à faire de
          la comptabilité – plus de 60'000 clients sont déjà convaincus
        </h5>
        <div className="functions_cards">
          <div className="functions_card1">
            <img src={laptopImg} alt="img" />
          </div>
          <div className="functions_card2">
            <div className="card2_r1"></div>
            <div className="card2_r2">
              <h2>
                Mieux travailler avec <span>Faji</span>
              </h2>
              <div>
                <p>
                  Grâce à Faji, gérez l'ensemble des processus de votre PME de
                  manière plus efficace et sécurisée et tirez pleinement profit
                  de la digitalisation .
                </p>
                <p>
                  Une solution tout-en-un : gestion des contacts, devis et
                  facturation, e-banking intégré et gestion de projets (avec
                  suivi des temps de travail) .
                </p>
                <p>
                  La comptabilité s'exécute en arrière-plan et tout est
                  automatiquement enregistré sans risque d'erreur .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="functions">
        <RowRev
          className="green"
          span="Dashboard - "
          title="Toutes les données en un coup d'œil"
          body="Commencez votre journée en jetant un coup d'œil à votre tableau de bord personnalisé."
          text1="Tous les chiffres clés financiers importants."
          text2="Vue d'ensemble des tâches en cours."
          text3="Accès facile à tout moment et où que vous soyez grâce au stockage sur le cloud."
        />
        <Row
          className="blue"
          span="Gestion des contacts - "
          title="Votre CRM personnel"
          body="La gestion des contacts idéale pour votre entreprise."
          text1="Importez facilement vos contacts."
          text2="Enregistrez des documents (contrats, etc...) dans vos contacts et ajoutez des rappels."
          text3="Créez des catégories spécifiques et définissez des interlocuteurs pour chaque contact."
        />
        <RowRev
          className="green"
          span="Processus de vente - "
          title="De l'offre à la facture"
          body="Devenez un professionnel de la vente et créez des offres et des factures en quelques clics à partir de vos produits et/ou services préenregistrés  ."
          text1="Calculez facilement vos taux horaires ou vos forfaits grâce au suivi des projets et à la saisie du temps de travail."
          text2="Soignez votre image avec des documents au design personnalisable et des options multilingues."
          text3="Envoyez directement vos offres par e-mail."
        />
      </section>
      <Ratings />
      <section className="functions2">
        <Row
          className="green"
          span="Gestion des dépenses - "
          title="Un traitement optimal de vos dépenses et de vos pièces comptables"
          body="Effectuez le décompte de la TVA et votre bilan annuel en quelques clics   ."
          text1="Les factures entrantes et sortantes sont automatiquement comptabilisées avec les comptes de comptabilité et les taux de TVA enregistrésn   .
          "
          text2="Créez votre propre plan comptable afin que Faji s'adapte à vos besoins   .          "
          text3="Déterminez rapidement les succès de votre entreprise à l'aide des rapports de comptabilité   ."
        />
        <RowRev
          className="blue"
          span="Comptabilité - "
          title="Le bilan annuel simplifié"
          body="Personne n'aime payer ses factures ! Mais avec le module d'achat de Faji, le traitement des factures est un jeu d'enfant."
          text1="Saisissez, comptabilisez et payez vos factures fournisseurs et vos dépenses en quelques clics   .
          "
          text2="Il vous suffit de sélectionner le bon compte de comptabilité, de définir la date d'échéance et d'associer les documents numérisés   ."
          text3="Avec notre application «Faji Go», vous pouvez scanner vos justificatifs et les régler directement dans notre module d'achat grâce à la facture QR   ."
        />
      </section>
      <Trial />
      <section className="functions3">
        <div className="row_normal">
          {" "}
          <div className="row_normal_img">
            <div className="blue"></div>
            <div>
              <img src={left} alt="img" />
            </div>
          </div>
          <div className="row_normal_lines">
            <h2>
              <span>Comptabilité des salaires - </span>Optimisée pour les
              petites entreprises suisses
            </h2>
            <h3>
              Grâce à la connexion de la comptabilité financière à votre
              e-banking, le traitement des salaires ne prend que quelques
              minutes .
            </h3>
            <Line
              className="line_normal"
              text="Respectez toutes les exigences légales grâce à la solution de gestion des salaires certifiée Swissdec 4  .0 et la «procédure uniforme de déclaration des salaires» (ELM) gratuite  ."
            />
            <Line
              className="line_normal"
              text="Gagnez du temps lors de la transmission des données aux compagnies d'assurance et à l'administration : les données sont déjà préparées de manière optimale pour les différents destinataires   ."
            />
          </div>
        </div>
        <div className="row_reverse">
          <div className="row_reverse_lines">
            <h2>
              <span>Banking - </span>Rapprochement automatique avec votre compte
              bancaire
            </h2>
            <h3>
              En fonction du package sélectionné, nous vous proposons des
              fonctionnalités et des extensions utiles qui faciliteront votre
              travail au quotidien .
            </h3>
            <Line
              className="line_reverse"
              text="Boutique en ligne : Créez votre boutique en ligne en quelques minutes et vendez facilement vos produits sur Internet   . Profitez de nombreux outils pour mettre toutes les chances de votre côté   ."
            />
            <Line
              className="line_reverse"
              text="Suivi des temps de travail : Enregistrez les temps de travail à l'aide du chronomètre intégré ou saisissez simplement vos temps après coup   . Avec Faji, l'enregistrement des temps n'a jamais été aussi simple et rapide  . Possible aussi en mobilité avec un PC, un Mac, une tablette ou un smartphone   ."
            />
            <Line
              className="line_reverse"
              text="Gestion des stocks : avec Faji, vous gérez votre stock rapidement et facilement et vous gardez toujours un œil sur votre stock   ."
            />
            <Line
              className="line_reverse"
              text="Renseignements juridiques par téléphone : Des réponses rapides par téléphone à toutes vos questions d'ordre juridique concernant votre entreprise - un service exclusif pour les utilisateurs de Faji   ."
            />
            <Line
              className="line_reverse"
              text="Gestion de projets : Une gestion simple et claire qui vous permet de faire passer vos projets au niveau supérieur   ."
            />
            <Line
              className="line_reverse"
              text="Faji : Utilisez l'application mobile Faji Go pour enregistrer les temps, numériser vos justificatifs, transférer vos documents et gérer vos contacts directement sur votre Smartphone   ."
            />
          </div>
          <div className="row_reverse_img">
            <div className="green"></div>
            <div>
              <img src={right} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <Testimonials title="Plus de 60'000 indépendants, petites entreprises et start-ups font déjà confiance à " span="Faji"/>      <BTTButton/>

      <Footer />
    </>
  );
}
const Row = ({ className, title, body, span, text1, text2, text3 }) => {
  return (
    <div className="row_normal">
      {" "}
      <div className="row_normal_img">
        <div className={className}></div>
        <div>
          <img src={left} alt="img" />
        </div>
      </div>
      <div className="row_normal_lines">
        <h2>
          <span>{span}</span>
          {title}
        </h2>
        <h3>{body}</h3>
        <Line className="line_normal" text={text1} />
        <Line className="line_normal" text={text2} />
        <Line className="line_normal" text={text3} />
      </div>
    </div>
  );
};
const RowRev = ({ className, title, body, span, text1, text2, text3 }) => {
  return (
    <div className="row_reverse">
      <div className="row_reverse_lines">
        <h2>
          <span>{span}</span>
          {title}
        </h2>
        <h3>{body}</h3>
        <Line className="line_reverse" text={text1} />
        <Line className="line_reverse" text={text2} />
        <Line className="line_reverse" text={text3} />
      </div>
      <div className="row_reverse_img">
        <div className={className}></div>
        <div>
          <img src={right} alt="img" />
        </div>
      </div>
    </div>
  );
};

const Line = ({ text, className }) => {
  return (
    <div className={className}>
      <div className="tic_wrapper1">
        <div className="tic1">
          <BsCheckLg className="tic_icon1" />
        </div>
      </div>
      <div className="line_text1">
        <h4>{text}</h4>
      </div>
    </div>
  );
};
