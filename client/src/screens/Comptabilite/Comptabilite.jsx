import React from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./Comptabilite.css";
import Footer from "../../components/footer_dash/FooterDash";
import { Link } from "react-router-dom";


export default function Comptabilite() {
  return (
    <>
      <Navbar />
      <div className="show_details">
        <div className="show_title">
          <h1>Configurer la comptabilité</h1>
        </div>
        <section id="show_section3">
          <div className="show_section">
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                textAlign: "center",
                padding: "4% 0",
              }}
            >
              {" "}
              <p className="achat_comm_p">
                Configurer les données comptables
              </p>{" "}
              <p className="p">
                Afin de pouvoir utiliser la comptabilité de Faji et les
                fonctions relatives au bilan annuel de manière optimale,
                assurez-vous que les données de l'année précédente ont été
                saisies correctement. Vous serez guidé à chaque étape du
                processus.
              </p>
            </div>
            <div className="divider" style={{ color: "#959799;" }}></div>

            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                textAlign: "center",
                padding: "4% 0",
              }}
            >
              {" "}
              <p className="p">
                Pour configurer la comptabilité, vous devez disposer des comptes
                de clôture (bilan et compte de résultat) de l'année précédente.
                Si vous avez encore des factures en attente ou des factures
                fournisseurs à payer, vous devez vous munir des factures
                correspondantes.
              </p>
              <p className="p">
                Si vous ne disposez pas des chiffres de l'année précédente, ne
                remplissez pas les champs correspondants. En cas de questions
                concernant vos comptes, vos taux de TVA et votre bilan annuel,
                merci de vous tourner vers votre comptable.
              </p>
              <p className="p">Invitez votre comptable sur Faji</p>
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <Link to="/ecrman" className="comp_btn1">Configurer la comptabilité</Link>
                <Link to="/feuilledecompte" className="comp_btn2">Retour à la comptabilité Faji</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
