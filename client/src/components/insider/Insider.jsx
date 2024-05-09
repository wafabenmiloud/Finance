import React from 'react';
import "./Insider.css";
import tic from "../../assets/market_imgs/tic.svg";
import arrow from "../../assets/market_imgs/arrow.svg";

const Insider = () => {
    return (
        <div className="market_subscribe">
        <div className="market_content">
           <h1>Faji Insider</h1>
        <h6>
          Avec notre newsletter, vous êtes à jour et ne manquez jamais aucune
          nouvelle importante . Nous vous informons régulièrement des
          développements actuels, des informations clés et des tendances dans le monde faji . À ne pas manquer !
        </h6>
        <div className="market_tics">
            <div>
              <img src={tic} alt="img" />
              <p>Perspectives captivantes</p>
            </div>
            <div>
            <img src={tic} alt="img" />
              <p>Actualités exclusives</p>
            </div>
            <div>
            <img src={tic} alt="img" />
              <p>Conseils et astuces utiles</p>
            </div>
          </div>
          <div className="subscribe_button">
            <input type="email" placeholder="Entrer l'adresse e-mail"/>
            <button>s'inscrire dès maintenant</button>
          </div>
        </div>
       
       
        <div className="market_arrow">
          <img src={arrow} alt="img" />
        </div>
      </div>
    );
}

export default Insider;
