import React, { useState } from "react";
import "./Entreprise.css";
import Navbar2 from "../../components/navbar2_dash/Navbar2Dash";

import Footer from "../../components/footer_dash/FooterDash";
import { BsCheckLg } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import EntrepriseData from "./EntrepriseData";
import EntrepriseAssurance from "./EntrepriseAssurance";
export default function Entreprise() {
  const initialSections = {
    data: true,
    assurance: false,
    salaire: false,
    plan: false,
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
      <div className="entreprise_wrapper">
        <div className="show_buttons">
          <button
            onClick={() => toggleSection("data")}
            className={sections.data ? "show_buttonVisible" : ""}
          >
            Données de base
          </button>
          <button
            onClick={() => toggleSection("assurance")}
            className={sections.assurance ? "show_buttonVisible" : ""}
          >
            Assurances
          </button>
          <button
            onClick={() => toggleSection("salaire")}
            className={sections.salaire ? "show_buttonVisible" : ""}
          >
            Types de salaires
          </button>
          <button
            onClick={() => toggleSection("plan")}
            className={sections.plan ? "show_buttonVisible" : ""}
          >
            Plan comptable
          </button>
        </div>
        <div className="divider" style={{ width: "80%", margin: "1%" }}></div>

        {Object.keys(sections).map((section) => {
          if (sections[section]) {
            return (
              <div key={section}>
                {section === "data" && (
                  <div className="entreprise_section">
                    <p style={{ color: "#959799", width:"80%",margin:"auto" }}>
                      Les bulletins de paie finalisés restent inchangés, même si
                      les taux de cotisation sont modifiés.
                    </p>
                    <EntrepriseData />
                  </div>
                )}
                {section === "assurance" &&  <div className="entreprise_section">
                    <p style={{ color: "#959799" }}>
                    Gérez ici les taux de cotisation pour vos assurances.
                    </p>
                    <EntrepriseAssurance />
                  </div>}
                {section === "salaire" && (
                  <div className="entreprise_section">
                    <p style={{ color: "#959799" }}>
                      Vous pouvez voir ici une synthèse des types de salaire
                      disponibles et les modifier en fonction de vos besoins.
                    </p>
                    <table className="tab1">
                      <thead>
                        {" "}
                        <tr>
                          <td>Numéro</td>
                          <td>Description</td>
                          <td>Compte Débit</td>
                          <td>Compte Crédit</td>
                          <td>Brut</td>
                          <td>Croissant Décroissant</td>
                          <td>AVS ALV</td>
                          <td>LAA</td>
                          <td>LAA ALV</td>
                          <td>IJM</td>
                          <td>IS</td>
                          <td>Certification de salaire</td>
                          <td>Stat.année</td>
                          <td>Stat.octobre</td>
                          <td>13e mois</td>
                          <td>LPP</td>
                        </tr>
                      </thead>
                      <tbody>
                        <TableRow text1="1000" text2="Salaire mensuel" />
                        <TableRow text1="1001" text2="Salaire mensuel2" />
                        <TableRow text1="1002" text2="Salaire mensuel3" />
                        <TableRow text1="1005" text2="Salaire horaire" />
                        <TableRow text1="1006" text2="Salaire journalier" />
                        <TableRow text1="1010" text2="Honoraires" />
                        <TableRow text1="1015" text2="Salaire horaire 2" />
                        <TableRow text1="1025" text2="Salaire horaire 3" />
                        <TableRow
                          text1="1030"
                          text2="Indemnité pour ancienneté de service"
                        />
                        <TableRow text1="1031" text2="Indemnité de fonction" />
                        <TableRow text1="1033" text2="Indemnité de résidence" />
                        <TableRow
                          text1="1061"
                          text2="Heures supplémentaires 125%"
                        />
                        <TableRow
                          text1="1065"
                          text2="Heures supplémentaires après le départ"
                        />
                        <TableRow text1="1067" text2="Paiement des vacances" />
                        <TableRow text1="1070" text2="Indemnité des vacances" />
                        <TableRow text1="1071" text2="Indemnité de nuit" />
                        <TableRow text1="1073" text2="Indemnité du dimanche" />
                        <TableRow text1="1060" text2="Indemnité des vacances" />
                        <TableRow
                          text1="1061"
                          text2="Indemnité de jours fériés"
                        />
                        <TableRow text1="1062" text2="Salaire mensuel" />
                        <TableRow text1="1063" text2="Salaire mensuel" />
                        <TableRow text1="1200" text2="Salaire mensuel" />
                        <TableRow text1="1201" text2="Salaire mensuel" />
                        <TableRow text1="1205" text2="Salaire mensuel" />
                        <TableRow text1="1209" text2="Salaire mensuel" />
                        <TableRow text1="1210" text2="Salaire mensuel" />
                        <TableRow text1="1211" text2="Salaire mensuel" />
                        <TableRow text1="1212" text2="Salaire mensuel" />
                      </tbody>
                    </table>
                  </div>
                )}
                {section === "plan" && (
                  <div className="entreprise_section">
                    <p style={{ color: "#959799", textAlign: "start" }}>
                      Vous pouvez modifier ici le numéro et la désignation des
                      comptes utilisés dans la comptabilité des salaires.
                    </p>
                    <p style={{ color: "#959799" }}>
                      Il est possible que vous deviez recréer certains comptes
                      (avec un point d'exclamation bleu) dans la comptabilité
                      financière Faji.
                    </p>
                    <br />
                    <table className="tab2">
                      <thead>
                        {" "}
                        <tr>
                          <td>Numéro</td>
                          <td>Description</td>
                          <td>Compte Débit</td>
                          <td>Compte Crédit</td>
                        </tr>
                      </thead>
                      <tbody>
                        <TableRow2
                          text1="1020"
                          text2="Banque"
                          text3="Banque Exemple"
                          className="entreprise_bg2"
                        />

                        <TableRow2
                          text1="1090"
                          text2="Compte de transfert"
                          text3="Le compte 1090 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className=""
                        />

                        <TableRow2
                          text1="1090"
                          text2="Compte de passage salaires"
                          text3="Le compte 1091 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className="entreprise_bg2"
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM assurance-accidents"
                          text3="Le compte 1183 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className=""
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM indemnités journalières"
                          text3="Le compte 1184 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className="entreprise_bg2"
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM impôt à la source"
                          text3="Le compte 1188 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className=""
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM indemnités journalières"
                          text3="Le compte 1184 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className="entreprise_bg2"
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM impôt à la source"
                          text3="Le compte 1188 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className=""
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM indemnités journalières"
                          text3="Le compte 1184 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className="entreprise_bg2"
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM impôt à la source"
                          text3="Le compte 1188 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className=""
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM indemnités journalières"
                          text3="Le compte 1184 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className="entreprise_bg2"
                        />
                        <TableRow2
                          text1="1090"
                          text2="AM impôt à la source"
                          text3="Le compte 1188 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className=""
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM indemnités journalières"
                          text3="Le compte 1184 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className="entreprise_bg2"
                        />
                        <TableRow2
                          text1="1090"
                          text2="AM impôt à la source"
                          text3="Le compte 1188 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className=""
                        />

                        <TableRow2
                          text1="1090"
                          text2="AM indemnités journalières"
                          text3="Le compte 1184 n'est pas présent dans le plan comptable de la comptabilité financière"
                          className="entreprise_bg2"
                        />
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
      <Footer />
    </>
  );
}
const TableRow = ({ text1, text2 }) => {
  return (
    <tr>
      <td>{text1}</td>
      <td>{text2}</td>
      <td>5000</td>
      <td>1091</td>
      <td>
        <BsCheckLg />
      </td>
      <td>
        <GrAdd />
      </td>
      <td>
        <BsCheckLg />
      </td>
      <td>
        <BsCheckLg />
      </td>
      <td>
        <BsCheckLg />
      </td>
      <td>
        <BsCheckLg />
      </td>
      <td>
        <BsCheckLg />
      </td>

      <td>1</td>
      <td>|</td>
      <td>|</td>
      <td>
        <BsCheckLg />
      </td>
      <td>p</td>
      <td style={{ color: "#959799" }}>Modifier</td>
      <td style={{ color: "#959799" }}>Copier</td>
    </tr>
  );
};
const TableRow2 = ({ text1, text2, text3, className }) => {
  return (
    <tr className={className}>
      <td>{text1}</td>
      <td>{text2}</td>
      <td>{text3}</td>
      <td className="mod_cop">
        <p style={{ color: "#959799" }}>Modifier</p>
        <p style={{ color: "#959799" }}>Copier</p>
      </td>
    </tr>
  );
};
