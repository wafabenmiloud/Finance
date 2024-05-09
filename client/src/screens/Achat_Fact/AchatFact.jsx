import React, { useState } from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./AchatFact.css";
import { AiOutlineSearch } from "react-icons/ai";
import img3 from "../../assets/sear.svg";
import Footer from "../../components/footer/Footer";

export default function AchatFact() {
  const initialSections = {
    tous: true,
    brouillon: false,
    todo: false,
    paye: false,
    retard: false,
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
      <Navbar />
      <div className="ventes">
        <div className="ventes_title">
          <h1>Factures fournisseurs</h1>
          <button className="ventes_title_btn">
            Nouvelle facture fournisseur
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
                onClick={() => toggleSection("brouillon")}
                className={sections.brouillon ? "ventes_buttonVisible" : ""}
              >
                Brouillon
              </button>
              <button
                onClick={() => toggleSection("todo")}
                className={sections.todo ? "ventes_buttonVisible" : ""}
              >
                ToDo
              </button>
              <button
                onClick={() => toggleSection("paye")}
                className={sections.paye ? "ventes_buttonVisible" : ""}
              >
                Payée
              </button>
              <button
                onClick={() => toggleSection("retard")}
                className={sections.retard ? "ventes_buttonVisible" : ""}
              >
                En retard
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
                          <h4>Fournisseur</h4>
                          <input type="text" name="" id="" className="input"/>{" "}
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
                          <input type="text" name="" id="" className="input"/>{" "}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          {" "}
                          <h4>Référence</h4>
                          <input type="text" name="" id="" className="input"/>{" "}
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
                          <input type="text" name="" id="" className="input"/>{" "}
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
                          <select>
                            <option value="">En suspens</option>
                            <option value="">Transaction bancaire crée</option>
                            <option value="">Brouillon</option>
                            <option value="">Transaction bancaire Télécharché</option>
                            <option value="">Echec de la transaction</option>
                            <option value="">En retard</option>
                          </select>
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
                          <select><option value="">BRL</option>
                          <option value="">CHF</option>
                          <option value="">CNY</option>
                          <option value="">EUR</option>
                          <option value="">GBP</option>
                          <option value="">JPY</option></select>
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
                          <h4>Compte de comptabilité</h4>
                          <select>
                            <option value="">1020</option>
                            <option value="">1029</option>
                            <option value="">1100</option>
                            <option value="">1170</option>
                            <option value="">1171</option>
                            <option value="">1172</option>
                          </select>
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
                      <br />
                      <br />
                      <br />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          width: "100%",
                          gap: "40px",
                        }}
                      >
                        <div>
                          {" "}
                          <img alt="img" src={img3} style={{ width: "50%" }} />
                        </div>
                        <div
                          style={{
                            width: "50%",
                            display: "flex",
                            textAlign: "start",

                            flexDirection: "column",

                            gap: "10px",
                          }}
                        >
                          <p className="achat_comm_p">Pas de dépenses</p>{" "}
                          <p className="achat_comm_p">
                            Vous pouvez voir ici si les dépenses sont en projet
                            ou terminées. Vous pouvez également voir si un
                            document est associé
                          </p>
                        </div>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  )}
                  {section === "brouillon" && (
                   <div>
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
                       <h4>Fournisseur</h4>
                       <input type="text" name="" id="" className="input"/>{" "}
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
                       <input type="text" name="" id="" className="input"/>{" "}
                     </div>
                     <div
                       style={{
                         display: "flex",
                         flexDirection: "column",
                         width: "100%",
                       }}
                     >
                       {" "}
                       <h4>Référence</h4>
                       <input type="text" name="" id="" className="input"/>{" "}
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
                       <input type="text" name="" id="" className="input"/>{" "}
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
                       <select>
                            <option value="">En suspens</option>
                            <option value="">Transaction bancaire crée</option>
                            <option value="">Brouillon</option>
                            <option value="">Transaction bancaire Télécharché</option>
                            <option value="">Echec de la transaction</option>
                            <option value="">En retard</option>
                          </select>
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
                       <select><option value="">BRL</option>
                          <option value="">CHF</option>
                          <option value="">CNY</option>
                          <option value="">EUR</option>
                          <option value="">GBP</option>
                          <option value="">JPY</option></select>
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
                       <h4>Compte de comptabilité</h4>
                       <select> <option value="">1020</option>
                            <option value="">1029</option>
                            <option value="">1100</option>
                            <option value="">1170</option>
                            <option value="">1171</option>
                            <option value="">1172</option></select>
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
                   <br />
                   <br />
                   <br />
                   <div
                     style={{
                       display: "flex",
                       flexDirection: "row",
                       justifyContent: "center",
                       width: "100%",
                       gap: "40px",
                     }}
                   >
                     <div>
                       {" "}
                       <img alt="img" src={img3} style={{ width: "50%" }} />
                     </div>
                     <div
                       style={{
                         width: "50%",
                         display: "flex",
                         textAlign: "start",

                         flexDirection: "column",

                         gap: "10px",
                       }}
                     >
                       <p className="achat_comm_p">Pas de dépenses</p>{" "}
                       <p className="achat_comm_p">
                         Vous pouvez voir ici si les dépenses sont en projet
                         ou terminées. Vous pouvez également voir si un
                         document est associé
                       </p>
                     </div>
                     <br />
                     <br />
                     <br />
                   </div>
                 </div>
                  )}
                  {section === "todo" && (
                     <div>
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
                         <h4>Fournisseur</h4>
                         <input type="text" name="" id="" className="input"/>{" "}
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
                         <input type="text" name="" id="" className="input"/>{" "}
                       </div>
                       <div
                         style={{
                           display: "flex",
                           flexDirection: "column",
                           width: "100%",
                         }}
                       >
                         {" "}
                         <h4>Référence</h4>
                         <input type="text" name="" id="" className="input"/>{" "}
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
                         <input type="text" name="" id="" className="input"/>{" "}
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
                         <select>
                            <option value="">En suspens</option>
                            <option value="">Transaction bancaire crée</option>
                            <option value="">Brouillon</option>
                            <option value="">Transaction bancaire Télécharché</option>
                            <option value="">Echec de la transaction</option>
                            <option value="">En retard</option>
                          </select>                       </div>
                       <div
                         style={{
                           display: "flex",
                           flexDirection: "column",
                           width: "100%",
                         }}
                       >
                         {" "}
                         <h4>Devise</h4>
                         <select><option value="">BRL</option>
                          <option value="">CHF</option>
                          <option value="">CNY</option>
                          <option value="">EUR</option>
                          <option value="">GBP</option>
                          <option value="">JPY</option></select>
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
                         <h4>Compte de comptabilité</h4>
                         <select> <option value="">1020</option>
                            <option value="">1029</option>
                            <option value="">1100</option>
                            <option value="">1170</option>
                            <option value="">1171</option>
                            <option value="">1172</option></select>
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
                     <br />
                     <br />
                     <br />
                     <div
                       style={{
                         display: "flex",
                         flexDirection: "row",
                         justifyContent: "center",
                         width: "100%",
                         gap: "40px",
                       }}
                     >
                       <div>
                         {" "}
                         <img alt="img" src={img3} style={{ width: "50%" }} />
                       </div>
                       <div
                         style={{
                           width: "50%",
                           display: "flex",
                           textAlign: "start",

                           flexDirection: "column",

                           gap: "10px",
                         }}
                       >
                         <p className="achat_comm_p">Pas de dépenses</p>{" "}
                         <p className="achat_comm_p">
                           Vous pouvez voir ici si les dépenses sont en projet
                           ou terminées. Vous pouvez également voir si un
                           document est associé
                         </p>
                       </div>
                       <br />
                       <br />
                       <br />
                     </div>
                   </div>
                  )}
                  {section === "paye" && (
                    <div>
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
                        <h4>Fournisseur</h4>
                        <input type="text" name="" id="" className="input"/>{" "}
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
                        <input type="text" name="" id="" className="input"/>{" "}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        {" "}
                        <h4>Référence</h4>
                        <input type="text" name="" id="" className="input"/>{" "}
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
                        <input type="text" name="" id="" className="input"/>{" "}
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
                        <select>
                            <option value="">En suspens</option>
                            <option value="">Transaction bancaire crée</option>
                            <option value="">Brouillon</option>
                            <option value="">Transaction bancaire Télécharché</option>
                            <option value="">Echec de la transaction</option>
                            <option value="">En retard</option>
                          </select>                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        {" "}
                        <h4>Devise</h4>
                        <select><option value="">BRL</option>
                          <option value="">CHF</option>
                          <option value="">CNY</option>
                          <option value="">EUR</option>
                          <option value="">GBP</option>
                          <option value="">JPY</option></select>
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
                        <h4>Compte de comptabilité</h4>
                        <select> <option value="">1020</option>
                            <option value="">1029</option>
                            <option value="">1100</option>
                            <option value="">1170</option>
                            <option value="">1171</option>
                            <option value="">1172</option></select>
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
                    <br />
                    <br />
                    <br />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                        gap: "40px",
                      }}
                    >
                      <div>
                        {" "}
                        <img alt="img" src={img3} style={{ width: "50%" }} />
                      </div>
                      <div
                        style={{
                          width: "50%",
                          display: "flex",
                          textAlign: "start",

                          flexDirection: "column",

                          gap: "10px",
                        }}
                      >
                        <p className="achat_comm_p">Pas de dépenses</p>{" "}
                        <p className="achat_comm_p">
                          Vous pouvez voir ici si les dépenses sont en projet
                          ou terminées. Vous pouvez également voir si un
                          document est associé
                        </p>
                      </div>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                  )}
                  {section === "retard" && (
                    <div>
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
                        <h4>Fournisseur</h4>
                        <input type="text" name="" id="" className="input"/>{" "}
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
                        <input type="text" name="" id="" className="input"/>{" "}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        {" "}
                        <h4>Référence</h4>
                        <input type="text" name="" id="" className="input"/>{" "}
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
                        <input type="text" name="" id="" className="input"/>{" "}
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
                        <select>
                            <option value="">En suspens</option>
                            <option value="">Transaction bancaire crée</option>
                            <option value="">Brouillon</option>
                            <option value="">Transaction bancaire Télécharché</option>
                            <option value="">Echec de la transaction</option>
                            <option value="">En retard</option>
                          </select>                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        {" "}
                        <h4>Devise</h4>
                        <select>
                          <option value="">BRL</option>
                          <option value="">CHF</option>
                          <option value="">CNY</option>
                          <option value="">EUR</option>
                          <option value="">GBP</option>
                          <option value="">JPY</option>
                        </select>
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
                        <h4>Compte de comptabilité</h4>
                        <select> <option value="">1020</option>
                            <option value="">1029</option>
                            <option value="">1100</option>
                            <option value="">1170</option>
                            <option value="">1171</option>
                            <option value="">1172</option></select>
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
                    <br />
                    <br />
                    <br />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                        gap: "40px",
                      }}
                    >
                      <div>
                        {" "}
                        <img alt="img" src={img3} style={{ width: "50%" }} />
                      </div>
                      <div
                        style={{
                          width: "50%",
                          display: "flex",
                          textAlign: "start",

                          flexDirection: "column",

                          gap: "10px",
                        }}
                      >
                        <p className="achat_comm_p">Pas de dépenses</p>{" "}
                        <p className="achat_comm_p">
                          Vous pouvez voir ici si les dépenses sont en projet
                          ou terminées. Vous pouvez également voir si un
                          document est associé
                        </p>
                      </div>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </section>
      </div><Footer/>
    </>
  );
}
