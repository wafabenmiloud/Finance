import React from 'react';
import './ContactTous.css'
import Navbar from '../../components/navbar_dash/NavbarDash';
import Footer from '../../components/footer_dash/FooterDash';
import star from '../../assets/Contact/Star.svg';
import x from '../../assets/Contact/X.svg';
import dots from '../../assets/Contact/dots.svg';

const ContactTous = () => {
    return (
        <>
            <Navbar />
            <div className="contact_tous">
                <div className="add_contact">
                    <h1>Contacts</h1>
                    <a href="/">Nouveau Contact</a>
                </div>
                <div className="section1_contacttous">
                    <div className="above_table_contact">
                        <div className="above_table_links">
                            <a href="/">Tous</a>
                            <a href="/">Archivé</a>
                        </div>
                        <input type="text" placeholder='Recherche' />
                    </div>
                    <hr />
                    <div className="table_contact">
                        <div className="thead_contact">
                            <h4>Type</h4>
                            <h4>Nom</h4>
                            <h4>NPA </h4>
                            <h4>Localité </h4>
                            <h4>Pays </h4>
                            <h4>E-mail </h4>
                            <h4>Téléphone </h4>
                        </div>
                        <hr />
                        <div className="input_contact input_contact1">
                            <input type="checkbox" />
                            <select name="entreprise" id="">
                                <option value="Privé" selected> Privé</option>
                                <option value="Entreprise" > Entreprise</option>
                            </select>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <select name="pays" id="">
                                <option value="">Espagne</option>
                                <option value="">Italie</option>
                                <option value="">Allemagne</option>
                            </select>
                            <input type="text" />
                            <input type="phone" />
                            <div className="input_cancel">
                                <img src={star} alt="img" />
                                <img src={x} alt="img" />
                            </div>
                        </div>

                        <div className="input_contact output_contact">
                            <input type="checkbox" />
                            <p>Privé</p>
                            <p>Faji Finance</p>
                            <p>0000</p>
                            <p>Localité</p>
                            <p>Pays</p>
                            <p>support@Faji.com</p>
                            <p>0021671808868</p>
                           
                            <div className="output_img">
                            <img  src={dots} alt="img" />
                            </div>


                        </div>
                        <hr />
                        <div className="input_contact output_contact">
                            <input type="checkbox" />
                            <p>Privé</p>
                            <p>Faji Finance</p>
                            <p>0000</p>
                            <p>Localité</p>
                            <p>Pays</p>
                            <p>support@Faji.com</p>
                            <p>0021671808868</p>
                           
                            <div className="output_img">
                            <img  src={dots} alt="img" />
                            </div>


                        </div>
                        <hr />
                        <div className="input_contact output_contact">
                            <input type="checkbox" />
                            <p>Privé</p>
                            <p>Faji Finance</p>
                            <p>0000</p>
                            <p>Localité</p>
                            <p>Pays</p>
                            <p>support@Faji.com</p>
                            <p>0021671808868</p>
                           
                            <div className="output_img">
                            <img  src={dots} alt="img" />
                            </div>


                        </div>
                        <hr />
                        <div className="input_contact output_contact">
                            <input type="checkbox" />
                            <p>Privé</p>
                            <p>Faji Finance</p>
                            <p>0000</p>
                            <p>Localité</p>
                            <p>Pays</p>
                            <p>support@Faji.com</p>
                            <p>0021671808868</p>
                           
                            <div className="output_img">
                            <img  src={dots} alt="img" />
                            </div>


                        </div>
                        <hr />
                    </div>

                </div>

            </div>
            <Footer />

        </>
    );
}

export default ContactTous;
