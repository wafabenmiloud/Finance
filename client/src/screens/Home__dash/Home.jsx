import React, { useState,useContext } from "react";
import "./Home.css";
import img from "../../assets/calendar.svg";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import Navbar from "../../components/navbar_dash/NavbarDash";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../../components/footer_dash/FooterDash";
import { Link } from "react-router-dom";
import  AuthContext  from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import axios  from "axios";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const option = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "",
      font: {
        size: 14,
        weight: "400",
      },
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      mode: "point",
      intersect: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value, index, values) {
          return value + "k"; // Add 'k' to the tick value
        },
        stepSize: 2,
        max: 5,
      },
    },
  },
};
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Dépenses",
      data: [2.6, 0.7, 4.2, 2.2, 2.5, 4.2, 0.6, 3.2, 2.8, 6, 2.2, 6],
      backgroundColor: "#25A7FF",
    },
    {
      label: "Recette",
      data: [0.6, 1.5, 1.1, 1.1, 1.5, 0.4, 1, 1.3, 1.1, 1.5, 1.5, 1.4],
      backgroundColor: "#00F8BC",
    },
  ],
};
export default function Home() {
  const { loggedIn } = useContext(AuthContext);
  const { getLoggedIn } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  function Avatar(props) {
    const name = props.name || "";
    const initials = name
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
  
    return (
      <div
        style={{
          display: "inline-block",
          width: props.size || 50,
          height: props.size || 50,
          borderRadius: "50%",
          backgroundColor: props.color || "#ccc",
          textAlign: "center",
          fontSize: 15,
          color: "#fff",
          fontWeight: "bold",
          lineHeight: props.size + "px",
          marginLeft: "2rem",
        }}
      >
        {initials}
      </div>
    );
  }
  async function logout() {
    await axios.get("/logout");

    await getLoggedIn();
    navigate("/");

    if (window.location.pathname === "/") {
      window.location.reload();
    }
  }
  /*contact form */
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

  const [isProductFormOpen, setIsProductFormOpen] = useState(false);

  const openProductForm = () => {
    setIsProductFormOpen(true);
  };

  const closeProductForm = () => {
    setIsProductFormOpen(false);
  };
  const [productFormData, setProductFormData] = useState({
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

  const handleProductChange = (event) => {
    const { name, value } = event.target;
    setProductFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProductSubmit = (event) => {
    event.preventDefault();
    console.log(productFormData);
  };

  const [isFactureFormOpen, setIsFactureFormOpen] = useState(false);

  const openFactureForm = () => {
    setIsFactureFormOpen(true);
  };

  const closeFactureForm = () => {
    setIsFactureFormOpen(false);
  };
  const [isOfferFormOpen, setIsOfferFormOpen] = useState(false);

  const openOfferForm = () => {
    setIsOfferFormOpen(true);
  };

  const closeOfferForm = () => {
    setIsOfferFormOpen(false);
  };
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

  const openProjectForm = () => {
    setIsProjectFormOpen(true);
  };

  const closeProjectForm = () => {
    setIsProjectFormOpen(false);
  };
  const initialSections = {
    data: true,
    status: false,
    type: false,
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

  const [isTimeFormOpen, setIsTimeFormOpen] = useState(false);

  const openTimeForm = () => {
    setIsTimeFormOpen(true);
  };

  const closeTimeForm = () => {
    setIsTimeFormOpen(false);
  };
  return (
    <div className="home_dash">
      <Navbar />
      <div className="dashboard">
    {/*<Avatar size={45} color="#999" name={userInfo.username} /> */}  
      <AiOutlineLogout className="logout" onClick={logout} />
<br />
        <h1>Tableau de bord</h1><br />
        <div className="dashboard_cards">
          <div className="col1_cards">
            <div className="card col1_card1">
              <h3>Premiers pas</h3>
              <div className="divider"></div>
              <ol>
                <li>
                  <button onClick={openContactForm}> Créer un contact </button>
                  Il peut s'agir d'un client ou d'un fournisseur
                </li>
                <li>
                  Vous pouvez aussi créer{" "}
                  <button onClick={openProductForm}>
                    {" "}
                    un nouveau produit{" "}
                  </button>{" "}
                  ou un service.
                </li>
                <li>
                  Etablir <button onClick={openOfferForm}> une offre</button> ou{" "}
                  <button onClick={openFactureForm}> une facture</button>
                </li>
                <li>
                  <button onClick={openProjectForm}> Créer un projet</button>
                </li>
                <li>
                  <button onClick={openTimeForm}>
                    {" "}
                    Nouvelle saisie de temps
                  </button>
                </li>
              </ol>
            </div>
            <div className="card col1_card2">
              <h3>Paramètres rapides</h3>
              <div className="divider"></div>
              <Link to="/settings">Profil de l'entreprise</Link>
              <br /> <Link to="/miseenpage">Mise en page des documents</Link>
              <br />
              <Link to="/dataimport">Importation de données</Link>
            </div>
            <div className="card col1_card3">
              <h3>Besoin d'aide?</h3>
              <div className="divider"></div>

              <p>support@Faji.com</p>
              <p>Participer à une présentation en direct (webinaire)</p>
              <p>Télécharger TeamViewer</p>
            </div>
          </div>
          <div className="col2_cards">
            <div className="card col2_card1">
              <h3>Trésorerie dépenses et encaissements</h3>
              <div className="divider"></div>
              <div className="col2_card1_row">
                <img src={img} alt="img" />
                <p>01.01.2023 - 31. 12.2023</p>
              </div>
              <Bar options={option} data={data} />
              <br />
              <div className="col2_card1_row2">
                <p>TOTAL RECETTES</p>
                <p>TOTAL DEPENSES</p>
              </div>
              <div className="col2_card1_row2">
                <p>CHF 38'380.00</p>
                <p>CHF 14'400.00</p>
              </div>
            </div>
            <div className="card col2_card2">
              <h3>Factures fournisseurs en suspens (créanciers)</h3>
              <div className="divider"></div>
              <p>Totaldes factures sortantes non payées: CHF 3'506.00</p>
              <div className="blue_dark">
                <div className="blue_light"></div>
              </div>
              <div className="divider"></div>
              <div className="col2_card1_row2">
                <h6>TOTAL RECETTES</h6>
                <h6>TOTAL DEPENSES</h6>
              </div>
              <div className="col2_card1_row2">
                <h6>CHF 38'380.00</h6>
                <h6>CHF 14'400.00</h6>
              </div>
            </div>
            <div className="card col2_card3">
              <h3>Factures en suspens (débiteurs)</h3>
              <div className="divider"></div>
              <p>Total des factures sortantes non payées: CHF 15'324.00</p>
              <div className="blue_dark">
                <div className="blue_light"></div>
              </div>
              <div className="divider"></div>
              <div className="col2_card1_row2">
                <h6>TOTAL RECETTES</h6>
                <h6>TOTAL DEPENSES</h6>
              </div>
              <div className="col2_card1_row2">
                <h6>CHF 38'380.00</h6>
                <h6>CHF 14'400.00</h6>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div id="home">
        {" "}
        {isContactFormOpen && (
          <div className="contact_form_wrap">
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
                        <label>
                          N° du contact <span>*</span>
                        </label>
                        <input
                          type="number"
                          name="num_contact"
                          value={contactFormData.num_contact}
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
                        <label>
                          Entreprise <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="entreprise"
                          value={contactFormData.entreprise}
                          onChange={handleContactChange}
                        />
                      </div>
                      <div className="contact_textfield">
                        <label>Complément</label>
                        <input
                          type="text"
                          name="complement"
                          value={contactFormData.complement}
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
                      <div className="contact_textfield">
                        <label>Téléphone</label>
                        <input
                          type="number"
                          name="phone1"
                          value={contactFormData.phone1}
                          onChange={handleContactChange}
                        />
                      </div>
                    </div>
                    <div className="contact_textfield_row">
                      <div className="contact_textfield">
                        <label>E-mail 2</label>
                        <input
                          type="email"
                          name="email2"
                          value={contactFormData.email2}
                          onChange={handleContactChange}
                        />
                      </div>
                      <div className="contact_textfield">
                        <label>Mobile</label>
                        <input
                          type="number"
                          name="phone2"
                          value={contactFormData.phone2}
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
                          rows={5}
                        />
                      </div>
                      <div className="contact_textfield">
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
                          <label>Localité</label>
                          <input
                            type="number"
                            name="localite"
                            value={contactFormData.localite}
                            onChange={handleContactChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="contact_textfield_row">
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

                      <div className="contact_textfield">
                        <label>Catégorie</label>
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
                        <label>Langue</label>
                        <select
                          name="langue"
                          value={contactFormData.langue}
                          onChange={handleContactChange}
                        >
                          <option value="">Langue</option>
                          <option selected value="country1">
                            Suisse
                          </option>
                          <option value="country2">Tunisie</option>
                        </select>
                      </div>
                      <div className="contact_textfield">
                        <label>Secteur</label>
                        <input
                          placeholder="Secteur d'activité"
                          type="text"
                          name="secteur"
                          value={contactFormData.secteur}
                          onChange={handleContactChange}
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
          </div>
        )}
        {isProductFormOpen && (
          <div className="product_form_wrap">
            <div className="product_form">
              <div className="product_form_content">
                <div className="contact_title_row">
                  <h2>Nouveau Produit</h2>
                  <AiOutlineClose
                    color="#0B2840"
                    size={30}
                    onClick={closeProductForm}
                  />{" "}
                </div>
                <div className="divider"></div>

                <form onSubmit={handleProductSubmit}>
                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>Type de produit</label>
                      <input
                        type="text"
                        name="num_contact"
                        value={productFormData.type_prod}
                        onChange={handleProductChange}
                      />
                    </div>
                    <div className="contact_textfield">
                      <label>Code produit</label>
                      <input
                        type="number"
                        name="complement"
                        value={productFormData.code_prod}
                        onChange={handleProductChange}
                      />
                    </div>
                  </div>
                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>
                        Désignation produit <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="entreprise"
                        value={productFormData.entreprise}
                        onChange={handleProductChange}
                      />
                    </div>
                    <div className="contact_textfield">
                      <div className="contact_textfield_row2">
                        <label>
                          <input
                            type="checkbox"
                            name="type_contact"
                            value=""
                            checked={productFormData.type_contact === ""}
                            onChange={handleProductChange}
                          />
                          Est un produit avec stock
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>Description produit</label>
                      <textarea
                        className="textarea"
                        name="address"
                        value={productFormData.address}
                        onChange={handleProductChange}
                        rows={5}
                      />
                    </div>
                  </div>
                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>Prix d'achat</label>
                      <input
                        type="number"
                        name="email1"
                        value={productFormData.email1}
                        onChange={handleProductChange}
                      />
                    </div>
                    <div className="contact_textfield">
                      <label>Prix de vente</label>
                      <input
                        type="number"
                        name="phone1"
                        value={productFormData.phone1}
                        onChange={handleProductChange}
                      />
                    </div>
                  </div>
                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>Monnaie</label>
                      <select
                        name="pays"
                        value={contactFormData.pays}
                        onChange={handleContactChange}
                      >
                        <option value=""></option>
                        <option selected value="country1">
                          CHF
                        </option>
                      </select>
                    </div>
                    <div className="contact_textfield">
                      <label>Unité</label>
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
                      <label>TVA chiffre d'affaires</label>
                      <select
                        name="pays"
                        value={contactFormData.pays}
                        onChange={handleContactChange}
                      >
                        <option value=""></option>
                        <option selected value="country1">
                          CEX - Exportation/Exonéré 0.00%
                        </option>
                      </select>
                    </div>
                    <div className="contact_textfield">
                      <label>TVA impôt préalable </label>
                      <select
                        name="pays"
                        value={contactFormData.pays}
                        onChange={handleContactChange}
                      >
                        <option value=""></option>
                        <option selected value="country1">
                          DOUAM - Entrée mat./ser. 100.00%
                        </option>
                      </select>
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
        {isFactureFormOpen && (
          <div className="facture_form_wrap">
            <div className="facture_form">
              <div className="facture_form_content">
                <div className="contact_title_row">
                  <h2>Nouvelle facture</h2>
                  <AiOutlineClose
                    color="#0B2840"
                    size={30}
                    onClick={closeFactureForm}
                  />{" "}
                </div>
                <div className="divider"></div>
                <form onSubmit={handleContactSubmit}>
                  <div className="contact_textfield">
                    <label>
                      Contact <span>*</span>
                    </label>
                    <input
                      placeholder="Veuillez saisir un terme pour la recherche "
                      type="number"
                      name="num_contact"
                      value={contactFormData.num_contact}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>Personne de contact</label>
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
                    <label>Projet</label>
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
                      type="number"
                      name="localite"
                      value={contactFormData.localite}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>
                      Date <span>*</span>
                    </label>
                    <input
                      className="npa"
                      type="number"
                      name="localite"
                      value={contactFormData.localite}
                      onChange={handleContactChange}
                    />
                  </div>

                  <div>
                    <button className="submit">
                      Continuer <BsArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {isOfferFormOpen && (
          <div className="offer_form_wrap">
            <div className="offer_form">
              <div className="offer_form_content">
                <div className="contact_title_row">
                  <h2>Nouvelle offre</h2>
                  <AiOutlineClose
                    color="#0B2840"
                    size={30}
                    onClick={closeOfferForm}
                  />{" "}
                </div>
                <div className="divider"></div>
                <form onSubmit={handleContactSubmit}>
                  <div className="contact_textfield">
                    <label>
                      Contact <span>*</span>
                    </label>
                    <input
                      placeholder="Veuillez saisir un terme pour la recherche "
                      type="number"
                      name="num_contact"
                      value={contactFormData.num_contact}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>Personne de contact</label>
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
                    <label>Projet</label>
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
                      type="number"
                      name="localite"
                      value={contactFormData.localite}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="contact_textfield">
                    <label>
                      Date <span>*</span>
                    </label>
                    <input
                      className="npa"
                      type="number"
                      name="localite"
                      value={contactFormData.localite}
                      onChange={handleContactChange}
                    />
                  </div>

                  <div>
                    <button className="submit">
                      Continuer <BsArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {isProjectFormOpen && (
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
                    onClick={() => toggleSection("data")}
                    className={sections.data ? "buttonVisible" : ""}
                  >
                    Données du projet
                  </button>
                  <button
                    onClick={() => toggleSection("status")}
                    className={sections.status ? "buttonVisible" : ""}
                  >
                    Statut du projet
                  </button>
                  <button
                    onClick={() => toggleSection("type")}
                    className={sections.type ? "buttonVisible" : ""}
                  >
                    Type de projet
                  </button>
                </div>
                {Object.keys(sections).map((section) => {
                  if (sections[section]) {
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
      </div>
      <Footer />
    </div>
  );
}
