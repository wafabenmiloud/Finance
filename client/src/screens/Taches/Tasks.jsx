import React, { useState } from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./Tasks.css";
import { AiOutlineSearch } from "react-icons/ai";
import img from "../../assets/sear.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/footer_dash/FooterDash";

export default function Tasks() {
  const initialSections = {
    tous: true,
    suspens: false,
    termine: false,
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
      <div className="ventes">
        <div className="ventes_title">
          <h1>Tâches</h1>
          <Link to="/taskform" className="ventes_title_btn">
            Nouvelle tâche
          </Link>
        </div>

        <section id="ventes_section1">
          <div className="ventes_head">
            <div className="ventes_buttons">
              <button
                onClick={() => toggleSection("tous")}
                className={sections.tous ? "ventes_buttonVisible" : ""}
              >
                Tous
              </button>
              <button
                onClick={() => toggleSection("suspens")}
                className={sections.suspens ? "ventes_buttonVisible" : ""}
              >
                En suspens
              </button>
              <button
                onClick={() => toggleSection("termine")}
                className={sections.termine ? "ventes_buttonVisible" : ""}
              >
                Terminé
              </button>
              <button
                onClick={() => toggleSection("filtre")}
                className={sections.filtre ? "ventes_buttonVisible" : ""}
              >
                Filtre personnalisé
              </button>
            </div>
            <div className="searchrow1">
              <AiOutlineSearch style={{ margin: "0 15px" }} />
              <input placeholder="Recherche" />
            </div>
          </div>

          <div className="divider"></div>
          {Object.keys(sections).map((section) => {
            if (sections[section]) {
              return (
                <div key={section} className="section-content">
                  {section === "tous" && (
                    <>
                      {" "}
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
                            Aucun résultat n’a été trouvé pour cette requête.
                          </p>{" "}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          padding: "2% 0",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "#d9d9d9",
                            padding: "10px 15px",
                            borderRadius: "2px",
                          }}
                          className="search_text"
                        >
                          Aucune entrée trouvée (afficher 20 entrées)
                        </button>
                        <button
                          style={{
                            backgroundColor: "#efefef",
                            padding: "0px 15px",
                            borderRadius: "2px",
                          }}
                        >
                          <select
                            name=""
                            id=""
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                            className="search_text"
                          >
                            <option value="">Sélectionner une action</option>
                            <option value="">
                              Multi PDF (avec papier à entête)
                            </option>
                            <option value="">
                              Multi PDF (sans papier à entête)
                            </option>
                            <option value="">
                              Envoyer les offres par e-mail
                            </option>
                            <option value="">Exportation</option>
                          </select>
                        </button>
                      </div>
                    </>
                  )}
                  {section === "suspens" && (
                    <>
                      {" "}
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
                            Aucun résultat n’a été trouvé pour cette requête.
                          </p>{" "}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          padding: "2% 0",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "#d9d9d9",
                            padding: "10px 15px",
                            borderRadius: "2px",
                          }}
                          className="search_text"
                        >
                          Aucune entrée trouvée (afficher 20 entrées)
                        </button>
                        <button
                          style={{
                            backgroundColor: "#efefef",
                            padding: "0px 15px",
                            borderRadius: "2px",
                          }}
                        >
                          <select
                            name=""
                            id=""
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                            className="search_text"
                          >
                            <option value="">Sélectionner une action</option>
                            <option value="">
                              Multi PDF (avec papier à entête)
                            </option>
                            <option value="">
                              Multi PDF (sans papier à entête)
                            </option>
                            <option value="">
                              Envoyer les offres par e-mail
                            </option>
                            <option value="">Exportation</option>
                          </select>
                        </button>
                      </div>
                    </>
                  )}
                  {section === "termine" && (
                    <>
                      {" "}
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
                            Aucun résultat n’a été trouvé pour cette requête.
                          </p>{" "}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          padding: "2% 0",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "#d9d9d9",
                            padding: "10px 15px",
                            borderRadius: "2px",
                          }}
                          className="search_text"
                        >
                          Aucune entrée trouvée (afficher 20 entrées)
                        </button>
                        <button
                          style={{
                            backgroundColor: "#efefef",
                            padding: "0px 15px",
                            borderRadius: "2px",
                          }}
                        >
                          <select
                            name=""
                            id=""
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                            className="search_text"
                          >
                            <option value="">Sélectionner une action</option>
                            <option value="">
                              Multi PDF (avec papier à entête)
                            </option>
                            <option value="">
                              Multi PDF (sans papier à entête)
                            </option>
                            <option value="">
                              Envoyer les offres par e-mail
                            </option>
                            <option value="">Exportation</option>
                          </select>
                        </button>
                      </div>
                    </>
                  )}

                  {section === "filtre" && (
                    <div className="ventes_section1">
                      <form onSubmit={handleContactSubmit}>
                        <div className="contact_textfield_row">
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Objet</label>
                            <input type="number" name="num_contact" />
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Interlocuteur</label>
                            <select name="" id=""></select>
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Contact</label>
                            <select name="" id=""></select>
                          </div>
                        </div>
                        <div className="contact_textfield_row">
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Statut</label>
                            <input type="text" name="entreprise" />
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Priorité</label>
                            <select name="" id=""></select>
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Produit</label>
                            <select name="" id=""></select>
                          </div>
                        </div>

                        <div className="contact_textfield_row">
                        <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "31.5%",
                            }}
                          >
                            <label>A traiter avant le </label>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <div className="contact_textfield">
                                <input
                                  type="text"
                                  name="phone2"
                               
                                  className="image_placeholder"
                                  placeholder="Du"
                                />
                              </div>
                              <div className="contact_textfield">
                                <input
                                  type="text"
                                  name="phone2"
                               
                                  className="image_placeholder"
                                  placeholder="Au"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                              marginLeft:"2%"
                            }}
                          >
                            <label>Catégorie</label>
                            <input type="text" />
                          </div>

                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Projet</label>
                            <select name="" id=""></select>
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: "2%",
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
                            Vous n'avez saisi encore aucune tâche.
                          </p>{" "}
                          <p className="achat_comm_p">
                            Saisissez une tâche puis affectez-la à un
                            collaborateur.
                          </p>{" "}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          padding: "2% 0",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "#d9d9d9",
                            padding: "10px 15px",
                            borderRadius: "2px",
                          }}
                          className="search_text"
                        >
                          Aucune entrée trouvée (afficher 20 entrées)
                        </button>
                        <button
                          style={{
                            backgroundColor: "#efefef",
                            padding: "0px 15px",
                            borderRadius: "2px",
                          }}
                        >
                          <select
                            name=""
                            id=""
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                            className="search_text"
                          >
                            <option value="">Sélectionner une action</option>
                            <option value="">
                              Multi PDF (avec papier à entête)
                            </option>
                            <option value="">
                              Multi PDF (sans papier à entête)
                            </option>
                            <option value="">
                              Envoyer les offres par e-mail
                            </option>
                            <option value="">Exportation</option>
                          </select>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </section>
      </div>
      <Footer />
    </>
  );
}
