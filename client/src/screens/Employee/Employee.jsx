import React, { useState } from "react";
import "./Employee.css";
import Navbar2 from "../../components/navbar2_dash/Navbar2Dash";

import Footer from "../../components/footer_dash/FooterDash";
import { Link } from "react-router-dom";

export default function Employee() {
  const initialSections = {
    actif: true,
    inactif: false,
    total: false,
    supprime: false,
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
      <div className="employee_wrapper">
        <br />
        <div style={{ display:"flex", flexDirection:"column" , alignSelf:"flex-end" ,paddingRight:"15%"}}>
          {" "}
          <Link to="/newemployee" className="new_emp">Nouveau employé</Link>
        </div>
        <br />
        <div className="show_buttons">
          <button
            onClick={() => toggleSection("actif")}
            className={sections.actif ? "show_buttonVisible" : ""}
          >
            Employés actifs
          </button>
          <button
            onClick={() => toggleSection("inactif")}
            className={sections.inactif ? "show_buttonVisible" : ""}
          >
            Employés inactifs
          </button>
          <button
            onClick={() => toggleSection("total")}
            className={sections.total ? "show_buttonVisible" : ""}
          >
            Employés totals
          </button>
          <button
            onClick={() => toggleSection("supprime")}
            className={sections.supprime ? "show_buttonVisible" : ""}
          >
            Employés supprimés
          </button>
        </div>
        <div className="divider" style={{ width: "80%", margin: "1%" }}></div>

        {Object.keys(sections).map((section) => {
          if (sections[section]) {
            return (
              <div key={section}>
                {section === "actif" && (
                  <div className="employee_section">
                    <table>
                      <thead>
                        <tr>
                          <td>Employé</td>
                          <td>Date de naissance</td>
                          <td>Ancienneté</td>
                          <td>Traitement brut</td>
                        </tr>
                      </thead>
                      <tbody>
                       
                        <tr className="employee_bg2">
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr>
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr className="employee_bg2">
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr>
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr className="employee_bg2">
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr>
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr className="employee_bg2">
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr>
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr className="employee_bg2">
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr>
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr className="employee_bg2">
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr>
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                        <tr className="employee_bg2">
                          <td>Aucun employé</td>
                          <td></td>
                          <td></td>
                          <td>CHF</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {section === "inactif" && <></>}
                {section === "total" && <></>}
                {section === "supprime" && <></>}
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
