import React, { useState } from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./ProduitsNiveaux.css";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../../components/footer_dash/FooterDash";
import img from "../../assets/sear.svg";
import Person from "../../assets/pers.svg";

export default function ProduitsNiveaux() {
  const [isTousVisible, setTousVisible] = useState(true);
  const toggleTous = () => {
    setTousVisible(true);

    setFiltreVisible(false);
  };

  const [isFiltreVisible, setFiltreVisible] = useState(false);
  const toggleFiltre = () => {
    setTousVisible(false);

    setFiltreVisible(true);
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
  return (
    <>
      <Navbar />
      <div className="ventes">
        <div className="ventes_title">
          <h1>Niveaux des stocks</h1>
        </div>

        <section id="ventes_section1">
          <div className="ventes_head">
            <div className="ventes_buttons">
              <button
                onClick={toggleTous}
                className={isTousVisible ? "ventes_buttonVisible" : ""}
              >
                Tous
              </button>

              <button
                onClick={toggleFiltre}
                className={isFiltreVisible ? "ventes_buttonVisible2" : ""}
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

          {isTousVisible && (
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
                    <option value="">Multi PDF (avec papier à entête)</option>
                    <option value="">Multi PDF (sans papier à entête)</option>
                    <option value="">Envoyer les offres par e-mail</option>
                    <option value="">Exportation</option>
                  </select>
                </button>
              </div>
            </div>
          )}

          {isFiltreVisible && (
            <div className="ventes_section1">
              <form onSubmit={handleContactSubmit}>
                <div className="contact_textfield_row">
                  <div
                    className="contact_textfield"
                    style={{
                      width: "100%",
                    }}
                  >
                    <label>Désignation produit</label>
                    <select
                      name="langue"
                      value={contactFormData.langue}
                      onChange={handleContactChange}
                    >
                      <option value=""></option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
                    </select>
                  </div>
                  <div
                    className="contact_textfield"
                    style={{
                      width: "100%",
                    }}
                  >
                    <label>Code produit</label>
                    <select
                      name="langue"
                      value={contactFormData.langue}
                      onChange={handleContactChange}
                    >
                      <option value=""></option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
                    </select>
                  </div>
                  <div
                    className="contact_textfield"
                    style={{
                      width: "100%",
                    }}
                  >
                    <label>Type de produit</label>
                    <select
                      name="langue"
                      value={contactFormData.langue}
                      onChange={handleContactChange}
                    >
                      <option value=""></option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
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
                    <label>Monnaie</label>
                    <select
                      name="langue"
                      value={contactFormData.langue}
                      onChange={handleContactChange}
                    >
                      <option value=""></option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
                    </select>
                  </div>
                  <div
                    className="contact_textfield"
                    style={{
                      width: "100%",
                    }}
                  >
                    <label>Lieu de stockage</label>
                    <select
                      name="langue"
                      value={contactFormData.langue}
                      onChange={handleContactChange}
                    >
                      <option value=""></option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
                    </select>
                  </div>
                  <div
                    className="contact_textfield"
                    style={{
                      width: "100%",
                    }}
                  >
                    <label>Emplacement de stockage</label>
                    <select
                      name="langue"
                      value={contactFormData.langue}
                      onChange={handleContactChange}
                    >
                      <option value=""></option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
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
                    <label>Interlocuteur</label>
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
                        value={contactFormData.pays}
                        onChange={handleContactChange}
                        style={{ width: "77%" }}
                      >
                        <option value=""></option>
                        <option selected value="country1"></option>
                        <option value="country2"></option>
                      </select>
                      <img src={Person} alt="img" />
                    </div>
                  </div>

                  <div
                    className="contact_textfield"
                    style={{
                      width: "100%",
                    }}
                  >
                    <label>Groupe</label>
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
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
