import React from "react";
import { BsCheckLg } from "react-icons/bs";
import "./Banking.css";
import Navbar from "../../components/navbar/Navbar";
import Header1 from "../../components/header1/Header1";
import Footer from "../../components/footer/Footer";
import Ratingswhitebg from "../../components/ratings_white_bg/Ratings_white_bg";
import Test from "../../components/test/Test";
import Testimonials from "../../components/testimonials/Testimonials";
import ToggleLine from "../../components/toggle_line/Toggle_line";
import employee from "../../assets/icons/employee.svg";
import bag from "../../assets/icons/bag header.svg";
import shield from "../../assets/icons/shield banking.svg";
import rocket from "../../assets/icons/rocket banking.svg";
import row1 from "../../assets/images/row1 banking.png";
import row2 from "../../assets//images/row2 banking.png";
import partner from "../../assets/images/partner ubs 80.svg";
import logo1 from "../../assets/banking logo/logo1.svg";
import logo2 from "../../assets/banking logo/logo2.svg";
import logo3 from "../../assets/banking logo/logo3.svg";
import logo4 from "../../assets/banking logo/logo4.svg";
import logo5 from "../../assets/banking logo/logo5.svg";
import logo6 from "../../assets/banking logo/logo6.svg";
import logo7 from "../../assets/banking logo/logo7.svg";
import logo8 from "../../assets/banking logo/logo8.svg";
import logo9 from "../../assets/banking logo/logo9.svg";
import BTTButton from "../../components/BTTButton/BTTButton";

const Banking = () => {
  return (
    <>
      <Navbar />
      <Header1
        span="e-Banking et Faji -"
        title=" rapprochement automatique avec votre compte bancaire"
        paragraph="Connectez la comptabilité de Faji à votre e-banking."
        icon1={bag}
        icon2={shield}
        icon3={rocket}
        icon4={employee}
        cardTitle1="Simple"
        cardTitle2="Sûr"
        cardTitle3="Rapide"
        cardTitle4="Direct"
        text1="Connectez simplement votre compte bancaire et lancez-vous."
        text2="Un chiffrage selon des normes de sécurité élevées."
        text3="Gagnez du temps grâce à la synchronisation automatique."
        text4="Une connexion directe à votre comptabilité dans Faji."
        span2="e-Banking et Faji:"
        title2=" comment ça marche?"
        paragraph2="Faji et votre banque forment une équipe solide – vous savez automatiquement quels paiements doivent être effectués. Gardez une vue d'ensemble des factures ouvertes et payées et oubliez la saisie manuelle."
      />
      <div className="cards_sales">
        <Row
          className="green"
          title="Gagnez du temps en toute simplicité"
          body="Connectez simplement un compte bancaire et lancez-vous."
          text1="La connexion entre votre e-banking et Faji vous permet de gagner un temps précieux, car le travail de rapprochement manuel n'est plus nécessaire."
          text2="Une fois approuvés par vos soins, les ordres de paiement provenant des factures fournisseurs, des avoirs ou de la comptabilité salariale sont automatiquement envoyés à votre e-banking."
          text3="Les paiements entrants sont automatiquement associés aux factures ouvertes: celles-ci sont marquées comme «payées» lorsque le paiement est reçu ou «en retard» si le paiement n'arrive pas dans les temps."
          img={row1}
        />
        <RowRev
          className="blue"
          title="Sûr et direct"
          body="Des normes de sécurité élevées et une connexion directe à votre comptabilité."
          text1="Les données sont automatiquement transférées entre Faji et votre banque et chiffrées selon des normes de sécurité élevées."
          text2="Votre e-banking étant également connecté à votre comptabilité, cette dernière est toujours à jour."
          text3="Saisissez vos paiements aux fournisseurs et créanciers directement dans Faji et payez-les en un clic."
          img={row2}
        />
      </div>
      <h2 className="h2_banking">
        Tout savoir sur{" "}
        <span style={{ color: "#25A7FF" }}> le banking et Faji</span> en moins
        de 3 minutes
      </h2>
      <div className="video1_banking"></div>
      <div className="banking_blue_bg">
        <div className="bbg_1">
          <h2>
            <span style={{ color: "black" }}> Vue d'ensemble </span> des
            interfaces bancaires
          </h2>
          <p>
            Faji vous propose des interfaces vers de nombreuses banques suisses
            afin que vous puissiez facilement connecter votre e-banking.
          </p>
          <img src={partner} alt="img" />
          <h3>
            Les clients profitent des avantages de la collaboration entre UBS et
            Faji à trois niveaux:
          </h3>
          <TicLine text="Les clients UBS ne doivent s'authentifier qu'une seule fois - l'e-banking est ensuite connecté au compte Faji. Les données sont automatiquement transmises entre Faji et UBS e-banking en étant cryptées, ce qui permet de respecter les standards de sécurité élevés de Faji et d'UBS." />
          <TicLine text="Grâce à cette connexion, le rapprochement des paiements entrants et sortants sur le compte bancaire est effectué chaque nuit. L'aperçu financier est donc à jour chaque matin." />
          <TicLine text="Les clients d'UBS profitent de 20% de rabais auprès de Faji pour la 1re année." />
        </div>
        <div className="bbg_2">
          <BankingCard
            img={logo1}
            text="Synchronisez les paiements directement avec l'e-banking de Credit Suisse."
          />
          <BankingCard
            img={logo2}
            text="Faji vous offre une interface avec laquelle vous pouvez synchroniser vos paiements directement avec l'e-banking de PostFinance."
          />
          <BankingCard
            img={logo3}
            text="Synchronisez les paiements directement avec l'e-banking de Thurgauer Kantonalbank."
          />
          <BankingCard
            img={logo4}
            text="Grâce à cette connexion, les opérations de paiement entre l'e-banking de la Zürcher Kantonalbank et Faji peuvent être facilement synchronisées."
          />
          <BankingCard
            img={logo5}
            text="Synchronisez les paiements directement avec l'e-banking de Raiffeisen."
          />
          <BankingCard
            img={logo6}
            text="Synchronisez les paiements directement avec l'e-banking de St.Galler Kantonalbank."
          />
          <BankingCard
            img={logo7}
            text="Synchronisez les paiements directement avec l'e-banking de Valiant."
          />
          <BankingCard
            img={logo8}
            text="Synchronisez les paiements directement avec l'e-banking de la Banque Cantonale Vaudoise (BCV)."
          />
          <BankingCard
            img={logo9}
            text="Synchronisez les paiements directement avec l'e-banking de la Banque Cantonale du Jura (BCJ)."
          />
        </div>
      </div>
      <h2 className="h2_banking" style={{ padding: "5% 0 0 0" }}>
        L'espace «Banking»
      </h2>
      <p className="banking_p">
        Matthias, en sa qualité de responsable produit et spécialiste en matière
        bancaire, se consacre à la gestion des fonctionnalités et à l'évolution
        continue du module Banking de Faji. Dans cette vidéo, il vous offre une
        perspective unique sur ce module, en partageant des informations
        précieuses et des conseils pratiques pour optimiser votre utilisation de
        Faji.
      </p>
      <div className="video1_banking"></div>
      <div className="faq">
        <h2>FAQ: Questions fréquentes concernant les interfaces bancaires</h2>
        <ToggleLine
          title="Comment connecter mon e-banking à Faji?"
          details="Pour connecter votre e-banking à Faji, suivez les instructions détaillées accessibles sur notre portail d'assistance."
        />
        <ToggleLine
          title="Quelles sont les fonctionnalités du module bancaire de Faji?"
          details="Le module bancaire de Faji vous permet d'effectuer toutes sortes de tâches. Saisissez vos paiements aux fournisseurs et créanciers directement dans Faji et payez-les en un clic. Rapprochez les transactions bancaires avec vos débiteurs et créanciers directement dans le logiciel. Le rapprochement manuel n'est plus nécessaire.
            Retrouvez de nombreux conseils et informations utiles sur notre portail d'assistance."
        />
      </div>
      <Testimonials title="Ce que disent " span="nos clients"/>

      <Ratingswhitebg />
      <Test /> <BTTButton />
      <Footer />
    </>
  );
};

export default Banking;
const Row = ({ className, title, body, text1, text2, text3, img }) => {
  return (
    <div className="row_normal">
      {" "}
      <div className="row_normal_img">
        <div className={className}></div>
        <div className="photo_sales_start">
          <img src={img} alt="img" />
        </div>
      </div>
      <div className="row_normal_lines">
        <h2>
          <span>{title}</span>
        </h2>
        <h3>{body}</h3>
        <Line className="line_normal" text={text1} />
        <Line className="line_normal" text={text2} />
        <Line className="line_normal" text={text3} />
      </div>
    </div>
  );
};
const RowRev = ({ className, title, body, text1, text2, text3, img }) => {
  return (
    <div className="row_reverse">
      <div className="row_reverse_lines">
        <h2>
          <span>{title}</span>
        </h2>
        <h3>{body}</h3>
        <Line className="line_reverse" text={text1} />
        <Line className="line_reverse" text={text2} />
        <Line className="line_reverse" text={text3} />
      </div>
      <div className="row_reverse_img">
        <div className={className}></div>
        <div>
          <img src={img} alt="img" />
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

const TicLine = ({ text }) => {
  return (
    <div className="line banking_line">
      <div className="tic_wrapper banking_tic_wrapper">
        <div className="tic banking_tic">
          <BsCheckLg className="tic_icon banking_tic_icon" />
        </div>
      </div>
      <div className="line_text banking_line_text">
        <h4>{text}</h4>
      </div>
    </div>
  );
};
const BankingCard = ({ img, text }) => {
  return (
    <div className="banking_card">
      <img src={img} alt="img" />
      <p>{text}</p>
    </div>
  );
};
