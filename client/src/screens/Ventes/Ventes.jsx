import React, { useState } from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import { RiArrowDownSFill } from "react-icons/ri";
import "./Ventes.css";
import { AiOutlineSearch } from "react-icons/ai";
import img from "../../assets/calendar.svg";
import { Bar, Pie } from "react-chartjs-2";
import Footer from "../../components/footer_dash/FooterDash";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  ArcElement,
} from "chart.js";

import img2 from "../../assets/sear.svg";
import Monnaie from "../../assets/monnaie.svg";
import Person from "../../assets/pers.svg";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const option = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
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
          return value + "k";
        },
        stepSize: 50,
        max: 150,
      },
    },
  },
};
const data = {
  labels: [
    "Jan 2023",
    "Feb 2023",
    "Mar 2023",
    "Apr 2023",
    "May 2023",
    "Jun 2023",
    "Jul 2023",
    "Aug 2023",
    "Sep 2023",
    "Oct 2023",
    "Nov 2023",
    "Dec 2023",
  ],
  datasets: [
    {
      label: "Dépenses",
      data: [49, 80, 45, 40, 25, 45, 55, 100, 50, 60, 105, 80],
      backgroundColor: "#00F8F7",
    },
  ],
};
const option1 = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      mode: "point",
      intersect: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        callback: function (value, index, values) {
          return value + "k";
        },
        stepSize: 1,
        max: 10,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};
const data1 = {
  labels: ["", "", "", ""],
  datasets: [
    {
      label: "",
      data: [9.2, 2.1, 1.2, 3.4],
      backgroundColor: ["#25A7FF", "#00F8F7", "#0B2840", "#00F8BC"],
    },
  ],
};
const pieChartData = {
  labels: [
    "Muster 1: CHF 4'600.00 A",
    "Muster 2: CHF 2'300.00",
    "Muster 3: CHF 6'900.00",
    "Muster 4: CHF 6'900.00",
    "Muster 5: CHF 9'200.00",
  ],
  datasets: [
    {
      data: [60, 90, 90, 30, 90],
      backgroundColor: ["#25A7FF", "#0B2840", "#00F8BC", "#FF0000", "#00F8F7"],
      hoverBackgroundColor: [
        "#25A7FF",
        "#0B2840",
        "#00F8BC",
        "#FF0000",
        "#00F8F7",
      ],
    },
  ],
};
const pieChartOptions = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 14,
        },
        color: "black",
        boxWidth: 20,
      },
    },
  },
};

export default function Ventes() {
  const initialSections = {
    apercu: true,
    tous: false,
    brouillon: false,
    suspens: false,
    partiel: false,
    retard: false,
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
  const [isFactureFormOpen, setIsFactureFormOpen] = useState(false);

  const openFactureForm = () => {
    setIsFactureFormOpen(true);
  };

  const closeFactureForm = () => {
    setIsFactureFormOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="ventes">
        <div className="ventes_title">
          <h1>Factures</h1>
          <button onClick={openFactureForm} className="ventes_title_btn">
            Nouvelle Facture
          </button>
        </div>

        <section id="ventes_section1">
          <div className="ventes_head">
            <div className="ventes_buttons">
              <button
                onClick={() => toggleSection("apercu")}
                className={sections.apercu ? "ventes_buttonVisible" : ""}
              >
                Aperçu
              </button>
              <button
                onClick={() => toggleSection("tous")}
                className={sections.tous ? "ventes_buttonVisible" : ""}
              >
                Tous
              </button>
              <button
                onClick={() => toggleSection("brouillon")}
                className={sections.brouillon ? "ventes_buttonVisible" : ""}
              >
                Brouillons
              </button>
              <button
                onClick={() => toggleSection("suspens")}
                className={sections.suspens ? "ventes_buttonVisible" : ""}
              >
                En suspens
              </button>
              <button
                onClick={() => toggleSection("partiel")}
                className={sections.partiel ? "ventes_buttonVisible" : ""}
              >
                Partiel
              </button>
              <button
                onClick={() => toggleSection("retard")}
                className={sections.retard ? "ventes_buttonVisible" : ""}
              >
                En retard
              </button>
              <button
                onClick={() => toggleSection("filtre")}
                className={sections.filtre ? "ventes_buttonVisible" : ""}
              >
                Filtre personnalisé
                <RiArrowDownSFill />
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
                  {section === "apercu" && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        width: "100%",
                      }}
                    >
                      {" "}
                      <div className="ventes_wrap">
                        <div className="ventes_section">
                          <div>
                            <h3>Total par statut</h3>
                            <div className="divider"></div>
                            <div
                              style={{
                                width: "80%",
                                margin: "auto",
                              }}
                            >
                              <Bar
                                data={data1}
                                options={{
                                  ...option1,
                                  indexAxis: "y",
                                }}
                              />
                              <br />
                              <div
                                className="ventes_row"
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  gap: "20px",
                                  width: "100%",
                                }}
                              >
                                <div>
                                  <p>BROUILLON</p>
                                  <p>CHF 9'832.00</p>
                                </div>
                                <div>
                                  <p>En suspens</p>
                                  <p>CHF 2'300.00</p>
                                </div>
                                <div>
                                  <p>Partiel</p>
                                  <p>CHF 1'200.00</p>
                                </div>
                                <div>
                                  <p>En retard</p>
                                  <p>CHF 3'501.00</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ventes_section">
                          <div>
                            <h3>Clients les plus importants</h3>
                            <div className="divider"></div>
                            <div
                              style={{
                                width: "60%",
                                margin: "auto",
                              }}
                            >
                              <Pie
                                data={pieChartData}
                                options={pieChartOptions}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="ventes_section">
                        <div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <h3>Chiffre d'affaires</h3>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "10px",
                                width: "40%",
                              }}
                            >
                              <img src={img} alt="img" />
                              <p>01.01.2023 - 31. 12.2023</p>
                            </div>
                          </div>

                          <div className="divider"></div>
                          <div
                            style={{
                              width: "100%",
                              margin: "auto",
                            }}
                          >
                            <Bar options={option} data={data} />
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          padding: "2% 0",
                          width: "100%",
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
                          <img src={img2} style={{ width: "100%" }} alt="img"/>
                        </div>
                        <div
                          style={{
                            width: "40%",
                            display: "flex",
                            textAlign: "start",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <p className="achat_comm_p">
                            Vous n'avez pas encore établi de facture.
                            <button
                              onClick={openFactureForm}
                              className="achat_comm_p"
                              style={{
                                backgroundColor: "none",
                                textDecoration: "underline",
                                textAlign: "start",
                              }}
                            >
                              Saisissez une facture ou générez-en une à partir
                              d’une offre ou d’une commande client.
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
                  {section === "brouillon" && (
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
                          <img src={img2} style={{ width: "100%" }} alt="img"/>
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
                  {section === "suspens" && (
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
                          <img src={img2} style={{ width: "100%" }} alt="img"/>
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
                  {section === "partiel" && (
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
                          <img src={img2} style={{ width: "100%" }} alt="img"/>
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
                  {section === "retard" && (
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
                          <img src={img2} style={{ width: "100%" }} alt="img"/>
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
                          <img src={img2} style={{ width: "100%" }} alt="img"/>
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
      <Footer />
    </>
  );
}
