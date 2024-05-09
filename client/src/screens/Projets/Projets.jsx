import React, { useState } from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./Projets.css";
import { AiOutlineSearch } from "react-icons/ai";
import img from "../../assets/sear.svg";
import Footer from "../../components/footer_dash/FooterDash";
import { AiOutlineClose } from "react-icons/ai";
import Monnaie from "../../assets/monnaie.svg";
import Person from "../../assets/pers.svg";
export default function Projets() {
  const initialSections2 = {
    data: true,
    status: false,
    type: false,
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
  const initialSections = {
    tous: true,
    actif: false,
    suspens: false,
    archive: false,
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

  const handleContactSubmit = (event) => {
    event.preventDefault();
    console.log(contactFormData);
  };
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

  const openProjectForm = () => {
    setIsProjectFormOpen(true);
  };

  const closeProjectForm = () => {
    setIsProjectFormOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="ventes">
        <div className="ventes_title">
          <h1>Projets</h1>
          <button onClick={openProjectForm} className="ventes_title_btn">Nouveau projet</button>
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
                onClick={() => toggleSection("actif")}
                className={sections.actif ? "ventes_buttonVisible" : ""}
              >
                Actif
              </button>
              <button
                onClick={() => toggleSection("archive")}
                className={sections.archive ? "ventes_buttonVisible" : ""}
              >
                Archivé
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
                          Vous n'avez ouvert encore aucun projet. <br />{" "}
                          <button
                            onClick={openProjectForm}
                            className="achat_comm_p"
                            style={{
                              backgroundColor: "none",
                              textDecoration: "underline",
                            }}
                          >
                            Commencez par ouvrir un projet.
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
                  {section === "suspens" && (
                    <>  <div
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
                    </div> <div
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
                  {section === "actif" && (<>  <div
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
                    </div> <div
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
                  {section === "archive" && (
                    <>  <div
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
                    </div> <div
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
                  {section === "mes" && (
                    <><div
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
                              <img src={Person} alt="img"/>
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
      </div> {isProjectFormOpen && (
          <div className="project_form_wrap">
            {" "}
            <div className="project_form">
              <div className="project_form_content">
                <div className="contact_title_row">
                  <h2>Nouveau Projet</h2>
                  <AiOutlineClose
                    color="#0B2840"
                    size={30}
                    onClick={closeProjectForm}
                  />{" "}
                </div>
                <div className="divider"></div>
                <div className="buttons">
                  <button
                    onClick={() => toggleSection2("data")}
                    className={sections2.data ? "buttonVisible" : ""}
                  >
                    Données du projet
                  </button>
                  <button
                    onClick={() => toggleSection2("status")}
                    className={sections2.status ? "buttonVisible" : ""}
                  >
                    Statut du projet
                  </button>
                  <button
                    onClick={() => toggleSection2("type")}
                    className={sections2.type ? "buttonVisible" : ""}
                  >
                    Type de projet
                  </button>
                </div>
                {Object.keys(sections2).map((section) => {
                  if (sections2[section]) {
                    return (
                      <div key={section} className="section-content">
                        {section === "data" && (
                          <form onSubmit={handleContactSubmit}>
                            <div className="form_border">
                              <div className="contact_textfield_row">
                                <div className="contact_textfield">
                                  <label>
                                    Nom <span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="entreprise"
                                    value={contactFormData.entreprise}
                                    onChange={handleContactChange}
                                  />
                                </div>
                                <div className="contact_textfield">
                                  <label>Début</label>
                                  <input
                                    className="npa"
                                    type="text"
                                    name="complement"
                                    value={contactFormData.complement}
                                    onChange={handleContactChange}
                                  />
                                </div>
                              </div>
                              <div className="contact_textfield_row">
                                <div className="contact_textfield">
                                  <label>
                                    Contact <span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="entreprise"
                                    value={contactFormData.entreprise}
                                    onChange={handleContactChange}
                                  />
                                </div>
                                <div className="contact_textfield">
                                  <label>Fin</label>
                                  <input
                                    className="npa"
                                    type="text"
                                    name="complement"
                                    value={contactFormData.complement}
                                    onChange={handleContactChange}
                                  />
                                </div>
                              </div>

                              <div className="contact_textfield_row">
                                <div className="contact_textfield">
                                  <label>
                                    Contact <span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="categorie"
                                    value={contactFormData.categorie}
                                    onChange={handleContactChange}
                                  />
                                </div>
                                <div className="contact_textfield">
                                  <label>
                                    Interlocuteur <span>*</span>
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
                              </div>
                              <div className="contact_textfield_row">
                                <div className="contact_textfield">
                                  <label>Description</label>
                                  <textarea
                                    className="textarea"
                                    name="address"
                                    value={contactFormData.address}
                                    onChange={handleContactChange}
                                    rows={5}
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <button className="submit">Enregistrer</button>
                            </div>
                          </form>
                        )}
                        {section === "status" && (
                          <form onSubmit={handleContactSubmit}>
                            <div className="form_border">
                              <div className="contact_textfield_row">
                                <div className="contact_textfield">
                                  <label>
                                    Interlocuteur <span>*</span>
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
                                  <label>
                                    Interlocuteur <span>*</span>
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
                              </div>
                            </div>

                            <div>
                              <button className="submit">Enregistrer</button>
                            </div>
                          </form>
                        )}
                        {section === "type" && (
                          <form onSubmit={handleContactSubmit} className="">
                            <div className="form_border">
                              <div className="contact_textfield_row">
                                <div className="contact_textfield">
                                  <label>
                                    Interlocuteur <span>*</span>
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
                              </div>
                            </div>

                            <div>
                              <button className="submit">Enregistrer</button>
                            </div>
                          </form>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        )}
      <Footer/>
     
    </>
  );
}
