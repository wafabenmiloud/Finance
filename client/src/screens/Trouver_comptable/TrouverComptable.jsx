import React from "react";
import './TrouverComptable.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import image1 from '../../assets/images/img1 pricing.png'
import mapImage from '../../assets/images/Map Trouver.png'
import platinum_1 from '../../assets/badges/platinum-1.svg'
import gold_1 from '../../assets/badges/platinum-1.svg'
import bronze from '../../assets/badges/bronze.svg'
import silver_1 from '../../assets/badges/silver-1.svg'
import silver from '../../assets/badges/silver.svg'
import arrow from '../../assets/badges/arrow down.svg'
import BTTButton from "../../components/BTTButton/BTTButton";

export default function TrouverComptable() {
    return (
      <>
        <Navbar />
        <div className="section1_trouver">
            <div className="img_trouver">
                <div className="rectangleTrouverImg">
                </div>
                <img src={image1} alt="img" />

            </div>
            <div className="textTrouver1">
              <h1>Plus de 1000 sociétés comptables pour vous</h1>
                <p>Trouvez des comptables partenaires certifiés près de chez vous. Bénéficiez d'une assistance pour les questions fiscales, la comptabilité financière ou la comptabilité salariale — tout cela directement depuis votre compte Faji .</p>
                <h2>Vous êtes comptable  ? Consultez notre page Faji pour les comptables !</h2>

            </div>

        </div>
        <div className="section2_trouver">
        
        <select className="trouver_select">
          <option value="" disabled selected>  Tous les partenaires</option>
        </select>
        <select className="trouver_select trouver_partner">
          <option value="" disabled selected>  Partenaires privilégié </option>
        </select>
        <select className="trouver_select trouver_filter">
          <option value="" disabled selected>  Filtrer par nom </option>
        </select>
        <select className="trouver_select touver_location">
          <option value="" disabled selected>  Filtrer par lieu</option>
        </select>
        </div>
        <a className="reinstall_trouver" href="/">x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Réinitialiser tous les filtres</a>
        <img className="map_trouver" src={mapImage} alt="img" />
        <div className="trouver_container">
          
        <BadgeCard badge ={silver} title ='360 Fisca Sàrl' text='1870 Monthey'/>
        <BadgeCard badge ={silver_1} title ='360 Fisca Sàrl' text='1870 Monthey'/>
        <BadgeCard badge ={bronze} title ='360 Fisca Sàrl' text='1870 Monthey'/>
        <BadgeCard badge ={gold_1} title ='360 Fisca Sàrl' text='1870 Monthey'/>
        <BadgeCard badge ={silver_1} title ='360 Fisca Sàrl' text='1870 Monthey'/>
        <BadgeCard badge ={platinum_1} title ='360 Fisca Sàrl' text='1870 Monthey'/>
        
        </div>
        <a className="display_partners" href="/"><img src={arrow} alt="img" /> Afficher tous les partenaires</a>
        <BTTButton/>
 <Footer />
      </>
    );
  }
  const BadgeCard = ({badge,title,text}) => {
    return (
    <>
      <div className="bordered_trouver">
      <div className="text_trouver">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="badge_trouver">
        <img src={badge} alt="img" />
      </div>
    </div>
    </>
    );
  }