import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import img from "../../assets/trucs_img.svg";
import "./Academy.css";
import { Link } from "react-router-dom";
import icon1 from "../../assets/test_icon1.svg";
import icon2 from "../../assets/test_icon2.svg";
import icon3 from "../../assets/test_icon3.svg";
import icon4 from "../../assets/test_icon4.svg";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Academy() {
  return (
    <>
      <Navbar />
      <div className="academy_title">
        <h1>
          <span>Academy -</span> La plateforme de formation pour votre
          entreprise
        </h1>
        <p>
          Participez à des webinaires passionnants, des formations intensives et
          des ateliers express pour développer rapidement vos compétences.
        </p>
      </div>
      <div className="section2_trouver">
        <select className="trouver_select trouver_partner2">
          <option value="" disabled selected>
            {" "}
            Choisir une catégorie{" "}
          </option>
        </select>
        <select className="trouver_select trouver_filter">
          <option value="" disabled selected>
            {" "}
            Sélectionner le type d'événement{" "}
          </option>
        </select>
        <select className="trouver_select">
          <option value="" disabled selected>
            {" "}
            Séléctionner le niveau
          </option>
        </select>
      </div>
      <div className="academy_cards">
      <AcademyCard
            title="Les bases de la comptabilité dans Faji"
            body="Cette formation présente les bases de la comptabilité et du logiciel. Découvrez les écritures générées dans Faji lorsque vous créez une facture, une dépense, une facture fournisseur, ou encore un rapprochement automatique des écritures bancaires."
            price="CHF 390.-"
            time="3 heures"
            dispo="Online"
            func="Faji Fonctionnalités "
            niveau="Débutant"
          />
      <AcademyCard
            title="Les bases de la comptabilité des salaires dans Faji"
            body="Le thème de la comptabilité salariale est un terrain inconnu et vous vous sentez peu sûr de vous lors de l'utilisation de Faji? Ce cours est fait pour vous! Nous allions théorie et pratique afin que vous soyez bien équipé pour démarrer."
            price="CHF 390.-"
            time="3 heures"
            dispo="Online"
            func="Faji Fonctionnalités "
            niveau="Débutant"
          />
      <AcademyCard
            title="Paramétrez votre compte Faji"
            body="Afin de bien débuter avec Faji, apprenez en détails comment paramétrer chaque module."
            price="Gratuit"
            time="45 minutes"
            dispo="Online"
            func="Faji Fonctionnalités "
            niveau="Débutant"
          />
      <AcademyCard
            title="De l'offre à la facture"
            body="Découvrez la gestion des ventes dans Faji. Dans ce webinaire, nous vous montrerons toutes les options qui s'offrent à vous lors de la création de documents, tels que les offres, les factures partielles, répétitives, etc."
            price="Gratuit"
            time="45 minutes"
            dispo="Online"
            func="Faji Fonctionnalités "
            niveau="Débutant"
          />
      <AcademyCard
            title="Les Achats dans Faji"
            body="Dans ce webinaire, vous apprendrez tout ce qui concerne les achats dans Faji. Comment comptabiliser et payer correctement les factures des fournisseurs et comment télécharger et traiter les dépenses dans Faji."
            price="Gratuit"
            time="45 minutes"
            dispo="Online"
            func="Faji Fonctionnalités "
            niveau="Débutant"
          />
      <AcademyCard
            title="Les bases de la comptabilité dans Faji"
            body="Quels sont les premiers pas dans l'outil de comptabilité Faji ? Découvrez comment ouvrir et gérer votre comptabilité dans Faji de manière simple et efficace."
            price="Gratuit"
            time="45 minutes"
            dispo="Online"
            func="Faji Fonctionnalités "
            niveau="Débutant"
          />
      <AcademyCard
            title="Nouveau taux de TVA: que faire dans Faji?"
            body="Dans ce webinaire, nous vous montrerons comment enregistrer les nouveaux taux de TVA dans votre compte Faji et ce à quoi vous devez faire attention lors des réglages."
            price="Gratuit"
            time="30 minutes"
            dispo="Online"
            func="Faji Fonctionnalités "
            niveau="Débutant"
          />
      </div>
      <div className="aide_trucs">
        <div>
          <img src={img} alt="img" />
        </div>
        <div>
          <h1>Avez-vous des questions?</h1>
          <h2>
            Si vous avez des questions concernant Faji Academy ou un webinaire
            en particulier, n'hésitez pas à nous contacter. Nous serons ravis de
            vous aider!
          </h2>
          <p>Contacter l'équipe Faji Academy</p>
        </div>
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
      <section id="contact">
        <h4>
          Avez-vous encore des questions ? Appelez-nous:{" "}
          <span>+216 71 808 862</span>{" "}
        </h4>
        <h4>
          Si vous préférez nous écrire: <span>contact@faji.com.tn</span>
        </h4>
      </section>
      <BTTButton/>
      <Footer />
    </>
  );
}

 const AcademyCard = ({title,body,price,time,dispo,func,niveau}) => {
    return (
    <>
   <div className="academy_card">
  <div className="academy_col1">
    <h1>{title}</h1>
    <h2>{body}</h2>
    <p>{price}</p>
  </div>

  <div className="academy_col2">
    <div className="campus_library_card_div">
      <img src={icon1} alt="img" />
      <p>{time}</p>
    </div>
    <div className="campus_library_card_div">
      <img src={icon2} alt="img" />
      <p>{dispo}</p>
    </div>
    <div className="campus_library_card_div">
      <img src={icon3} alt="img" />
      <p>{func}</p>
    </div>
    <div className="campus_library_card_div">
      <img src={icon4} alt="img" />
      <p>{niveau}</p>
    </div>{" "}
    <div className="campus_library_end">
      {" "}
      <button>En savoir plus</button>
    </div>
  </div>
</div>
    </>
    );
  }
  