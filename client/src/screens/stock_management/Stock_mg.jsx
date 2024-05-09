import React from "react";
import "./Stock_mg.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import avatar from "../../assets/time_avatar.png";
import RatingsWhiteBg from "../../components/ratings_white_bg/Ratings_white_bg";
import { Link } from "react-router-dom";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function StockMg() {
  return (
    <>
      <Navbar />
      <div className="stock_header">
        <h1>
          <span>La gestion des stock</span> qui fait plaisir
        </h1>
        <Link to="/trial">
                Testez gratuitement
              </Link>
        <div className="stock_header_cards">
          <HeaderCard
            className="stock_header_card1"
            title="Assistance gratuite"
            body="24h/24, 7j/7"
          />
          <HeaderCard
            className="stock_header_card2"
            title="Vos données en"
            body="sécurité en Suisse"
          />
          <HeaderCard
            className="stock_header_card3"
            title="Essai gratuit"
            body="sans carte de crédit"
          />
          <HeaderCard
            className="stock_header_card4"
            title="Plus de"
            body="60'000 clients"
          />
          <HeaderCard
            className="stock_header_card5"
            title="Un logiciel plusieurs fois "
            body="récompensé"
          />
        </div>
      </div>{" "}
      <div className="stock_cards">
        <CardRv2
          span="stock"
          title="Un aperçu du "
          text="Faji vous permet de garder en vue le niveau de votre stock : l'enregistrement d'entrées et sorties se fait de manière claire et facile. Quels sont les ordres pour lesquels du matériel a déjà été réservé? Qu'est-ce qui a déjà été préparé, planifié ou commandé? En résumé, vous voyez tout; de même pour les emplacements de stockage ou des chiffres clés tels que la valeur d'achat ou le stock minimal."
          text2="En bref: toutes les données clés dont vous avez besoin — organisées clairement."
          text3="*Nous recommandons Faji pour un maximum de 150'000 produits sans gestion de stock, 50'000 produits avec gestion de stock, et 15'000 produits pour l’utilisation de l’exportation de produits."
        />
      </div>
      <div className="stock_client">
        <div className="stock_client_img">
          {" "}
          <img src={avatar} alt="img" />
        </div>
        <div className="stock_client_content">
          <h2>Matthias Walti</h2>
          <h5>mazze.ch</h5>
          <p>
            Outre son design et ses nombreuses fonctions utiles, le rapport
            prix/prestation me séduit. Avec Faji, j'ai également accès sans
            problème à toutes mes données depuis chez moi.
          </p>
        </div>
      </div>
      <div className="stock_text">
        <span>Une logistique du stockage automatisée</span>
        <br />
        <p>
          Faji vous permet de simplifier votre gestion de marchandises par le
          biais d'actualisations automatiques des niveaux des stocks.
          D'ailleurs, vos ordres et factures sont liées à la gestion du stock.
          De cette façon, tout changement se reflète de manière immédiate. Suite
          à l'entrée d'une commande, tous les mouvements du stock correspondants
          se déroulent automatiquement.
        </p>
        <p>
          <br />
          La gestion devient encore plus simple à l'aide des codes produit que
          vous pouvez définir librement d'après vos besoins. Evidemment vous
          pouvez également créer plusieurs produits en même temps, en tant que
          produits en série ou sets de produits.
        </p>
      </div>
      <div className="stock_cards">
        <CardNr
          title="Des achats?"
          span=" Saisissez des commandes directement auprès de vos fournisseurs"
          text="Avec Faji vous créez des commandes en trois étapes faciles: choisissez le fournisseur, importez les produits désirés depuis le catalogue, envoyez la commande en PDF. Sans fioritures, facile et rapide. Vos produits commandés sont arrivés? Saisissez une entrée sur-le-champ et gardez votre stock actualisé. Payez vos fournisseurs sans complications: créez la facture fournisseur directement à partir de la commande. Grâce à l'e-banking connecté, payez celle-ci directement dans Faji. La saisie double dans le logiciel comptable et l'e-banking n'est plus nécessaire."
        />
        <CardRv
          title="Etablissement de bons de"
          span="préparation et de livraison en quelques secondes"
          text="Avec Faji créez des bons de livraison et de préparation en quelques clics. Toutes les informations essentielles sont reprises directement. De plus, tous les documents associés peuvent être fournis directement avec votre propre logo. Gardez une apparence professionnelle et gagnez du temps dans le traitement des commandes."
        />{" "}
      </div>
      <RatingsWhiteBg />
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
const CardNr = ({ span, title, text }) => {
  return (
    <div className="stock_card_normal">
      <div className="stock_card_normal_blue"></div>
      <div className="stock_card_normal_content">
        <h1>
          {title}
          <span> {span} </span>
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CardRv2 = ({ span, title, text, text2, text3 }) => {
  return (
    <div className="stock_card_reverse">
      <div className="stock_card_reverse_blue"></div>
      <div className="stock_card_reverse_content">
        <h1>
          {title}
          <span> {span} </span>
        </h1>
        <p>{text}</p>
        <h5>{text2}</h5>
        <h6>{text3}</h6>
      </div>
    </div>
  );
};
const CardRv = ({ span, title, text }) => {
  return (
    <div className="stock_card_reverse">
      <div className="stock_card_reverse_blue"></div>
      <div className="stock_card_reverse_content">
        <h1>
          {title}
          <span> {span} </span>
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
