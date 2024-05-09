import React from "react";
import "./Renseignements.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import icon1 from "../../assets/rens_icon2.svg";
import icon2 from "../../assets/time_icon2.svg";
import icon3 from "../../assets/rens_icon3.svg";
import icon4 from "../../assets/rens_icon4.svg";
import arrowDown from "../../assets/images/arrow down header.svg";
import { Link } from "react-router-dom";
import Ratings from "../../components/ratings/Ratings";
import "../../components/pricing/pricing.css";
import checkWhite from "../../assets/icons/check.svg";
import checkBlue from "../../assets/icons/check white.svg";
import plus from "../../assets/icons/+.svg";
import plusWhite from "../../assets/icons/+white.svg";
import ToggleLine from "../../components/toggle_line/Toggle_line";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Renseignements() {
  return (
    <>
      <Navbar />
      <div className="rens_header">
        <h1>
          <span>JurLine: </span>une assistance juridique gratuite par téléphone
        </h1>
        <h2 className="h2">
          Des réponses rapides par téléphone à toutes vos questions d'ordre
          juridique concernant votre entreprise. Offre exclusive pour les
          clients Faji.
        </h2>
        <Link to="/trial">Testez gratuitement</Link>
        <div className="rens_cards">
          <CardRv
            span="Conseil juridique rapide"
            title=" dans tous les domaines du droit du travail suisse"
            text="L'un de vos employés prétend avoir fait des heures supplémentaires qu'il n'a pas effectuées et vous souhaitez savoir comment régler la situation en conformité avec la loi? Des problèmes et des questions juridiques peuvent surgir à tout moment dans la vie d'une entreprise. Les juristes expérimentés de Protekta* vous aideront à lever toutes les incertitudes dans ces moments critiques."
            text1="Tout ce dont vous avez besoin pour votre entreprise avec Faji. Faji est la solution tout-en-un pour les PME: un logiciel avec toutes les fonctionnalités nécessaires pour la gestion de votre PME, extensible grâce à 80+ apps partenaires. Et avec l'abonnement annuel Pro+, profitez du service d'assistance juridique gratuite JurLine de Protekta*."
          />
        </div>
        <Header
          icon1={icon2}
          icon2={icon1}
          icon3={icon3}
          icon4={icon4}
          cardTitle1="Conseil juridique gratuit*"
          cardTitle2="Une assistance juridique compétente"
          cardTitle3="Nombre d'appels illimité"
          cardTitle4="Idéal pour les PME et les indépendants"
          text1="Les réponses à toutes les questions juridiques relatives à votre entreprise - un service gratuit* pour les clients Faji avec l'abonnement annuel Pro+!"
          text2="Les juristes expérimentés du service de protection juridique Protekta* répondent par téléphone à toutes vos questions d'ordre juridique relatives à votre entreprise (droit suisse). Un service efficace, compétent et facile d'accès."
          text3="Profitez en tant que client Faji de conseils juridiques illimités pour votre entreprise. Une assistance compétente disponible à tout moment par téléphone."
          text4="Le service JurLine est idéal pour toutes les entreprises sans conseiller juridique interne, que vous ayez plusieurs employés ou que vous dirigiez une entreprise individuelle. Les indépendants comme les PME évitent ainsi toutes les mauvaises surprises."
        />
      </div>

      <div className="rens_text">
        <span>
          Pour un meilleur travail d'équipe: saisie des temps en ligne pour les
          collaborateurs
        </span>
        <br />
        <p>
          Bénéficiez gratuitement de l'assistance juridique par téléphone
          JurLine de Protekta* en optant pour l'abonnement annuel Pro+. Vous
          préfèreriez plutôt souscrire l'abonnement Starter ou Pro de Faji? Vous
          pouvez également profiter du service JurLine pour seulement 119 CHF
          par an. Activez simplement l'option JurLine lors de votre commande.
        </p>
        <br />
        <Link to="/trial">Testez gratuitement</Link>
      </div>
      <div className="rens_header">
        <h1>
          <span>Faji & JurLine: </span> une offre unique en Suisse
        </h1>
        <h2 className="h2">
          Des réponses rapides par téléphone à toutes vos questions d'ordre
          juridique concernant votre entreprise. Offre exclusive pour les
          clients Faji.
        </h2>
        <table>
          <tr className="first">
            <td></td>
            <td>Offre Faji & JurLine</td>
            <td>Offres concurrentes</td>
          </tr>
          <tr className="second">
            <td>Nombre d'appels</td>
            <td>
              Nombre d'appels <span> illimité </span>{" "}
            </td>
            <td>Prestation unique</td>
          </tr>

          <tr className="third">
            <td>Tarif</td>
            <td>
              Avec abonnement Pro+: <span> gratuit </span>
              <br />
              <br />
              Avec abonnement Starter ou Pro: 119 CHF par an
            </td>
            <td>45 CHF minimum par consultation</td>
          </tr>
        </table>
      </div>
      <div>
        <div className="section1_pricing">
          <div className="textPricing1">
            <div className="textPricingFlex">
              <a href="/">Annuel</a>
              <a href="/">Mensuel</a>
            </div>
          </div>
        </div>
        <div className="section2_pricing">
          <div className="pricing1">
            <h3>Starter</h3>
            <p>Pack Starter pour fondateurs</p>
            <h5 className="price_pricing1">
              seul .&nbsp;{" "}
              <span style={{ fontSize: 35 }}>
                <b>CHF 39 </b>
              </span>{" "}
              &nbsp;.- /mois¹
            </h5>
            <h6>1 utilisateur</h6>
            <p style={{ paddingTop: "1%" }}>
              Mises à jour, sauvegardes et assistance 24/24, 7/7 incluses (à
              votre service 365 jours par an)
            </p>
            <ul>
              <li>
                <img src={checkBlue} alt="img" />
                Gestion des contacts et des clients
              </li>
              <li>
                <img src={checkBlue} alt="img" />
                Dépenses
              </li>
              <li>
                <img src={checkBlue} alt="img" />
                Gestion des produits
              </li>
              <li>
                <img src={checkBlue} alt="img" />
                Devis et factures
              </li>
              <li>
                <img src={checkBlue} alt="img" />
                E-Banking
              </li>
              <li>
                <img src={checkBlue} alt="img" />
                Comptabilité
              </li>
              <li>
                <img src={checkBlue} alt="img" />
                App Marketplace
              </li>
              <li>
                <img src={plus} alt="img" />
                Gestion des salaires dispo
              </li>
              <li>
                <img src={plus} alt="img" />
                Renseignements juridiques²
              </li>
              <li>
                <img src={plus} alt="img" />
                Boutique en ligne
              </li>
            </ul>
            <a href="/">Testez gratuitement</a>
          </div>
          <div className="pricing2">
            <div className="appreciated_pricing">
              <h4>Plus Apprécié</h4>
            </div>
            <div className="pricing2_inside pricing2">
              <h3>Pro</h3>
              <p>Pack Standard pour PME</p>
              <h5 className="price_pricing2">
                seul .&nbsp;{" "}
                <span style={{ fontSize: 35 }}>
                  <b>CHF 39</b>
                </span>
                &nbsp; .- /mois¹
              </h5>
              <h6>jusqu'à 3 utilisateurs</h6>

              <p style={{ paddingTop: "1%" }}>
                Mises à jour, sauvegardes et assistance 24/24, 7/7 incluses (à
                votre service 365 jours par an)
              </p>
              <ul>
                <li>
                  <img src={checkWhite} alt="img" />
                  Tout de Starter
                </li>
                <li>
                  <img src={checkWhite} alt="img" />
                  Gestion des stocks
                </li>
                <li>
                  <img src={checkWhite} alt="img" />
                  Suivi des temps et des projets
                </li>
                <li>
                  <img src={checkWhite} alt="img" />
                  Saisie de temps mobile
                </li>
                <li>
                  <img src={plusWhite} alt="img" />
                  Gestion des salaires disp
                </li>
                <li>
                  <img src={plusWhite} alt="img" />
                  Renseignements juridiques²
                </li>
                <li>
                  <img src={plusWhite} alt="img" />
                  Boutique en ligne
                </li>
              </ul>
              <a href="/">Testez gratuitement</a>
            </div>
          </div>
          <div className="pricing1 pricing1_last">
            <h3>Pro+</h3>
            <p>Pack complet pour plus grandes équipes</p>
            <h5 className="price_pricing1">
              seul . &nbsp;
              <span style={{ fontSize: 35 }}>
                <b>CHF 109</b>
              </span>{" "}
              &nbsp; .- /mois¹
            </h5>
            <h6>jusqu'à 25 utilisateurs</h6>
            <p style={{ paddingTop: "1%" }}>
              Mises à jour, sauvegardes et assistance 24/24, 7/7 incluses (à
              votre service 365 jours par an)
            </p>
            <ul>
              <li>
                <img src={checkBlue} alt="img" />
                Tout de Pro
              </li>
              <li>
                <img src={checkBlue} alt="img" />
                Gestion des salaires disp
              </li>
              <li>
                <img src={checkBlue} alt="img" />
                Renseignements juridiques²
              </li>
              <li>
                <img src={plus} alt="img" />
                Boutique en ligne
              </li>
            </ul>
            <a href="/">Testez gratuitement</a>
          </div>
        </div>
        <div className="under_pricing">
          <div className="legend_pricing">
            <p>1 Prix hors taxe sur la valeur ajoutée</p>
            <p> 2 Uniquement pour le paiement annuel</p>
            <p>+ Pack Starter pour fondateurs</p>
          </div>
          <a href="/" className="compare_pricing">
            Comparer tous les packages
          </a>
        </div>
        <br /><br /><br />
        <Ratings />
        <div className="faqs_rens">
          <h1>Questions fréquentes</h1>
        <ToggleLine
              title="Quels types de questions puis-je poser à l'équipe d'assistance JurLine?"
              details="Vous pouvez poser des questions d'ordre juridique (droit suisse) concernant votre entreprise. Il peut s'agir de questions sur le droit du travail ou d'autres questions juridiques relatives à l'activité de votre entreprise. Deux exemples de questions types:
              «Un de mes employés prétend avoir fait des heures supplémentaires qu'il n'a pas effectuées. Comment régler la situation en conformité avec la loi?»
              «Une cliente m'accuse d'avoir transmis à un tiers ou utilisé de manière inappropriée les informations personnelles qu'elle m'a fournies dans le cadre d'une prestation de service. Comment prouver que je n'ai pas violé les règles de protection des données?»."
            />
        <ToggleLine
              title="Est-il possible de faire vérifier des documents aux juristes de JurLine?"
              details="Non, JurLine est un service d'assistance uniquement téléphonique. Vous ne pouvez pas faire examiner de documents par vos interlocuteurs et aucune information écrite ne peut vous être fournie. Si vous avez des questions concernant un passage spécifique d'un document, vous pouvez néanmoins les poser par téléphone."
            />
        <ToggleLine
              title="Je souhaite opter pour un abonnement Faji avec facturation mensuelle. Pourrai-je profiter du service JurLine?"
              details="Non, vous ne pouvez pas souscrire au service si vous avez un abonnement mensuel. L'assistance juridique JurLine est incluse dans l'abonnement Faji Pro+ avec facturation annuelle et peut être souscrite en option avec les abonnements annuels Starter et Pro pour 119 CHF par an."
            />
            <h6 className="h6">
            *JurLine est un service de renseignements juridiques par téléphone inclus dans l'assurancede protection juridique Protekta. Ce service est inclus gratuitement dans l'abonnement FajiPro+. L'assistance juridique JurLine ne peut pas être utilisée pendant la période de testgratuite de 30 jours proposée par Faji.
            </h6>
        </div>
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

const CardRv = ({ span, title, text, text1 }) => {
  return (
    <div className="rens_card_reverse">
      <div className="rens_card_reverse_blue"></div>
      <div className="rens_card_reverse_content">
        <h1>
          <span> {span} </span>
          {title}
        </h1>
        <p>{text}</p>
        <p>{text1}</p>
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
