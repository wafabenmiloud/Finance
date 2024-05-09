import React, { useState } from "react";
import "./Salaires.css";
import Navbar2 from "../../components/navbar2_dash/Navbar2Dash";
import img3 from "../../assets/wr.svg";
import Toggle from "react-styled-toggle";

export default function Salaires() {
  const initialSections = {
    decompte: true,
    versement: false,
    comptabilite: false,
    annonce: false,
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
  return (
    <>
      <Navbar2 />
      <div className="salaires_wrapper">
        <div className="show_buttons">
          <button
            onClick={() => toggleSection("decompte")}
            className={sections.decompte ? "show_buttonVisible" : ""}
          >
            Décompte des salaires
          </button>
          <button
            onClick={() => toggleSection("versement")}
            className={sections.versement ? "show_buttonVisible" : ""}
          >
            Versements de salaires
          </button>
          <button
            onClick={() => toggleSection("comptabilite")}
            className={sections.comptabilite ? "show_buttonVisible" : ""}
          >
            Comptabilité financière
          </button>
          <button
            onClick={() => toggleSection("annonce")}
            className={sections.annonce ? "show_buttonVisible" : ""}
          >
            Annonces IS
          </button>
        </div>
        <div className="divider" style={{ width: "80%", margin: "1%" }}></div>
        <div className="salaires_list">
          <p>Aperçu 2023</p>
          <p>|</p>
          <p>Janv</p> <p>|</p>
          <p>Févr</p> <p>|</p>
          <p>Mars</p> <p>|</p>
          <p>Avr</p> <p>|</p>
          <p>Mai</p> <p>|</p>
          <p>Juin</p> <p>|</p>
          <p>Juil</p> <p>|</p>
          <p>Août</p> <p>|</p>
          <p>Sept</p> <p>|</p>
          <p>Oct</p> <p>|</p>
          <p>Nov</p> <p>|</p>
          <p>Déc</p>
        </div>

        {Object.keys(sections).map((section) => {
          if (sections[section]) {
            return (
              <div key={section} className="section-content">
                {section === "decompte" && (
                  <div className="salaires_section">
                    <table>
                      <thead>
                        <tr>
                          <td></td>
                          <td>Mois</td>
                          <td>Décomptes clôturés</td>
                          <td>Masse salariale</td>
                          <td>
                            Téléchargement <br />
                            Décompte des salaires
                          </td>
                          <td>
                            Téléchargement <br />
                            Journal comptable
                          </td>
                          <td>
                            Téléchargement <br />
                            Récapitulation
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="number">1</td>
                          <td className="mois">Janvier</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">2</td>
                          <td className="mois">Février</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">3</td>
                          <td className="mois">Mars</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">4</td>
                          <td className="mois">Avril</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">5</td>
                          <td className="mois">Mai</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">6</td>
                          <td className="mois">Juin</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">7</td>
                          <td className="mois">Juillet</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">8</td>
                          <td className="mois">Août</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">9</td>
                          <td className="mois">Septembre</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">10</td>
                          <td className="mois">Octobre</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">11</td>
                          <td className="mois">Novembre</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="number">12</td>
                          <td className="mois">Décembre</td>
                          <td>0/0</td>
                          <td>~0 CHF</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {section === "versement" && (
                  <>
                    {" "}
                    <br />
                    <br />
                    <div className="versement_section">
                      <div
                        className="section-content"
                        style={{
                          width: "70%",
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
                        <h2>Versements de salaires Mars 2023</h2>
                        <div className="divider"></div>
                        <img src={img3} style={{ width: "10%" }} alt="img"/>
                        <p className="vers_comm_p">
                          Aucun employé n'a été créé pour l'instant.
                        </p>{" "}
                        <p className="vers_p">
                          Aucun compte d'entreprise disponible. Veuillez créer
                          un compte dans le module bancaire de Faji
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {section === "comptabilite" && (
                  <div className="salaires_section">
                    <table>
                      <thead>
                        <tr>
                          <td></td>
                          <td>Mois</td>
                          <td>Décomptes clôturés</td>
                          <td></td>
                          <td></td>
                          <td>Transmission vers la comptabilité financière</td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="number">1</td>
                          <td className="mois">Janvier</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">2</td>
                          <td className="mois">Février</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">3</td>
                          <td className="mois">Mars</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">4</td>
                          <td className="mois">Avril</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">5</td>
                          <td className="mois">Mai</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">6</td>
                          <td className="mois">Juin</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">7</td>
                          <td className="mois">Juillet</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">8</td>
                          <td className="mois">Août</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">9</td>
                          <td className="mois">Septembre</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">10</td>
                          <td className="mois">Octobre</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">11</td>
                          <td className="mois">Novembre</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="number">12</td>
                          <td className="mois">Décembre</td>
                          <td>0/0</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button>Afficher</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {section === "annonce" && (
                  <>
                    {" "}
                    <br />
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
                        <h2>Données manquantes</h2>
                        <div className="divider"></div>
                        <img
                          src={img3}
                          style={{ width: "10%", alignSelf: "center" }}
                          alt="img"  />{" "}
                        <br />
                        <p
                          className="vers_p"
                          style={{ width: "60%", margin: "auto" }}
                        >
                          Il manque encore des données pour la transmission des
                          documents. Veuillez cliquer sur les entrées pour
                          accéder aux champs de saisie.{" "}
                        </p>
                        <br />
                        <h2>Entreprise </h2>
                        <br />
                        <p className="vers_p2">
                          {" "}
                          Numéro d'identification de l’entreprise non renseigné
                        </p>{" "}
                        <p className="vers_p2"> Adresse non définie</p>{" "}
                        <p className="vers_p2">
                          Adresse de l’établissement Siège social non renseigné
                        </p>{" "}
                        <p className="vers_p2">
                          {" "}
                          Au moins une des valeurs (heures hebdomadaires ou
                          leçons hebdomadaires) pour le lieu de travail Siège
                          social doit être définie.
                        </p>{" "}
                        <p className="vers_p2">
                          Le Numéro REE ou InHouseID non reseigné
                        </p>{" "}
                        <p className="vers_p2">
                          Prénom du responsable des salaires non renseigné
                        </p>{" "}
                        <p className="vers_p2">
                          Nom de famille du responsable des salaires non
                          renseigné
                        </p>{" "}
                        <p className="vers_p2">
                          Numéro de téléphone du responsable des salaires non
                          renseigné
                        </p>{" "}
                        <p className="vers_p2">
                          Numéro d’affilié AVS non renseigné
                        </p>{" "}
                        <p className="vers_p2">
                          Numéro d’affilié CAF non renseigné
                        </p>{" "}
                        <p className="vers_p2">
                          Numéro de client LAA non renseigné
                        </p>{" "}
                        <p className="vers_p2">
                          Numéro de contrat LAA non renseigné
                        </p>{" "}
                        <p className="vers_p2">
                          Partie d’entreprise LAA non renseignée
                        </p>
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
                        <h2>Annonces envoyées</h2>
                        <div className="divider"></div>
                        <br />
                        <p
                          className="vers_p"
                          style={{ alignSelf: "self-start" }}
                        >
                          Aucun message disponible
                        </p>
                        <br />
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
                        <h2>Corrections manuelles nécessaires</h2>
                        <div className="divider"></div>
                        <table>
                          <thead>
                            <tr>
                              <td>Mois</td>
                              <td>Année</td>
                              <td
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  gap: "20px",
                                }}
                              >
                                Afficher les processus terminés{" "}
                                <Toggle
                                  checked={true}
                                  backgroundColorChecked="#25A7FF"
                                  height={15}
                                  width={50}
                                  sliderWidth={12}
                                  sliderHeight={12}
                                />
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <select name="" id="">
                                  <option value="">Tous</option>
                                </select>
                              </td>
                              <td>2023</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <div className="divider"></div>
                        <br />
                        <div className="vers_row">
                          <p>Changement à partir de</p>
                          <p>Numéro de sécurité sociale</p>
                          <p>Nom</p>
                          <p>Date de naissance</p>
                          <p>Code IS</p>
                          <p>Catégorie</p>
                          <p>Catégorie ouverte</p>
                        </div>
                        <div className="divider"></div>
                        <br />
                        <div className="vers_row">
                          <p style={{ alignSelf: "self-start" }}>
                            Aucune correction manuelle n'est nécessaire dans la
                            période sélectionnée.
                          </p>
                        </div>

                        <br />
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
                        <h2>Corrections via le SCC</h2>
                        <div className="divider"></div>
                        <br />
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
                          alignItems: "flex-start",
                          gap: "0px",
                          textAlign: "left",
                          padding: "4%",
                        }}
                      >
                        <h2>Corrections</h2>
                        <div className="divider"></div>
                        <br />
                        <h5
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px",
                          }}
                        >
                          Afficher les processus terminés{" "}
                          <Toggle
                            checked={true}
                            backgroundColorChecked="#25A7FF"
                            height={15}
                            width={50}
                            sliderWidth={12}
                            sliderHeight={12}
                          />
                        </h5>
                        <br />
                        <button>Nouvelle correction</button>
                        <br />
                        <h5>Nouvelle correction IS</h5>
                        <br />
                        <table>
                          <thead>
                            <tr>
                              <td>Employé:</td>
                              <td>Correction pour un mois:</td>
                           
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <select name="" id="">
                                  <option value="">Sélectionner l'employé</option>
                                </select>
                              </td>
                              <td> <select name="" id="">
                                  <option value="">Choisir un mois</option>
                                </select></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <br />
                  </>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
