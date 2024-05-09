import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Immobiliere.css";
import icon1 from "../../assets/immob_i1.svg";
import icon2 from "../../assets/immob_i2.svg";
import icon3 from "../../assets/immob_i3.svg";
import arrowDown from "../../assets/images/arrow down header.svg";
import { BsCheckLg } from "react-icons/bs";
import avatar from "../../assets/time_avatar.png";
import row1 from "../../assets/immob_row1.png";
import row2 from "../../assets/immob_row2.png";
import row3 from "../../assets/immob_row3.png";
import row4 from "../../assets/immob_row3.png";
import img1 from "../../assets/immob1.png";
import img2 from "../../assets/immob2.png";
import img3 from "../../assets/immob3.png";
import img4 from "../../assets/immob4.png";
import { Link } from "react-router-dom";
import ToggleLine from "../../components/toggle_line/Toggle_line";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Immobiliere() {
  return (
    <>
      <Navbar />
      <div className="time_header">
        <span>Une administration facilitée</span>
        <p style={{textAlign:"center"}}>
          Bénéficiez du logiciel de comptabilité numérique et automatisé de
          Faji.
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
          cardTitle1="Gestion des contacts efficace et professionnelle"
          cardTitle2="Travail flexible grâce à notre logiciel basé sur le cloud"
          cardTitle3="Vos finances en un coup d'œil"
          text1="Gérez les contacts de vos locataires et propriétaires de manière professionnelle dans le CRM. Enregistrez des catégories individuelles et définissez des contacts internes pour chaque contact."
          text2="Avec Faji, vous avez accès à vos données à tout moment et en tout lieu. Connectez-vous simplement pour avoir accès à vos données - que vous soyez en visite chez un client, en déplacement ou au bureau."
          text3="Vous avez toujours un œil sur les chiffres clés et les dépenses courantes - pour un travail et des décisions basées sur des informations concrètes. Qu'il s'agisse de factures ouvertes, de ventes ou de liquidités, vous avez une vue d'ensemble. Comptabilité et e-banking vont enfin de pair."
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
          Un logiciel adapté pour le secteur de l'immobilier
        </h1>
        <p className="p1">
          Découvrez comment gérer et numériser l'administration et la
          comptabilité de votre société immobilière facilement. Dites adieu à la
          paperasse! Un gain de temps et d'argent.
        </p>
        <br />
        <br />
        <Row
          className="green"
          title="Un support client professionnel"
          text1="Avec Faji, vous facilitez votre travail quotidien en tant qu'agent immobilier."
          text2="Vous avez toujours les coordonnées de vos locataires et propriétaires à portée de main dans le CRM."
          text3="Des fonctionnalités adaptées et des notes personnalisées sur vos contacts favorisent vos relations client."
          img={row1}
        />
        <RowRev
          className="blue"
          title="Une comptabilité tenue en ligne pour gagner du temps"
          text1="La comptabilité, intégrée directement dans Faji, vous permet d'économiser du temps et des nerfs."
          text2="La déclaration de TVA et les états financiers annuels peuvent être complétés en quelques clics directement dans le logiciel."
          text3="De nombreux processus sont automatisés, vous gardez ainsi du temps pour votre activité principale, les vendeurs, les propriétés et les locataires."
          img={row2}
        />
        <Row1
          className="green"
          title="Enregistrement du temps de travail et des projets — simple et efficace"
          text1="Affectation facile des temps enregistrés aux nouveaux projets immobiliers."
          text2="Comptabilité professionnelle des dépenses des employés pour les clients."
          text3="La relance automatisée permet d'effectuer vos paiements jusqu'à 26% plus rapidement."
          text4="Enregistrement des temps même lorsque vous êtes en déplacement avec l'application Faji GO - que ce soit lors de visites ou de rendez-vous client."
          img={row3}
        />
        <RowRev1
          className="blue"
          title="Vos décisions axées sur des résultats concrets"
          text1="Grâce au tableau de bord personnalisé, vous ne perdrez plus de vue votre chiffre d'affaires, vos factures en cours et vos liquidités."
          text2="Vous pouvez également créer des commandes et des factures avec votre propre design professionnel et personnalisé."
          img={row4}
        />
      </div>
      <div className="rens_text">
        <span>
          Bénéficiez d'Amnis — pour la vente de vos biens immobiliers
          internationaux
        </span>
        <br />
        <p>
          Vous gérez également des biens immobiliers à l'étranger et donc des
          opérations de paiement internationales? Saviez-vous que vous pouvez
          étendre l'éventail des fonctions de votre compte Faji avec les
          applications de notre Faji Marketplace? Avec l'application partenaire
          Amnis, vous pouvez recevoir des montants et payer des factures au
          niveau international. Choisissez jusqu'à 50 devises. Ne manquez pas
          une bonne affaire! Avec Amnis, vous économisez plus de 70% par rapport
          à votre banque.
        </p>
        <br />
        <Link to="/trial">Testez gratuitement</Link>
      </div>
      <div className="immob_imgs_wrapper">
        <h1>Pour une gestion flexible de votre société immobilière</h1>
        <p>
          En tant que propriétaire d'une société immobilière, vous êtes souvent
          sur la route — pour des visites, de nouveaux projets de construction
          ou d'autres rendez-vous clients. La flexibilité et la disponibilité
          sont importantes pour votre entreprise. C'est exactement ce que vous
          offre le logiciel Faji. En tant que logiciel basé sur le cloud, vous
          avez accès à tout moment à vos contacts, vos chiffres clés et vos
          projets en cours. De plus, vous et vos employés pouvez facilement
          saisir les heures de travail en ligne, ce qui vous aide lors de la
          facturation, ainsi que l'élaboration des fiches de salaire. Avec Faji,
          vous avez plus de temps pour ce que vous aimez vraiment.
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
            title="Quels avantages m'offre le décompte des salaires en ligne dans Faji?"
            details="En tant que propriétaire d'une société immobilière, vous voyagez beaucoup – et vos employés aussi. Dans Faji, le décompte des salaires en ligne peut être utilisé pour faciliter le décompte mensuel des salaires. La comptabilité salariale est connectée à la comptabilité financière et à l’e-banking. Vous pouvez ainsi payer les salaires ou les comptabiliser par virement bancaire sans comparaisons supplémentaires. De plus, vous recevez des rapports détaillés, des fiches de salaire et des décomptes de salaire basés sur vos données. Les fiches de salaire et les déclarations de salaire annuelles sont envoyées par e-mail. Vous gagnez ainsi encore plus de temps!"
          />
          <ToggleLine
            title="Quels sont les avantages de la gestion numérique des contacts avec Faji?"
            details="Bien entendu, vous pouvez créer vos factures avec Word ou Excel. Cependant, rédiger des factures avec Excel ou Word prend beaucoup plus de temps qu'avec un logiciel approprié. Faji vous assiste et automatise certaines étapes de travail. Par exemple, vous pouvez lier votre e-banking à Faji pour gagner du temps lors de la comparaison des factures. Les informations obligatoires sont automatiquement ajoutées à vos factures et la TVA est calculée directement. Cela économise non seulement du temps, mais minimise également le risque d'erreurs."
          />
          <ToggleLine
            title="Que signifie un essai gratuit de 30 jours?"
            details="Vous pouvez tester Faji et l'ensemble des fonctionnalités pendant 30 jours gratuitement, sans engagement et sans enregistrer de carte de crédit. Pas de téléchargement, pas d'installation. Prêt à démarrer en quelques étapes seulement. Une fois les 30 jours écoulés, votre compte test sera automatiquement désactivé, aucune annulation n'est nécessaire."
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
            La solution optimale pour vos propriétés
            <img src={arrowDown} alt="img" />
          </h2>

          <div className="header_cards">
            <div className="header_card">
              <img alt="img" src={icon1} className="header_card_icon"></img>
              <h3>{cardTitle1}</h3>
              <p>{text1}</p>
            </div>
            <div className="header_card">
              <img alt="img" src={icon2} className="header_card_icon"></img>
              <h3>{cardTitle2}</h3>
              <p>{text2}</p>
            </div>
            <div className="header_card">
              <img alt="img" src={icon3} className="header_card_icon"></img>
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
const Row = ({ className, title, text1, text2, text3, img }) => {
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
      </div>
    </div>
  );
};
const Row1 = ({ className, title, text1, text2, text3, text4, img }) => {
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
const RowRev = ({ className, title, text1, text2, text3, img }) => {
  return (
    <div className="row_reverse">
      <div className="row_reverse_lines">
        <h2>
          <span>{title}</span>
        </h2>
        <Line className="line_reverse" text={text1} />
        <Line className="line_reverse" text={text2} />
        <Line className="line_reverse" text={text3} />
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
const RowRev1 = ({ className, title, text1, text2, img }) => {
  return (
    <div className="row_reverse">
      <div className="row_reverse_lines">
        <h2>
          <span>{title}</span>
        </h2>
        <Line className="line_reverse" text={text1} />
        <Line className="line_reverse" text={text2} />{" "}
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
