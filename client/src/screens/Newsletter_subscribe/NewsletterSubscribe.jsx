import React, { useState } from 'react';
import './NewsletterSubscribe.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import checked from '../../assets/icons/insider checked.svg';
import unchecked from '../../assets/icons/insider unchecked.svg';
import BTTButton from "../../components/BTTButton/BTTButton";

const NewsletterSubscribe = () => {
  const [selectedPlan, setSelectedPlan] = useState('insider');

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <Navbar />
      <div className="newsletter_sub">
        <h2>Vos paramètres de communication Faji</h2>
        <p>Choisissez rapidement et facilement les informations que vous souhaitez recevoir de la part de Faji.</p>
        <form action="">
          <input className="newsletter_mail" type="mail" placeholder="E-mail" />
          <input type="text" placeholder="Nom de famille" />
          <input type="text" placeholder="Prénom" />
        </form>
        <h2>Vos paramètres de communication Faji</h2>
        <p>Choisissez rapidement et facilement les informations que vous souhaitez recevoir de la part de Faji.</p>
        <div className="newsletter_plan">
          <div
            className={`newsletter_accountant ${selectedPlan === 'accountant' ? 'newsletter_accountant_active' : ''}`}
            onClick={() => handlePlanChange('accountant')}
          >
            <img src={selectedPlan === 'accountant' ? checked : unchecked} alt="img" />
            <div className="newsletter_plan_text">
              <h3>Faji Insider pour les Comptables</h3>
              <p>Notre newsletter conçue spécialement pour les Comptables vous propose des actualités et des mises à jour de produits afin que vous puissiez travailler encore plus efficacement avec vos clients.</p>
            </div>
          </div>
          <div
            className={`newsletter_regular ${selectedPlan === 'insider' ? 'newsletter_regular_active' : ''}`}
            onClick={() => handlePlanChange('insider')}
          >
            <img src={selectedPlan === 'insider' ? checked : unchecked} alt="img" />
            <div className="newsletter_plan_text">
              <h3>Faji Insider</h3>
              <p>Recevez régulièrement dans votre boîte de réception des actualités intéressantes, des mises à jour de produits, des informations sur les événements à venir ainsi que des conseils et des astuces.</p>
            </div>
          </div>
          
        </div>
        <p style={{textAlign:'right'}}>*Veuillez sélectionner au moins une option.</p>
        <div className="newsletter_submit">
            <a className='news_cancel' href="/">Annuler</a>
            <a className='news_save' href="/">Enregistrer</a>
        </div>
      </div>
      <BTTButton/>


      <Footer />
    </>
  );
};

export default NewsletterSubscribe;
