import React from "react";
import "./Header.css";
import img from "../../assets/icons/fluent-mdl2_teamwork.svg";
import hero from "../../assets/hero.png";
import play from "../../assets/icons/play.png";
import vector from "../../assets/icons/vector.svg";
import vector1 from "../../assets/icons/vector1.svg";
import clock from "../../assets/icons/clock_home.svg";

import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header>
        <div className="header_title">
          <div className="teamwork">
            <img src={img} alt="img" />
          </div>
          <div className="title">
            {" "}
            <h2>Te prends pas la tête ! <br />
            L'administration : un jeu d'enfant .</h2>
            
            <h3>Plus de 60'000 entreprises font déjà confiance à Faji <br />
            
              le logiciel de gestion intuitif pour les indépendants, les petites
              entreprises et les start-ups .
            </h3>
           
            <Link to="/trial" className="btn_header">
                Testez gratuitement
              </Link>
          </div>
        </div>
        <br />
        <div className="header_img">
          <div className="left">
            <div className="card_line">
              <div className="tic_wrapper">
                <div className="tic">
                  <BsCheckLg className="tic_icon" />
                </div>
              </div>
              <div>Plus de temps pour ce que vous aimez vraiment faire .</div>
            </div>
            <div className="divider"></div>

            <div className="card_line">
              <div className="tic_wrapper">
                <div className="tic">
                  <BsCheckLg className="tic_icon" />
                </div>
              </div>
              <div>Tenez votre comptabilité deux fois plus vite .</div>
            </div>
            <div className="divider"></div>

            <div className="card_line">
              <div className="tic_wrapper">
                <div className="tic">
                  <BsCheckLg className="tic_icon" />
                </div>
              </div>
              <div>Réduisez le travail administratif de plus d'un tiers .</div>
            </div>
            <div className="divider"></div>

            <div className="card_line">
              <div className="tic_wrapper">
                <div className="tic">
                  <BsCheckLg className="tic_icon" />
                </div>
              </div>
              <div>
                Assistance gratuite, fiable et personnalisée 24h/24, 7j/7 .
              </div>
            </div>
          </div>
          <div className="img">
            <img src={hero} alt="img" />
          </div>
          <div className="right_wrapper">
            <div className="row_right">
              <div className="col_right1">
                <div className="vector">
                  <img src={vector1} alt="img" />
                </div>
                <div>
                  <img src={vector} alt="img" />
                </div>
              </div>
              <div className="col_right2">
                <img src={clock} alt="img" />
              </div>
            </div>
            <div className="right">
              <div>
                <h5 style={{ color: "#1F50FF" }}>Faji</h5>
                <h5 style={{ color: "#484848" }}>expliqué en 1 minute</h5>
              </div>
              <div className="play">
                <img src={play} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
