import React, { useState } from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./Projets2.css";
import { AiOutlineSearch  } from "react-icons/ai";
import img from "../../assets/sear.svg";
import Footer from "../../components/footer_dash/FooterDash";
import Monnaie from "../../assets/monnaie.svg";
import Person from "../../assets/pers.svg";
import { AiOutlineClose } from "react-icons/ai";

export default function Projets2() {
 
  const [contactFormData, setContactFormData] = useState({
    num_contact: "",
    type_contact: "",
    entreprise: "",
    complement: "",
    email1: "",
    phone1: "",
    email2: "",
    phone2: "",
    address: "",
    npa: "",
    localite: "",
    pays: "",
    categorie: "",
    langue: "",
    secteur: "",
  });

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const initialSections = {
    tous: true,
    aujourdhui: false,
    semaine: false,
    mois: false,
    mes: false,
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
  const [isTimeFormOpen, setIsTimeFormOpen] = useState(false);

  const openTimeForm = () => {
    setIsTimeFormOpen(true);
  };

  const closeTimeForm = () => {
    setIsTimeFormOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="ventes">
        <div className="ventes_title">
          <h1>Temps</h1>
          <button onClick={openTimeForm} className="ventes_title_btn">Nouvelle saisie de temps</button>
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
                onClick={() => toggleSection("aujourdhui")}
                className={sections.aujourdhui ? "ventes_buttonVisible" : ""}
              >
                Aujourd'hui
              </button>
              <button
                onClick={() => toggleSection("semaine")}
                className={sections.semaine ? "ventes_buttonVisible" : ""}
              >
                Semaine en cours
              </button>
              <button
                onClick={() => toggleSection("mois")}
                className={sections.mois ? "ventes_buttonVisible" : ""}
              >
                Mois en cours
              </button>
              <button
                onClick={() => toggleSection("mes")}
                className={sections.mes ? "ventes_buttonVisible" : ""}
              >
                Mes
              </button>
              <button
                onClick={() => toggleSection("filtre")}
                className={sections.filtre ? "ventes_buttonVisible" : ""}
              >
                Filtre personnalisé
              </button>
            </div>
            <div className="searchrow1">
              <AiOutlineSearch style={{margin:"0 2%"}} />
              <input placeholder="Recherche" />
            </div>
          </div>

          <div className="divider"></div>

          {Object.keys(sections).map((section) => {
            if (sections[section]) {
              return (
                <div key={section} className="section-content">
                  {section === "tous" && (
                    <div>
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
                        <img alt="img" src={img} style={{ width: "100%" }} />
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
                          Vous n'avez créé encore aucune saisie de temps. <br />{" "}
                          <button
                            onClick={openTimeForm}
                            className="achat_comm_p"
                            style={{
                              backgroundColor: "none",
                              textDecoration: "underline",
                            }}
                          >
                            Commencez par saisir une.
                          </button>
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
                  {section === "aujourdhui" && (
                   <div>
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
                       <img alt="img" src={img} style={{ width: "100%" }} />
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
                         Aucun résultat n'a été trouvé pour cette requête.
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
                  {section === "semaine" && (
                    <div>
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
                        <img alt="img" src={img} style={{ width: "100%" }} />
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
                          Aucun résultat n'a été trouvé pour cette requête.
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
                  {section === "mois" && (
                    <div>
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
                        <img alt="img" src={img} style={{ width: "100%" }} />
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
                          Aucun résultat n'a été trouvé pour cette requête.
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
                  {section === "mes" && (
                    <div>
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
                        <img alt="img" src={img} style={{ width: "100%" }} />
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
                          Aucun résultat n'a été trouvé pour cette requête.
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
                            <label>N°</label>
                            <input
                              type="number"
                              name="num_contact"
                              value={contactFormData.num_contact}
                              onChange={handleContactChange}
                            />
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Titre du document</label>
                            <input
                              type="number"
                              name="num_contact"
                              value={contactFormData.num_contact}
                              onChange={handleContactChange}
                            />
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Contact</label>
                            <select name="" id="">
                              <option value="">User Name</option>
                            </select>
                          </div>
                        </div>
                        <div className="contact_textfield_row">
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Projet</label>
                            <input
                              type="text"
                              name="entreprise"
                              value={contactFormData.entreprise}
                              onChange={handleContactChange}
                            />
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Interlocuteur</label>
                            <select name="" id="">
                              <option value="">Nom de l'interlocuteur</option>
                            </select>
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Vendeur</label>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "20px",
                              }}
                            >
                              <select
                                name=""
                                id=""
                                style={{ width: "77%" }}
                              ></select>
                              <img src={Person} alt="img" />
                            </div>
                          </div>
                        </div>
                        <div className="contact_textfield_row">
                          <div
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="contact_textfield">
                              {" "}
                              <label>Monnaie</label>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  gap: "20px",
                                }}
                              >
                                <select name="" id="" style={{ width: "77%" }}>
                                  <option value="">BRL</option>
                                  <option value="">CHF</option>
                                  <option value="">CNY</option>
                                  <option value="">EUR</option>
                                  <option value="">GBP</option>
                                  <option value="">JPY</option>
                                </select>
                                <img src={Monnaie} alt="img" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Langue</label>
                            <select
                              name="langue"
                              value={contactFormData.langue}
                              onChange={handleContactChange}
                            >
                              <option value="">Allemand</option>
                              <option value="">Français</option>
                              <option value="">Italien</option>
                              <option value="">Anglais</option>
                              <option value="">Portogais</option>
                              <option value="">Chinois</option>
                              <option value="">Japonais</option>
                              <option value="">Espagnol</option>
                            </select>
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Moyen de paiement</label>
                            <select name="" id="">
                              <option value="">Paiement anticipé</option>
                              <option value="">Carte EC</option>
                              <option value="">Facture</option>
                              <option value="">Contre remboursement</option>
                              <option value="">Carte de crédit</option>
                              <option value="">
                                Prélèvement Bancaire recouvrement par LSV
                              </option>
                            </select>
                          </div>
                        </div>{" "}
                        <div className="contact_textfield_row">
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Compte</label>
                            <select
                              name="pays"
                              value={contactFormData.pays}
                              onChange={handleContactChange}
                            >
                              <option value="">Banque Exemple (CHF)</option>
                            </select>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "31%",
                              marginLeft: "-2%",
                            }}
                          >
                            <label>Plage de dates</label>
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
                                  value={contactFormData.phone2}
                                  onChange={handleContactChange}
                                  className="image_placeholder"
                                  placeholder="Du"
                                />
                              </div>
                              <div className="contact_textfield">
                                <input
                                  type="text"
                                  name="phone2"
                                  value={contactFormData.phone2}
                                  onChange={handleContactChange}
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
                            }}
                          >
                            <label>S'agit-il d'une commande récurrente?</label>
                            <select
                              name="pays"
                              value={contactFormData.pays}
                              onChange={handleContactChange}
                            >
                              <option value=""></option>
                              <option selected value="country1">
                                Oui
                              </option>
                              <option value="country2">Non</option>
                            </select>
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
                            <input
                              type="text"
                              name="phone2"
                              value={contactFormData.phone2}
                              onChange={handleContactChange}
                            />
                          </div>
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Voie de correspondance</label>
                            <select
                              name="pays"
                              value={contactFormData.pays}
                              onChange={handleContactChange}
                            >
                              <option value="">Courrier</option>
                              <option value="">E-mail</option>
                            </select>
                          </div>
                        </div>
                        <div className="contact_textfield_row">
                          <div
                            className="contact_textfield"
                            style={{
                              width: "100%",
                            }}
                          >
                            <label>Envoyé</label>
                            <select
                              name="pays"
                              value={contactFormData.pays}
                              onChange={handleContactChange}
                            >
                              <option value="">Egal</option>
                              <option value="">Oui</option>
                              <option value="">Non</option>
                            </select>
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
                      <hr />{" "}
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
                      </div>{" "}
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
      {isTimeFormOpen && (
          <div className="time_form_wrap">
            <div className="time_form">
              <div className="time_form_content">
                <div className="contact_title_row">
                  <h2>Nouvelle saisie de temps</h2>
                  <AiOutlineClose
                    color="#0B2840"
                    size={30}
                    onClick={closeTimeForm}
                  />{" "}
                </div>
                <div className="divider"></div>

                <form onSubmit={handleContactSubmit}>
                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>
                        Activité <span>*</span>
                      </label>
                      <select
                        name="pays"
                        value={contactFormData.pays}
                        onChange={handleContactChange}
                      >
                        <option value=""></option>
                        <option selected value="country1"></option>
                        <option value="country2"></option>
                      </select>
                    </div>

                    <div className="contact_textfield">
                      <label>Contact</label>
                      <input
                        type="text"
                        name="categorie"
                        value={contactFormData.categorie}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>
                        Date <span>*</span>
                      </label>
                      <input
                        className="npa"
                        type="text"
                        name="categorie"
                        value={contactFormData.categorie}
                        onChange={handleContactChange}
                      />
                    </div>

                    <div className="contact_textfield">
                      <label>Durée HH:MM</label>
                      <input
                        className="npa"
                        type="text"
                        name="categorie"
                        value={contactFormData.categorie}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>Description produit</label>
                      <textarea
                        className="textarea"
                        name="address"
                        value={contactFormData.address}
                        onChange={handleContactChange}
                        rows={5}
                      />
                    </div>
                  </div>

                  <div>
                    <button className="submit">Enregistrer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      <Footer />
    </>
  );
}
