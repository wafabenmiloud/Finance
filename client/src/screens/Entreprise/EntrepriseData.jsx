import React, { useState } from "react";
import "./Entreprise.css";
import Toggle from "react-styled-toggle";

const EntrepriseData = () => {
  const [selectedOption, setSelectedOption] = useState("Divers");
  const options = [
    "Divers",
    "Emailing paystubs",
    "Données certificat de salaire",
    "Paramètres de paiement",
    "Impôt à la source",
    "Etablissements stables",
    "Suppléant",
    "Données de référence",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const contentMap = {
    Divers: {
      content: (
        <form>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Langue de l'entreprise</label>{" "}
            </div>
            <div className="entreprise_textfield">
              <select name="" id="" style={{ width: "60%" }}></select>
            </div>
          </div>

          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Arrondi</label>
            </div>
            <div className="entreprise_textfield">
              <input type="checkbox" value="" class="bigger-checkbox" />
              <label htmlFor="">
                Arrondir les montants à 5 centimes (les mois clôturés ne seront
                pas affectés)
              </label>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Emploi proportionnel</label>
            </div>
            <div className="entreprise_textfield">
              <input type="checkbox" value="" class="bigger-checkbox" />
              <label htmlFor="">
                Emploi proportionnel au cours du mois en utilisant la méthode
                des 30 jours
              </label>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Calculs partiels des salaires</label>
            </div>
            <div className="entreprise_textfield">
              <input type="checkbox" value="" class="bigger-checkbox" />
              <label htmlFor="">Calculer le salaire au jour le jour</label>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Supplément pour vacances</label>
            </div>
            <div className="entreprise_textfield">
              <input type="checkbox" value="" class="bigger-checkbox" />
              <label htmlFor="">
                Verser immédiatement le supplément pour vacances
              </label>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Facteur 13e mois</label>
            </div>
            <div className="entreprise_textfield">
              <input type="checkbox" value="" class="bigger-checkbox" />
              <label htmlFor="">
                Calculer le 13e mois non pas comme 1/12 mais avec 8,33%
              </label>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">13e mois</label>
            </div>
            <div className="entreprise_textfield">
              <input type="checkbox" value="" class="bigger-checkbox" />
              <label htmlFor="">
                13e mois en plus du supplément pour vacances et de l’indemnité
                de jours fériés
              </label>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Statistiques</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <input type="checkbox" value="" class="bigger-checkbox" />
                <label htmlFor="">
                  Saisie des données pour statistiques / enquête sur la
                  structure des salaires
                </label>
              </div>
              <div className="entreprise_textfield">
                <select name="" id="" style={{ width: "60%" }}></select>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Statistiques</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <input type="radio" value="" class="bigger-checkbox" />
                <label htmlFor="">
                  Indemnité de jours fériés et supplément pour vacances sont
                  calculés uniquement sur la base du salaire horaire
                </label>
              </div>
              <div className="entreprise_textfield">
                <input type="radio" value="" class="bigger-checkbox" />
                <label htmlFor="">
                  L’indemnité de jours fériés est calculée sur la base de la
                  somme du salaire horaire et du supplément pour vacances
                </label>
              </div>
              <div className="entreprise_textfield">
                <input type="radio" value="" class="bigger-checkbox" />
                <label htmlFor="">
                  Le supplément pour vacances est calculé sur la base de la
                  somme du salaire horaire et de l’indemnité de jours fériés
                </label>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Mise en page PDF</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <select name="" id="" style={{ width: "60%" }}></select>
              </div>
              <div className="entreprise_textfield">
                <input type="checkbox" value="" class="bigger-checkbox" />
                <label htmlFor="">
                  Indiquer le nombre de jours de congé sur le bulletin de paie
                </label>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Intégration Clockodo</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <input type="checkbox" value="" class="bigger-checkbox" />
                <label htmlFor="">Clockodo - Intégration activée</label>
              </div>
              <div className="entreprise_textfield">
                <input
                  type="text"
                  value=""
                  placeholder="E-mail de l'utilisateur Clockodo"
                  style={{ width: "60%" }}
                />
              </div>
              <div className="entreprise_textfield">
                <input
                  type="text"
                  value=""
                  placeholder="Clockodo API Key"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "diversButton", className: "new_emp" },
      ],
    },
    "Emailing paystubs": {
      content: (
        <form action="">
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">
                Protection par mot de passe du bulletin de paie au format PDF
              </label>{" "}
            </div>
            <div className="entreprise_textfield">
<select name="" id=""></select>            
</div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Mise en page PDF pour les courriels</label>{" "}
            </div>
            <div className="entreprise_textfield">
<select name="" id=""></select>            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Contenu du courriel par défaut</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <label htmlFor="">DE</label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="3"
                placeholder="Diese Nachricht wurde automatisch von der Faji Payroll-Software generiert. Die Lohnabrechnung für Monat/Jahr finden Sie im PDF-Formular. Falls Sie Fragen zur E-Mail oder Lohnabrechnung haben, wenden Sie sich bitte an den Payroll Officer Ihres Unternehmens, den Sie unter CC in dieser E-Mail finden."
              ></textarea>
              <label htmlFor="">EN</label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="3"
                placeholder="This message was automatically generated from Faji Payroll software. Please find the paystub for month/year attached in PDF form. If you have any questions about the e-mail or the paystub, please contact your company''s Payroll Officer who is CCed in this e-mail."
              ></textarea>
              <label htmlFor="">FR</label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="3"
                placeholder="Ce message a été généré automatiquement depuis le logiciel Faji Payroll. Veuillez trouver le bulletin de paie pour la période Mois/Année ci-joint au format PDF. Si vous avez des questions concernant cet e-mail ou le bulletin de paie, veuillez contacter le responsable de la paie de votre entreprise (en copie de cet e-mail)."
              ></textarea>
              <label htmlFor="">IT</label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="3"
                placeholder="Questo messaggio è stato generato automaticamente dal software delle buste paga di Faji. In allegato trova la busta paga per Mese/Anno in formato PDF. Per qualsiasi domanda riguardante l''e-mail o la busta paga la preghiamo di contattare il responsabile del personale della sua ditta, che ci legge in copia."
              ></textarea>
              <br /><br />
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "emailingButton", className: "new_emp" },
      ],
    },
    "Données certificat de salaire": {
      content: (
        <form>
          <p style={{ color: "#959799", fontSize: "14px" }}>
            Pour plus d'informations sur le certificat de salaire – et notamment
            le guide officiel relatif à l’établissement de celui-ci – veuillez
            consulter cette page de l'Administration fédérale des contributions
            .
          </p>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Repas</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <input type="radio" value="" className="bigger-checkbox"/>
                <label htmlFor="">
                  Repas gratuits ou chèques-repas proposés
                </label>
              </div>
              <div className="entreprise_textfield">
                <input type="radio" value="" className="bigger-checkbox"/>
                <label htmlFor="">
                  Pas de repas gratuits ni de chèques-repas
                </label>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Transport</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <input type="radio" value="" className="bigger-checkbox"/>
                <label htmlFor="">
                  Transport gratuit entre le domicile et le lieu de travail
                </label>
              </div>
              <div className="entreprise_textfield">
                <input type="radio" value="" className="bigger-checkbox"/>
                <label htmlFor="">Pas de transport gratuit</label>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Véhicule professionnel</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <input type="radio" value="" className="bigger-checkbox"/>
                <label htmlFor="">Pas de véhicule professionnel</label>
              </div>
              <div className="entreprise_textfield">
                <input type="radio" value="" className="bigger-checkbox"/>
                <label htmlFor="">
                  La part privée pour le véhicule de service réglée par
                  l'employé s’élève à 0,9% par mois au minimum
                </label>
              </div>
              <div className="entreprise_textfield">
                <input type="radio" value="" className="bigger-checkbox"/>
                <label htmlFor="">
                  A clarifier dans la procédure de taxation
                </label>
              </div>
              <br />
              <div className="entreprise_textfield">
                <input type="radio" value="" className="bigger-checkbox"/>
                <label htmlFor="">Frais effectifs selon Cm 52</label>
              </div>
              <div className="entreprise_textfield">
                <input type="radio" value="" className="bigger-checkbox"/>
                <label htmlFor="">
                  Frais effectifs sur présentation de justificatifs
                </label>
              </div>
              <div
                className="entreprise_textfield grid"
              >
                <div className="entreprise_textfield">
                  <input type="radio" value="" className="bigger-checkbox"/>
                  <label htmlFor="">
                    Règlement des remboursements de frais agréé
                  </label>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Date</label>
                  <input type="text" value="" className="image_placeholder" placeholder="01.01.2023"/>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Canton</label>
                 <select name="" id="" style={{margin:"0",height:"30px"}}></select>
                </div>
              </div>
              <div
                className="entreprise_textfield grid"
              >
                <div className="entreprise_textfield">
                  <input type="checkbox" value="" className="bigger-checkbox"/>
                  <label htmlFor="">Ruling pour les expatriés agréé</label>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Date</label>
                  <input type="text" value="" className="image_placeholder" placeholder="01.01.2023"/>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Canton</label>
                  <select name="" id="" style={{margin:"0",height:"30px"}}></select>
                </div>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Participation du employé</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div
                className="entreprise_textfield grid"
              >
                <div className="entreprise_textfield">
                  <input type="checkbox" value="" className="bigger-checkbox"/>
                  <label htmlFor="">Valeur vénale agréée</label>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Date</label>
                  <input type="text" value="" className="image_placeholder" placeholder="01.01.2023"/>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Canton</label>
                  <select name="" id="" style={{margin:"0",height:"30px"}}></select>
                </div>
              </div>
              <div className="entreprise_textfield">
                <input type="checkbox" value="" className="bigger-checkbox"/>
                <label htmlFor="">Sans revenu imposable</label>
              </div>
              <label htmlFor="">Raisons</label>
              <div className="entreprise_textfield">
                <input type="checkbox" value="" className="bigger-checkbox"/>
                <label htmlFor="">Options bloquées pour les salariés</label>
              </div>
              <div className="entreprise_textfield">
                <input type="checkbox" value="" className="bigger-checkbox"/>
                <label htmlFor="">
                  Options de collaborateurs non cotées en bourse
                </label>
              </div>{" "}
              <div className="entreprise_textfield">
                <input type="checkbox" value="" className="bigger-checkbox"/>
                <label htmlFor="">
                  Droits sur les actions de collaborateur
                </label>
              </div>{" "}
              <div className="entreprise_textfield">
                <input type="checkbox" value="" className="bigger-checkbox"/>
                <label htmlFor="">
                  Participations impropres de collaborateur
                </label>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">
                Autres prestations salariales accessoires
              </label>
            </div>

            <div className="entreprise_textfield">
              <input
                type="text"
                value=""
                placeholder="Texte complémentaire dans le certificat de salaire"
                style={{width:"60%"}}
              />
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Remarques</label>
            </div>

            <div className="entreprise_textfield">
              <input
                type="text"
                value=""
                placeholder="Texte complémentaire dans le certificat de salaire"
                style={{width:"60%"}}
              />
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield" >
              <label htmlFor="">Responsable des salaires</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield" style={{justifyContent:"space-between"}}>
                <div className="entreprise_textfield" style={{justifyContent:"space-between"}}>
                  <label htmlFor="">Prénom</label>
                  <input type="text" value="" />
                  
                </div>
                <div className="entreprise_textfield" style={{justifyContent:"space-between"}}>
                  <label htmlFor="">Nom de famille</label>
                  <input type="text" value="" />
                </div>
              </div>

              <div className="entreprise_textfield" style={{justifyContent:"space-between"}}>
                <div className="entreprise_textfield" style={{justifyContent:"space-between"}}>
                  <label htmlFor="">Numéro de téléphone</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield" >
                  <label htmlFor="">E-mail</label>
                  <input type="text" value="" />
                </div>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">
                Utiliser des copies du salaire 2075 comme déduction pour travail
                à court terme
              </label>
            </div>
            <div className="">
              <input type="checkbox" name="" id="" className="bigger-checkbox"/>
            </div>
          </div>
          <br />
          <br />
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "datacButton", className: "new_emp" },
      ],
    },
    "Paramètres de paiement": {
      content: (
        <form action="">
          <div className="entreprise_row2">
            <div className="entreprise_row2" style={{width:"50%"}}>
              <label htmlFor="">Compte bancaire par défaut</label>{" "}
              <select name="" id="" style={{margin:"0",height:"30px"}}></select>
            </div>
            <div className="entreprise_textfield">
              <label>Date de valeur par défaut</label>
              <input type="text" value="" />
            </div>
          </div>
          <br /><br /><br />
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "paiementButton", className: "new_emp" },
      ],
    },
    "Impôt à la source": {
      content: (
        <form action="">
          <div className="entreprise_textfield">
            <div>
              <button className="assur_btn2">Ajouter</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="entreprise_textfield">
                <div className="entreprise_row">
                  {" "}
                  <label htmlFor="">Canton</label>
                  <select name="" id=""></select>
                </div>
                <div className="entreprise_textfield">
                  {" "}
                  <label htmlFor="">Numéro de client / ID IS</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Entité comptable</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "impotButton", className: "new_emp" },
        { name: "Effacer", id: "otherimpot", className: "assur_btn2" },
      ],
    },
    "Etablissements stables": {
      content: (
        <form action="">
          <h5
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            {" "}
            <Toggle
              checked={true}
              backgroundColorChecked="#25A7FF"
              height={15}
              width={50}
              sliderWidth={12}
              sliderHeight={12}
            />
            Siège social
          </h5>
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <label htmlFor="">Nom</label>
              <input type="text" name="" id="" placeholder="Siège social" />
            </div>
          </div>
          <div
            className="entreprise_textfield"
            style={{ justifyContent: "space-between" }}
          >
            <div className="entreprise_textfield">
              <label htmlFor="">Numéro REE</label>
              <input type="text" name="" id="" />
            </div>
            <div className="entreprise_textfield">
              <label htmlFor="">InHouseID</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div
            className="entreprise_textfield"
            style={{ justifyContent: "space-between" }}
          >
            <div className="entreprise_textfield">
              <label htmlFor="">Ligne supplémentaire</label>
              <input type="text" name="" id="" />
            </div>
            <div className="entreprise_textfield">
              <label htmlFor="">Rue et numéro</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div
            className="entreprise_textfield"
            style={{ justifyContent: "space-between" }}
          >
            <div className="entreprise_textfield">
              <label htmlFor="">Boîte postale</label>
              <input type="text" name="" id="" />
            </div>
            <div className="entreprise_textfield">
              <label htmlFor="">Région, province, État ou quartier</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">NP</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Ville</label>
                <input type="text" name="" id="" />
              </div>
            </div>

            <div className="entreprise_textfield">
              <label htmlFor="">Numéro de la commune</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div
            className="entreprise_textfield"
            style={{ justifyContent: "space-between" }}
          >
            <div className="entreprise_textfield">
              <label htmlFor="">Pays</label>
              <input type="text" name="" id="" />
            </div>
            <div className="entreprise_textfield">
              <label htmlFor="">Canton</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div
            className="entreprise_textfield"
            style={{ justifyContent: "space-between" }}
          >
            <div className="entreprise_textfield">
              <label htmlFor="">Heures par semaine</label>
              <input type="text" name="" id="" />
            </div>
            <div className="entreprise_textfield">
              <label htmlFor="">Leçons par semaine</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "etabButton", className: "new_emp" },
        { name: "Effacer", id: "otheretab", className: "assur_btn2" },
      ],
    },
    Suppléant: {
      content: (
        <form action="">
          <p style={{ color: "#959799", fontSize: "14px" }}>
            Uniquement pertinent pour la déclaration électronique des salaires
            (ELM)Avez-vous fait appel à une entreprise externe pour la
            comptabilité salariale ? Indiquez ici les coordonnées de cette
            entreprise.
          </p>
          <h5
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            {" "}
            <Toggle
              checked={true}
              backgroundColorChecked="#25A7FF"
              height={15}
              width={50}
              sliderWidth={12}
              sliderHeight={12}
            />
            J'ai un suppléant
          </h5>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Nom de la société</label>
            </div>

            <div className="entreprise_textfield">
              <input type="text" />
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Adresse postale</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Ligne supplémentaire</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Rue et numéro</label>
                  <input type="text" value="" />
                </div>
              </div>

              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Boîte postale</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Région, province, État ou quartier</label>
                  <input type="text" value="" />
                </div>
              </div>
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">NP</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Ville</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Numéro de la commune</label>
                  <input type="text" value="" />
                </div>
              </div>
              <div
                className="entreprise_textfield date_row"
               
              >
                <div className="entreprise_textfield">
                  <label htmlFor="">Pays</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Canton</label>
                  <input type="text" value="" />
                </div>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">IDE</label>
            </div>

            <div className="entreprise_textfield">
              <input type="text" name="" id="" placeholder="CHE-123.456.789" />
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "suppButton", className: "new_emp" },
      ],
    },

    "Données de référence": {
      content: (
        <form action="">
          <p style={{ color: "#959799", fontSize: "14px" }}>
            Les données de base de l’entreprise seront transférées directement
            depuis votre compte Faji.
          </p>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Nom de la société</label>
            </div>

            <div className="entreprise_textfield">
              <input type="text" />
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">Adresse postale</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Ligne supplémentaire</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Rue et numéro</label>
                  <input type="text" value="" />
                </div>
              </div>

              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Boîte postale</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Région, province, État ou quartier</label>
                  <input type="text" value="" />
                </div>
              </div>
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">NP</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Ville</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Numéro de la commune</label>
                  <input type="text" value="" />
                </div>
              </div>
              <div
                className="entreprise_textfield date_row"
            
              >
                <div className="entreprise_textfield">
                  <label htmlFor="">Pays</label>
                  <input type="text" value="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Canton</label>
                  <input type="text" value="" />
                </div>
              </div>
            </div>
          </div>
          <div className="entreprise_row">
            <div className="entreprise_textfield">
              <label htmlFor="">IDE</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="CHE-123.456.789"
                />
              </div>
              <div className="entreprise_textfield">
                <input type="checkbox" class="bigger-checkbox"/>
                <label htmlFor="">Entreprise agricole</label>
              </div>
              <div className="entreprise_textfield">
                <input type="checkbox" class="bigger-checkbox"/>
                <label htmlFor="">Autoriser Faji à accéder à mes données</label>
              </div>
            </div>
          </div>
        </form>
      ),
      buttons: [{ name: "Enregistrer", id: "refButton", className: "new_emp" }],
    },
  };

  return (
    <>
      {" "}
      <div className="entreprise_data">
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          style={{ border: "none" ,height:"100%"}}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="divider"></div>
        <br />
        <div className="container">{contentMap[selectedOption].content}</div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px" }}>
        {contentMap[selectedOption].buttons.map((button, index) => (
          <button key={index} className={button.className} id={button.id}>
            {button.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default EntrepriseData;
