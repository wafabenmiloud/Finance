import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { BsCheckLg } from "react-icons/bs";
import "./Campus.css";
import campus from "../../assets/campus_header.png";
import campus_bicon1 from "../../assets/campus_icon1_b.svg";
import campus_wicon1 from "../../assets/campus_icon3_w.svg";
import campus_bicon2 from "../../assets/campus_icon2_b.svg";
import campus_wicon2 from "../../assets/campus_icon1_w.svg";
import campus_bicon3 from "../../assets/campus_icon3_b.svg";
import campus_wicon3 from "../../assets/campus_icon4_w.svg";
import campus_bicon4 from "../../assets/campus_icon4_b.svg";
import campus_wicon4 from "../../assets/campus_icon2_w.svg";
import icon1 from "../../assets/test_icon1.svg";
import icon2 from "../../assets/test_icon2.svg";
import icon3 from "../../assets/test_icon3.svg";
import icon4 from "../../assets/test_icon4.svg";
import img1 from "../../assets/test_img1.png";
import img2 from "../../assets/test_img2.png";
import img3 from "../../assets/test_img3.png";
import vd from "../../assets/campus_video.png";
import Insider from "../../components/insider/Insider";
import avatar from "../../assets/academy.png";
import academy from "../../assets/campus_academy.png";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Campus() {
  return (
    <>
      <Navbar />
      <div className="campus_header">
        <div className="campus_header_col1">
          <h1>
            <span className="sp1">Faji </span> Campus - Formations, Webinaires
            et Ressources clés
          </h1>
          <p>
            Simplifiez votre travail quotidien - Nous vous accompagnons, vous et
            votre entreprise .
          </p>
          <Line text="Profitez de webinaires passionnants et de vidéos de formation instructives   ." />
          <Line text="Découvrez des articles sur les sujets d'actualité pertinents pour les PME suisses   ." />
          <Line
            text="Téléchargez gratuitement des guides pratiques,
            check-lists synthétiques et livres blancs   ."
          />
        </div>
        <div className="campus_header_col2">
          <img src={campus} alt="img" />
        </div>
      </div>
      <div className="campus_cards">
        <CampusCard
          title="Academy"
          body="La plateforme de formation pour votre entreprise : assistez à des webinaires passionnants, des formations intensives et des ateliers courts pour développer rapidement et efficacement vos compétences   ."
          text="Se former maintenant"
          bimage={campus_bicon1}
          wimage={campus_wicon1}
        />
        <CampusCard
          title="Library"
          body="Facilitez-vous la vie : téléchargez gratuitement des livres blancs très utiles, des guides pratiques et des check-lists synthétiques   ."
          text="Parcourir maintenant"
          bimage={campus_bicon2}
          wimage={campus_wicon2}
        />
        <CampusCard
          title="Centre d'aide"
          body="Ici, aucune question ne reste sans réponse : trouvez toutes les informations sur le logiciel et l'écosystème Faji dans notre espace d'assistance   ."
          text="Trouver des réponses dès maintenant"
          bimage={campus_bicon3}
          wimage={campus_wicon3}
        />
        <CampusCard
          title="Vidéos de formation"
          body="Devenez un expert : des vidéos de formation détaillées sur toutes les fonctionnalités de Faji  ."
          text="Devenir expert maintenant"
          bimage={campus_bicon4}
          wimage={campus_wicon4}
        />
      </div>
      <div className="campus_academy">
        <div className="campus_academy_col1">
          <img src={academy} alt="img" />
        </div>
        <div className="campus_academy_col2">
          <h1>Academy</h1>
          <h3>
            Toujours une longueur d'avance : explorez la variété de l'offre{" "}
            <span className="sp2"> Faji Academy </span>avec, entre autres, des
            webinaires gratuits et des séances de coaching accessibles en un
            clic .
          </h3>
          <div>
            <div className="campus_academy_col2_img">
              {" "}
              <img src={avatar} alt="img" />
            </div>
            <div className="campus_academy_col2_content">
              <h2>Mitch Müller & Sheila Aguilar</h2>
              <h5>CEO & CFO, MECOS BOARDS</h5>
              <StarRating rating={5} />
              <p>
                Avec sa comptabilité automatisée, faji allège notre gestion
                financière . Ce logiciel de gestion suisse nous a convaincu
                grâce à son service de qualité .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="campus_trial_cards">
        <div className="campus_trial_row">
          <TestCard
            image={img1}
            title="Cette formation présente les bases de la comptabilité et du logiciel  .  .  ."
            span="Les bases de la comptabilité dans faji"
            price="CHF 390  .- (hors taxe sur la valeur ajoutée)"
            time="3 heures"
          />
          <TestCard
            image={img2}
            title="Le thème de la comptabilité salariale est un terrain inconnu et vous  .  .  ."
            span="Les bases de la comptabilité des salaires dans faji"
            time="2 heures"
            price="CHF 390  .- (hors taxe sur la valeur ajoutée)"
          />
          <TestCard
            image={img3}
            title="Afin de bien débuter avec faji, apprenez en détails comment paramé  .  .  ."
            span="Paramétrez votre compte faji"
            time="45 minutes"
            price="Gratuit"
          />
        </div>

        <p>Booster vos compétences avec plus de ressources</p>
      </div>
      <div className="campus_video_cards">
        <div>
          <h4>Vidéos de formation</h4>
          <h6>
            Informatives, concises et toujours disponibles: apprenez à utiliser
            les fonctionnalités de faji où et quand vous le souhaitez .
          </h6>
        </div>

        <div className="campus_video_row">
          <VideoCard
            title="faji Quickstart"
            body="Dans cette vidéo, Clio montre rapidement et simplement les fonctions de base du logiciel faji, afin de démarrer facilement   ."
            video={vd}
          />
          <VideoCard
            title="Créer des documents"
            body="Dans cette vidéo, nous vous donnons une brève introduction aux modèles de documents dans faji et vous montrons comment vous pouvez créer vous-même des documents   ."
            video={vd}
          />
          <VideoCard
            title="De l'offre à la facture"
            body="Dans cette vidéo, nous vous montrons l'ensemble du processus de vente, de l'offre à la facture, avec faji   ."
            video={vd}
          />
        </div>
        <p>Visitez la chaîne YouTube faji</p>
      </div>
      <div className="campus_video_cards">
        <div>
          <h4>Library</h4>
          <h6>
            Votre base de connaissances : profitez du téléchargement gratuit de
            checklists pratiques, de guides utiles et de livres blancs
            instructifs .
          </h6>
        </div>

        <div className="campus_library_row">
          <LibraryCard
            title="10 règles pour simplifier votre comptabilité"
            body="Nous avons la solution pour votre comptabilité — découvrez nos 10 règles  ."
          />
          <LibraryCard
            title="10 règles pour simplifier votre comptabilité"
            body="Nous avons la solution pour votre comptabilité — découvrez nos 10 règles  ."
          />
          <LibraryCard
            title="10 règles pour simplifier votre comptabilité"
            body="Nous avons la solution pour votre comptabilité — découvrez nos 10 règles  ."
          />
          <LibraryCard
            title="10 règles pour simplifier votre comptabilité"
            body="Nous avons la solution pour votre comptabilité — découvrez nos 10 règles  ."
          />
        </div>
        <p>Accéder à Library</p>
      </div>
      <Insider />
      <BTTButton/>

      <Footer />
    </>
  );
}
const LibraryCard = ({ title, body }) => {
  return (
    <div className="campus_library_card">
      <div className="campus_library_col1">
        <h1>{title}</h1>
        <h2>{body}</h2>
        <div className="campus_library_end">
          {" "}
          <button>En savoir plus</button>
        </div>
      </div>

      <div className="campus_library_col2">
        <div className="campus_library_card_div">
          <img src={icon1} alt="img" />
          <p>18 minutes</p>
        </div>
        <div className="campus_library_card_div">
          <img src={icon2} alt="img" />
          <p>Livres blancs</p>
        </div>
        <div className="campus_library_card_div">
          <img src={icon3} alt="img" />
          <p>Digitalisation</p>
        </div>
        <div className="campus_library_card_div">
          <img src={icon4} alt="img" />
          <p>Gestion des PME</p>
        </div>{" "}
        <div >
          {" "}
          <button>Debloquer</button>
        </div>
      </div>
    </div>
  );
};
const VideoCard = ({ video, title, body }) => {
  return (
    <div className="campus_video_card">
      <div className="campus_video_card_img">
        {/* <video src={video} alt="img" /> */}
        <img src={video} alt="img" />
      </div>
      <div className="campus_video_card_content">
        <h1>{title}</h1>
        <h2>{body}</h2>
      </div>
    </div>
  );
};
const TestCard = ({ image, title, span, time, price }) => {
  return (
    <div className="campus_trial_card">
      <div className="campus_trial_card_img">
        <img src={image} alt="img" />
      </div>
      <div className="campus_trial_card_content">
        <span>{span}</span>
        <h1>{title}</h1>
        <div className="divider"></div>
        <div className="campus_trial_card_div">
          <img src={icon1} alt="img" />
          <p>{time}</p>
        </div>
        <div className="campus_trial_card_div">
          <img src={icon2} alt="img" />
          <p>Online</p>
        </div>
        <div className="campus_trial_card_div">
          <img src={icon3} alt="img" />
          <p>{price}</p>
        </div>
        <div className="campus_trial_card_div">
          <img src={icon4} alt="img" />
          <p>Fonctionnalités Faji</p>
        </div>
        <div className="campus_trial_card_btn">
          <button>Voir plus</button>
        </div>
      </div>
    </div>
  );
};
const Line = ({ text }) => {
  return (
    <div className="campus_line">
      <div className="campus_tic_wrapper">
        <div className="campus_tic">
          <BsCheckLg className="campus_tic_icon" />
        </div>
      </div>
      <div className="campus_line_text">
        <h4>{text}</h4>
      </div>
    </div>
  );
};
const CampusCard = ({ text, body, title, bimage, wimage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="campus_card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={isHovered ? wimage : bimage} alt="img" />
      <h1>{title}</h1>
      <p>{body}</p>
      <h6>{text}</h6>
    </div>
  );
};
const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span key={i}>
          {" "}
          <BsStarFill color="#FFD600" />
        </span>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <span key={filledStars}>
          <BsStarHalf color="#FFD600" className="bs" />
        </span>
      );
    }
    for (let i = filledStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      stars.push(
        <span key={i}>
          <BsStar color="#FFD600" />
        </span>
      );
    }
    return stars;
  };
  return <div className="star-rating">{renderStars()}</div>;
};
