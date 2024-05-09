import React from "react";
import "./Facture.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import img from "../../assets/facture_img.png";
import img1 from "../../assets/facture_img1.png";
import { BsCheckLg } from "react-icons/bs";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Facture() {
  return (
    <>
      <Navbar />
      <div className="facture_title">
        <h1>
          <span>Modèle de facture gratuit</span> pour Word et Excel
        </h1>
        <p>
          Téléchargez gratuitement notre modèle de facture pour Word et Excel.
        </p>
      </div>
      <div className="facture_test_cards">
        <Card
          title="Créez des factures de manière (quasi) automatique!"
          body="Créez vos factures (quasi) automatiquement avec Faji."
        />
        <Card
          title="Modèle de facture pour Word"
          body="Téléchargez gratuitement un modèle de facture au format Word."
        />
        <Card
          title="Modèle de facture pour Excel"
          body="Téléchargez gratuitement un modèle de facture au format Excel."
        />
      </div>
      <div className="facture_details">
        <div className="facture_details_col1">
          <div className="facture_details_col1_green"></div>
          <div>
            <img src={img} alt="img" />
          </div>
          <div>
            <p>Ill. Cette facture a été créée dans Faji.</p>
          </div>
        </div>
        <div className="facture_details_col2">
          <div className="facture_details_row">
            <div className="facture_number">1</div>
            <div className="facture_border">
              <p>Numéro de facture</p>
            </div>
          </div>
          <div className="facture_details_row">
            <div className="facture_number">2</div>
            <div className="facture_border">
              <p>Date de la facture</p>
            </div>
          </div>
          <div className="facture_details_row">
            <div className="facture_number">3</div>
            <div className="facture_border">
              <p>
                Date de livraison ou de prestation (si elle diffère de la date
                de facturation)
              </p>
            </div>
          </div>
          <div className="facture_details_row">
            <div className="facture_number">4</div>
            <div className="facture_border">
              <p>Votre adresse</p>
            </div>
          </div>
          <div className="facture_details_row">
            <div className="facture_number">5</div>
            <div className="facture_border">
              <p>Adresse du destinataire</p>
            </div>
          </div>
          <div className="facture_details_row">
            <div className="facture_number">6</div>
            <div className="facture_border">
              <p>Votre numéro de TVA</p>
            </div>
          </div>
          <div className="facture_details_row">
            <div className="facture_number">7</div>
            <div className="facture_border">
              <p>
                Montant de la facture (y compris le taux et le montant de la
                TVA)
              </p>
            </div>
          </div>
          <div className="facture_details_row">
            <div className="facture_number">8</div>
            <div className="facture_border">
              <p>Description précise du produit ou du service</p>
            </div>
          </div>
          <br />
          <br />
          <div>
            <p>A noter :</p>

            <p className="facture_padd">
              . Si vous êtes un petit entrepreneur avec un chiffre d'affaires
              annuel inférieur à CHF 100'000, vous n'êtes en principe pas
              assujetti à la TVA et ne devez pas faire figurer la TVA ni votre
              IDE sur vos factures.
            </p>

            <p className="facture_padd">
              . Outre les mentions obligatoires, vous devez indiquer vos
              coordonnées de paiement (numéro de compte ou IBAN, par exemple)
              ainsi que le délai de paiement.
            </p>
          </div>
        </div>
      </div>
      <div className="facture_conseils">
        <h1>Conseils pour la facturation</h1>
        <p>
          Les conseils suivants vous permettront d'optimiser votre processus de
          facturation et d'être payé plus rapidement:
        </p>
        <div className="facture_conseils_lines">
          <Line text="En Suisse, le délai de paiement légal est de 30 jours. Vous pouvez toutefois définir des délais de paiement plus courts sur vos factures (10 ou 14 jours, par exemple) afin d'améliorer vos liquidités. Gardez néanmoins à l'esprit que le délai de paiement doit également être réaliste pour vos clients." />
          <Line text="Si vous établissez des factures régulièrement ou en grand nombre, cela vaut la peine de passer par un logiciel, car de nombreuses opérations peuvent être automatisées et le risque d'erreur est réduit." />
          <Line text="N'attendez pas trop longtemps pour envoyer vos factures. Il est conseillé d'envoyer les factures le plus rapidement possible après avoir fourni la prestation." />
          <Line text="Les escomptes favorisent un bon comportement de paiement et peuvent inciter les clients à payer leurs factures plus rapidement." />
          <Line text="Envoyez des rappels de paiement lorsque les délais de paiement ne sont pas respectés. Dans Faji, les rappels de paiement et les relances peuvent être envoyés de manière entièrement automatique après l'expiration du délai de paiement." />
          <Line text="Créez vos factures avec une section paiement QR. Les factures QR permettent un règlement particulièrement simple et rapide pour vos clients: il leur suffit de scanner le code QR avec leur smartphone pour transmettre les informations de paiement à leur e-banking. Dans Faji, la section de paiement QR est automatiquement créée pour chaque nouvelle facture." />
        </div>
      </div>
      <div className="facture_logiciel_text">
        <h1>Un logiciel plutôt qu'un modèle Word ou Excel?</h1>
        <p>
          Si vous consacrez beaucoup de temps à la création de vos factures, il
          peut être intéressant d'utiliser un logiciel de facturation plutôt
          qu'Excel ou Word: avec un bon outil, l'établissement des factures peut
          devenir un véritable jeu d'enfant, même après une grosse journée de
          travail!
        </p>
        <br />
        <p>
          Avec Faji, vous pouvez créer, remplir et envoyer vos factures de
          manière quasiment automatique et en un seul clic. Tout est en ligne,
          dans votre compte Faji. C'est simple, clair et automatisé!
        </p>
      </div>
      <div className="facture_logiciel_table">
        <table>
          <thead>
            <tr>
              <td>Tâche</td>
              <td>Avec un modèle Word ou Excel</td>
              <td>Avec Faji</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Créez une facture</td>
              <td>
                . Saisir/copier: Données d'adresse <br />
                . Saisir/copier: Postes produits
                <br />
                . Saisir/copier: Numéro de facture
                <br />. Calculer manuellemen: Montant et TVA
              </td>
              <td>
                . Importation: Données d'adresse
                <br />
                . Importation: Postes produits
                <br />
                . Automatique: Numéro de facture
                <br />. Automatique: Montant et TVA
              </td>
            </tr>
            <tr>
              <td>Archivage de la facture</td>
              <td>manuel</td>
              <td>automatique</td>
            </tr>
            <tr>
              <td>Archivage de la facture</td>
              <td>manuel</td>
              <td>automatique</td>
            </tr>
            <tr>
              <td>Archivage de la facture</td>
              <td>manuel</td>
              <td>automatique</td>
            </tr>
            <tr>
              <td>Archivage de la facture</td>
              <td>manuel</td>
              <td>automatique</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="facture_steps">
        <h1>Comment créer une facture dans Faji en quelques étapes</h1>
        <div className="facture_steps_cards">
          <Card2
            number="1."
            title="Personnalisez votre modèle"
            body="Personnalisez votre modèle de facture en fonction de vos besoins en quelques clics. Modifiez la mise en page et le design et ajoutez votre propre logo et en-tête."
          />
          <Card2
            number="2."
            title="Insérez les données client"
            body="fini les saisies fastidieuses de coordonnées! Avec Faji, importez les données de vos clients dans vos factures en un clic à partir de la gestion des contacts."
          />
          <Card2
            number="3."
            title="Ajoutez vos prestations"
            body="Importez les produits ou services à facturer dans votre facture à partir du catalogue de produits intégré ou d'un projet. C'est simple et rapide!"
          />
          <Card2
            number="4."
            title="Envoyez la facture"
            body="Envoyez ensuite votre facture par la poste ou par e-mail au format PDF - depuis votre compte Faji, en ligne et en toute simplicité."
          />
        </div>
      </div>
      <div className="facture_steps_img">
        <img src={img1} alt="img" />
        <p>Remarque : Faji est disponible en allemand et en français</p>
      </div>
      <div className="facture_test_cards2">
        <h1>Plus de modèles gratuits</h1>
        <div className="facture_caards">
          {" "}
          <Card1
            title="Modèle de fiche de salaire"
            body="Modèle de fiche de salaire gratuit pour votre comptabilité des salaires."
          />
          <Card1
            title="Confirmation de commande"
            body="Modèle gratuit de confirmation de commande écrite."
          />
          <Card1
            title="Modèle de facture pour Excel"
            body="Modèle Excel pour saisir les temps de travail - simple et personnalisable."
          />
          <Card1
            title="Modèle de facture proforma"
            body="Téléchargez un modèle de facture proforma gratuit."
          />
          <Card1
            title="Modèle de reçu de paiement"
            body="Modèle de reçu pour preuve de paiement en espèces."
          />
          <Card1
            title="Modèle de livre de caisse"
            body="Modèle de livre de caisse pour la saisie des transactions en espèces."
          />
          <Card1
            title="Modèle d'offre d'achat"
            body="Modèle pour créer une offre d'achat rapidement et facilement."
          />
          <Card1
            title="Modèle de bulletin de versement"
            body="Modèle de bulletin de versement (orange ou rouge) à télécharger."
          />
        </div>
      </div>
      <div className="test_text">
        <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
        <h3>
          Jugez par vous-même en testant toutes les fonctionnalités de Faji,
          l'outil de gestion idéal des PME.
        </h3>
        <Link to="/trial">Testez gratuitement</Link>{" "}
        <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
        <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
      </div>      <BTTButton/>

      <Footer />
    </>
  );
}
const Card = ({ title, body }) => {
  return (
    <div className="facture_card">
      <h5> {title} </h5>
      <h6> {body} </h6>
      <Link to="/trial">Testez gratuitement</Link>
    </div>
  );
};
const Card1 = ({ title, body }) => {
  return (
    <div className="facture_card">
      <h5> {title} </h5>
      <h6> {body} </h6>
      <Link to="/">Accéder au modèle</Link>
    </div>
  );
};
const Card2 = ({ number, title, body }) => {
  return (
    <div className="facture_step_card">
      <div className="facture_step_card_row1">{number}</div>
      <div className="facture_step_card_row2">
        {" "}
        <h5> {title} </h5>
        <h6> {body} </h6>
      </div>
    </div>
  );
};
const Line = ({ text }) => {
  return (
    <div className="facture_line_normal">
      <div className="facture_tic_wrapper">
        <div className="facture_tic">
          <BsCheckLg className="facture_tic_icon" />
        </div>
      </div>
      <div className="facture_line_text">
        <h4>{text}</h4>
      </div>
    </div>
  );
};
