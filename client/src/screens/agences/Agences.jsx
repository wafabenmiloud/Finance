import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Agences.css";
import icon1 from "../../assets/agence_ic1.svg";
import icon2 from "../../assets/agence_ic2.svg";
import icon3 from "../../assets/agence_ic3.svg";
import arrowDown from "../../assets/images/arrow down header.svg";
import { BsCheckLg } from "react-icons/bs";
import avatar from "../../assets/time_avatar.png";
import row1 from "../../assets/immob_row1.png";
import row2 from "../../assets/immob_row2.png";
import row3 from "../../assets/immob_row3.png";
import row4 from "../../assets/immob_row3.png";
import img1 from "../../assets/agence_img1.png";
import img2 from "../../assets/agence_img2.png";
import img3 from "../../assets/agence_img3.png";
import img4 from "../../assets/agence_img4.png";
import { Link } from "react-router-dom";
import ToggleLine from "../../components/toggle_line/Toggle_line";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Agences() {
  return (
    <>
      <Navbar />
      <div className="time_header">
        <h1>
          {" "}
          <span>Gestion de projet pour les agences</span> - professionnalisme et
          flexibilité
        </h1>
        <p style={{textAlign:"center"}}>
          Les agences et autres prestataires de services bénéficient du logiciel
          de gestion simple et automatisé Faji.
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
          cardTitle1="Gestion de projet simple & flexible"
          cardTitle2="Traitement moderne des commandes"
          cardTitle3="Décompte de salaire intuitif"
          text1="La gestion électronique des projets vous fait gagner un temps précieux que vous pouvez consacrer à vos clients. Priorisez vos contacts et imposez-vous face à la concurrence grâce à la gestion numérique des offres."
          text2="Facturez des taux horaires personnalisés grâce à la saisie des projets et des temps et convainquez vos clients grâce au design unique de vos documents. La transparence dans l'utilisation des ressources est un plus pour vos clients et renforce votre relation."
          text3="Envoyez en toute simplicité vos décomptes de salaire mensuels et vos certificats de salaire annuels par e-mail à vos collaborateurs – c'est facile avec Faji. Notre logiciel est certifié Swissdec et répond à toutes les exigences légales."
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
        Le logiciel de gestion pour les agences        </h1>
        <p className="p1">
        Découvrez comment gérer l'administration et la comptabilité de votre agence de manière professionnelle et intelligente grâce à un logiciel adapté.
        </p>
        <br />
        <br />
        <Row
          className="green"
          title="Une facturation professionnelle en un temps record"
          text1="Transformez facilement et rapidement vos commandes en factures."
          text2="Facturer des taux horaires personnalisés pour chaque projet."
          text3="Séduisez vos clients avec des factures au design unique."
          text4="Créez des QR-factures et envoyez-les par e-mail."
          img={row1}
        />
        <RowRev
          className="blue"
          title="La comptabilité sans prise de tête"
          text1="Tenir des listes Excel manuellement, avec un risque élevé d'erreurs, c'est du passé."
          text2="Faji automatise presque entièrement votre comptabilité."
          text3="Vous réalisez ainsi plus rapidement le décompte de la TVA et le bilan annuel."
          text4="Collaboration efficace avecvotre   comptable en ligne et directement depuis votre compte Faji."
          img={row2}
        />
        <Row
          className="green"
          title="Saisie des temps et gestion de projet"
          text1="Attribuez le temps de travail fourni à vos clients et facturez-le directement."
          text2="Vous et vos collaborateurs saisissez les temps de travail en ligne dans le logiciel, soit au moyen du chronomètre, soit manuellement."
          text3="La saisie des temps intégrée vous permet, à vous et à vos collaborateurs, d'économiser un temps et des efforts considérables."
          text4="Une planification parfaite de vos projets grâce à une répartition optimisée des temps de travail."
          img={row3}
        />
        <RowRev
          className="blue"
          title="Finis les décomptes de salaire fastidieux"
          text1="Vos commandes et factures bénéficient d'un design personnalisé."
          text2="Gain de temps grâce au décompte de salaire en ligne pour vos collaborateurs."
          text3="Grâce à la connexion e-banking, les salaires sont directement versés aux collaborateurs depuis Faji."
          text4="Le décompte de salaire répond à toutes les exigences légales et propose la procédure uniforme de déclaration des salaires (ELM)."
          img={row4}
        />
      </div>
      <div className="rens_text">
        <span>
        clockodo – Saisie du temps de travail avec contrôle total des coûts
        </span>
        <br />
        <p>
        Saviez-vous que Faji vous permet d'élargir l'étendue de ses fonctions de manière individuelle? Grâce aux nombreuses applications de notre Marketplace, vous pouvez créer votre propre compte Faji. L'application clockodo, par exemple, vous simplifie encore plus la saisie des temps de travail. Les temps saisis en déplacement sont automatiquement transmis à votre compte Faji. Vous pouvez ainsi transférer les temps de travail directement dans le décompte de salaire ou les facturer directement à votre client. Avec clockodo, vous gérez également les absences de vos collaborateurs de manière simple et numérique. Vos collaborateurs soumettent leurs demandes de congés en ligne et, en tant que supérieur hiérarchique, vous en êtes directement informé. Le calendrier des absences vous permet de garder un œil sur les disponibilités de vos collaborateurs et de les planifier de manière ciblée.
        </p>
        <br />
        <Link to="/trial">Testez gratuitement</Link>
      </div>
      <div className="immob_imgs_wrapper">
        <h1>Le quotidien d'une agence</h1>
        <p>
        Pour vous, en tant que propriétaire d'une agence ou d'une société de services, le traitement des projets et la saisie des temps correspondants sont indispensables. Vous et vos collaborateurs devez pouvoir vous concentrer sur la commande du client et la facturation ne doit pas être un processus de travail supplémentaire et stressant. Avec Faji, vous et vos collaborateurs saisissez simplement les temps en ligne depuis votre tablette ou votre smartphone. La facturation des temps de travail à vos clients est ainsi un jeu d'enfant. Le logiciel Faji facilite également le décompte mensuel des salaires de vos collaborateurs. Grâce au décompte de salaire intégré, vous établissez les décomptes en peu de temps. Ces décomptes de salaire répondent bien entendu à toutes les exigences légales. Ainsi, vous avez plus de temps à consacrer à ce que vous aimez vraiment.
        </p>
        <div className="immob_imgs">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </div>
      </div>
      <div className="artisanat_faq">
        <h1>FAQ : Questions et réponses autour de l'utilisation de Faji</h1>
        <ToggleLine
          title="Quels sont les avantages de la gestion de projet en ligne de mon agence?"
          details="Une gestion de projet en ligne vous permet, à vous et à vos collaborateurs, de saisir les temps directement en ligne, ce qui vous fait gagner un temps précieux. Vous pouvez ensuite attribuer directement le temps de travail effectués aux projets correspondants et les facturer ensuite à votre client. Grâce au système de rappel automatisé, vous gardez toujours un œil sur les factures ouvertes et restez maître de la situation."
        />
        <ToggleLine
          title="Ne puis-je pas simplement établir mes factures avec Word ou Excel?"
          details="Bien entendu, vous pouvez également établir vos factures avec Word ou Excel. Toutefois, la rédaction de factures avec Excel ou Word prend beaucoup plus de temps qu'avec un logiciel approprié qui vous aide à garder une vue d'ensemble et qui automatise même entièrement de nombreuses étapes de travail. Vous pouvez par exemple relier votre système e-banking à Faji afin de synchroniser les factures et de gagner du temps. Les données obligatoires sont automatiquement insérées dans votre facture, la TVA est calculée correctement - cela permet non seulement d'économiser du temps et de l'énergie, mais aussi de minimiser les risques d'erreur."
        />
        <ToggleLine
          title="Quels sont les avantages d'une comptabilité salariale en ligne pour mon agence?"
          details="Grâce à la connexion à la comptabilité financière et à votre e-banking, la comptabilité salariale mensuelle n'est plus qu'une affaire de quelques minutes. Avec la comptabilité salariale intégrée à Faji, vous répondez à toutes les exigences légales grâce à la gestion des collaborateurs certifiée Swissdec 4.0 et à la «procédure uniforme de déclaration des salaires» (ELM) gratuite. De plus, vous gagnez du temps lors de la livraison des données aux assurances et aux autorités, car celles-ci sont déjà préparées de manière optimale pour les différents destinataires."
        />
        <ToggleLine
          title="Puis-je obtenir de l'aide pour configurer le compte?"
          details="Que vous utilisiez un logiciel professionnel pour la première fois ou que vous fassiez la transition depuis un autre logiciel, nous vous accompagnons! Nous sommes heureux de vous aider à tout moment et gratuitement. Dans l'espace assistance, vous trouverez de précieux conseils et astuces. Si vous ne savez pas quoi faire: contactez-nous sans frais. Si vous souhaitez une assistance pour la configuration, nous vous proposons également différents services de configuration."
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

