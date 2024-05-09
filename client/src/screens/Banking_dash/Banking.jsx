import React from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./Banking.css";
import {AiOutlineSearch} from "react-icons/ai";
import img3 from "../../assets/wr.svg";
import Footer from "../../components/footer_dash/FooterDash";

export default function Banking() {


  return (
    <>
      <Navbar />
      <div className="show_details">
        <div className="show_title">
          <h1>Banking</h1>
          <button className="show_title_btn">Ajouter un compte bancaire</button>
        </div>

        <section id="show_section3">
          <div className="show_section">
            <div className="notes_title_row1">
              <p className="p" style={{fontSize:'16px'}}>Banque Exemple</p>
              <div className="searchrow1">
                <AiOutlineSearch style={{margin:"0 2%"}} />
                <input placeholder="Recherche" />
              </div>
            </div>

            <div className="divider" style={{color: '#959799;'}}></div>
           
           
            
              <div
                style={{
                  width: "70%",
                  margin:'auto',
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems:'center',
                  gap: "20px",
                  textAlign:"center",
                  padding:"4% 0"
                }}
              >                <img src={img3} style={{ width: "5%" }} alt="img"/>

                <p className="achat_comm_p">Compléter les données du compte</p>{" "}
                <p className="p">
                Pour profiter des fonctionnalités du module bancaire de Faji, vous devez d’abord compléter les données du compte bancaire ou définir le compte comme caisse.
                </p>
                <button className="submit">Compléter les données du compte</button>
              </div>
            
          </div>
        </section>
      </div>
    <Footer/>
    </>
  );
}
