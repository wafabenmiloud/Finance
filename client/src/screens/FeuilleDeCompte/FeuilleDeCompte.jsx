import React, { useState } from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";
import "./FeuilleDeCompte.css";
import Footer from "../../components/footer_dash/FooterDash";

export default function FeuilleDeCompte() {
  const [filtre, setFiltre] = useState(false);
  const toggleFiltre = (e) => {
    e.preventDefault();
    setFiltre(!filtre);
  };
  const [isFeuilleDeCompteVisible, setFeuilleDeCompteVisible] = useState(true);
  const toggleFeuilleDeCompte = () => {
    setFeuilleDeCompteVisible(true);
    setJournalVisible(false);
    setPostesVisible(false);
    setComptePlusVisible(false);
    setBilanPlusVisible(false);
    setCompteVisible(false);
    setBilanVisible(false);
    setProtocolesVisible(false);
  };

  const [isJournalVisible, setJournalVisible] = useState(false);
  const toggleJournal = () => {
    setFeuilleDeCompteVisible(false);
    setJournalVisible(true);
    setPostesVisible(false);
    setComptePlusVisible(false);
    setBilanPlusVisible(false);
    setCompteVisible(false);
    setBilanVisible(false);
    setProtocolesVisible(false);
    setFiltre(false);
  };
  const [isPostesVisible, setPostesVisible] = useState(false);
  const togglePostes = () => {
    setFeuilleDeCompteVisible(false);
    setJournalVisible(false);
    setPostesVisible(true);
    setComptePlusVisible(false);
    setBilanPlusVisible(false);
    setCompteVisible(false);
    setBilanVisible(false);
    setProtocolesVisible(false);
    setFiltre(false);
  };
  const [isComptePlusVisible, setComptePlusVisible] = useState(false);
  const toggleComptePlus = () => {
    setFeuilleDeCompteVisible(false);
    setJournalVisible(false);
    setPostesVisible(false);
    setComptePlusVisible(true);
    setBilanPlusVisible(false);
    setCompteVisible(false);
    setBilanVisible(false);
    setProtocolesVisible(false);
    setFiltre(false);
  };
  const [isBilanPlusVisible, setBilanPlusVisible] = useState(false);
  const toggleBilanPlus = () => {
    setFeuilleDeCompteVisible(false);
    setJournalVisible(false);
    setPostesVisible(false);
    setComptePlusVisible(false);
    setBilanPlusVisible(true);
    setCompteVisible(false);
    setBilanVisible(false);
    setProtocolesVisible(false);
    setFiltre(false);
  };
  const [isCompteVisible, setCompteVisible] = useState(false);
  const toggleCompte = () => {
    setFeuilleDeCompteVisible(false);
    setJournalVisible(false);
    setPostesVisible(false);
    setComptePlusVisible(false);
    setBilanPlusVisible(false);
    setCompteVisible(true);
    setBilanVisible(false);
    setProtocolesVisible(false);
    setFiltre(false);
  };
  const [isBilanVisible, setBilanVisible] = useState(false);
  const toggleBilan = () => {
    setFeuilleDeCompteVisible(false);
    setJournalVisible(false);
    setPostesVisible(false);
    setComptePlusVisible(false);
    setBilanPlusVisible(false);
    setCompteVisible(false);
    setBilanVisible(true);
    setProtocolesVisible(false);
    setFiltre(false);
  };
  const [isProtocolesVisible, setProtocolesVisible] = useState(false);
  const toggleProtocoles = () => {
    setFeuilleDeCompteVisible(false);
    setJournalVisible(false);
    setPostesVisible(false);
    setComptePlusVisible(false);
    setBilanPlusVisible(false);
    setCompteVisible(false);
    setBilanVisible(false);
    setProtocolesVisible(true);
    setFiltre(false);
  };
  const handleContactSubmit = (event) => {
    event.preventDefault();
  };

  const initialSections2 = {
    bilantous: true,
    bilanactif: false,
    bilanpassif: false,
    bilanouverture: false,
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
    comptetous: true,
    compterevenus: false,
    comptecharges: false,
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

  return (
    <>
      <Navbar />
      <div className="ventes">
        <div className="ventes_title">
          <h1>Rapports</h1>
        </div>
        <section id="ventes_section2">
          <div className="ventes_head">
            <div className="ventes_buttons">
              <button
                onClick={toggleFeuilleDeCompte}
                className={
                  isFeuilleDeCompteVisible ? "ventes_buttonVisible" : ""
                }
              >
                Feuille De Compte
              </button>

              <button
                onClick={toggleJournal}
                className={isJournalVisible ? "ventes_buttonVisible" : ""}
              >
                Journal
              </button>
              <button
                onClick={togglePostes}
                className={isPostesVisible ? "ventes_buttonVisible" : ""}
              >
                Postes ouverts
              </button>
              <button
                onClick={toggleComptePlus}
                className={isComptePlusVisible ? "ventes_buttonVisible" : ""}
              >
                Compte de résultat plus
              </button>
              <button
                onClick={toggleBilanPlus}
                className={isBilanPlusVisible ? "ventes_buttonVisible" : ""}
              >
                Bilan plus
              </button>
              <button
                onClick={toggleCompte}
                className={isCompteVisible ? "ventes_buttonVisible" : ""}
              >
                Compte de résultat
              </button>
              <button
                onClick={toggleBilan}
                className={isBilanVisible ? "ventes_buttonVisible" : ""}
              >
                Bilan
              </button>
              <button
                onClick={toggleProtocoles}
                className={isProtocolesVisible ? "ventes_buttonVisible" : ""}
              >
                Protocoles
              </button>
            </div>
          </div>

          <div className="divider"></div>

          {isFeuilleDeCompteVisible && (
            <>
              <div className="ventes_section1" style={{ padding: "10px 30px" }}>
                <form onSubmit={handleContactSubmit}>
                  <div className="contact_textfield_row">
                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>Compte</label>
                      <input type="text" name="entreprise" />
                    </div>
                    <div
                      className="contact_textfield"
                      style={{
                        width: "4%",
                        alignSelf: "center",
                      }}
                    >
                      <label>au</label>
                    </div>

                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>Compte</label>
                      <input type="text" name="complement" />
                    </div>
                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>
                        Date de <span>*</span>
                      </label>
                      <input type="text" name="complement" className="image_placeholder" placeholder="01.12.2023"/>
                    </div>
                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>
                        Date jusqu'au <span>*</span>
                      </label>
                      <input type="text" name="complement" className="image_placeholder" placeholder="01.01.2023"/>
                    </div>
                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>Sélectionner une période</label>
                      <select name="" id=""></select>
                    </div>
                  </div>
                  <div className="divider" style={{ margin: "2% 0" }}></div>
                  <h4
                    style={{
                      fontSize: "20px",
                      color: "#0B2840",
                      fontWeight: "600",
                      padding: "20px 0",
                    }}
                  >
                    Filtres avancés
                  </h4>
                  <div className="contact_textfield_row">
                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>Montant de (CHF)</label>
                      <input type="text" name="entreprise" />
                    </div>
                    <div
                      className="contact_textfield"
                      style={{
                        width: "4%",
                        alignSelf: "center",
                      }}
                    >
                      <label>au</label>
                    </div>

                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>Montant jusqu'à (CHF)</label>
                      <input type="text" name="complement" />
                    </div>
                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>Type de comptabilisation</label>
                      <select name="" id=""></select>
                    </div>
                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>Nº de référence</label>
                      <input type="text" name="complement" />
                    </div>
                    <div
                      className="contact_textfield"
                      style={{
                        width: "100%",
                      }}
                    >
                      <label>Description</label>
                      <input type="text" name="complement" />
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
                    <button className="submit" onClick={toggleFiltre}>
                      Appliquer le filtre
                    </button>
                    <button className="reset">Réinitialiser le filtre</button>
                  </div>
                  <br />
                  <br />
                </form>
              </div>
            </>
          )}
          {isProtocolesVisible && (
            <div style={{ padding: "10px 30px" }}>
              Aucun résultat n’a été trouvé pour cette requête.
            </div>
          )}
          {isJournalVisible && (
            <>
              <div className="ventes_section1">
                <div className="ventes_head">
                  <div className="ventes_buttons">
                    <button>Tous</button>
                    <button>Ecritures manuelles</button>
                    <button>Débiteurs</button>
                    <button>Créanciers</button>
                    <button>Dépenses</button>
                    <button>Écritures d'ouverture</button>
                    <button>Ecriture de salaire</button>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </>
          )}
          {isPostesVisible && (
            <>
              <div className="postes_col" style={{ padding: "10px 30px" }}>
                <h6>
                  Téléchargez la liste des débiteurs et des créanciers non
                  clôturés à une certaine date.
                </h6>
                <p>Date de référence</p>
                <input type="text" placeholder="01.01.2023" className="image_placeholder"/>
                <button>Télécharger la liste des PO débiteurs</button>
                <button>
                  Télécharger la liste des PO débiteurs (comptes clients)
                </button>
                <button>Télécharger la liste des PO créanciers</button>
              </div>
              <br />
              <br />
              <br />
            </>
          )}
          {isComptePlusVisible && (
            <>
              <div className="ventes_section1" style={{ padding: "10px 30px" }}>
                <form onSubmit={handleContactSubmit}>
                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>Période</label>
                      <input
                        type="text"
                        name="entreprise"
                        placeholder="01.01.2023 - 31.12.2023"
                        className="image_placeholder"
                      />
                    </div>

                    <div className="contact_textfield">
                      <label>Période de comparaison</label>
                      <input
                        type="text"
                        name="complement"
                        placeholder="01.01.2022 - 31.12.2022"
                        className="image_placeholder"
                      />
                    </div>
                    <div className="contact_textfield">
                      <label>Niveaux de compte à afficher</label>
                      <input type="text" name="complement" />
                    </div>

                    <div className="contact_textfield">
                      <label>Exporter</label>
                      <select name="" id="">
                        <option value="">
                          Sélectionner le format de sortie
                        </option>
                      </select>
                    </div>
                  </div>
                </form>
                <div className="divider" style={{ margin: "2% 0" }}></div>
              </div>
            </>
          )}
          {isBilanPlusVisible && (
            <>
              <div className="ventes_section1" style={{ padding: "10px 30px" }}>
                <form onSubmit={handleContactSubmit}>
                  <div className="contact_textfield_row">
                    <div className="contact_textfield">
                      <label>Période</label>
                      <input
                        type="text"
                        name="entreprise"
                        placeholder="01.01.2023 - 31.12.2023"
                        className="image_placeholder"
                      />
                    </div>

                    <div className="contact_textfield">
                      <label>Période de comparaison</label>
                      <input
                        type="text"
                        name="complement"
                        placeholder="01.01.2022 - 31.12.2022"
                        className="image_placeholder"
                      />
                    </div>
                    <div className="contact_textfield">
                      <label>Niveaux de compte à afficher</label>
                      <input type="text" name="complement" />
                    </div>

                    <div className="contact_textfield">
                      <label>Exporter</label>
                      <select name="" id="">
                        <option value="">
                          Sélectionner le format de sortie
                        </option>
                      </select>
                    </div>
                  </div>
                </form>
                <div className="divider" style={{ margin: "2% 0" }}></div>
              </div>
            </>
          )}
          {isCompteVisible && (
            <>
              <div className="ventes_section1">
                <div className="ventes_head">
                  <div className="ventes_buttons">
                    <button
                     onClick={() => toggleSection3("comptetous")}
                     className={sections3.comptetous ? "ventes2_buttonVisible" : ""}
                    >
                      Tous
                    </button>
                    <button
                     onClick={() => toggleSection3("compterevenus")}
                     className={sections3.compterevenus ? "ventes2_buttonVisible" : ""}
                    >
                      Revenus
                    </button>
                    <button
                    onClick={() => toggleSection3("comptecharges")}
                    className={sections3.comptecharges ? "ventes2_buttonVisible" : ""}
                    >
                      Charges
                    </button>
                  </div>
                </div>
                {Object.keys(sections3).map((section) => {
            if (sections3[section]) {
              return (
                <div key={section} className="section-content">
                  {section === "comptetous" &&  
                   <>
                    <Head />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        padding:"4% 0"
                      }}
                    >
                      <Line1 />
                      <div className="divider"></div>
                      <Line2 text1="PRODUITS NETS DES VENTES DE BIENS ET DE PRESTATIONS DE SERVICES" text2="0.00"/>
                      <div className="divider"></div>
                      <Line3 text1="Ventes de marchandises" text2="0.00"/>
                      <div className="divider"></div>
                      <Line4 text1="Ventes de marchandises" text2="0.00"/>
                      <div className="divider"></div>
                      <Line3 text1="Déductions sur ventes" text2="0.00"/>
                      <div className="divider"></div>
                      <Line4 text1="Déductions sur ventes" text2="0.00"/>
                      <div className="divider"></div>
                      <Line2 text1="TOTAL PRODUITS NETS DES VENTES DE BIENS ET DE PRESTATIONS DE SERVICES" text2="0.00"/>
                      <div className="divider"></div>
                      <Line2 text1="CHARGES DE MATÉRIEL, DE MARCHANDISES ET DES PRESTATIONS" text2="0.00"/>
                      <div className="divider"></div>
                      <Line3 text1="Charges de marchandises" text2="0.00"/>
                      <div className="divider"></div>
                      <Line4 text1="Charges de marchandises destinées à la revente" text2="0.00"/>
                      <div className="divider"></div>
                      <Line3 text1="Déductions obtenues sur achats" text2="0.00"/>
                      <div className="divider"></div>
                      <Line4 text1="Réductions des prix dachat" text2="0.00"/>
                      <div className="divider"></div>
                      <Line2 text1="TOTAL CHARGES DE MATÉRIEL, DE MARCHANDISES ET DES PRESTATIONS" text2="0.00"/>

                      <div className="divider"></div>
                      <Line4 text1="Résultat brut I (bénéfices bruts)" text2="0.00"/>
                      <div className="divider"></div>
                      <Line2 text1="AUTRES CHARGES DEXPLOITATION" text2="0.00"/>
                      <div className="divider"></div>
                      <Line3 text1="Amortissements et corrections de la valeur des actifs immobilisés" text2="0.00"/>
                      <div className="divider"></div>
                      <Line2 text1="RÉSULTAT D'EXPLOITATION AVANT INTÉRÊTS ET IMPÔTS (EBIT)" text2="0.00"/>
                      <div className="divider"></div>
                      <Line3 text1="Charges et produits financiers" text2="0.00"/>
                      <div className="divider"></div>
                      <Line4 text1="Charges financiers" text2="0.00"/>
                      <div className="divider"></div>
                      <Line4 text1="Produits financiers" text2="0.00"/>
                      <div className="divider"></div>
                      <Line2 text1="TOTAL AUTRES CHARGES DEXPLOITATION" text2="0.00"/>
                      <div className="divider"></div>
                      <Line2 text1="CLÔTURE" text2="0.00"/>
                      <div className="divider"></div>
                      <Line3 text1="Clôture" text2="0.00"/>
                      <div className="divider"></div>
                      <Line2 text1="TOTAL CLÔTURE" text2="0.00"/>
                      <div className="divider"></div>
                      <br /><br />
                      <Line5 text1="TOTAL COMPTE DE RÉSULTAT (PROFITS)" text2="0.00"/>
                    </div>
                  </>}
                  {section === "compterevenus" &&  <>
                 <Head />
                 <div
                   style={{
                     display: "flex",
                     flexDirection: "column",
                     gap: "10px",
                     padding:"4% 0"
                   }}
                 >
                   <Line1 />
                   <div className="divider"></div>
                   <Line2 text1="PRODUITS NETS DES VENTES DE BIENS ET DE PRESTATIONS DE SERVICES" text2="0.00"/>
                   <div className="divider"></div>
                   <Line3 text1="Ventes de marchandises" text2="0.00"/>
                   <div className="divider"></div>
                   <Line4 text1="Ventes de marchandises" text2="0.00"/>
                   <div className="divider"></div>
                   <Line3 text1="Déductions sur ventes" text2="0.00"/>
                   <div className="divider"></div>
                   <Line4 text1="Déductions sur ventes" text2="0.00"/>
                  
                   <div className="divider"></div>
                   <br /><br />
                   <Line5 text1="TOTAL PRODUITS NETS DES VENTES DE BIENS ET DE PRESTATIONS DE SERVICES" text2="0.00"/>
                 </div>
               </>}
                  {section === "comptecharges" &&   <>
                   <Head />
                   <div
                     style={{
                       display: "flex",
                       flexDirection: "column",
                       gap: "10px",
                       padding:"4% 0"
                     }}
                   >
                     <Line1 />
                     <div className="divider"></div>
                     <Line2 text1="CHARGES DE MATÉRIEL, DE MARCHANDISES ET DES PRESTATIONS" text2="0.00"/>
                     <div className="divider"></div>
                     <Line3 text1="Charges de marchandises" text2="0.00"/>
                     <div className="divider"></div>
                     <Line4 text1="Charges de marchandises destinées à la revente" text2="0.00"/>
                     <div className="divider"></div>
                     <Line3 text1="Déductions obtenues sur achats" text2="0.00"/>
                     <div className="divider"></div>
                     <Line4 text1="Réductions des prix dachat" text2="0.00"/>
                     <div className="divider"></div>
                     <Line2 text1="TOTAL CHARGES DE MATÉRIEL, DE MARCHANDISES ET DES PRESTATIONS" text2="0.00"/>
                     <div className="divider"></div>
                     <Line2 text1="AUTRES CHARGES DEXPLOITATION" text2="0.00"/>
                     <div className="divider"></div>
                     <Line3 text1="Charges et produits financiers" text2="0.00"/>
                     <div className="divider"></div>
                     <Line4 text1="Charges financières" text2="0.00"/>
                     <div className="divider"></div>
                     <Line2 text1="TOTAL AUTRES CHARGES DEXPLOITATION" text2="0.00"/>
                   </div>
                 </>}
                
                </div>
              );
            }
            return null;
          })}

              </div>
            </>
          )}
          {isBilanVisible && (
            <>
              <div className="ventes_section1">
                <div className="ventes_head">
                  <div className="ventes_buttons">
                    <button
                     onClick={() => toggleSection2("bilantous")}
                     className={sections2.bilantous ? "ventes_buttonVisible" : ""}
                    >
                      Tous
                    </button>
                    <button
                      onClick={() => toggleSection2("bilanactif")}
                      className={sections2.bilanactif ? "ventes_buttonVisible" : ""}
                     >
                      Actif
                    </button>
                    <button
                       onClick={() => toggleSection2("bilanpassif")}
                       className={sections2.bilanpassif ? "ventes_buttonVisible" : ""}
                     
                    >
                      Passif
                    </button>
                    <button
                       onClick={() => toggleSection2("bilanouverture")}
                       className={sections2.bilanouverture ? "ventes_buttonVisible" : ""}
                     
                    >
                      Bilan d'ouverture
                    </button>
                  </div>
                </div>
                {Object.keys(sections2).map((section) => {
            if (sections2[section]) {
              return (
                <div key={section} className="section-content">
                  {section === "bilantous" &&  <>
                     <Head />
                     <div
                       style={{
                         display: "flex",
                         flexDirection: "column",
                         gap: "10px",
                         padding:"4% 0"
                       }}
                     >
                       <Line1 />
                       <div className="divider"></div>
                       <Line2 text1="ACTIFS" text2="0.00"/>
                       <div className="divider"></div>
                       <Line3 text1="Actifs circulants" text2="0.00"/>
                       <div className="divider"></div>
                       <Line4 text1="Trésorerie" text2="0.00"/>
                       
                       <Line4 text1="Créances résultant de la vente de biens et de prestations de services" text2="0.00"/>
                       
                       <Line4 text1="Créances à court terme envers des institutions publiques" text2="0.00"/>
                       <div className="divider"></div>
                       <Line2 text1="TOTAL ACTIFS" text2="0.00"/>
                       <br /><br />
                       <div className="divider"></div>
                       <Line2 text1="PASSIFS" text2="0.00"/>
                       <div className="divider"></div>
                       <Line3 text1="Capitaux étrangers à court terme" text2="0.00"/>
                       <div className="divider"></div>
                       <Line4 text1="Dettes résultant de lachat de biens et de prestations de services" text2="0.00"/>
                      
                       <Line4 text1="Autres dettes à court terme" text2="0.00"/>
                       <div className="divider"></div>
                       <br /><br />
                       <Line3 text1="Total Passifs avant Profits" text2="0.00"/>
                       
                       <Line3 text1="Profits" text2="0.00"/>
                       
                       <Line2 text1="TOTAL PASSIFS" text2="0.00"/>
                     </div>
                   </>}
                  {section === "bilanactif" &&   <>
                    <Head />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        padding:"4% 0"
                      }}
                    >
                      <Line1 />
                      <div className="divider"></div>
                      <Line2 text1="ACTIFS" text2="0.00"/>
                      <div className="divider"></div>
                      <Line3 text1="Actifs circulants" text2="0.00"/>
                      <div className="divider"></div>
                      <Line4 text1="Trésorerie" text2="0.00"/>
                     
                      <Line4 text1="Créances résultant de la vente de biens et de prestations de services" text2="0.00"/>
                     
                      <Line4 text1="Créances à court terme envers des institutions publiques" text2="0.00"/>
                      <div className="divider"></div>
                      <Line2 text1="TOTAL ACTIFS" text2="0.00"/>
                     
                    </div>
                  </>}
                  {section === "bilanpassif" &&    <>
                     <Head />
                     <div
                       style={{
                         display: "flex",
                         flexDirection: "column",
                         gap: "10px",
                         padding:"4% 0"
                       }}
                     >
                       <Line1 />
                       <div className="divider"></div>
                       <Line2 text1="PASSIFS" text2="0.00"/>
                       <div className="divider"></div>
                       <Line3 text1="Capitaux étrangers à court terme" text2="0.00"/>
                       <div className="divider"></div>
                       <Line4 text1="Dettes résultant de lachat de biens et de prestations de services" text2="0.00"/>
                     
                       <Line4 text1="Autres dettes à court terme" text2="0.00"/>
                       <div className="divider"></div>
                       <Line2 text1="TOTAL PASSIFS" text2="0.00"/>
                     </div>
                   </>}
                  {section === "bilanouverture" &&   <>
                  <Head />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding:"4% 0"
                    }}
                  >
                    <Line1 />
                    <div className="divider"></div>
                    <Line2 text1="ACTIFS" text2="0.00"/>
                    <div className="divider"></div>
                    <Line3 text1="Actifs circulants" text2="0.00"/>
                    <div className="divider"></div>
                    <Line4 text1="Trésorerie" text2="0.00"/>
                    
                    <Line4 text1="Créances résultant de la vente de biens et de prestations de services" text2="0.00"/>
                    
                    <Line4 text1="Créances à court terme envers des institutions publiques" text2="0.00"/>
                    <div className="divider"></div>
                    <Line2 text1="TOTAL ACTIFS" text2="0.00"/>
                    <br /><br />
                    <div className="divider"></div>
                    <Line2 text1="PASSIFS" text2="0.00"/>
                    <div className="divider"></div>
                    <Line3 text1="Capitaux étrangers à court terme" text2="0.00"/>
                    <div className="divider"></div>
                    <Line4 text1="Dettes résultant de lachat de biens et de prestations de services" text2="0.00"/>
                   
                    <Line4 text1="Autres dettes à court terme" text2="0.00"/>
                    
                    <br /><br /><div className="divider"></div>
                    <Line3 text1="Total Passifs avant Profits" text2="0.00"/>
                    <Line4 text1="Profits" text2="0.00"/>
                    <Line2 text1="TOTAL PASSIFS" text2="0.00"/>
                  </div>
                </>}

                </div>
              );
            }
            return null;
          })}
               
              </div>
            </>
          )}
        </section>{" "}
        {isComptePlusVisible && (
          <div className="feuille_sec">
            <div
              style={{
                alignItems: "flex-start",
                flexDirection: "row",
                display: "flex",
                gap: "20px",
                flexWrap:"wrap"
              }}
            >
              <RecLine text="Avec report de solde" />
              <RecLine text="Masquer les écritures à zéro" />
              <RecLine text="Afficher uniquement les comptes avec des mouvements" />
              <RecLine text="Afficher description CC" />
            </div>
            <div className="divider"></div>
            <div className="feuille_sec_p">
              <p> Aucun compte disponible</p>
            </div>
          </div>
        )}
        {isBilanPlusVisible && (
          <div className="feuille_sec">
            <div
              style={{
                alignItems: "flex-start",
                flexDirection: "row",
                display: "flex",
                gap: "20px",
              }}
            >
              <RecLine text="Avec report de solde" />
              <RecLine text="Masquer les écritures à zéro" />
              <RecLine text="Afficher uniquement les comptes avec des mouvements" />
              <RecLine text="Afficher description CC" />
            </div>
            <div className="divider"></div>
            <div className="feuille_sec_p">
              <p> Aucun compte disponible</p>
            </div>
          </div>
        )}
        {filtre && (
          <div className="feuille_sec">
            <div
              style={{
                alignItems: "flex-start",
                flexDirection: "row",
                display: "flex",
                gap: "20px",
              }}
            >
              <RecLine text="Avec report de solde" />
              <RecLine text="Masquer les écritures à zéro" />
              <RecLine text="Afficher uniquement les comptes avec des mouvements" />
              <RecLine text="Afficher description CC" />
            </div>
            <div className="divider"></div>
            <div className="feuille_sec_p">
              <p> Veuillez utiliser votre filtre pour obtenir des écritures.</p>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
const RecLine = ({ text }) => {
  return (
    <div className="recline_wrapper">
      <div className="recline_grey"></div>
      <div className="recline_text">
        <p>{text}</p>
      </div>
    </div>
  );
};
const Line1 = () => {
  return (
    <div
      className="line1"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 40px",
      }}
    >
      <p>Tous les montants en CHF</p>
      <p>31.12.2023</p>
    </div>
  );
};
const Line2 = ({ text1, text2 }) => {
  return (
    <div
      className="line2"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 40px",
      }}
    >
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};
const Line3 = ({ text1, text2 }) => {
  return (
    <div
      className="line3"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 40px",
      }}
    >
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};
const Line4 = ({ text1, text2 }) => {
  return (
    <div
      className="line4"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 40px",
      }}
    >
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};
const Line5 = ({ text1, text2 }) => {
  return (
    <div
      className="line5"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 40px",
      }}
    >
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

const Head = () => {
  return (
    <>
      {" "}
      <div className="compt_head">
        <div className="compt_head_col1">
          <h6>Exercice</h6>
          <input type="text" placeholder="01.01.2023 - 31.12.2023" />
          <br />
          <br />
          <h6>Type de compte</h6>
          <input type="text" />
        </div>

        <div className="compt_head_col2">
          <div>
            <label htmlFor="">
              Afficher la comparaison avec l'année précédente
            </label>
            <input type="checkbox" />
          </div>
          <br />
          <div>
            <label>Afficher les comptes avec des valeurs 0</label>
            <input type="checkbox" />
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <button className="submit">Appliquer le filtre</button>
            <button className="reset">Enregistrer le filtre</button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "30px 40px 0 40px",
        }}
      >
        <div className="comp_h5">
          <h5>Tous les montants en CHF</h5>
        </div>
        <div
          className="comp_h5"
          style={{ display: "flex", flexDirection: "row", gap: "15px" }}
        >
          <h5>Télécharger au fomat PDF</h5>
          <h5>Télécharger au fomat Exel</h5>
        </div>
      </div>
    </>
  );
};
