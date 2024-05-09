import React, { useState } from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import Footer from "../../components/footer_dash/FooterDash";
import "./AchatComm.css";
import { AiOutlineSearch } from "react-icons/ai";
import img from "../../assets/sear.svg";
import { AiOutlineClose } from "react-icons/ai";
import Produit from "../../assets/produit.svg";
import Person from "../../assets/pers.svg";
export default function AchatComm() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
  };
  const [isFactureFormOpen, setIsFactureFormOpen] = useState(false);

  const openFactureForm = () => {
    setIsFactureFormOpen(true);
  };

  const closeFactureForm = () => {
    setIsFactureFormOpen(false);
  };

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

  const [isDataVisible, setDataVisible] = useState(true);
  const toggleData = () => {
    setDataVisible(true);
    setClientVisible(false);
  };
  const [isClientVisible, setClientVisible] = useState(false);
  const toggleClient = () => {
    setDataVisible(false);
    setClientVisible(true);
  };

  return (
    <>
      <Navbar />
      <div className="ventes">
        <div className="ventes_title">
          <h1>Commandes</h1>
          <button onClick={openFactureForm} className="ventes_title_btn">
            Nouvelle commande
          </button>
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
                         Vous n'avez pas encore créé de commande. <br />{" "}
                         <button
                           onClick={openFactureForm}
                           className="achat_comm_p"
                           style={{
                             backgroundColor: "none",
                             textDecoration: "underline",
                           }}
                         >
                           Créez une commande dès maintenant.
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
                 
                  {section === "filtre" &&   <div className="ventes_section1">
              <form onSubmit={handleContactSubmit}>
                <div className="contact_textfield_row">
                  <div
                    className="contact_textfield"
                    style={{
                      width: "100%",
                    }}
                  >
                    <label>Type</label>
                    <input type="text" name="entreprise" />
                  </div>
                  <div
                    className="contact_textfield"
                    style={{
                      width: "100%",
                    }}
                  >
                    <label>Interlocuteur</label>
                    <input type="text" name="complement" />
                  </div>
                  <div
                    className="contact_textfield"
                    style={{
                      width: "100%",
                    }}
                  >
                    <label>Produit</label>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                       <select
                      name="pays"
                     
                      style={{ width: "77%" }}
                    >
                      <option value=""></option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
                    </select>
                    <img src={Produit} alt="img" />
                    </div>
                   
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
                            <label>Date</label>
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
                    }}
                  >
                    <label>Fournisseur</label>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                       <select
                      name="pays"
                   
                      style={{ width: "77%" }}
                    >
                    </select>
                    <img src={Person} alt="img" />
                    </div>
                   
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
                  <button className="submit">Appliquer le filtre</button>
                  <button className="reset">Enregistrer le filtre</button>
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
                          Aucun mouvement de stock n’a encore été enregistré. Comptabilisez manuellement une entrée ou une sortie. <br /><br />Si vous créez des livraisons à partir de commandes clients, les sorties de stock seront automatiquement comptabilisées. <br /><br />    Le processus est le même pour les entrées de marchandises correspondant à des commandes d’achat.                      </p>{" "}
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
            </div>}
                </div>
              );
            }
            return null;
          })}
         

        
        </section>
      </div>
      {isFactureFormOpen && (
          <div className="facture_form_wrap">
        <div className="facture_form">
            <div className="facture_form_content">
              <div className="contact_title_row">
                <h2>Nouvelle commande</h2>
                <AiOutlineClose
                  color="#0B2840"
                  size={30}
                  onClick={closeFactureForm}
                />{" "}
              </div>
              <div className="divider"></div>
              <form onSubmit={handleContactSubmit}>
                <section id="show_section2">
                  <div className="show_buttons">
                    <button
                      onClick={toggleData}
                      className={isDataVisible ? "show_buttonVisible" : ""}
                    >
                      Données de base
                    </button>
                    <button
                      onClick={toggleClient}
                      className={isClientVisible ? "show_buttonVisible" : ""}
                    >
                      Client
                    </button>
                  </div>

                  {isDataVisible && (
                    <div
                      style={{
                        borderRadius: "0px 0px 3px 3px",
                        border: "1px solid #959799",
                        padding: "4%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <div className="contact_textfield">
                        <label>
                          Contact <span>*</span>
                        </label>
                        <input type="text" name="entreprise" />
                      </div>
                      <div className="contact_textfield">
                        <label>Personne de contact </label>
                        <input type="text" name="entreprise" />
                      </div>
                      <div className="contact_textfield">
                        <label>Titre </label>
                        <input type="text" name="entreprise" />
                      </div>
                      <div className="contact_textfield">
                        <label>
                          Date <span>*</span>
                        </label>
                        <input type="text" name="entreprise" />
                      </div>
                    </div>
                  )}
                  {isClientVisible && (
                    <div
                      style={{
                        borderRadius: "0px 0px 3px 3px",
                        border: "1px solid #959799",
                        padding: "4%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <div className="contact_textfield">
                        <label>Client</label>
                        <input type="text" name="entreprise" />
                      </div>
                      <div className="contact_textfield">
                        <label>Personne de contact (client) </label>
                        <input type="text" name="entreprise" />
                      </div>
                      <div className="contact_textfield">
                        <label>Projet (client) </label>
                        <input type="text" name="entreprise" />
                      </div>
                    </div>
                  )}
                </section>
                <br />
                <br />
                <div>
                  <button className="submit">Enregistrer et continuer</button>
                </div>
              </form>
            </div>
          </div>
      </div> 
        )}
     
      <Footer/>
    </>
  );
}
