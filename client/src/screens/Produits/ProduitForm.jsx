import React from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function ProduitForm() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="ventes">
        <div className="ventes_title">
          <h1>Nouveau produit</h1>
          <a href="/" className="ventes_title_btn">
            Nouveau produit
          </a>
        </div>

        <section id="ventes_form">
          <section>
            <h4>Données de base</h4>
            <div className="divider"></div>
            <form onSubmit={handleContactSubmit}>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Type de produit</label>
                  <input type="number" name="num_contact" />
                </div>
                <div className="contact_textfield">
                  <label>
                    Interlocuteur <span>*</span>
                  </label>
                  <select name="pays">
                    <option value="">Interlocuteur name</option>
                  </select>
                </div>
              </div>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Code produit </label>
                  <input type="number" name="num_contact" />
                </div>
                <div className="contact_textfield">
                  <label>Groupe</label>
                  <select name="pays">
                    <option value="">Aucune entrée trouvé</option>
                  </select>
                </div>
              </div>
              <div className="contact_textfield_row">
                <div className="contact_textfield" style={{ width: "50%" }}>
                  <label>
                    Désignation produit <span>*</span>
                  </label>
                  <input type="text" name="entreprise" />
                </div>
              </div>

              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Description</label>
                  <textarea style={{ width: "95%" }} name="address" rows={10} />
                </div>
              </div>
            </form>
          </section>
          <section>
            <h4>Données de base</h4>
            <div className="divider"></div>
            <form onSubmit={handleContactSubmit}>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Fournisseur</label>
                  <input
                    type="number"
                    name="num_contact"
                    style={{ width: "95%" }}
                  />
                </div>
              </div>
              <div className="contact_textfield_row">
                {" "}
                <div className="contact_textfield">
                  <label>Désignation produit</label>
                  <input type="text" name="entreprise" />
                </div>
                <div className="contact_textfield">
                  <label>Code produit (fournisseur)</label>
                  <input type="number" name="num_contact" />
                </div>
              </div>

              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Description produit (fournisseur)</label>
                  <textarea style={{ width: "95%" }} name="address" rows={10} />
                </div>
              </div>
            </form>
          </section>

          <section>
            <h4>Indications de prix</h4>
            <div className="divider"></div>
            <form onSubmit={handleContactSubmit}>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Prix d'achat</label>
                  <input type="text" name="entreprise" />
                </div>
                <div className="contact_textfield">
                  <label>+ majoration en %</label>
                  <input type="text" name="complement" />
                </div>
              </div>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Prix de vente</label>
                  <input type="text" name="entreprise" />
                </div>
                <div className="contact_textfield">
                  <label>Marge bénéficiaire en %</label>
                  <input type="text" name="complement" />
                </div>
              </div>
              <div className="divider"></div>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Monnaie</label>
                  <select name="" id="">
                                  <option value="">BRL</option>
                                  <option value="">CHF</option>
                                  <option value="">CNY</option>
                                  <option value="">EUR</option>
                                  <option value="">GBP</option>
                                  <option value="">JPY</option>
                                </select>
                </div>
                <div className="contact_textfield">
                  <label>Unité</label>
                  <select name="pays">
                    <option value="">pce</option>
                    <option value="">h</option>
                  </select>
                </div>
              </div>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Compte de produits</label>
                  <select name="langue">
                    <option value="">3200 - Ventes de marchandise</option>
                    <option value="">3800 - Escomptes</option>
                    <option value="">6999 - Gains de change</option>
                  </select>
                </div>
                <div className="contact_textfield">
                  <label>TVA chiffre d’affaires</label>
                  <select name="langue">
                    <option value="">CR25 - Chiffre d’affaire (TR) 2.50%</option>
                    <option value="">NC77 - Chiffre d’affaire (TN) 7.70%</option>
                    <option value="">CEX - Exportation/Exonéré 0.00%</option>
                  </select>
                </div>
              </div>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Compte de charges</label>
                  <select name="langue">
                    <option value="">4200 - Achats de marchandise</option>
                    <option value="">4900 - Escompte</option>
                    <option value="">6945 - Différence darrondi</option>
                    <option value="">6949 - perte de change</option>
                  </select>
                </div>
                <div className="contact_textfield">
                  <label>TVA impôt préalable</label>
                  <select name="langue">
                    <option value="">DOUAM - Entréemat./ser.100.00%</option>
                  </select>
                </div>
              </div>
            </form>
          </section>
          <section>
            <form onSubmit={handleContactSubmit}>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Description produit (fournisseur)</label>
                  <textarea name="address" rows={10} style={{ width: "95%" }} />
                </div>
              </div>
            </form>
          </section>
          <div
            style={{
              padding:'3%'
            }}
          >
            <button className="submit">Enregistrer</button>
          </div>
        </section>
      </div>
    </>
  );
}
