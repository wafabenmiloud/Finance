import React from "react";
import "./VueAppsApi.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";
import { Link } from "react-router-dom";

export default function VueAppsApi() {
  return (
    <>
      <Navbar />
      <div className="vueappsapi">
        <h1>Vue d’ensemble des paramètres - Apps et API</h1>
        <br />
        <div className="dashboard_cards">
          <div className="col1_cards">
            <div className="card col1_card2">
              <h3>API</h3>
              <div className="divider"></div>
              <Link to="/vueapps">
              Clé API
              </Link>
            </div>
          </div>
          <div className="col2_cards">
            <div className="card col2_card2">
              <h3>Apps</h3>
              <div className="divider"></div>
              <Link to="/vueapi">Apps</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
