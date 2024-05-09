import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Nettoyage.css";
import icon1 from "../../assets/nettoyage_ic1.svg";
import icon2 from "../../assets/nettoyage_ic2.svg";
import icon3 from "../../assets/nettoyage_ic3.svg";
import arrowDown from "../../assets/images/arrow down header.svg";
import { BsCheckLg } from "react-icons/bs";
import avatar from "../../assets/time_avatar.png";
import row1 from "../../assets/immob_row1.png";
import row2 from "../../assets/immob_row2.png";
import row3 from "../../assets/immob_row3.png";
import row4 from "../../assets/immob_row3.png";
import img1 from "../../assets/nettoyage_img1.png";
import img2 from "../../assets/nettoyage_img2.png";
import img3 from "../../assets/nettoyage_img3.png";
import img4 from "../../assets/nettoyage_img4.png";
import { Link } from "react-router-dom";
import ToggleLine from "../../components/toggle_line/Toggle_line";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Nettoyage() {
  return (
    <>
      <Navbar />
      <div className="time_header">
        <h1>
          {" "}
          <span>L'administration en toute simplicité</span> - avec un logiciel adapté aux entreprises de nettoyage
        </h1>
        <p style={{textAlign:"center"}}>
        Profitez du logiciel de gestion simple et automatisé Faji pour votre entreprise de nettoyage.
        </p>
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
          cardTitle1="Saisie des temps en ligne sans effort"
          cardTitle2="De l'offre à la facture"
          cardTitle3="Décompte des salaires simple et sans stress"
          text1="Avec la saisie des temps en ligne intégrée, vous et vos collaborateurs enregistrez les temps dans un logiciel clair. Vous décomptez ensuite très simplement les temps en fonction des commandes correspondantes et convainquez vos clients grâce à votre transparence et à votre fiabilité."
          text2="Profitez d'un système de devis numérique et envoyez vos offres et factures rapidement et de manière personnalisée par e-mail. Votre client sera convaincu par la simplicité du traitement numérique et vous gagnerez en sérieux et en confiance grâce à vos documents personnalisés."
          text3="Payer les salaires en toute simplicité ou les comptabiliser par virement bancaire en quelques étapes sans ajustement supplémentaire - c'est possible avec Faji. Mois après mois, vous économisez non seulement un temps précieux, mais vous ménagez aussi vos nerfs. Faji est bien entendu certifié Swissdec."
        />
      </div>

      <div className="immob_client">
        <div className="immob_client_img">
          <img src={avatar} alt="img" />
        </div>
        <div className="immob_client_content">
          <h2>Daniel Peyer</h2>
          <h5>Mootes GmbH</h5>
          <p>
            Nous avons cherché longtemps avant de trouver Faji, et nous avons
            très rapidement constaté que c'est la solution optimale pour notre
            entreprise. Le rapport qualité/prix est imbattable. Avec Faji, nous
            maîtrisons toutes nos finances, et la comptabilité est devenue un
            jeu d'enfant. Quasiment à chaque fois que nous avons rencontré un
            problème, l'équipe d'assistance (très sympathique) a trouvé une
            solution. Grâce à l'API, tous les processus sont simplifiés et la
            gestion d'une boutique en ligne est vraiment facile.
          </p>
        </div>
      </div>
      <div className="cards_sales">
        <h1 className="h1">
        Le logiciel de gestion adapté au secteur du nettoyage        </h1>
        <p className="p1">
        Découvrez comment gérer l'administration et la comptabilité de votre entreprise de nettoyage de manière efficace et numérique avec le logiciel adapté.
        </p>
        <br />
        <br />
        <Row1
          className="green"
          title="Bye bye les pertes de temps - bonjour les loisirs"
          text1="La comptabilité à tout moment et partout - depuis un smartphone, une tablette ou un PC."
          text2="Téléchargez les justificatifs directement dans Faji lorsque vous êtes en déplacement et enregistrez-les dans votre comptabilité."
          text3="Vous avez toujours un aperçu de votre chiffre d'affaires grâce à un tableau de bord clair."
          text4="Réduction des erreurs grâce à l'automatisation des processus."
          text5="Une collaboration plus simple avec votre comptable."
          img={row1}
        />
        <RowRev
          className="blue"
          title="Vos contacts clients et fournisseurs rassemblés dans le CRM"
          text1="Les données de contact des clients et des fournisseurs de votre entreprise de nettoyage toujours à portée de main, de manière fiable et ordonnée."
          text2="Gestion intégrée des contacts pour une vue d'ensemble parfaite."
          text3="Des catégories et des notes individuelles vous aident à consolider vos relations avec les clients et les fournisseurs."
          text4="Les interlocuteurs internes peuvent être définis par catégorie."
          img={row2}
        />
        <Row
          className="green"
          title="Saisie rapide et simple des temps de travail"
          text1="Saisie des temps intégrée pour une saisie facile des temps de travail."
          text2="Affectation pratique des temps aux projets et importation directe dans les factures."
          text3="Possibilité d'enregistrer des taux horaires individuels pour chaque projet."
          text4="Planification parfaite des projets grâce à une répartition optimisée des temps de travail."
          img={row3}
        />
        <RowRev
          className="blue"
          title="Des offres professionnelles en un clic"
          text1="Envoyez vos commandes et factures à vos clients et fournisseurs dans un design professionnel et unique."
          text2="Envoyez des factures plus rapidement et soyez payé plus vite."
          text3="Créez des offres en quelques secondes et envoyez-les facilement par e-mail."
          text4="Des fonctions d'analyse vous aident à évaluer vos activités commerciales."
          img={row4}
        />
         <Row
          className="green"
          title="Paiement des salaires de vos collaborateurs en quelques minutes"
          text1="Comptabilité salariale intégrée pour le décompte mensuel."
          text2="« Procédure uniforme de déclaration des salaires » (ELM) incluse."
          text3="Calcul automatique des cotisations sociales."
          text4="Sélection de différents types de salaires (salaire horaire, données d'impôt à la source, frais, etc.)."
          img={row3}
        />
      </div>
      <div className="rens_text">
        <span>
        Squadra - l'application intuitive pour la planification des équipes, la saisie des temps et le contrôle du temps de travail        </span>
        <br />
        <p>
        En tant qu'agent de nettoyage ou propriétaire de votre propre entreprise de nettoyage, vous êtes tributaire de la fiabilité d'un logiciel. Les nombreuses applications de l'Marketplace vous permettent d'élargir l'étendue des fonctions de votre compte de manière personnalisée. Souvent, la planification des interventions de vos collaborateurs demande beaucoup d'efforts et d'énergie. L'application Squadra vous permet de numériser et d'automatiser les tâches manuelles et chronophages liées à la planification et à la gestion de vos collaborateurs. Squadra vous aide à doubler l'efficacité de la planification et de la gestion des collaborateurs et vous évite de tenir des listes manuellement et de vous enquérir péniblement des disponibilités de chacun.</p>
        <br />
        <Link to="/trial">Testez gratuitement</Link>
      </div>
      <div className="immob_imgs_wrapper">
        <h1>Le travail quotidien des entreprises de nettoyage</h1>
        <p>
        En tant que propriétaire d'une entreprise de nettoyage, il est important pour vous de pouvoir organiser votre planification des interventions de manière simple et efficace et de pouvoir facturer à vos clients les heures de travail effectuées sans trop d'efforts ni de perte de temps. C'est possible grâce au logiciel de gestion Faji. Les nombreux processus presque entièrement automatisés vous aident dans votre travail quotidien. Vous avez ainsi plus de temps à consacrer à ce que vous aimez vraiment.
        </p>
       <div className="nettoyage_left">
       <h2>Pia Gygax klare Vorteile von Faji</h2>
        <Line className="line_normal" text="Ordnung in meiner Kundenkartei." />
        <Line className="line_normal" text="Meine Mitarbeiterinnen haben jederzeit Zugriff auf die Reinigungspläne der Kunden: Ein kurzer Griff aufs Handy, Faji Go öffnen und direkt Zugriff auf die spezifischen Wünsche der Kunden haben." />
        <Line className="line_normal" text="Optimale Zeiterfassung: Kurz und schnell kann die Arbeitszeit auf verschiedene Arten erfasst und zusätzliche Anmerkungen hinterlegt werden." />
        <Line className="line_normal" text="Optimierte firmeninterne Abläufe (z. B. Lohnabrechnung mit einem «Knopfdruck» an die jeweiligen Behörden" />

       </div>
      </div>
      <div className="immob_imgs_wrapper">
        <h1>Mehr über Pia's Power Reinigung</h1>
        <p>
        Pia's Power Reinigung besteht seit September 2017 aus einer aufgestellten, motivierten und verantwortungsbewussten Truppe welche aus lauter Italienerinnen besteht (ausser mir). Wir sind pflichtbewusst und handeln immer im Interesse der Firma. Unsere Angebotspalette umfasst Reinigungen aller Art, sei es für private Haushalte, wie auch gewerbliche Räumlichkeiten, wöchentlich, alle 2 Wochen oder einmalig. Fenster, Storen, Endreinigungen nach Umzug, Baureinigungen oder einfach einen Frühlingsputz wir scheuen vor nichts zurück. Ich biete massgeschneiderte, professionelle und zuverlässige Lösungen auf vertraulicher Basis an. Reinigung, Sauberkeit und Ordnung - unsere Leidenschaft.
        </p>
        <div className="immob_imgs">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </div>
      </div>
      <div className="artisanat_faq">
        <h1>FAQ : Questions et réponses</h1>
        <ToggleLine
          title="Comment rédiger une bonne offre pour mon entreprise de nettoyage?"
          details="Une bonne offre se fait par écrit. Elle doit être claire et facile à comprendre. Outre les formalités habituelles, l'offre doit contenir toutes les informations et tous les coûts que vous demandez pour vos services de nettoyage. Cela comprend par exemple aussi les limites de temps, les conditions de paiement et les frais annexes pour les prestations supplémentaires."
        />
        <ToggleLine
          title="Quels sont les avantages d'un logiciel de gestion pour mon entreprise de nettoyage?"
          details="Avec un logiciel de gestion comme Faji, vous pouvez travailler partout et depuis n'importe quel appareil. Vous et vos collaborateurs pouvez enregistrer vos temps de travail dans le logiciel directement après une mission de nettoyage. De plus, vous envoyez rapidement et de manière professionnelle des offres pour de nouvelles commandes de clients - avec des documents au design unique. Grâce à l'automatisation des rappels, vous êtes payé plus rapidement et vous suivez votre activité à tout moment."
        />
        <ToggleLine
          title="Ne puis-je pas simplement créer mes factures avec Word ou Excel?"
          details="Bien entendu, vous pouvez créer vos factures avec Word ou Excel. Cependant, rédiger des factures avec Excel ou Word prend beaucoup plus de temps qu'avec un logiciel approprié. Faji vous assiste et automatise certaines étapes de travail. Par exemple, vous pouvez lier votre e-banking à Faji pour gagner du temps lors de la comparaison des factures. Les informations obligatoires sont automatiquement ajoutées à vos factures et la TVA est calculée directement. Cela économise non seulement du temps, mais minimise également le risque d'erreurs."
        />
        <ToggleLine
          title="Que signifie un essai gratuit de 30 jours?"
          details="Vous pouvez tester Faji et l'ensemble des fonctionnalités pendant 30 jours gratuitement, sans engagement et sans enregistrer de carte de crédit. Pas de téléchargement, pas d'installation. Prêt à démarrer en quelques étapes seulement. Une fois les 30 jours écoulés, votre compte test sera automatiquement désactivé, aucune annulation n'est nécessaire."
        />
        <ToggleLine
          title="Puis-je obtenir de l'aide pour configurer le compte?"
          details="Que vous utilisiez un logiciel professionnel pour la première fois ou que vous fassiez la transition depuis un autre logiciel, nous vous accompagnons! Nous sommes heureux de vous aider à tout moment et gratuitement. Dans l'espace assistance, vous trouverez de précieux conseils et astuces. Si vous ne savez pas quoi faire: contactez-noussans frais. Si vous souhaitez une assistance pour la configuration, nous vous proposons également différents services de configuration."
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
      </div>      <BTTButton/>

      <Footer />
    </>
  );
}

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
  cardTitle1,
  cardTitle2,
  cardTitle3,
  text1,
  text2,
  text3,
}) => {
  return (
    <>
      <div className="header">
        <div className="header_advantages">
          <h2>
            Hallo Fokus - la solution optimale pour votre <br /> comptabilité &
            administration
            <img src={arrowDown} alt="img" />
          </h2>
          <p>
            Découvrez ses fonctions pratiques et de quelle manière Faji permet
            de numériser la comptabilité de votre agence.
          </p>
          <div className="header_cards">
            <div className="header_card">
              <img alt="img" src={icon1} className="header_card_icon" ></img>
              <h3>{cardTitle1}</h3>
              <p>{text1}</p>
            </div>
            <div className="header_card">
              <img alt="img" src={icon2} className="header_card_icon" ></img>
              <h3>{cardTitle2}</h3>
              <p>{text2}</p>
            </div>
            <div className="header_card">
              <img alt="img" src={icon3} className="header_card_icon" ></img>
              <h3>{cardTitle3}</h3>
              <p>{text3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
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
const Row = ({ className, title, text1, text2, text3,text4, img }) => {
  return (
    <div className="row_normal">
      {" "}
      <div className="row_normal_img">
        <div className={className}></div>
        <div className="photo_sales_start">
          <img src={img} alt="img" className="photo_sales_start_img"/>
        </div>
      </div>
      <div className="row_normal_lines">
        <h2>
          <span>{title}</span>
        </h2>
        <Line className="line_normal" text={text1} />
        <Line className="line_normal" text={text2} />
        <Line className="line_normal" text={text3} />
        <Line className="line_normal" text={text4} />
      </div>
    </div>
  );
};
const Row1 = ({ className, title, text1, text2, text3,text4,text5, img }) => {
  return (
    <div className="row_normal">
      {" "}
      <div className="row_normal_img">
        <div className={className}></div>
        <div className="photo_sales_start">
          <img src={img} alt="img" className="photo_sales_start_img"/>
        </div>
      </div>
      <div className="row_normal_lines">
        <h2>
          <span>{title}</span>
        </h2>
        <Line className="line_normal" text={text1} />
        <Line className="line_normal" text={text2} />
        <Line className="line_normal" text={text3} />
        <Line className="line_normal" text={text4} />
        <Line className="line_normal" text={text5} />
      </div>
    </div>
  );
};

const RowRev = ({ className, title, text1, text2, text3,text4, img }) => {
  return (
    <div className="row_reverse">
      <div className="row_reverse_lines">
        <h2>
          <span>{title}</span>
        </h2>
        <Line className="line_reverse" text={text1} />
        <Line className="line_reverse" text={text2} />
        <Line className="line_reverse" text={text3} />
        <Line className="line_reverse" text={text4} />
      </div>
      <div className="row_reverse_img">
        <div className={className}></div>
        <div>
          <img src={img} alt="img" className="row_reverse_imgg"/>
        </div>
      </div>
    </div>
  );
};

