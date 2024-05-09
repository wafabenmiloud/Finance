import React from "react";
import "./Contact.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Test from "../../components/test/Test";
import mail from "../../assets/c_mail.svg";
import tel from "../../assets/c_tel.svg";
import map from "../../assets/c_map.svg";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div id="contact_form">
        <div className="contact_form_col1">
          <h6>Contactez-nous</h6>
          <h4>
            Nous serons heureux de répondre à toutes vos questions sur Faji.
          </h4>
          <div className="contact_form_col1_row">
            <div className="mail_wrapper"><img src={mail} alt="img" /></div>
            <div>
                <p>E-Mail :</p>
                <span>contact@faji.com.tn</span>
            </div>
          </div>
          <div className="contact_form_col1_row">
          <div className="tel_wrapper"><img src={tel} alt="img" /></div>
            <div>
                <p>Téléphone :</p>
                <span>+216 71 808 862 </span>
            </div>
          </div>
          <div className="contact_form_col1_row">
          <div className="address_wrapper"><img src={map} alt="img" /></div>
            <div>
                <p>Adresse :</p>
                <span>71 , Rue Alain Savary, 1003 Tunis, Tunisie.</span>
            </div>
          </div>
        </div>
        <div className="contact_form_col2">
          <h2>Voulez-vous nous contacter ?</h2>
          <h3>
            Il vous suffit de remplir le formulaire pour que nous vous
            répondions dans les plus brefs délais.
          </h3>
          <div className="input_field">
            <input type="text" placeholder="Nom" name="Nom" id="Nom"/>
            <input type="text" placeholder="Prénom" name="Prénom" id="Prénom"/>
          </div>
          <div className="input_field">
            <input type="email" name="email" id="email" placeholder="E-mail"/>
          </div>
          <div className="input_field">
          
            <select>
              
              <option selected >+216</option>
            </select>
          
          
            {" "}
            <input
              type="number"
              placeholder="Numéro de téléphone"
              name="phone"
              id="phone"
            />
          
          </div>
          <div className="input_field">
            <textarea name="message" id="" cols="30" rows="10" placeholder="message"></textarea>
          </div>
          <button>Envoyer un message </button>
        </div>
      </div>
      <Test />      <BTTButton/>

      <Footer />
    </>
  );
}
