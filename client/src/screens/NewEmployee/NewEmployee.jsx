import React, { useState } from "react";
import "./NewEmployee.css";
import Navbar2 from "../../components/navbar2_dash/Navbar2Dash";
import img3 from "../../assets/wr.svg";
import Footer from "../../components/footer_dash/FooterDash";
import  {RiArrowDownSFill} from "react-icons/ri"
export default function NewEmployee() {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };

  function Enfant() {
    const handleContactSubmit = (event) => {
      event.preventDefault();
    };
    const [divCount, setDivCount] = useState(1);

    const addDiv = () => {
      setDivCount(divCount + 1);
    };

    const divs = [];
    for (let i = 0; i < divCount; i++) {
      divs.push(
        <>
          <div className="newemployee_section" key={i}>
            <form onSubmit={handleContactSubmit} action="">
              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Prénom</label>
                  <input type="text" value="" />
                </div>
                <div className="newemployee_textfield">
                  <label htmlFor="">Nom de famille</label>
                  <input type="text" value="" />
                </div>
              </div>
              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Date de naissance</label>
                  <input type="text" value="" className="image_placeholder"/>
                </div>
                <div className="newemployee_textfield">
                  <label htmlFor="">Genre</label>
                  <input type="text" value="" />
                </div>
              </div>
              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Numéro AVS</label>
                  <input type="text" value="" />
                </div>
                <div className="newemployee_textfield">
                  <label htmlFor="">Type d’allocation</label>
                  <input type="text" value="" />
                </div>
              </div>

              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Montant des allocations (CHF)</label>
                  <input type="text" value="" />
                </div>
              </div>
              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Personne élevant seule ses enfants</label>
                  <input type="checkbox" value="" />
                </div>
              </div>
              <div className="newemployee_row_buttons">
                <button className="reset">Supprimer</button>
                <button className="submit" onClick={addDiv}>
                  Ajouter
                </button>
              </div>
            </form>
          </div>
          <br />
          <br />
        </>
      );
    }

    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        {divs}
        <br />
        <br />
        <div className="new_emp_wrapper">
          <button className="new_emp">Enregistrement et retour</button>
        </div>
      </div>
    );
  }
  function Absence() {
    const handleContactSubmit = (event) => {
      event.preventDefault();
    };
    const [divCount, setDivCount] = useState(1);

    const addDiv = () => {
      setDivCount(divCount + 1);
    };

    const divs = [];
    for (let i = 0; i < divCount; i++) {
      divs.push(
        <>
          <div className="newemployee_section" key={i}>
            <form onSubmit={handleContactSubmit} action="">
              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Maladie du 29.08.2023</label>
                </div>
                <div className="newemployee_textfield">
                  <label htmlFor="">Raison</label>
                  <input type="text" value="" />
                </div>
              </div>
              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Date de début</label>
                  <input type="text" value="" class="image_placeholder"/>
                </div>
              </div>
              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Jusqu'au</label>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      {" "}
                      <input type="radio" name="" id="" />
                      <label htmlFor="">ouvert</label>
                    </div>
                    <div>
                      {" "}
                      <input type="radio" name="" id="" />
                      <label htmlFor="">Date de fin</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Date de fin</label>
                  <input type="text" value="" class="image_placeholder"/>
                </div>
              </div>
              <div className="newemployee_row">
                <div className="newemployee_textfield">
                  <label htmlFor="">Maintien du salaire</label>
                  <input type="text" value="" placeholder="100%" />
                </div>
                <div className="newemployee_textfield">
                  <label htmlFor="">Incapacité de travail</label>
                  <input type="text" value="" placeholder="100%" />
                </div>
              </div>

              <div className="newemployee_row_buttons">
                <button className="reset">Supprimer</button>
                <button className="submit" onClick={addDiv}>
                  Ajouter
                </button>
              </div>
            </form>
          </div>
          <br />
          <br />
        </>
      );
    }

    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        {divs}
        <br />
        <br />
        <div className="new_emp_wrapper">
          <button className="new_emp" onClick={toggleShow}>
            Enregistrement et retour
          </button>
        </div>
      </div>
    );
  }
  const handleContactSubmit = (event) => {
    event.preventDefault();
  };
  const initialSections = {
    data: true,
    enfants: false,
    emploi: false,
    datas: false,
    address: false,
    cordonnees: false,
    assurance: false,
    absence: false,
    datac: false,
    impot: false,
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
      <br />
      <br />
      <h2 className="newemployee_h2">Nouveau employé</h2>
      <div className="newemployee_wrapper">
        <div className="newemployee_buttons">
          <button
            onClick={() => toggleSection("data")}
            className={sections.data ? "employee_buttonVisible" : ""}
          >
            Données personnelles
          </button>
          <button
            onClick={() => toggleSection("enfants")}
            className={sections.enfants ? "employee_buttonVisible" : ""}
          >
            Enfants
          </button>
          <button
            onClick={() => toggleSection("emploi")}
            className={sections.emploi ? "employee_buttonVisible" : ""}
          >
            Emploi
          </button>
          <button
            onClick={() => toggleSection("datas")}
            className={sections.datas ? "employee_buttonVisible" : ""}
          >
            Données salariales de base
          </button>
          <button
            onClick={() => toggleSection("address")}
            className={sections.address ? "employee_buttonVisible" : ""}
          >
            Adresse
          </button>
          <button
            onClick={() => toggleSection("cordonnees")}
            className={sections.cordonnees ? "employee_buttonVisible" : ""}
          >
            Coordonnées bancaires
          </button>
          <button
            onClick={() => toggleSection("assurance")}
            className={sections.assurance ? "employee_buttonVisible" : ""}
          >
            Assurance
          </button>
          <button
            onClick={() => toggleSection("absence")}
            className={sections.absence ? "employee_buttonVisible" : ""}
          >
            Absence
          </button>
          <button
            onClick={() => toggleSection("datac")}
            className={sections.datac ? "employee_buttonVisible" : ""}
          >
            Données certificat de salaire
          </button>
          <button
            onClick={() => toggleSection("impot")}
            className={sections.impot ? "employee_buttonVisible" : ""}
          >
            Impôt à la source
          </button>
        </div>

        {Object.keys(sections).map((section) => {
          if (sections[section]) {
            return (
              <>
                {section === "data" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <div className="newemployee_section">
                      <form onSubmit={handleContactSubmit} action="">
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">Nom de famille</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Prénom</label>
                            <input type="text" value="" />
                          </div>
                        </div>
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">Genre</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Date de naissance</label>
                            <input type="text" value="" class="image_placeholder"/>
                          </div>
                        </div>
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">Nationalité</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Catégorie de séjour</label>
                            <input type="text" value="" />
                          </div>
                        </div>
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">Langue</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Etat civil</label>
                            <input type="text" value="" />
                          </div>
                        </div>
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">Numéro AVS</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">
                              Etat civil valide à partir du
                            </label>
                            <input type="text" value="" />
                          </div>
                        </div>

                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">E-mail</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Numéro de téléphone</label>
                            <input type="text" value="" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <br />
                    <br />
                    <div className="new_emp_wrapper">
                      <button className="new_emp">
                        Continuer
                      </button>
                    </div>
                  </div>
                )}
                {section === "enfants" && <Enfant />}
                {section === "emploi" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <div className="newemployee_section">
                      <form onSubmit={handleContactSubmit} action="">
                        <fieldset>
                          <legend>Période d'occupation de l’emploi</legend>
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <label htmlFor="">Entrée</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Sortie</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>Relation d'emploi</legend>
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <label htmlFor="">Contrat de travail</label>
                              <input type="text" value="" />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                              className="newemployee_textfield"
                            >
                              <label htmlFor="">Temps de travail</label>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <div>
                                  {" "}
                                  <input type="radio" name="" id="" />
                                  <label htmlFor="">Régulièrement</label>
                                </div>
                                <div>
                                  {" "}
                                  <input type="radio" name="" id="" />
                                  <label htmlFor="">Irrégulièrement</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <label htmlFor="">
                                Degré d’occupation / Volume de travail
                              </label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">
                                Temps de travail effectif
                              </label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Salaire mensuel
                          </legend>
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Salaire annuel</label>
                              <input type="text" name="" id="" />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Salaire horaire
                          </legend>
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <input type="text" value="" />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div className="newemployee_textfield">
                                {" "}
                                <label htmlFor="">
                                  Supplément pour vacances
                                </label>
                                <input type="text" name="" id="" />
                              </div>
                              <br />
                              <div className="newemployee_textfield">
                                {" "}
                                <label htmlFor="">
                                  Majoration pour travail de jours fériés
                                </label>
                                <input type="text" name="" id="" />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            13e mois
                          </legend>
                          <div className="newemployee_row">
                            <div className="treze_eme_col">
                              <label htmlFor="">Janv</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Fevr</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Mars</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Avril</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Mai</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Juin</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Juil</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Août </label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Sept</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Oct</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Nov</label>
                              <input type="text" name="" id="" />
                            </div>
                            <div className="treze_eme_col">
                              <label htmlFor="">Dec</label>
                              <input type="text" name="" id="" />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <label htmlFor="">Etablissement stable</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Matricule du employé</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <label htmlFor="">Jours de congé effectifs</label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">
                                Jours de congé pour un taux d'occupation de 100%
                              </label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" /> Reprendre
                            les horaires de travail de l'établissement
                          </legend>
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <label htmlFor="">Heures par semaine</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Leçons par semaine</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" /> Le travail à
                            court terme
                          </legend>
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <label htmlFor="">
                                Pourcentage de chômage partiel par rapport à la
                                charge de travail précédente
                              </label>
                              <input type="text" value="" />
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <br />
                    <br />
                    <div className="new_emp_wrapper">
                      <button className="new_emp">
                        Continuer
                      </button>
                    </div>
                  </div>
                )}
                {section === "datas" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <div className="newemployee_section">
                      <p style={{color:"#7b7b7b", fontSize:"8px", paddingLeft:"5%"}}>Spécifiez ici les types de salaires et les valeursautomatiquement insérés dans chaque mois.</p><br />
                      <div className="newemployee_row_buttons2" style={{width:"90%"}}>
                        <button className="submit">Ajouter/supprimer type de salaire <RiArrowDownSFill/></button>
                      </div><br />
                      <fieldset>
                       <table className="datas_table">
                        <tbody>
                          <tr>
                            <td>Type de salaire</td>
                            <td></td>
                            <td></td>
                            <td>Description</td>
                          </tr>
                          <tr>
                            <td>1977</td>
                            <td>3e pilier a pris en charge par l’employeur</td>
                            <td>CHF</td>
                          </tr>
                          <tr>
                            <td>1212</td>
                            <td>Allocation spéciale</td>
                            <td>CHF</td>
                          </tr>
                          <tr>
                            <td>1955</td>
                            <td>Avantage appréciable en argent</td>
                            <td>CHF</td>
                          </tr>
                          <tr>
                            <td>5300</td>
                            <td>Commission paritaire</td>
                            <td>CHF</td>
                          </tr>
                          <tr>
                            <td>1218</td>
                            <td>Commission</td>
                            <td>CHF</td>
                          </tr>
                          <tr>
                            <td>1209</td>
                            <td>Bonus de l'année précédente</td>
                            <td>CHF</td>
                          </tr>
                          <tr>
                            <td>1210</td>
                            <td>Bonus</td>
                            <td>CHF</td>
                          </tr>
                          <tr>
                            <td>6070</td>
                            <td>Autres frais forfaitaires</td>
                            <td>CHF</td>
                          </tr>
                          <tr>
                            <td>1961</td>
                            <td>Actions réservées au collaborateur</td>
                            <td>CHF</td>
                          </tr>
                          <tr>
                            <td>1976</td>
                            <td>3e pilier b pris en charge par l’employeur</td>
                            <td>CHF</td>
                          </tr>
                        </tbody>
                       </table>
                      </fieldset>



                    </div>
                    <br />
                    <br />
                    <div className="new_emp_wrapper">
                      <button className="new_emp">
                        Continuer
                      </button>
                    </div>
                  </div>
                )}
                {section === "address" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <div className="newemployee_section">
                      <form onSubmit={handleContactSubmit} action="">
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">Ligne supplémentaire</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Rue et numéro</label>
                            <input type="text" value="" />
                          </div>
                        </div>
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">Boîte postale</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">
                              Région, province, État ou quartier
                            </label>
                            <input type="text" value="" />
                          </div>
                        </div>
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">NP</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Ville</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Canton</label>
                            <input type="text" value="" />
                          </div>
                        </div>
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">Numéro de la commune</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Pays</label>
                            <input type="text" value="" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <br />
                    <br />
                    <div className="new_emp_wrapper">
                      <button className="new_emp">
                        Continuer
                      </button>
                    </div>
                  </div>
                )}
                {section === "cordonnees" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <div className="newemployee_section">
                      <form onSubmit={handleContactSubmit} action="">
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">Nom de l'institut</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">IBAN</label>
                            <input type="text" value="" />
                          </div>
                        </div>
                        <div className="newemployee_row">
                          <div className="newemployee_textfield">
                            <label htmlFor="">BIC</label>
                            <input type="text" value="" />
                          </div>
                          <div className="newemployee_textfield">
                            <label htmlFor="">Groupe de versement</label>
                            <input type="text" value="" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <br />
                    <br />
                    <div className="new_emp_wrapper">
                      <button className="new_emp">
                        Continuer
                      </button>
                    </div>
                  </div>
                )}
                {section === "assurance" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <div className="newemployee_section">
                      <form onSubmit={handleContactSubmit} action="">
                        <fieldset>
                          <legend>Obligation de cotiser à l'AVS/AC</legend>
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <input type="checkbox" value="" />
                              <label htmlFor="">
                                Cas spécial (personne non soumise à l’AVS)
                              </label>
                            </div>
                          </div>
                        </fieldset>

                        <fieldset>
                          <legend>
                            Assurance-accidents non professionnels (AANP) et
                            professionnels (AAP)
                          </legend>
                          <div className="newemployee_row2">
                            <div className="newemployee_textfield">
                              {" "}
                              <label htmlFor="">Solution LAA</label>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                              className="newemployee_textfield"
                            >
                              <label htmlFor="">Assurance LAA</label>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label
                                  htmlFor=""
                                  style={{ color: "#7b7b7b", fontSize: "10px" }}
                                >
                                  Régulièrement
                                </label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="newemployee_row2">
                            <div className="newemployee_textfield">
                              {" "}
                              <label htmlFor="">Cotisations d'assurance</label>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                              className="newemployee_textfield"
                            >
                              <label htmlFor="">Accident professionnel</label>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label
                                  htmlFor=""
                                  style={{ color: "#7b7b7b", fontSize: "10px" }}
                                >
                                  pas de cotisations
                                </label>
                              </div>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label
                                  htmlFor=""
                                  style={{ color: "#7b7b7b", fontSize: "10px" }}
                                >
                                  Employeur
                                </label>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                              className="newemployee_textfield"
                            >
                              <label htmlFor="">
                                Accident non professionne
                              </label>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label
                                  htmlFor=""
                                  style={{ color: "#7b7b7b", fontSize: "10px" }}
                                >
                                  pas de cotisations
                                </label>
                              </div>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label
                                  htmlFor=""
                                  style={{ color: "#7b7b7b", fontSize: "10px" }}
                                >
                                  Employeur (100%)
                                </label>
                              </div>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label
                                  htmlFor=""
                                  style={{ color: "#7b7b7b", fontSize: "10px" }}
                                >
                                  Employé (50%/100%)
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>Prévoyance professionnelle (LPP)</legend>
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                              className="newemployee_textfield"
                            >
                              <label htmlFor="">Solution LPP</label>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label
                                  htmlFor=""
                                  style={{ color: "#7b7b7b", fontSize: "10px" }}
                                >
                                  Aucune assurance LPP
                                </label>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                              className="newemployee_textfield"
                            >
                              <label htmlFor="">Assurance LPP</label>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label
                                  htmlFor=""
                                  style={{ color: "#7b7b7b", fontSize: "10px" }}
                                >
                                  Solution LPP
                                </label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Cotisation entreprise</label>
                              <input type="text" value="" placeholder="CHF" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Cotisation employé</label>
                              <input type="text" value="" placeholder="CHF" />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            Caisse de compensation et assurances complémentaires
                            facultatives
                          </legend>
                          <div className="newemployee_row2">
                            <div className="newemployee_textfield">
                              {" "}
                              <label htmlFor="">Assurances LAAC</label>
                            </div>
                          </div>
                          <br />
                          <div className="newemployee_row2">
                            <div className="newemployee_textfield">
                              {" "}
                              <label htmlFor="">
                                Caisses d’allocations familiales (CAF)
                              </label>
                            </div>
                            <div className="newemployee_textfield">
                              {" "}
                              <input type="checkbox" name="" id="" />
                              <label
                                htmlFor=""
                                style={{ color: "#7b7b7b", fontSize: "10px" }}
                              >
                                Caisse de compensation
                              </label>
                            </div>
                          </div>
                          <br />
                          <div className="newemployee_row2">
                            <div className="newemployee_textfield">
                              {" "}
                              <label htmlFor="">Assurances IJM</label>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <br />
                    <br />
                    <div className="new_emp_wrapper">
                      <button className="new_emp">
                        Continuer
                      </button>
                    </div>
                  </div>
                )}
                {section === "absence" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {show ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        {" "}
                        <div className="newemployee_section">
                          <img src={img3} alt="img" />
                          <br />
                          <br />
                          <p
                            style={{
                              width: "30%",
                              margin: "auto",
                              color: "#7B7B7B",
                            }}
                          >
                            Il n'y a actuellement aucune entrée pour maladie ou
                            accident.Cliquez sur «Nouvelle entrée» pour créer un
                            incident.
                          </p>
                          <br />
                          <div className="newemployee_row_buttons2">
                            <button className="submit" onClick={toggleShow}>
                              Nouvelle entrée
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Absence />
                    )}
                  </div>
                )}
                {section === "datac" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <div className="newemployee_section">
                      <form onSubmit={handleContactSubmit} action="">
                        <fieldset>
                          <legend>Document à créer</legend>
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                              className="newemployee_textfield"
                            >
                              <div>
                                {" "}
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Certificat de salaire</label>
                              </div>
                              <div>
                                {" "}
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Attestation de rentes</label>
                              </div>
                            </div>

                            <div className="newemployee_textfield">
                              <input type="checkbox" value="" />
                              <label htmlFor="">
                                Décompte pour l'impôt à la source
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Reprendre les conditions de l’entreprise relatives
                            au transport gratuit
                          </legend>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                            className="newemployee_textfield"
                          >
                            <div>
                              {" "}
                              <input type="radio" name="" id="" />
                              <label htmlFor="">
                                Transport gratuit entre le domicile et le lieu
                                de travail
                              </label>
                            </div>
                            <div>
                              {" "}
                              <input type="radio" name="" id="" />
                              <label htmlFor="">Pas de transport gratuit</label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Reprendre les conditions de l’entreprise relatives
                            aux repas / chèques-repas
                          </legend>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                            className="newemployee_textfield"
                          >
                            <div>
                              {" "}
                              <input type="radio" name="" id="" />
                              <label htmlFor="">
                                Repas gratuits ou chèques-repas proposés
                              </label>
                            </div>
                            <div>
                              {" "}
                              <input type="radio" name="" id="" />
                              <label htmlFor="">
                                Pas de repas gratuits ni de chèques-repas
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Reprendre les conditions de l’entreprise relatives
                            au véhicule professionnel
                          </legend>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                            className="newemployee_textfield"
                          >
                            <div>
                              {" "}
                              <input type="radio" name="" id="" />
                              <label htmlFor="">
                                Pas de véhicule professionnel
                              </label>
                            </div>
                            <div>
                              {" "}
                              <input type="radio" name="" id="" />
                              <label htmlFor="">
                                La part privée des frais du véhicule
                                d’entreprise réglée par l'employé s’élève à 0,9%
                                par mois au minimum
                              </label>
                            </div>
                            <div>
                              {" "}
                              <input type="radio" name="" id="" />
                              <label htmlFor="">
                                A clarifier dans la procédure de taxation
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Reprendre les conditions de l’entreprise relatives
                            au règlement des remboursements de frais
                          </legend>
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                              className="newemployee_textfield"
                            >
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label htmlFor="">
                                  Règlement des remboursements de frais agréé
                                </label>
                              </div>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label htmlFor="">
                                  Frais effectifs selon ch. marg. 52
                                </label>
                              </div>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="radio" name="" id="" />
                                <label htmlFor="">
                                  Frais effectifs sur présentation de
                                  justificatifs
                                </label>
                              </div>
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Date</label>
                              <input
                                type="text"
                                value=""
                                style={{
                                  width: "100px",
                                }}class="image_placeholder"
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Canton</label>
                              <input
                                type="text"
                                value=""
                                style={{
                                  width: "100px",
                                }}
                              />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              {" "}
                              <input type="checkbox" name="" id="" />
                              <label htmlFor="">
                                Ruling pour les expatriés agréé
                              </label>
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Date</label>
                              <input
                                type="text"
                                value=""
                                style={{
                                  width: "100px",
                                }}class="image_placeholder"
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Canton</label>
                              <input
                                type="text"
                                value=""
                                style={{
                                  width: "100px",
                                }}
                              />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Reprendre les conditions de l’entreprise relatives à
                            la participation du employé
                          </legend>
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                              className="newemployee_textfield"
                            >
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Valeur vénale agréée</label>
                              </div>
                              <div className="newemployee_textfield">
                                {" "}
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Sans revenu imposable</label>
                              </div>
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Date</label>
                              <input
                                type="text"
                                value=""
                                style={{
                                  width: "100px",
                                }}class="image_placeholder"
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Canton</label>
                              <input
                                type="text"
                                value=""
                                style={{
                                  width: "100px",
                                }}
                              />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>Divers</legend>
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <input type="checkbox" value="" />{" "}
                              <label htmlFor="">
                                Cotisations LPP pour le rachat
                              </label>
                            </div>
                            <div className="newemployee_textfield">
                              <input type="text" value="" placeholder="CHF" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <input type="checkbox" value="" />{" "}
                              <label htmlFor="">
                                Frais de déménagement payés par employeur
                              </label>
                            </div>
                            <div className="newemployee_textfield">
                              <input type="text" value="" placeholder="CHF" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <input type="checkbox" value="" />{" "}
                              <label htmlFor="">
                                Allocations pour enfants absentesdu certificat
                                de salaire
                              </label>
                            </div>
                            <div className="newemployee_textfield">
                              <input type="text" value="" placeholder="CHF" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <input type="checkbox" value="" />{" "}
                              <label htmlFor="">
                                Droit au salaire après décès
                              </label>
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Prénom</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Nom de famille</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Address</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Ligne supplémentaire</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Rue et numéro</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Boîte postale</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">
                                Région, province, État ou quartier
                              </label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">NP</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Ville</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Canton</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Pays</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Reprendre les conditions de l’entreprise relatives
                            aux autres prestations salariales accessoires
                          </legend>

                          <div className="newemployee_row2">
                            <div className="newemployee_textfield">
                              <textarea
                                name=""
                                id=""
                                rows="5"
                                cols="150"
                              ></textarea>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Reprendre les règles de l’entreprise relatives au
                            texte complémentaire
                          </legend>

                          <div className="newemployee_row2">
                            <div className="newemployee_textfield">
                              <textarea
                                name=""
                                id=""
                                rows="5"
                                cols="150"
                              ></textarea>
                            </div>
                          </div>
                        </fieldset>

                        <fieldset>
                          <legend>
                            <input type="checkbox" name="" id="" />
                            Reprendre les règles de l’entreprise relatives au
                            texte complémentaire
                          </legend>
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <label htmlFor="">Prénom</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Nom de famille</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div className="newemployee_row">
                            <div className="newemployee_textfield">
                              <label htmlFor="">Numéro de téléphone</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <br />
                    <br />
                    <div className="new_emp_wrapper">
                      <button className="new_emp">
                        Continuer
                      </button>
                    </div>
                  </div>
                )}
                {section === "impot" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <div className="newemployee_section">
                      <form onSubmit={handleContactSubmit} action="">
                        <div
                          className="newemployee_textfield"
                          style={{
                            justifyContent: "flex-start",
                            width: "90%",
                            margin: "auto",
                          }}
                        >
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="">
                            l'employé est assujetti à l'impôt à la source
                          </label>
                        </div>

                        <fieldset>
                          <legend>Code</legend>
                          <div
                            className="newemployee_row2"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <input type="radio" value="" />
                              <label htmlFor="">Barème</label>
                            </div>
                            <div className="newemployee_textfield">
                              <input type="text" value="" placeholder="Ex :" />
                            </div>
                            <div className="newemployee_textfield">
                              <input type="checkbox" value="" />
                              <label htmlFor="">spécialement approuvé</label>
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row2"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <input type="radio" value="" />
                              <label htmlFor="">Prédéfini</label>
                            </div>
                            <div className="newemployee_textfield">
                              <input
                                type="text"
                                value=""
                                placeholder="Barème pour les personnes ..."
                              />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row2"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <input type="radio" value="" />
                              <label htmlFor="">Ouvert</label>
                            </div>
                            <div className="newemployee_textfield">
                              <input
                                type="text"
                                value=""
                                placeholder="Texte libre"
                              />
                            </div>
                          </div>
                        </fieldset>

                        <fieldset>
                          <legend>Données supplémentaires</legend>
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Confession</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Type de poste</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />

                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Concubinage</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Autres activités</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{
                              justifyContent: "flex-start",
                              width: "100%",
                              margin: "auto",
                              gap: "50px",
                            }}
                          >
                            <div className="newemployee_textfield">
                              <input type="checkbox" value="" />{" "}
                              <label htmlFor="">Rente</label>
                            </div>
                            <div className="newemployee_textfield">
                              <input type="checkbox" value="" />
                              <label htmlFor="">
                                Résidence à l'étranger (Résidence en Suisse)
                              </label>
                            </div>
                          </div>
                          <br />

                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  gap: "20px",
                                }}
                              >
                                <div className="newemployee_textfield">
                                  <label htmlFor="">Canton IS:</label>
                                </div>
                                <div className="newemployee_textfield">
                                  <input type="radio" name="" id="" />
                                  <label htmlFor="">Séjour hebdomadaire</label>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <div className="newemployee_textfield">
                                  <label htmlFor="">Commune IS:</label>
                                </div>
                                <div className="newemployee_textfield">
                                  <input type="radio" name="" id="" />
                                  <label htmlFor="">Séjour journalier</label>
                                </div>
                              </div>
                              <div></div>
                            </div>

                            <div className="newemployee_textfield">
                              <label htmlFor="">
                                Jours de travail en Suisse (par mois)
                              </label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />

                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">
                                Adresse de séjour hebdomadaire
                              </label>
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Rue et numéro</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">NP</label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Ville</label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Canton</label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Numéro de la commune</label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">
                                Données sur les frontaliers
                              </label>
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Lieu de naissance</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">
                                ID fiscal du pays d'origine
                              </label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Frontalier depuis</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                        </fieldset>

                        <fieldset>
                          <legend>Conjoint</legend>
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Prénom</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Nom de famille</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Date de naissance</label>
                              <input type="text" value="" class="image_placeholder"/>
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Numéro AVS</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row2"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">NP</label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Ville</label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Canton</label>
                              <input
                                type="text"
                                value=""
                                style={{ width: "100px" }}
                              />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Pays</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Frontalier depuis</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Type de poste</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row2"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">En activité depuis le</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">En activité jusqu’au</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Canton</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                          <br />
                          <div
                            className="newemployee_row"
                            style={{ width: "100%" }}
                          >
                            <div className="newemployee_textfield">
                              <label htmlFor="">Pays de résidence</label>
                              <input type="text" value="" />
                            </div>
                            <div className="newemployee_textfield">
                              <label htmlFor="">Canton de résidence</label>
                              <input type="text" value="" />
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <br />
                    <br />
                    <div className="new_emp_wrapper">
                      <button className="new_emp">
                        Enregistrer
                      </button>
                    </div>
                  </div>
                )}
              </>
            );
          }
          return null;
        })}
      </div>
      <Footer />
    </>
  );
}
