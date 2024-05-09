import React, { useState } from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./ShowDetails.css";
import { RiArrowDownSFill } from "react-icons/ri";
import add from "../../assets/addlogo.svg";
import { AiOutlineClose, AiOutlineSearch} from "react-icons/ai";
import img from "../../assets/fin.png";
import img2 from "../../assets/add.svg";
import Footer from "../../components/footer_dash/FooterDash";

export default function ShowDetails() {
  const initialSections = {
    data: true,
    finance: false,
    type: false,
    plus: false,
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
    contact: true,
    address: false,
    cordonnes: false,
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
  const initialSections3 = {
    note: true,
    tache: false,
    projet: false,
    temp: false,
    offre: false,
    command: false,
    facture: false,
    credit: false,
    depense: false,
    fornisseur: false,
    fichier: false,
  };
  const [sections3, setSections3] = useState(initialSections3);
  const toggleSection3 = (section) => {
    const updatedSections = { ...initialSections3, [section]: true };
    for (const key in updatedSections) {
      if (key !== section) {
        updatedSections[key] = false;
      }
    }
    setSections3(updatedSections);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
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
  const [isContact2FormOpen, setIsContact2FormOpen] = useState(false);

  const openContact2Form = () => {
    setIsContact2FormOpen(true);
  };

  const closeContact2Form = () => {
    setIsContact2FormOpen(false);
  };
  const [contact2FormData, setContact2FormData] = useState({
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

  const handleContact2Change = (event) => {
    const { name, value } = event.target;
    setContact2FormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContact2Submit = (event) => {
    event.preventDefault();
    console.log(contact2FormData);
  };
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);

  const openAddressForm = () => {
    setIsAddressFormOpen(true);
  };

  const closeAddressForm = () => {
    setIsAddressFormOpen(false);
  };
  const [AddressFormData, setAddressFormData] = useState({
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

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddressFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressSubmit = (event) => {
    event.preventDefault();
    console.log(contact2FormData);
  };
  const [isCBancaireFormOpen, setIsCBancaireFormOpen] = useState(false);

  const openCBancaireForm = () => {
    setIsCBancaireFormOpen(true);
  };

  const closeCBancaireForm = () => {
    setIsCBancaireFormOpen(false);
  };
  const [CBancaireFormData, setCBancaireFormData] = useState({
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

  const handleCBancaireChange = (event) => {
    const { name, value } = event.target;
    setCBancaireFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCBancaireSubmit = (event) => {
    event.preventDefault();
    console.log(contact2FormData);
  };
  return (
    <>
      <Navbar />
      <div className="show_details">
        <div className="show_title">
          <h1>000001 - Faji Finance</h1>
          <button className="show_title_btn" onClick={openContactForm}>Nouveau Contact</button>
        </div>
        <div className="show_sections">
          <section id="show_section1">
            <div className="show_buttons">
              <button
                onClick={() => toggleSection("data")}
                className={sections.data ? "show_buttonVisible" : ""}
              >
                Vue d'ensemble
              </button>
              <button
                onClick={() => toggleSection("finance")}
                className={sections.finance ? "show_buttonVisible" : ""}
              >
                Finances
              </button>
              <button
                onClick={() => toggleSection("type")}
                className={sections.type ? "show_buttonVisible" : ""}
              >
                Taux horaires
              </button>
              <button
                onClick={() => toggleSection("plus")}
                className={sections.plus ? "show_buttonVisible" : ""}
              >
                Plus
              </button>
              <button>
                Actions
                <RiArrowDownSFill />
              </button>
            </div>
            {Object.keys(sections).map((section) => {
              if (sections[section]) {
                return (
                  <div key={section} className="section-content">
                    {section === "data" && (
                      <div className="show_section">
                        <div className="show_section_title">
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <p>PNG, JPG ou GIF, 1 Mo max.</p>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleFileInputChange}
                              style={{ display: "none" }}
                              id="fileInput"
                            />
                            <label htmlFor="fileInput">
                              <div className="add_wrapper">
                                <img src={add} alt="img" srcset="" />
                                <h4>LOGO</h4>
                              </div>
                            </label>
                            <div>
                              <button>Importer votre logo</button>
                            </div>
                          </div>
                          <div>
                            <h2>Faji Finance</h2>
                          </div>
                        </div>

                        {selectedFile && (
                          <div>
                            <p>Selected File: {selectedFile.name}</p>
                            <img
                              src={URL.createObjectURL(selectedFile)}
                              alt="Selected"
                            />
                          </div>
                        )}
                        <br />
                        <TextLine
                          text1="Adresse"
                          text2="Alte Jonastrasse 24
                  8640 Rapperswil
                  Suisse"
                        />
                        <TextLine text1="Interlocuteur" text2="User name" />
                        <TextLine
                          text1="Voie de correspondance"
                          text2="Courrier"
                        />
                        <div className="divider"></div>

                        <TextLine text1="Téléphone" text2="0021671808868" />
                        <TextLine text1="Mobile" text2="0021671808868" />
                        <TextLine text1="Fax" text2="xxxxxxxxx" />
                        <TextLine text1="E-mail" text2="xxxxxxxxx" />
                        <TextLine text1="Site web" text2="xxxxxxxxx" />
                        <TextLine text1="Skype" text2="xxxxxxxxx" />
                        <TextLine
                          text1="Nombre de collaborateurs"
                          text2="000"
                        />
                        <TextLine text1="Nº de TVA" text2="000" />
                        <TextLine
                          text1="Nº d'immatriculation au registre du commerce"
                          text2="000"
                        />
                      </div>
                    )}
                    {section === "finance" && (
                      <div className="show_section">
                        <p className="p">Chiffre d'affaires en CHF</p>
                        <div className="divider"></div>
                        <p
                          className="p"
                          style={{ textAlign: "center", width: "100%" }}
                        >
                          2017&nbsp;&nbsp;2018&nbsp;&nbsp;2019&nbsp;&nbsp;2020&nbsp;&nbsp;2021&nbsp;&nbsp;2022&nbsp;&nbsp;2023&nbsp;&nbsp;2024
                        </p>
                        <div>
                          {" "}
                          <img src={img} alt="img" style={{width:"100%"}}/>
                        </div>
                      </div>
                    )}
                    {section === "type" && (
                      <div className="show_section">
                        <p className="p">Définir les taux horaires</p>
                        <div className="divider"></div>
                      </div>
                    )}
                    {section === "plus" && (
                      <div className="show_section">
                        <p className="p">Informations</p>
                        <div className="divider"></div>
                        <p className="p">Propriétaire</p>
                        <p className="p">username</p>
                        <p className="p">Créé</p>
                        <p className="p">user name / 09.06.2009 08:37</p>
                        <p className="p">Modifié</p>
                        <p className="p">aucune modification</p>
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </section>

          <section id="show_section2">
            <div className="show_buttons">
              <button
                onClick={() => toggleSection2("contact")}
                className={sections2.contact ? "show_buttonVisible" : ""}
              >
                Contacts
              </button>
              <button
                onClick={() => toggleSection2("address")}
                className={sections2.address ? "show_buttonVisible" : ""}
              >
                Adresses supplémentaires
              </button>
              <button
                onClick={() => toggleSection2("cordonnes")}
                className={sections2.cordonnes ? "show_buttonVisible" : ""}
              >
                Coordonnées bancaires
              </button>
            </div>
            {Object.keys(sections2).map((section) => {
              if (sections2[section]) {
                return (
                  <div key={section} className="section-content">
                    {section === "contact" && (
                      <div className="show_section">
                        <p className="p">Aucune entrée disponible</p>
                        <div className="divider"></div>
                        <div className="btns">
                          <button onClick={openContactForm}>
                            Ajouter un contact
                          </button>
                          <button onClick={openContact2Form}>
                            Ajouter une association de contact
                          </button>
                        </div>
                      </div>
                    )}
                    {section === "address" && (
                      <div className="show_section">
                        <p className="p">Aucune entrée disponible</p>
                        <div className="divider"></div>
                        <div className="btns">
                          <button onClick={openAddressForm}>
                            Ajouter une adresse
                          </button>
                        </div>
                      </div>
                    )}
                    {section === "cordonnes" && (
                      <div className="show_section">
                        <p className="p">Aucune entrée disponible</p>
                        <div className="divider"></div>
                        <div className="btns">
                          <button onClick={openCBancaireForm}>
                            Ajouter un compte bancaire
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
        <br />
        <br />
        <section id="show_section3">
          <div className="show_buttons">
            <button
             onClick={() => toggleSection3("note")}
             className={sections3.note ? "show_buttonVisible" : ""}
            >
              Notes
            </button>
            <button
              onClick={() => toggleSection3("tache")}
              className={sections3.tache ? "show_buttonVisible" : ""}
            >
              Tâches
            </button>
            <button
               onClick={() => toggleSection3("projet")}
               className={sections3.projet ? "show_buttonVisible" : ""}
            >
              Projet
            </button>
            <button
              onClick={() => toggleSection3("temp")}
              className={sections3.temp ? "show_buttonVisible" : ""}
            >
              Temps
            </button>
            <button
               onClick={() => toggleSection3("offre")}
               className={sections3.offre ? "show_buttonVisible" : ""}
            >
              Offres
            </button>
            <button
               onClick={() => toggleSection3("command")}
               className={sections3.command ? "show_buttonVisible" : ""}
            >
              Commandes client
            </button>
            <button
               onClick={() => toggleSection3("facture")}
               className={sections3.facture ? "show_buttonVisible" : ""}
            >
              Factures
            </button>
            <button
              onClick={() => toggleSection3("credit")}
              className={sections3.credit ? "show_buttonVisible" : ""}
            >
              Crédits
            </button>
            <button
              onClick={() => toggleSection3("depense")}
              className={sections3.depense ? "show_buttonVisible" : ""}
            >
              Dépenses
            </button>
            <button
               onClick={() => toggleSection3("fournisseur")}
               className={sections3.fournisseur ? "show_buttonVisible" : ""}
            >
              Factures fournisseurs
            </button>
            <button
              onClick={() => toggleSection3("fichier")}
              className={sections3.fichier ? "show_buttonVisible" : ""}
            >
              Fichiers
            </button>
          </div>
          {Object.keys(sections3).map((section) => {
            if (sections3[section]) {
              return (
                <div key={section} className="section-content">
                  {section === "note" &&  <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>
              <div className="notes1_title_row">
                <button className="reset">Tous</button>
                <p>Filtre personnalisé</p>
              </div>
              <div className="divider"></div>
              <div className="notes2_title_row">
                <h4>Date</h4>
                <h4>Objet</h4>
                <h4>Projet</h4>
                <h4>Type de contact</h4>
              </div>
              <div className="divider"></div>
              <div>Aucune entrée trouvée</div>
            </div>}
                  {section === "tache" &&  <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>
              <div className="notes1_title_row">
                <button className="reset">Tous</button>
                <p>Filtre personnalisé</p>
              </div>
              <div className="divider"></div>
              <div className="notes2_title_row">
                <h4>A traiter avant le</h4>
                <h4>Statut</h4>
                <h4>Objet</h4>
                <h4>Contact</h4>
                <h4>Interlocuteur</h4>
              </div>
              <div className="divider"></div>
              <div>Aucune entrée trouvée</div>
            </div>}
                  {section === "projet" &&  <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>
              <div className="notes1_title_row">
                <button className="reset">Tous</button>
                <p>Filtre personnalisé</p>
              </div>
              <div className="divider"></div>

              <div>Aucune entrée trouvée</div>
            </div>}
                  {section === "temp" &&  <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>
              <div className="notes1_title_row">
                <button className="reset">Tous</button>
                <p>Filtre personnalisé</p>
              </div>
              <div className="divider"></div>
              <div className="notes2_title_row">
                <h4>Date</h4>
                <h4>Activité</h4>
                <h4>Statut</h4>
                <h4>Facturable</h4>
                <h4>Projet</h4>
                <h4>Tâche </h4>
                <h4>Texte</h4>
                <h4>Interlocuteur</h4>
                <h4>Temp ( h : min )</h4>
              </div>
              <div className="divider"></div>
              <div>Aucune entrée trouvée</div>
            </div>}
                  {section === "offre" &&  <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>
              <div className="notes1_title_row">
                <button className="reset">Tous</button>
                <p>Filtre personnalisé</p>
              </div>
              <div className="divider"></div>

              <div>Aucune entrée trouvée</div>
            </div>}
                  {section === "command" && <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>
              <div className="notes1_title_row">
                <button className="reset">Tous</button>
                <p>Filtre personnalisé</p>
              </div>
              <div className="divider"></div>

              <div>Aucune entrée trouvée</div>
            </div>}
                  {section === "facture" && <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>
              <div className="notes1_title_row">
                <button className="reset">Tous</button>
                <p>Filtre personnalisé</p>
              </div>
              <div className="divider"></div>

              <div>Aucune entrée trouvée</div>
            </div>}
                  {section === "credit" &&  <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>
              <div className="notes1_title_row">
                <button className="reset">Tous</button>
                <p>Filtre personnalisé</p>
              </div>
              <div className="divider"></div>

              <div>Aucune entrée trouvée</div>
            </div>}
                  {section === "depense" &&  <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>

              <div className="divider"></div>
              <div className="notes2_title_row">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>N°</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Date</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Payé le</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Titre / Texte d'ecriture</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Statut</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Devise</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Brut</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Net</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Compte de comptabilité</h4>
                  <select></select>
                </div>
              </div>
              <div className="divider"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div>
                  {" "}
                  <img src={img2} alt="img" style={{ width: "100%" }} />
                </div>
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <h3 className="p">Pas de dépenses</h3>
                  <p className="p">
                    Vous pouvez voir ici si les dépenses sont en projet ou
                    terminées. <br />
                    Vous pouvez également voir si un document est associé
                  </p>{" "}
                </div>
              </div>
            </div>}
                  {section === "fournisseur" &&  <div className="show_section">
              <div className="notes_title_row">
                <button>Nouvelle note</button>
                <div className="searchrow1">
                  <AiOutlineSearch style={{margin:"0 2%"}} />
                  <input placeholder="Recherche" />
                </div>
              </div>

              <div className="divider"></div>
              <div className="notes2_title_row">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Date d’écriture</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Echéance</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>N°</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4>Référence</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Titre</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Statut</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Devise</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Brut</h4>
                  <select></select>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Compte de comptabilité</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>Net</h4>
                  <select></select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <h4>En suspens</h4>
                  <select></select>
                </div>
              </div>
              <div className="divider"></div>
              <p className="p">Aucune entrée trouvée</p>
            </div>}
                  {section === "fichier" && <div className="show_section" style={{ textAlign: "center" }}>
              <p className="p" style={{ textAlign: "center", width: "100%" }}>
                Aucun fichier n’a encore été joint. Commencez par ajouter des
                fichiers ci-dessous.
              </p>
              <div className="divider"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p className="p">Faire glisser les fichiers ici</p>{" "}
                </div>
                <div>
                  {" "}
                  <a href="/" className="a">
                    Sectionner les fichiers{" "}
                  </a>
                </div>
              </div>
              <br />
              <p className="p" style={{ textAlign: "center", width: "100%" }}>
                Taille de fichier max.: 14 MB <br />
                Formats de fichiers acceptés: DOC, DOCX, GIF, JPEG, JPG, PDF,
                PNG, PPT, PPTX, XLS, XLSX
              </p>
              <div className="divider"></div>
              <p className="p">
                Espace de stockage utilisé par ce contact: 0 B | Espace de
                stockage utilisé par tous les contacts: 0 B
              </p>
            </div>}
                </div>
              );
            }
            return null;
          })}
        </section>
      </div>
      {isContactFormOpen && (
          <div className="contact_form_wrap">
        <div className="contact_form">
            <div className="contact_form_content">
              <div className="contact_title_row">
                <h2>Nouveau contact</h2>
                <AiOutlineClose
                  color="#0B2840"
                  size={30}
                  onClick={closeContactForm}
                />{" "}
              </div>
              <div className="divider"></div>

              <form onSubmit={handleContactSubmit}>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Informations concernant le lien</label>
                    <textarea
                      type="number"
                      name="num_contact"
                      value={contactFormData.num_contact}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>Catégorie</label>
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
                    <label>
                      N° du contact <span>*</span>
                    </label>
                    <input
                      type="number"
                      name="entreprise"
                      value={contactFormData.entreprise}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>Secteur</label>
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
                    <label>Formule d’appel</label>
                    <input
                      type="text"
                      name="entreprise"
                      value={contactFormData.entreprise}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <h4>
                      Type de contact <span>*</span>
                    </h4>
                    <div className="contact_textfield_row2">
                      <label>
                        <input
                          type="radio"
                          name="type_contact"
                          value="Entreprise"
                          checked={
                            contactFormData.type_contact === "Entreprise"
                          }
                          onChange={handleContactChange}
                        />
                        Entreprise
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="row1Radio"
                          value="Privé"
                          checked={contactFormData.type_contact === "Privé"}
                          onChange={handleContactChange}
                        />
                        Privé
                      </label>
                    </div>
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Nom</label>
                    <input
                      type="text"
                      name="entreprise"
                      value={contactFormData.entreprise}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>Titre</label>
                    <input
                      type="text"
                      name="entreprise"
                      value={contactFormData.entreprise}
                      onChange={handleContactChange}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Adresse</label>
                    <textarea
                      name="address"
                      value={contactFormData.address}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>Prenom</label>
                    <input
                      type="text"
                      name="entreprise"
                      value={contactFormData.entreprise}
                      onChange={handleContactChange}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>E-mail</label>
                    <input
                      type="email"
                      name="email1"
                      value={contactFormData.email1}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "flex-start",
                    }}
                  >
                    <div className="contact_textfield">
                      <label>NPA</label>
                      <input
                        className="npa"
                        type="number"
                        name="npa"
                        value={contactFormData.npa}
                        onChange={handleContactChange}
                      />
                    </div>
                    <div className="contact_textfield">
                      <label>Date de naissance</label>
                      <input
                        placeholder="01. 07.2023"
                        className="npa"
                        type="text"
                        name="categorie"
                        value={contactFormData.categorie}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Téléphone</label>
                    <input
                      type="number"
                      name="phone1"
                      value={contactFormData.phone1}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>Pays</label>
                    <select
                      name="pays"
                      value={contactFormData.pays}
                      onChange={handleContactChange}
                    >
                      <option value="">Pays</option>
                      <option selected value="country1">
                        Suisse
                      </option>
                      <option value="country2">Tunisie</option>
                    </select>
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Fax</label>
                    <input
                      type="number"
                      name="phone2"
                      value={contactFormData.phone2}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>E-mail 2</label>
                    <input
                      type="email"
                      name="email2"
                      value={contactFormData.email2}
                      onChange={handleContactChange}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Site web</label>
                    <input
                      type="text"
                      name="phone2"
                      value={contactFormData.phone2}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>Mobile</label>
                    <input
                      type="number"
                      name="email2"
                      value={contactFormData.email2}
                      onChange={handleContactChange}
                    />
                  </div>
                </div>

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
                      <option value="">--------------</option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
                    </select>
                  </div>

                  <div className="contact_textfield">
                    <label>Skype</label>
                    <input
                      placeholder="Catégorie"
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
                      Voie de correspondance <span>*</span>
                    </label>
                    <select
                      name="langue"
                      value={contactFormData.langue}
                      onChange={handleContactChange}
                    >
                      <option value="">--------------</option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
                    </select>
                  </div>
                  <div className="contact_textfield">
                    <label>
                      Propriétaire <span>*</span>
                    </label>
                    <select
                      name="langue"
                      value={contactFormData.langue}
                      onChange={handleContactChange}
                    >
                      <option value="">--------------</option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
                    </select>
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <h4>Formule de salutation</h4>
                    <div className="contact_textfield_row2">
                      <label>
                        <input
                          type="radio"
                          name="type_contact"
                          value="Entreprise"
                          checked={
                            contactFormData.type_contact === "Entreprise"
                          }
                          onChange={handleContactChange}
                        />
                        Vous
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="row1Radio"
                          value="Privé"
                          checked={contactFormData.type_contact === "Privé"}
                          onChange={handleContactChange}
                        />
                        Tu
                      </label>
                    </div>
                  </div>
                  <div className="contact_textfield">
                    <label>Langue</label>
                    <select
                      name="langue"
                      value={contactFormData.langue}
                      onChange={handleContactChange}
                    >
                      <option value="">--------------</option>
                      <option selected value="country1"></option>
                      <option value="country2"></option>
                    </select>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                  <button className="submit">Enregistrer</button>
                  <button className="reset">Annuler</button>
                </div>
              </form>
            </div>
          </div>
      </div>
        )}
      {isContact2FormOpen && (
          <div className="contact_form_wrap">
        <div className="contact_form">
            <div className="contact_form_content">
              <div className="contact_title_row">
                <h2>Lien de contact</h2>
                <AiOutlineClose
                  color="#0B2840"
                  size={30}
                  onClick={closeContact2Form}
                />{" "}
              </div>
              <div className="divider"></div>

              <form onSubmit={handleContact2Submit}>
                <div className="contact_textfield_row">
                  <div className="contact_textfield searchrow">
                    <input placeholder="Recherche un contact parmis vos contact" />
                    <AiOutlineSearch style={{margin:"0 2%"}} />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Informations concernant le lien</label>
                    <textarea
                      type="number"
                      name="num_contact"
                      value={contact2FormData.num_contact}
                      onChange={handleContact2Change}
                      rows={5}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px" }}>
                  <button className="submit">Lien contact</button>
                  <button className="reset">Annuler</button>
                </div>
              </form>
            </div>
          </div>
      </div>
        )}
      {isAddressFormOpen && (
          <div className="contact_form_wrap">
        <div className="contact_form">
            <div className="contact_form_content">
              <div className="contact_title_row">
                <h2>Ajouter une adresse supplémentaire</h2>
                <AiOutlineClose
                  color="#0B2840"
                  size={30}
                  onClick={closeAddressForm}
                />{" "}
              </div>
              <div className="divider"></div>

              <form onSubmit={handleAddressSubmit}>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Nom du destinataire</label>
                    <input
                      type="text"
                      name="entreprise"
                      value={contactFormData.entreprise}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>Désignation interne</label>
                    <input
                      type="text"
                      name="entreprise"
                      value={contactFormData.entreprise}
                      onChange={handleAddressChange}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>
                      Adresse <span>*</span>
                    </label>
                    <textarea
                      name="address"
                      value={contactFormData.address}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>E-mail</label>
                    <input
                      type="email"
                      name="entreprise"
                      value={contactFormData.entreprise}
                      onChange={handleAddressChange}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        alignItems: "flex-start",
                      }}
                    >
                      <div className="contact_textfield">
                        <label>
                          NPA <span>*</span>
                        </label>
                        <input
                          className="npa"
                          type="number"
                          name="npa"
                          value={contactFormData.npa}
                          onChange={handleAddressChange}
                        />
                      </div>
                      <div className="contact_textfield">
                        <label>
                          Localité <span>*</span>
                        </label>
                        <input
                          className="npa"
                          type="text"
                          name="categorie"
                          value={contactFormData.categorie}
                          onChange={handleAddressChange}
                        />
                      </div>
                    </div>
                    <div className="contact_textfield">
                      <label>Pays</label>
                      <select
                        name="pays"
                        value={contactFormData.pays}
                        onChange={handleAddressChange}
                      >
                        <option value="">Pays</option>
                        <option selected value="country1">
                          Suisse
                        </option>
                        <option value="country2">Tunisie</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact_textfield">
                    <label>
                      Adresse <span>*</span>
                    </label>
                    <textarea
                      name="address"
                      value={contactFormData.address}
                      onChange={handleAddressChange}
                      rows={5}
                    />
                  </div>
                </div>
                <div
                  className="contact_textfield_row"
                  style={{ padding: "4% 0" }}
                >
                  <div className="contact_textfield">
                    <label>
                      <input
                        type="checkbox"
                        name="type_contact"
                        value="Entreprise"
                        checked={contactFormData.type_contact === "Entreprise"}
                        onChange={handleAddressChange}
                      />
                      Adresse de facturation
                    </label>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px" }}>
                  <button className="submit">Enregistrer l'adresse</button>
                  <button className="reset">Annuler</button>
                </div>
              </form>
            </div>
          </div>
      </div>
        )}
      {isCBancaireFormOpen && (
         <div className="contact_form_wrap">
        <div className="contact_form">
            <div className="contact_form_content">
              <div className="contact_title_row">
                <h2>Ajouter un compte bancaire</h2>
                <AiOutlineClose
                  color="#0B2840"
                  size={30}
                  onClick={closeCBancaireForm}
                />{" "}
              </div>
              <div className="divider"></div>

              <form onSubmit={handleCBancaireSubmit}>
                <div className="contact_textfield_row">
                  {" "}
                  <div className="contact_textfield">
                    <label>
                      Désignation interne <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="entreprise"
                      value={CBancaireFormData.entreprise}
                      onChange={handleCBancaireChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>
                      Monnaie <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="entreprise"
                      value={CBancaireFormData.entreprise}
                      onChange={handleCBancaireChange}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>
                      Adresse <span>*</span>
                    </label>
                    <textarea
                      name="address"
                      value={CBancaireFormData.address}
                      onChange={handleCBancaireChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>IBAN</label>
                    <input
                      type="text"
                      name="entreprise"
                      value={CBancaireFormData.entreprise}
                      onChange={handleCBancaireChange}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        alignItems: "flex-start",
                      }}
                    >
                      <div className="contact_textfield">
                        <label>
                          NPA <span>*</span>
                        </label>
                        <input
                          className="npa"
                          type="number"
                          name="npa"
                          value={CBancaireFormData.npa}
                          onChange={handleCBancaireChange}
                        />
                      </div>
                      <div className="contact_textfield">
                        <label>
                          Localité <span>*</span>
                        </label>
                        <input
                          className="npa"
                          type="text"
                          name="categorie"
                          value={CBancaireFormData.categorie}
                          onChange={handleCBancaireChange}
                        />
                      </div>
                    </div>
                    <div className="contact_textfield">
                      <label>Titulaire du compte</label>
                      <input
                        type="text"
                        name="entreprise"
                        value={CBancaireFormData.entreprise}
                        onChange={handleCBancaireChange}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      alignItems: "flex-start",
                    }}
                  >
                    <div className="contact_textfield">
                      <label>Numéro de compte</label>
                      <input
                        type="number"
                        name="entreprise"
                        value={CBancaireFormData.entreprise}
                        onChange={handleCBancaireChange}
                      />
                    </div>
                    <div className="contact_textfield">
                      <label>Code BIC / SWIFT</label>
                      <input
                        type="number"
                        name="entreprise"
                        value={CBancaireFormData.entreprise}
                        onChange={handleCBancaireChange}
                      />
                    </div>
                    <div className="contact_textfield">
                      <label>Numéro CB</label>
                      <input
                        type="number"
                        name="entreprise"
                        value={CBancaireFormData.entreprise}
                        onChange={handleCBancaireChange}
                      />
                    </div>
                    <div className="contact_textfield">
                      <label>Remarque </label>
                      <input
                        type="text"
                        name="entreprise"
                        value={CBancaireFormData.entreprise}
                        onChange={handleCBancaireChange}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px" }}>
                  <button className="submit">
                    Enregistrer le compte bancaire
                  </button>
                  <button className="reset">Annuler</button>
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
const TextLine = ({ text1, text2 }) => {
  return (
    <div className="show_section_text">
      <h6>{text1}</h6>
      <p>{text2}</p>
    </div>
  );
};
