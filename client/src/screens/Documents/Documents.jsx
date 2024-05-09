import React, { useState } from "react";
import "./Documents.css";
import Navbar2 from "../../components/navbar2_dash/Navbar2Dash";
import Footer from "../../components/footer_dash/FooterDash";
import { Link } from "react-router-dom";
import down from "../../assets/down.svg";
import downW from "../../assets/down_w.svg";

export default function Documents() {
  const initialSections = {
    entreprise: true,
    annonce: false,
    comptesi: false,
    comptese: false,
  };
  const [sections, setSections] = useState(initialSections);
  const toggleSection = (section) => {
    const updatedSections = { ...initialSections, [section]: true };
    for (const key in updatedSections) {
      if (key !== section) {
        updatedSections[key] = false;
      }
    }
    setSections(updatedSections);
  };
  const initialSections2 = {
    entreprise: true,
  };
  const [sections2, setSections2] = useState(initialSections2);
  const toggleSection2 = (section) => {
    const updatedSections = { ...initialSections2, [section]: true };
    for (const key in updatedSections) {
      if (key !== section) {
        updatedSections[key] = false;
      }
    }
    setSections2(updatedSections);
  };
  return (
    <>
      <Navbar2 />
      <div className="employee_wrapper">
        <div className="show_buttons">
          <button
            onClick={() => toggleSection("entreprise")}
            className={sections.entreprise ? "show_buttonVisible" : ""}
          >
            Entreprise
          </button>
          <button
            onClick={() => toggleSection("annonce")}
            className={sections.annonce ? "show_buttonVisible" : ""}
          >
            Annonce annuelle
          </button>
          <button
            onClick={() => toggleSection("comptesi")}
            className={sections.comptesi ? "show_buttonVisible" : ""}
          >
            Comptes salaires individuels
          </button>
          <button
            onClick={() => toggleSection("comptese")}
            className={sections.comptese ? "show_buttonVisible" : ""}
          >
            Compte salaire - Entreprise
          </button>
        </div>
        <div className="divider" style={{ width: "80%", margin: "1%" }}></div>

        {Object.keys(sections).map((section) => {
          if (sections[section]) {
            return (
              <div key={section}>
                {section === "entreprise" && (
                  <>  <p style={{ color: "#959799", width:"90%", margin:"auto" }}>Aucun employé n’a été créé pour l’instant.</p><br />
                  <div className="doc_wrap"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                    }}
                  >
                    <div className="newemployee_buttons">
                      <button
                        onClick={() => toggleSection2("entreprise")}
                        className={
                          sections2.entreprise ? "employee_buttonVisible" : ""
                        }
                      >
                        Entreprise
                      </button>
                    </div>
                    {Object.keys(sections2).map((section) => {
                      if (sections2[section]) {
                        return (
                          <>
                            {section === "entreprise" && (
                              <div>
                                {" "}
                                <div className="versement_section">
                                  <div
                                    className="section-content"
                                    style={{
                                      padding: "20px 30px",
                                    }}
                                  >
                                    <h2>Télécharger les données de base</h2>
                                    <div className="divider"></div>

                                    <br />

                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "20px",
                                      }}
                                    >
                                      <button
                                        style={{
                                          backgroundColor: "#25A7FF",
                                          color: "#fff",
                                        }}
                                      >
                                        Données de base entreprise
                                        &nbsp;&nbsp;&nbsp;
                                        <img src={downW} alt="img" />
                                      </button>
                                      <button>
                                        Données de base employé
                                        &nbsp;&nbsp;&nbsp;
                                        <img src={down} alt="img" />
                                      </button>
                                    </div>
                                    <br />
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "20px",
                                      }}
                                    >
                                      <button
                                        style={{
                                          backgroundColor: "#25A7FF",
                                          color: "#fff",
                                        }}
                                      >
                                        Fichier des genres de salaire
                                        &nbsp;&nbsp;&nbsp;
                                        <img src={downW} alt="img" />
                                      </button>
                                      <button>
                                        Tous les certificat de salaire 2023
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <br />
                                <div className="versement_section">
                                  <div
                                    className="section-content"
                                    style={{
                                      width: "100%",
                                      margin: "auto",
                                      display: "flex",
                                      flexDirection: "column",

                                      gap: "0px",
                                      textAlign: "left",
                                      padding: "4%",
                                    }}
                                  >
                                    <h2>
                                      Télécharger les comptes des salaires
                                    </h2>
                                    <div className="divider"></div>

                                    <br />

                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "20px",
                                      }}
                                    >
                                      <button>
                                        <img src={down} alt="img" />
                                        &nbsp;&nbsp;&nbsp;Tous les comptes des
                                        salaires
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        );
                      }
                      return null;
                    })}
                  </div>
                  </>
                
                )}
                {section === "annonce" && (
                  <>
                    {" "}
                   <p style={{ color: "#959799", width:"90%",margin:"auto" }}>Il manque encore des données pour la transmission des documents.Veuillez cliquer sur les entrées pour accéder aux champs de saisie.</p>
                   <br />
                    <div className="versement_section">
                      <div
                        className="section-content"
                        style={{
                          width: "100%",
                          margin: "auto",
                          display: "flex",
                          flexDirection: "column",

                          gap: "0px",
                          textAlign: "left",
                          padding: "4%",
                        }}
                      >
                        <h2>Annonce annuelle</h2>
                        <div className="divider"></div>
                        <p className="doc_p2">
                          {" "}
                          Unternehmens-Identifikationsnummer nicht gesetzt
                        </p>{" "}
                        <p className="doc_p2"> Anschrift nicht gesetzt</p>{" "}
                        <p className="doc_p2">
                          Adresse der Betriebsstätte Siège social nicht gesetzt
                        </p>{" "}
                        <p className="doc_p2">
                          {" "}
                          Es muss mindesten einer der Werte (Wochen-Stunden oder
                          Lektionen) für die Betriebsstätte Siège social gesetzt
                          werden.
                        </p>{" "}
                        <p className="doc_p2">
                          BUR Nummer oder InHouseID nicht gesetzt
                        </p>{" "}
                        <p className="doc_p2">
                          Vorname Lohnverantwortlicher nicht gesetzt
                        </p>{" "}
                        <p className="doc_p2">
                          Nachname Lohnverantwortlicher nicht gesetzt
                        </p>{" "}
                        <p className="doc_p2">
                          Telefonnummer Lohnverantwortlicher nicht gesetzt
                        </p>{" "}
                        <p className="doc_p2">
                          Mitgliednummer AHV nicht gesetzt
                        </p>{" "}
                        <p className="doc_p2">
                          Mitgliednummer FAK nicht gesetzt
                        </p>{" "}
                        <p className="doc_p2">UVG-Kundennummer nicht gesetzt</p>{" "}
                        <p className="doc_p2">
                          UVG-Vertragsnummer nicht gesetzt
                        </p>{" "}
                        <br />
                        <div className="doc_row">
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="">AVS</label>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px",
                          }}
                        >
                          <button>
                            Attestation de salaires AVS &nbsp;&nbsp;&nbsp;
                            <img src={down} alt="img" />
                          </button>
                          <button>
                            Personnes non soumises aux cotisation AVS
                            &nbsp;&nbsp;&nbsp;
                            <img src={down} alt="img" />
                          </button>
                        </div>
                        <div className="doc_row">
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="">CAF</label>
                        </div>
                        <button>
                          Décompte CAF &nbsp;&nbsp;&nbsp;
                          <img src={down} alt="img" />
                        </button>
                        <div className="doc_row">
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="">LAA</label>
                        </div>
                        <button>
                          Décompte LAA &nbsp;&nbsp;&nbsp;
                          <img src={down} alt="img" />
                        </button>
                        <div className="doc_row">
                          <label htmlFor="">Drivers</label>
                        </div>
                        <div className="doc_row">
                          <input type="checkbox" name="" id="" />
                          <p>Impôts</p>
                        </div>
                        <div className="doc_row">
                          <input type="checkbox" name="" id="" />
                          <p>Office fédéral de la statistique (OFS)</p>
                        </div>
                        <button>
                          Tous les certificat de salaires &nbsp;&nbsp;&nbsp;
                          <img src={down} alt="img" />
                        </button>
                        <br />
                        <button>
                          Enregister sur la structure des salaires
                          &nbsp;&nbsp;&nbsp;
                          <img src={down} alt="img" />
                        </button>
                        <div className="doc_row_wrapper">
                          <div className="doc_row">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Impôts</label>
                          </div>
                          <button
                            style={{
                              backgroundColor: "#25A7FF",
                              color: "#fff",
                            }}
                          >
                            Envoyer les données
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {section === "comptesi" && (
                  <div className="comptese_section">
                    <p >
                      Il n'y a actuellement aucun employé pour cette entreprise.
                    </p>
                    <Link to="/employee"className="submit">Ajouter des employés </Link>

                  </div>
                )}
                {section === "comptese" && (
                  <div className="comptese_section">
                    <p>
                      Seules les données des décomptes de salaires clôturés sont
                      prises en compte dans le compte salaire.Aucune donnée
                      n’est encore enregistrée pour l'année 2023 .
                    </p>
                    <Link to="/salaires"className="submit">Vue d’ensemble des bulletins de paie </Link>
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
      <Footer />
    </>
  );
}
