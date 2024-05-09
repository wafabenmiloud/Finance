import React from "react";
import "./Customer.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import star from "../../assets/icons/Star.svg";
import left from "../../assets/qui_left.png";
import center from "../../assets/qui_center.png";
import right from "../../assets/qui_right.png";
import icon1 from "../../assets/dem_icon1.svg";
import icon2 from "../../assets/dem_icon2.svg";
import icon3 from "../../assets/dem_icon3.svg";
import img1 from "../../assets/qui_img1.png";
import img2 from "../../assets/qui_img2.png";
import img3 from "../../assets/qui_img3.png";
import img4 from "../../assets/qui_img4.png";
import img5 from "../../assets/qui_img5.png";
import img6 from "../../assets/qui_img6.png";
import img7 from "../../assets/qui_img7.png";
import img8 from "../../assets/qui_img8.png";
import img9 from "../../assets/qui_img9.png";
import Test from "../../components/test/Test";
import arrowDown from "../../assets/images/arrow down header.svg";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Customer() {
  return (
    <>
      <Navbar />
      <div className="customer_imgs_section">
        <div className="customer_imgs_title">
          <h2>
            Histoires de réussites<span> avec Faji</span>
          </h2>
          <p>
            Pour plus de 60'000 entreprises, Faji est l'outil idéal pour leur
            gestion. Les clients racontent leurs succès avec Faji.
          </p>
        </div>{" "}
        <div className="customer_header_imgs">
          <div className="customer_header_img">
            <div className="customer_blue_left"></div>
            <img src={right} alt="img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_header_img1">
            <img src={center} alt="img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_header_img">
            <div className="customer_blue_right"></div>
            <img src={left} alt="img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
        </div>
        <div className="customer_grid">
          <div className="customer_grid_img">
            <img src={img1} alt="grid_img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_grid_img">
            <img src={img2} alt="grid_img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_grid_img">
            <img src={img3} alt="grid_img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_grid_img">
            <img src={img4} alt="grid_img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_grid_img">
            <img src={img5} alt="grid_img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_grid_img">
            <img src={img6} alt="grid_img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_grid_img">
            <img src={img7} alt="grid_img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_grid_img">
            <img src={img8} alt="grid_img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
          <div className="customer_grid_img">
            <img src={img9} alt="grid_img" />
            <div className="p_wrapper">
              <p className="p1">Daniel Arnold</p>
              <p className="p2">Arnold Rahmenmanufaktur</p>
              <p className="p3">Construction et artisanat</p>
            </div>
          </div>
        </div>
      </div>
      <Header1
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        cardTitle1="Gagnez 3,3h par semaine"
        cardTitle2="Traitement 39% plus rapide"
        cardTitle3="67% des utilisateurs sont plus performants"
        text1="Travaillez plus efficacement grâce à Faji: les utilisateurs du logiciel réduisent leur temps de travail administratif de 3,3 heures par semaine en moyenne."
        text2="Le traitement efficace des commandes (offres, facturation et relances de paiement notamment) accélère le traitement de vos commandes de 39% en moyenne."
        text3="2 utilisateurs sur 3 déclarent avoir de meilleurs résultats depuis qu'ils utilisent le logiciel de gestion."
      />
      <div className="rating1">
        <h3>
          Vous aussi, faites confiance à{" "}
          <span style={{ color: "#0B2840" }}> Faji</span>, comme plus de 60'000
          entreprises <br /> suisses satisfaites .
        </h3>
        <div className="rating1_flex">
          <div className="score1">
            <p className="number">4,5</p>
            <p>sur plus de 1150 Google commentaires</p>
          </div>
          <div className="stars1">
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
          </div>
        </div>
      </div>{" "}
      <Test />
      <section id="contact">
        <h4>
          Avez-vous encore des questions ? Appelez-nous:{" "}
          <span>+216 71 808 862</span>{" "}
        </h4>
        <h4>
          Si vous préférez nous écrire: <span>contact@faji.com.tn</span>
        </h4>
      </section>      <BTTButton/>

      <Footer />
    </>
  );
}

const Header1 = ({
  icon1,
  icon2,
  icon3,
  cardTitle1,
  cardTitle2,
  cardTitle3,
  text1,
  text2,
  text3,
}) => {
  return (
    <>
      <div className="header1">
        <div className="header1_advantages">
          <h2>
            Pourquoi choisir Faji? <img src={arrowDown} alt="img" />
          </h2>
          <h4>Pour avoir plus de temps pour ce que vous aimez faire</h4>
          <div className="header1_cards">
            <div className="header1_card">
              <img src={icon1} className="header1_card_icon" alt="img"></img>
              <h3>{cardTitle1}</h3>
              <p>{text1}</p>
            </div>
            <div className="header1_card">
              <img src={icon2} className="header1_card_icon" alt="img"></img>
              <h3>{cardTitle2}</h3>
              <p>{text2}</p>
            </div>
            <div className="header1_card">
              <img src={icon3} className="header1_card_icon" alt="img"></img>
              <h3>{cardTitle3}</h3>
              <p>{text3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
