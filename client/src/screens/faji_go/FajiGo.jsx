import React from "react";
import Navbar from "../../components/navbar/Navbar";
import image1 from "../../assets/fajigo_img.png";
import image2 from "../../assets/fajigo_prix.svg";
import { BsCheckLg } from "react-icons/bs";
import "./FajiGo.css";
import Footer from "../../components/footer/Footer";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function FajiGo() {
  return (
    <>
      <Navbar />
      <div className="fajigo_header">
        <div className="fajigo_img">
          <div className="fajigo_green"></div>
          <img src={image1} alt="img" />
        </div>
        <div className="fajigo_text">
          <h1>Faji Go</h1>
          <p>
            Faji on the go: Scannez et enregistrez automatiquement vos reçus et
            factures QR grâce à l'application mobile Faji Go. Vous pouvez
            également utiliser Faji Go pour enregistrer vos temps de travail,
            consulter vos factures et gérer vos contacts lors de vos
            déplacements. Téléchargez gratuitement l'application sur iOS et
            Android dès maintenant!{" "}
          </p>
        </div>
      </div>
      <div className="fajigo_body">
        <HeaderLine
          text1="En savoir plus sur Faji Go"
          text2="Avec l'application mobile Faji Go, enregistrez et organisez automatiquement les temps de travail pendant vos déplacements, scannez les reçus et factures QR, gérez vos contacts et consultez vos factures - et tout cela directement depuis votre smartphone. Téléchargez l'application gratuitement:"
        />
        <Line text="Version Android: Google Play Store" />
        <Line text="Version iPhone: App Store d'Apple" />
        <HeaderLine
          text1="Scan2Go: Gagnez du temps avec notre IA Faji"
          text2="Avec la sélection contrôlée par l'IA (IA = intelligence artificielle), vous pouvez traiter automatiquement vos reçus sans code QR."
        />
        <Line text="Avec Faji Go, vous pouvez également imprimer vos factures et vos reçus sans code QR - comme des reçus de station-service ou des notes de frais. Scannez-les et créez une facture ou une dépense fournisseur directement dans l'application mobile." />
        <Line text="Notre IA vous proposera automatiquement des informations telles que la date, le montant et le taux d'imposition." />
        <Line text="Une fois que vous avez vérifié les informations, vous pouvez enregistrer la dépense sur votre compte Faji en un seul clic." />
        <Line text="Notre solution d'extraction intelligente apprend avec chaque nouveau document et fournit des données de plus en plus précises." />
        <p>
          Notre solution d'extraction intelligente apprend avec chaque nouveau
          document et fournit des données de plus en plus précises.
        </p>
        <HeaderLine
          text1="Traitement de vos factures QR et autres documents"
          text2="Vous pouvez scanner, télécharger et traiter vos factures et documents QR de manière illimitée avec Faji Go."
        />
        <Line text="Pour chaque facture QR téléchargée, une facture fournisseur avec tous les contenus pertinents est automatiquement créée." />
        <Line text="D'autres documents, tels que des contrats ou des cartes de visite, etc., peuvent également être téléchargés directement à l'aide de votre smartphone." />
        <Line text="Vous pouvez facilement attribuer les documents téléchargés au bon compte comptable les enregistrer, ou ou les joindre à des documents et contacts existants." />

        <HeaderLine
          text1="Enregistrement de vos temps de travail en déplacement (pour Pro & Pro+)"
          text2="Enregistrez efficacement et facilement les temps consacrés aux projets et aux tâches l lors de vos déplacements (inclus dans les packages Pro et Pro+)."
        />
        <Line text="Enregistrez vos temps (en mode chronomètre, durée ou début/fin) sur votre Smartphone." />
        <Line text="Les heures sont automatiquement synchronisées avec Faji." />
        <Line text="Plus tard, vous pouvez analyser et facturer les temps saisis sur votre ordinateur pour chaque tâche ou projet." />

        <HeaderLine
          text1="La gestion des contacts dans votre poche"
          text2="Gérez vos contacts facilement et rapidement lors de vos déplacements."
        />
        <Line text="Avec Faji Go, vous avez toujours votre liste de contacts avec vous et vous pouvez facilement modifier ou créer de nouveaux contacts." />
        <Line text="Vous pouvez joindre vos contacts directement depuis l'application Faji Go par appel, e-mail ou SMS." />
        <Line text="Vous avez accès à des informations supplémentaires telles que l'emplacement, le site Web, les commentaires, etc., et ainsi éviter les recherches longues et fastidieuses sur Internet." />

        <HeaderLine
          text1="Consultez vos factures où que vous soyez"
          text2="Vous pouvez consulter ou vérifier vos factures à tout moment lors de vos déplacements."
        />
        <Line text="Avec Faji Go, vous pouvez consulter le statut de vos factures directement sur votre smartphone." />
        <Line text="Entrez simplement le titre de la facture, le montant, le numéro ou le contact que vous cherchez à l'aide d'une recherche textuelle." />
        <Line text="Toutes vos factures peuvent être filtrées en fonction de leur statut (Brouillon, Offres, Payé, etc.)." />

        <HeaderLine
          text1="Recommander Faji sur la route"
          text2="Recommandez Faji à un ami directement depuis Faji Go: que ce soit sur la route ou lors d'un événement — directement avec votre smartphone."
        />
        <div className="fajigoo_text">
          <h5>
            Téléchargez gratuitement Faji Go:
            <span>iOS</span> et <span>Android!</span>
          </h5>
          <img src={image2} alt="img" />
        </div>
      </div>      <BTTButton/>

      <Footer />
    </>
  );
}
const HeaderLine = ({ text1, text2 }) => {
  return (
    <div className="fajigo_header_line">
      <h1> {text1} </h1>
      <h2> {text2} </h2>
    </div>
  );
};
const Line = ({ text }) => {
  return (
    <div className="fajigo_line">
      <div className="fajigo_tic_wrapper">
        <div className="fajigo_tic">
          <BsCheckLg className="fajigo_tic_icon" />
        </div>
      </div>
      <div className="fajigo_line_text">
        <h4>{text}</h4>
      </div>
    </div>
  );
};
