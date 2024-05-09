import React from 'react';
import "./Cloud.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from 'react-router-dom';

import icon1 from "../../assets/cloud_icon1.svg";
import icon2 from "../../assets/cloud_icon2.svg";
import icon3 from "../../assets/cloud_icon3.svg";
import icon4 from "../../assets/cloud_icon4.svg";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Cloud  ()  {
    return (
        <>
            <Navbar/>
            <div className="cloud_title">
                <h1 className='h1'><span className="span">Cloud et sécurité des données </span> avec Faji</h1>
                <p>Logiciel suisse avec sauvegarde des données en Suisse.</p>
                <button>Testez gratuitement</button>
                <p className='p'>Où se trouve le cloud, et à quel endroit les données que vous enregistrez dans Faji sont-elles stockées? Quelles sont les précautions prises par Faji en matière de sécurité des données? Comment protéger ses données de manière optimale? Toutes nos réponses à vos questions.</p>
                <CardNr span="Qu'est-ce que le cloud? Et qu'entend-on par cloud computing" text="Avec le cloud, vos données ne sont plus stockées localement sur votre lieu de travail, mais dans un centre de données externe sécurisé: elles sont stockées en ligne, dans un 'nuage de données' à partir duquel elles peuvent être consultées. Le 'cloud computing' désigne l'utilisation des applications cloud facturées via Internet selon l'usage du client (c'est le modèle 'Pay per use'). L'avantage? Vous avez accès à vos données où que vous soyez et à tout moment."/>
            </div>
            <div className="cloud_text">
                <h1>Qu'est-ce que le "Software as a service"?</h1>
                <p>Le "Software as a service", ou "SaaS", est une forme très variable de cloud computing. Un fournisseur de services comme Faji fournit un logiciel complet à partir du cloud. Vous pouvez travailler où est quand vous voulez: grâce au cloud, vous n'êtes plus lié à aucun appareil.</p>
            </div>
            <br /><br />
            <p className='cloud_blue'>Les serveurs de Faji sont situés en Suisse. Vos données sont stockées dans un centre de données plusieurs fois certifié et sécurisé.</p>
            <br /><br />
            <div className="cloud_text">
                <h1>Qu'est-ce que cela signifie pour les utilisateurs de Faji?</h1>
                <p>Faji est un Software as a Service qui vous accompagne où que vous soyez. L'infrastructure de pointe de notre solution SaaS garantit un accès rapide et une sécurisation optimale des données. Vous n'avez plus besoin de télécharger ou d'installer quoi que ce soit, et vous pouvez travailler sur n'importe quel ordinateur. Les utilisateurs de Faji sont mobiles, indépendants et n'ont pas à se soucier des sauvegardes ou des mises à jour: ils peuvent ainsi se concentrer sur leur cœur de métier.</p>
            </div>
            <div className="cloud_center">
                 <CardNr span="Un nuage de données sécurisé" text="'Les solutions cloud sont-elles vraiment sûres, et les données ne peuvent-elles être stockées à l'étranger?' Pas avec Faji. Chez nous, toutes les données sont stockées dans des centres de données suisses certifiés."/>
                 <CardRv span="Risques liés au cloud: " title="les données sont-elles sécurisées?" text="Les chiffres clés d'une entreprise sont des données particulièrement sensibles, et certaines entreprises préfèrent éviter d'avoir recours à des logiciels basés sur le cloud pour des raisons de sécurité. Et pourtant, il convient de se demander ce qui est le plus sûr: un simple ordinateur que personne ne met à jour, ou une solution basée sur le cloud optimisée par des spécialistes et dont le fournisseur garantit la sécurité des données."/>
                 <CardNr span="Quelles sont les précautions prises par Faji" title="en matière de sécurité des données?" text="Les serveurs de Faji sont situés en Suisse. Vos données sont stockées dans un centre de données plusieurs fois sécurisé et certifié ISO 27001, une norme reconnue de maitrise du risque lié à la sécurité de l'information. La connexion à nos serveurs est sécurisée par un protocole de chiffrement SSL. Nous effectuons régulièrement des sauvegardes des données client. Afin d'éviter toute perte de données, y compris dans les cas extrêmes (destruction du centre de données suite à un tremblement de terre, par exemple), les sauvegardes chiffrées sont stockées parallèlement dans plusieurs autres centres de données."/>
            </div>
            <br /><br />
            <p className='cloud_blue'>Finies les mises à jour en retard reportées de semaine en semaine! Chez Faji, les mises à jour sont effectuées automatiquement et gratuitement, pour que vous puissiez travailler chaque matin avec la dernière version du logiciel.</p>
            <br /><br />
            <div className="cloud_text">
                <p>Notre infrastructure de pointe garantit un accès rapide et une sécurisation maximale des données. Nos mesures de sécurité sont continuellement mises à jour et renforcées en fonction de l'évolution technologique. Pour que vous puissiez vous concentrer sur les choses qui vous importent. Cliquez ici pour en savoir plus sur la protection des données chez Faji.</p>
            </div>
            <br />
            <div className="cloud_text">
                <h1>Vous souhaitez protéger vos données de manière optimale?</h1>
                <p>Notez que vous pouvez renforcer vous-même la sécurité de vos données. Evitez par exemple d'utiliser un mot de passe composé de termes génériques ou d'un petit nombre de caractères. Nous vous recommandons également de changer votre mot de passe régulièrement, et au moins une fois tous les 60 jours.</p>
            </div>
            <br /><br />
            <div className="cloud_blue_section">
                <h3>Vous souhaitez renforcer la sécurisation de votre compte Faji?</h3>
                <p>Protégez efficacement votre compte contre toutes les intrusions: renforcez la sécurité de vos données Faji grâce à l'extension gratuite "Google Authenticator" (et la méthode dite de "vérification en deux étapes"). Avec Google Authenticator, votre compte est doublement protégé: par votre mot de passe personnel et avec votre téléphone ou une clé de sécurité. A la deuxième étape de la vérification, des codes vous sont communiqués par SMS, appel vocal ou via une application mobile. Cliquez ici pour savoir comment configurer Google Authenticator.</p>
            </div>
            <br /><br />
            <div className="cloud_text">
                <h1>L'intérêt du cloud ne fait plus question</h1>
                <p>Les discussions concernant à l'intérêt du cloud sont aujourd'hui terminées: de fait, la numérisation affecte tous les secteurs d'activité. Pourquoi acheter une vache quand on n'a besoin que d'un litre de lait? Avec le cloud, les entreprises ont recours à des services externalisés en fonction de leurs besoins et réalisent ainsi des économies considérables.</p>
            </div>
            <br />
            <div className="cloud_text">
                <h1>Quels sont les avantages pour les utilisateurs de Faji?</h1>
                <p>Avec Faji, l'ensemble des processus de votre entreprise sont informatisés et traités de façon centralisée, de la gestion des offres aux relances en passant par la comptabilité financière et la comptabilité des salaires. La clé du succès? Tous les processus s'intègrent parfaitement les uns aux autres: le logiciel vous permet ainsi de réduire votre charge de travail administrative et de mettre de l'ordre dans les processus, de manière à vous faire gagner un temps précieux.</p>
            </div>
            <br />
            <div className="cloud_text">
                <h1>Une plateforme cloud pour relier tous les acteurs</h1>
                <p>Les plateformes cloud étant basées sur le web, l'intégration de toutes les parties prenantes concernées devient possible. </p>
            </div>
            <br /><br />
            <div className="cloud_blue_cards">
            {" "}
            <Card
              icon={icon1}
              title="Accès direct pour votre agent fiduciaire"
              body="Autorisez votre agent   comptableà accéder directement à votre comptabilité, pour une collaboration nettement plus rapide et plus fluide. Avec l'application Faji Go, téléchargez vos documents dans le logiciel où que vous soyez."
            />
            <Card
              icon={icon2}
              title="Plus d'extensions pour plus d'avantages"
              body="Grâce au cloud, nous pouvons vous proposer plus facilement des services complémentaires fournis par des partenaires comme Advanon."
            />
          
            <Card
              icon={icon3}
              title="Rapprochement automatique des paiements"
              body="Grâce aux interfaces avec l'e-banking de différentes banques, vous avez la possibilité de rapprocher directement les crédits et les débits de votre compte bancaire avec les factures ouvertes et la comptabilité."
            />
            <Card
              icon={icon4}
              title="«Mise à jour en cours...»"
              body="Les mises à jour sont automatiques et gratuites: vous travaillez chaque jour avec la version actualisée du logiciel. Finies les mises à jour en retard reportées de semaine en semaine!"
            />
            </div><br /><br />
            <div className="cloud_text">
                <p>Grâce au cloud, Faji est constamment actualisé. Autre avantage des mises à jour automatiques: vos frais comme votre planification sont optimisés. Vous ne payez en effet que le montant de votre abonnement mensuel ou annuel. Les mises à jour, les sauvegardes et l'assistance qui vous est fournie sont totalement gratuites.</p>
            </div>
            <br />
            <div className="cloud_text">
                <h1>Est-il possible d'exporter les données depuis Faji?</h1>
                <p>Bien sûr. Si vous ne souhaitez plus utiliser Faji, vous pouvez résilier votre compte à la fin de la période de facturation suivant la période en cours. Vos données peuvent être facilement exportées depuis le logiciel.</p>
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

            <Footer/>
        </>
    );
}

 
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
            <span> {span} </span>{title}
            
          </h1>
          <p>{text}</p>
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