import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import facebookIcon from "../../assets/icons/Facebook.svg";
import twitterIcon from "../../assets/icons/Twitter.svg";
import instagramIcon from "../../assets/icons/Instagram.svg";
import youtubeIcon from "../../assets/icons/Youtube.svg";
import linkedinIcon from "../../assets/icons/LinkedIn.svg";
import dropDown from "../../assets/icons/DropDown.svg";
import headSet from "../../assets/icons/Headset.svg";
import trueHand from "../../assets/icons/TREUHAND_SUISSE Logo 1.svg";
import swissMade from "../../assets/icons/Swiss Made Software Logo.svg";
import mobiliar from "../../assets/icons/Mobiliar Logo.svg";
import footerLogo from "../../assets/icons/logo-footer.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <footer>
      <div className="footer_themes">
        <h2>Thémes</h2>
        <ul className="nav">
          <ul>
            {" "}
            <li>
            <Link onClick={scrollToTop} to="/bvr" >
                Bulletin de versement
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/facturation">Facturation</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/onlineaccounting">Comptabilité en ligne</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/swisstva">TVA</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/isonorms">ISO 20022</Link>
            </li>
            <li className="no-border">
              <Link onClick={scrollToTop} to="/glossaire">Glossaire de comptabilité </Link>
            </li>
          </ul>
          <ul>
            
            <li>
              <Link onClick={scrollToTop} to="/journalexplaination">Journal de comptabilisation </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/cofi">Comptabilité financière</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/chaos">Gestion de la clientèle</Link>
            </li>
          </ul>
        </ul>
        <div className="footer0_links">
          <div className="logo">
            <img src={footerLogo} alt="img" />
          </div>
          <ul>
            <h3>Fonctions & prix</h3>
            <li>
              <Link onClick={scrollToTop} to="/showcase">Aperçu des fonctionnalités</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/pricing">Prix</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/contactManagement">Gestion des contacts</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/sales">
                Processus de vente, gestion des dépenses et plus encore
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/banking">Banking</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/accounting">Comptabilité</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/salesaccounting">Comptabilité des salaires</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/fajigo">L'application mobile Faji Go</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/fajicommerce">Faji commerce</Link>
            </li>
          </ul>
          <ul>
            <h3>Entreprise</h3>
            <li>
              <Link onClick={scrollToTop} to="/quisommesnous">Qui sommes-nous ?</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/timeLine">Timeline</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/productsupdates">Produits & Mises à jour</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/newslettersubscribe">Newsletter - Devenez un Insider</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/emploi">Emploi & carriére</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/contact">Contact</Link>
            </li>
          </ul>
          <ul>
            <h3>Campus</h3>
            <li>
              <Link onClick={scrollToTop} to="/demarrage">Guide de démarrage</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/support">Assistance gratuite 24/7</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/aide">Les utilisateurs aident les utilisateurs</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/academy">Academy - Événements, webinaires & plus</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="#">Vidéos de formation</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/customer">Customer Success Stories</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/glossaire">Glossaire de comptabilité</Link>
            </li>
          </ul>
          <ul>
            <h3>Société Fiduculaire</h3>
            <li>
              <Link onClick={scrollToTop} to="/signin">Faji pour les comptables</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/signin">Login portail des comptables</Link>
            </li>
            <h3>En savoir plus</h3>
            <li>
              <Link onClick={scrollToTop} to="/market">App Marketplace</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/comptable">Trouvez votre comptable</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/api">API pour développeurs</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/activity">Secteurs d'activité</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer1">
        <div className="footer1_space_around">
          <div className=" footer1_column">
            <div className="social_media">
              <img src={twitterIcon} alt="img" />
              <img src={facebookIcon} alt="img" />
              <img src={linkedinIcon} alt="img" />
              <img src={instagramIcon} alt="img" />
              <img src={youtubeIcon} alt="img" />
            </div>
            <div className="partners">
              <img src={mobiliar} alt="img" />
              <img src={swissMade} alt="img" />
              <img src={trueHand} alt="img" />
            </div>
          </div>
          <div className="footer1_column">
            <div>
              <p>
                Langue &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                <span className="language">
                  FR <img src={dropDown} alt="img" />{" "}
                </span>
              </p>
            </div>
            <div>
              <p className="support">
                {" "}
                <img src={headSet} alt="img" />
                &nbsp; &nbsp; &nbsp; &nbsp; Support : +216 71 808 862{" "}
              </p>
            </div>
            <div className="links">
              <Link onClick={scrollToTop} to="/confpolicy">Politique de confidentialité</Link>
              <Link onClick={scrollToTop} className="directives" to="/nosdirectives">
                |&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nos
                directives &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
              </Link>
              <Link onClick={scrollToTop} className="legal" to="/legalinformation">
                Information légales
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2">
        <p>
          Copyright 2023 <b> FAJI ENGINEERING</b>, Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
