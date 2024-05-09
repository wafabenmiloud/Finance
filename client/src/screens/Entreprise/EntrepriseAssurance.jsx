import React, { useState } from "react";
import "./Entreprise.css";

const EntrepriseAssurance = () => {
  const [selectedOption, setSelectedOption] = useState(
    "IJM - Indemnités journalières"
  );
  const options = [
    "IJM - Indemnités journalières",
    "LAAC - Assurance complémentaire",
    "LAA - Assurance-accidents",
    "LPP - Prévoyance professionnelle",
    "CAF - Caisse de compensation",
    "AVS, APG, AI, AC - Assurances sociales",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const contentMap = {
    "IJM - Indemnités journalières": {
      content: (
        <form action="">
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Assurance LAA</label>
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Numéro du client</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Numéro de contrat</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div className="entreprise_textfield">
            <div>
              <button className="assur_btn2">Ajouter</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="entreprise_textfield">
                {" "}
                <input type="radio" class="bigger-checkbox" name="" id="" />
                <label htmlFor="">
                  Assurance sans déclaration électronique des salaires
                </label>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" placeholder="Assurance IJM" />
              </div>
              <br />

              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />{" "}
                  <label htmlFor="">
                    Assurance avec déclaration électronique des salaires (ELM)
                  </label>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Numéro de l'assureur</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nom de la caisse de compression"
                />
              </div>
            </div>
          </div>
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <label htmlFor="">Adresse de l'assureur</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Ligne supplémentaire</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Rue et numéro</label>
                  <input type="text" name="" id="" />
                </div>{" "}
              </div>
              <br />
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Boîte postale</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Région, province, État ou quartier</label>
                  <input type="text" name="" id="" />
                </div>{" "}
              </div>
              <br />
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">NP</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Ville</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Canton</label>
                  <input type="text" name="" id="" />
                </div>{" "}
              </div>
              <br />
            </div>
          </div>
          <div>
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Solutions IJM</label>
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Solutions IJM</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Code</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div>
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Salaire annuel assuré</label>
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">CHF</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">CHF</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div>
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Cotisation entreprise</label>
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Hommes %</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Femmes %</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div>
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Cotisation employé</label>
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Hommes %</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Femmes %</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "ijmButton", className: "new_emp" },
        { name: "Effacer", id: "otherButton1", className: "assur_btn2" },
      ],
    },
    "LAAC - Assurance complémentaire": {
      content: (
        <form action="">
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Assurance LAA</label>
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Numéro du client</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Numéro de contrat</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div className="entreprise_textfield">
            <div>
              <button className="assur_btn2">Ajouter</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="entreprise_textfield">
                {" "}
                <input type="radio" class="bigger-checkbox" name="" id="" />
                <label htmlFor="">
                  Assurance sans déclaration électronique des salaires
                </label>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" placeholder="Assurance IJM" />
              </div>
              <br />

              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />{" "}
                  <label htmlFor="">
                    Assurance avec déclaration électronique des salaires (ELM)
                  </label>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Numéro de l'assureur</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nom de la caisse de compression"
                />
              </div>
            </div>
          </div>
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <label htmlFor="">Adresse de l'assureur</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Ligne supplémentaire</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Rue et numéro</label>
                  <input type="text" name="" id="" />
                </div>{" "}
              </div>
              <br />
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Boîte postale</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Région, province, État ou quartier</label>
                  <input type="text" name="" id="" />
                </div>{" "}
              </div>
              <br />
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">NP</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Ville</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Canton</label>
                  <input type="text" name="" id="" />
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <label htmlFor="">Solutions LAAC</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <label htmlFor="">Solutions LAAC</label>
                <input type="text" name="" id="" />
              </div>

              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Gain assuré</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <div className="entreprise_textfield">
                    <input type="radio" class="bigger-checkbox" name="" id="" />
                    <label htmlFor="">Salaire LAA (SLAA)</label>
                  </div>
                  <div className="entreprise_textfield">
                    <input type="radio" class="bigger-checkbox" name="" id="" />
                    <label htmlFor="">Salaire excédentaire (SE)</label>
                  </div>
                </div>
              </div>
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Part de l’employeur</label>
                </div>
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />
                  <label htmlFor="">100 %</label>
                </div>
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />
                  <label htmlFor="">50 %</label>
                </div>
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />
                  <label htmlFor="">0 %</label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Primes</label>
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Hommes %</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Femmes %</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "laacButton", className: "new_emp" },
        { name: "Effacer", id: "otherButton2", className: "assur_btn2" },
      ],
    },
    "LAA - Assurance-accidents": {
      content: (
        <form action="">
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Assurance LAA</label>
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Numéro du client</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Numéro de contrat</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div className="entreprise_textfield">
            <div>
              <button className="assur_btn2">Ajouter</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="entreprise_textfield">
                {" "}
                <input type="radio" class="bigger-checkbox" name="" id="" />
                <label htmlFor="">
                  Assurance sans déclaration électronique des salaires
                </label>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" placeholder="Assurance IJM" />
              </div>
              <br />

              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />{" "}
                  <label htmlFor="">
                    Assurance avec déclaration électronique des salaires (ELM)
                  </label>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Numéro de l'assureur</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nom de la caisse de compression"
                />
              </div>
            </div>
          </div>
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <label htmlFor="">Adresse de l'assureur</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Ligne supplémentaire</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Rue et numéro</label>
                  <input type="text" name="" id="" />
                </div>{" "}
              </div>
              <br />
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Boîte postale</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Région, province, État ou quartier</label>
                  <input type="text" name="" id="" />
                </div>{" "}
              </div>
              <br />
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">NP</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Ville</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Canton</label>
                  <input type="text" name="" id="" />
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <label htmlFor="">Solutions LAA</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Solutions LAA</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Partie d’entreprise</label>
                  <input type="text" name="" id="" />
                </div>
              </div>

              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Accident professionnel</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Accident non professionnel</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <label htmlFor="">Part de l’employeur</label>
                </div>

                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />
                  <label htmlFor="">0 %</label>
                </div>
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />
                  <label htmlFor="">50 %</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "laaButton", className: "new_emp" },
        { name: "Effacer", id: "otherButton3", className: "assur_btn2" },
      ],
    },
    "LPP - Prévoyance professionnelle": {
      content: (
        <form action="">
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Assurance LPP</label>
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Nom</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Numéro du client</label>
                <input type="text" name="" id="" />
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Numéro de contrat</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div className="entreprise_textfield">
            <div>
              <button className="assur_btn2">Ajouter</button>
            </div>
            <div className="entreprise_textfield">
              <div className="entreprise_textfield">
                <label htmlFor="">Solution LPP </label>{" "}
                <input type="text" name="" id="" />{" "}
              </div>
              <div className="entreprise_textfield">
                <label htmlFor="">Code</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "lppButton", className: "new_emp" },
        { name: "Effacer", id: "otherButton4", className: "assur_btn2" },
      ],
    },
    "CAF - Caisse de compensation": {
      content: (
        <form action="">
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <label htmlFor="">Caisse de compensation</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="entreprise_textfield"
                style={{ justifyContent: "space-between" }}
              >
                <div className="entreprise_textfield">
                  <label htmlFor="">Numéro de membre / Numéro d’assuré</label>
                  <input type="text" name="" id="" />{" "}
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Sous-numéro</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />
              <div
                className="entreprise_textfield"
                style={{ justifyContent: "space-between" }}
              >
                <div className="entreprise_textfield">
                  <label htmlFor="">Employeur</label>{" "}
                  <input type="text" name="" id="" />{" "}
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Employé</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="checkbox" name="" id="" class="bigger-checkbox"/>
                <label htmlFor="">
                  Tenir compte de cette déduction CAF dans le bulletin de paie
                  (chiffre 9){" "}
                </label>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="radio" class="bigger-checkbox" name="" id="" />
                <label htmlFor="">
                  Assurance sans déclaration électronique des salaires
                </label>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" placeholder="Assurance IJM" />
              </div>
              <br />

              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />{" "}
                  <label htmlFor="">
                    Assurance avec déclaration électronique des salaires (ELM)
                  </label>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Nombre de la caisse de compensation</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nom de la caisse de compression"
                />
              </div>
            </div>
          </div>
        </form>
      ),
      buttons: [
        { name: "Enregistrer", id: "cafButton", className: "new_emp" },
        { name: "Effacer", id: "otherButton5", className: "assur_btn2" },
      ],
    },
    "AVS, APG, AI, AC - Assurances sociales": {
      content: (
        <form action="">
          <div className="entreprise_textfield">
            <div className="entreprise_textfield">
              <label htmlFor="">AVS, AI, APG</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="entreprise_textfield"
                style={{ justifyContent: "space-between" }}
              >
                <div className="entreprise_textfield">
                  <label htmlFor="">Employeur 5.300%</label>
                </div>
                <div className="entreprise_textfield" style={{ width: "33%" }}>
                  <label htmlFor="">Employeur 5.300%</label>
                </div>
              </div>
              <br />
              <div
                className="entreprise_textfield"
                style={{ justifyContent: "space-between" }}
              >
                <div className="entreprise_textfield">
                  <label htmlFor="">Numéro de membre / Numéro d’assuré</label>{" "}
                  <input type="text" name="" id="" />{" "}
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Sous-numéro</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="radio" class="bigger-checkbox" name="" id="" />
                <label htmlFor="">
                  Assurance sans déclaration électronique des salaires
                </label>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nom de la caisse de compression"
                />
              </div>
              <br />
              <div className="entreprise_textfield">
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />{" "}
                  <label htmlFor="">
                    Assurance avec déclaration électronique des salaires (ELM)
                  </label>
                </div>
                <div className="entreprise_textfield">
                  <label htmlFor="">Nombre de la caisse de compensation</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nom de la caisse de compression"
                />
              </div>
              <br />
              <p style={{ color: "#959799" }}>
                Si vous utilisez ELM, les assurances sociales requièrent les
                données relatives à votre LPP et à votre LAA. Si vous n'êtes pas
                assuré, veuillez en indiquer la raison.
              </p>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">Avez-vous une LPP?</label>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <div className="entreprise_textfield">
                  {" "}
                  <label htmlFor="">
                    Assurance principale{" "}
                    <span style={{ color: "#FF0000" }}>*</span>
                  </label>
                </div>{" "}
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />
                  <label htmlFor="">Oui</label>
                </div>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" />
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">
                  Valable à partir du{" "}
                  <span style={{ color: "#FF0000" }}>*</span>
                </label>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" />
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">Raison</label>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <div className="entreprise_textfield"></div>{" "}
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />
                  <label htmlFor="">Non</label>
                </div>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" />
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">Avez-vous une LAA?</label>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <div className="entreprise_textfield">
                  {" "}
                  <label htmlFor="">
                    Assurance principale{" "}
                    <span style={{ color: "#FF0000" }}>*</span>
                  </label>
                </div>{" "}
                <br />{" "}
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />
                  <label htmlFor="">Oui</label>
                </div>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" />
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">
                  Valable à partir du{" "}
                  <span style={{ color: "#FF0000" }}>*</span>
                </label>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" />
              </div>
              <br />
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">Raison</label>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <div className="entreprise_textfield"></div>{" "}
                <div className="entreprise_textfield">
                  <input type="radio" class="bigger-checkbox" name="" id="" />
                  <label htmlFor="">Non</label>
                </div>
              </div>{" "}
              <br />
              <div className="entreprise_textfield">
                {" "}
                <input type="text" name="" id="" />
              </div>{" "}
            </div>
          
          </div>  <div className="entreprise_textfield">
              {" "}
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">AC</label>{" "}
              </div>
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">Employeur 1.10%</label>{" "}
              </div>
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">Employé 1.10%</label>{" "}
              </div>
              <div className="entreprise_textfield">
                {" "}
                <label htmlFor="">Limite 148'200.00 CHF Enregistrer</label>{" "}
              </div>
            </div><br />
        </form>
      ),
      buttons: [{ name: "Enregistrer", id: "avsButton", className: "new_emp" }],
    },
  };

  return (
    <>
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

export default EntrepriseAssurance;
