import React from "react";
import "./pricing.css";
import image1 from "../../assets/images/img1 pricing.png";
import checkWhite from "../../assets/icons/check.svg";
import checkBlue from "../../assets/icons/check white.svg";
import plus from "../../assets/icons/+.svg";
import plusWhite from "../../assets/icons/+white.svg";
import arrow from "../../assets/icons/Arrow Pricing.svg";
import handshake from "../../assets/icons/handshake pricing.svg";
import money from "../../assets/icons/money pricing.svg";
import clock from "../../assets/icons/clock pricing.svg";
import shield from "../../assets/icons/shield pricing.svg";
import laptop from "../../assets/images/Laptop pricing.png";
import ToggleLine from "../toggle_line/Toggle_line";

const Pricing = () => {
  return (
    <div>
      <div className="section1_pricing">
        <div className="img_pricing">
          <div className="rectanglePricingImg"></div>
          <img src={image1} alt="img" />
        </div>
        <div className="textPricing1">
          <h2>Nos packages et tarifs en bref</h2>
          <p>
            Aucuns frais cachés : mises à jour, sauvegardes et assistance
            24h/24, 7j/7, 365j/an, sont incluses dans tous nos packages .
          </p>
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
            Mises à jour, sauvegardes et assistance 24/24, 7/7 incluses (à votre
            service 365 jours par an)
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
            Mises à jour, sauvegardes et assistance 24/24, 7/7 incluses (à votre
            service 365 jours par an)
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
      <div className="section3_pricing">
        <div className="title_section3_pricing">
          <h2>Avantages supplémentaires</h2>
          <img src={arrow} alt="img" />
        </div>
        <div className="cards_pricing">
          <div className="card_pricing">
            <img src={handshake} alt="img" />
            <h5>Assistance gratuite 24h/24, 7j/7</h5>
            <p>
              Notre équipe de conseillers compétents vous assiste gratuitement à
              tout moment .
            </p>
          </div>
          <div className="card_pricing">
            <img src={money} alt="img" />
            <h5>Faites des économies</h5>
            <p>
              Réduisez chaque année vos frais de comptable d'un tiers . <br />
            </p>
          </div>
          <div className="card_pricing">
            <img src={clock} alt="img" />
            <h5>Gagnez du temps</h5>
            <p>
              L'automatisation des processus vous épargne jusqu'à 12 heures de
              travail administratif tous les mois .
            </p>
          </div>
          <div className="card_pricing">
            <img src={shield} alt="img" />
            <h5>Tunisia Made Software</h5>
            <p>
              Vos données sont stockées en toute sécurité en Suisse . <br />
            </p>
          </div>
        </div>
      </div>
      <div className="section4_pricing">
        <h2>
          Toutes les réponses à vos questions à propos de{" "}
          <span style={{ color: "#25A7FF" }}> Faji </span>(FAQ)
        </h2>
      </div>
      <div className="faqs_pricing">
        <ToggleLine
          title="Y a-t-il des conditions particulières si je souhaite utiliser Faji pour plusieurs entreprises (comptes multiples)    ?"
          details="Vous pouvez bénéficier de conditions spéciales exclusives dans les cas suivants:
Vous êtes déjà client Faji et souhaitez également utiliser le logiciel pour une ou plusieurs entreprises supplémentaires.
Vous êtes déjà client Faji et une ou plusieurs personnes vivant dans votre foyer (conjoint, partenaire, enfants, etc.) également propriétaires d'une ou plusieurs entreprises souhaitent utiliser Faji.
Contactez nos experts au 071 552 00 61 et munissez-vous de votre numéro de client. Nos conseillers se feront un plaisir de vous aider."
        />
        <ToggleLine
          title="A quoi correspond l'essai gratuit pendant 30 jours    ?"
          details="Vous pouvez tester Faji gratuitement et sans engagement pendant 30 jours, sans limites de fonctionnalités (package Pro+) et sans enregistrer de carte de crédit. Aucun téléchargement ni installation ne sont requis. Le logiciel est opérationnel en quelques clics. Après l'expiration des 30 jours d'essai, votre compte test est automatiquement désactivé, aucune résiliation n'est nécessaire."
        />
        <ToggleLine
          title="Dois-je opter pour un package spécifique dès maintenant    ?"
          details="Non, vous n'êtes pas obligé de choisir votre abonnement pour l'instant. Pendant la période de test de 30 jours, vous avez la possibilité de tester gratuitement le package Pro+ et toutes ses fonctionnalités. Vous pouvez ensuite choisir l'abonnement qui vous convient le mieux."
        />
        <ToggleLine
          title="La configuration d'un compte est-elle compliquée    ?"
          details="Que vous utilisiez un logiciel de gestion pour la première fois ou que vous changiez de solution, nous sommes à vos côtés à tout moment: nous serons ravis de vous assister gratuitement si vous avez besoin d'aide. Vous trouverez de nombreux conseils et astuces utiles à l'adresse support.Faji.com. Si vous avez encore besoin d'aide? N'hésitez pas à nous contacter! Si vous souhaitez être assisté lors de la configuration initiale, nous vous proposons différents services de configuration."
        />
        <ToggleLine
          title="Quelles sont les options de paiement disponibles et quelle est la durée du délai de préavis    ?"
          details="Votre abonnement Faji est facturé à l'avance et nous vous envoyons une facture tous les mois. Alternativement, nous vous proposons d'opter pour la facturation annuelle: vous réglez ainsi votre abonnement annuel en une fois et profitez d'une réduction de 10%. Le paiement peut être effectué par bulletin de versement ou par carte de crédit. Vous pouvez enregistrer celle-ci dans votre compte Faji afin que les paiements ultérieurs s'effectuent automatiquement, sans action supplémentaire de votre part.
Si vous ne souhaitez plus utiliser Faji, vous pouvez résilier votre compte à la fin de la période de facturation suivant la période en cours. Vos données peuvent être facilement exportées depuis le logiciel."
        />
      </div>
      <div className="section5_pricing">
        <div className="text_pricing5">
          <h3>Vous êtes Comptable ?</h3>
          <p>
            Avec la plateforme en ligne Faji, travaillez de manière plus
            efficace et flexible avec vos clients en profitant pleinement de la
            digitalisation . Faji simplifie l’ensemble de la gestion PME de vos
            clients et vous permet de vous concentrer sur votre cœur de métier .
          </p>
          <a href="/">Inscrivez-vous maintenant</a>
        </div>
        <div className="img_pricing5">
          <img src={laptop} alt="img" />
          <div className="rectangle_pricing5"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
