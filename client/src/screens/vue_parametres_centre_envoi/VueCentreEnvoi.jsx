import React, { useState } from "react";
import "./VueCentreEnvoi.css";
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";
import img from "../../assets/sear.svg";

export default function VueCentreEnvoi() {
  const initialSections = {
    tous: true,
    filtre: false,
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
  const handleContactSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="vue_groupe">
        <h2>Vue d’ensemble des paramètres - Centre d'envoi</h2>
        <div className="vue_groupe_content">
          <div className="ventes_head">
            <div className="ventes_buttons">
              <button
                onClick={() => toggleSection("tous")}
                className={sections.tous ? "ventes_buttonVisible" : ""}
              >
                Tous
              </button>
              <button
                onClick={() => toggleSection("filtre")}
                className={sections.filtre ? "ventes_buttonVisible" : ""}
              >
                Filtre personnalisé
              </button>
            </div>
           
          </div> <div className="divider"></div>
            {Object.keys(sections).map((section) => {
              if (sections[section]) {
                return (
                  <div key={section} className="section-content">
                    {section === "tous" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          gap: "40px",
                          padding: "5% 0",
                        }}
                      >
                        <div>
                          {" "}
                          <img src={img} style={{ width: "100%" }} alt="img"/>
                        </div>
                        <div
                          style={{
                            width: "40%",
                            display: "flex",

                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <p className="achat_comm_p">
                            Aucun résultat n’a été trouvé pour cette requête.{" "}
                          </p>{" "}
                        </div>
                      </div>
                    )}
                    {section === "filtre" && (
                      <div className="ventes_section1">
                        <form onSubmit={handleContactSubmit}>
                          <div className="contact_textfield_row">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <label>Définir un filtre</label>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <div
                                  className="contact_textfield"
                                 
                                >
                                  <input
                                    type="text"
                                    name="phone2"
                                    placeholder="Du "
                                  />
                                </div>
                                <div
                                  className="contact_textfield"
                            
                                >
                                  <input
                                    type="text"
                                    name="phone2"
                                    placeholder="Au "
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="contact_textfield"
                            
                            >
                              <label>Vu</label>
                              <input type="text" />
                            </div>

                            <div
                              className="contact_textfield"
                           
                            >
                              <label>Type</label>
                              <select name="" id=""></select>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              paddingTop: "8%",
                              gap: "20px",
                            }}
                          >
                            <button className="submit">
                              Appliquer le filtre
                            </button>
                            <button className="reset">
                              Enregistrer le filtre
                            </button>
                          </div>
                        </form>
                        <br />
                        <br />
                        <div className="divider"></div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            gap: "40px",
                            padding: "5% 0",
                          }}
                        >
                          <div>
                            {" "}
                            <img src={img} style={{ width: "100%" }} alt="img"/>
                          </div>
                          <div
                            style={{
                              width: "40%",
                              display: "flex",

                              flexDirection: "column",
                              gap: "10px",
                            }}
                          >
                            <p className="achat_comm_p">
                            Aucun résultat n’a été trouvé pour cette requête.                            </p>{" "}
                           
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>

      <Footer />
    </>
  );
}
