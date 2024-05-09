import React from "react";
import Navbar from "../../components/navbar_dash/NavbarDash";

export default function TaskForm() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="ventes">
        <div className="ventes_title">
          <h1>Nouvelle tâche</h1>
       
        </div>

        <section id="tasks_form">
          <section>
            <h4>Données de base</h4>
            <div className="divider"></div>
            <form onSubmit={handleContactSubmit}>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>
                    Interlocuteur <span>*</span>
                  </label>
                  <input type="text" style={{ width: "95%" }} />
                </div>
              </div>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Interlocuteur </label>
                  <input type="number" name="num_contact" />
                </div>
                <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "100%",
                            }}
                          >
                            <label>A traiter avant le </label>
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
                               
                                  className="image_placeholder"
                                  placeholder="Du"
                                />
                              </div>
                              <div className="contact_textfield">
                                <input
                                  type="text"
                                  name="phone2"
                               
                                  className="image_placeholder"
                                  placeholder="Au"
                                />
                              </div>
                            </div>
                          </div>
              </div>
          

              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Remarques</label>
                  <textarea style={{ width: "95%" }} name="address" rows={10} />
                </div>
              </div>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>
                  Catégorie
                  </label>
                  <input type="text" style={{ width: "95%" }} />
                </div>
              </div>
              <div className="contact_textfield_row">
                <div className="contact_textfield">
                  <label>Priorité </label>
                  <input type="number" name="num_contact" />
                </div>
                <div className="contact_textfield">
                  <label>Durée prévue </label>
                  <input type="number" name="num_contact" />
                </div>
               
              </div>
            </form>
            <br /><br />
          </section>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "50px" }}
          >
         
            <section>
              <h4>Association</h4>
              <div className="divider"></div>
              <form onSubmit={handleContactSubmit}>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Contact</label>
                    <input
                      type="number"
                      name="num_contact"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Personne de contact</label>
                    <input
                      type="number"
                      name="num_contact"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Projet</label>
                    <input
                      type="number"
                      name="num_contact"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Package de travail</label>
                    <input
                      type="number"
                      name="num_contact"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
              
              </form>
            </section>
   <section>
              <h4>Rappel e-mail</h4>
              <div className="divider"></div>
              <form onSubmit={handleContactSubmit}>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Type</label>
                    <input
                      type="number"
                      name="num_contact"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
                <div className="contact_textfield_row">
                  <div className="contact_textfield">
                    <label>Temps <span>*</span></label>
                    <input
                      type="number"
                      name="num_contact"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
               
               
              
              </form>
            </section>
          
          </div>

          <div
            style={{
              padding: "3%",
            }}
          >
            <button className="submit">Enregistrer</button>
          </div>
        </section>
      </div>
    </>
  );
}
