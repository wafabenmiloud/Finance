import React from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./AchatDep.css";
import { AiOutlineSearch } from "react-icons/ai";
import img3 from "../../assets/sear.svg";
import Footer from "../../components/footer_dash/FooterDash";

export default function AchatDep() {
  return (
    <>
      <Navbar />
      <div className="show_details">
        <div className="show_title">
          <h1>Dépenses</h1>
          <button className="show_title_btn">Nouvelle dépense</button>
        </div>

        <section id="show_section3">
          <div className="show_section">
            <div className="notes_title_row1">
              <div className="searchrow1" style={{alignSelf:"flex-end"}}>
                <AiOutlineSearch style={{ margin: "0 15px" }} />
                <input placeholder="Recherche" />
              </div>
            </div>

            <div className="divider" style={{color:"#959799"}}></div>
            <div className="notes2_title_row">
            
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="bigger-checkbox"
                />{" "}
              </div>  <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h4>N°</h4>
                <select></select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h4>Date</h4>
                <input type="text" name="" id="" className="input"/>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h4>Contact</h4>
                <select></select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h4>Payé le</h4>
                <input type="text" name="" id="" className="input"/>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {" "}
                <h4>Titre / Texte d'ecriture</h4>
                <input type="text" name="" id="" className="input"/>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {" "}
                <h4>Statut</h4>
                <select></select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {" "}
                <h4>Devise</h4>
                <select></select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {" "}
                <h4>Brut</h4>
                <select></select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {" "}
                <h4>Net</h4>
                <select></select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {" "}
                <h4>Compte de comptabilité</h4>
                <select></select>
              </div>
            </div>
            <div className="divider"></div>
            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                gap: "40px",
              }}
            >
              <div>
                {" "}
                <img alt="img" src={img3} style={{ width: "50%" }} />
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  textAlign: "start",

                  flexDirection: "column",

                  gap: "10px",
                }}
              >
                <p className="achat_comm_p">Pas de dépenses</p>{" "}
                <p className="p">
                  Vous pouvez voir ici si les dépenses sont en projet ou
                  terminées. Vous pouvez également voir si un document est
                  associé
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
