import React from 'react';
import './Commander2.css';
import { Link } from 'react-router-dom';
import Navbar3 from '../../components/navbar3_dash/Navbar3Dash';

const Commander2 = () => {
    return (
        <>
            <Navbar3 />
            <div className="commander2">
                <h1>Commander Faji</h1>
                <div className="commander2_content">
                    <h3>Veuillez vérifier votre adresse de facturation</h3>
                    <p>Merci de bien vouloir renseigner tous les champs (seul le numéro de téléphone est facultatif)</p>
                    <h3>Adresse de facturation</h3>
                    <div className="commander2_wrapper_input">
                        <div className="commander2_input">
                            <label htmlFor="">Nom de l’entreprise</label>
                            <input type="text" />
                        </div>
                        <div className="commander2_input">
                            <label htmlFor="">Prénom</label>
                            <input type="text" />
                        </div>
                        <div className="commander2_input">
                            <label htmlFor="">Nom</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="commander2_wrapper_input">
                        <div className="commander2_input">
                            <label htmlFor="">Adresse</label>
                            <input type="text" />
                        </div>
                        <div className="commander2_input">
                            <label htmlFor="">NPA</label>
                            <input type="text" />
                        </div>
                        <div className="commander2_input">
                            <label htmlFor="">Localité</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="commander2_wrapper_input">
                        <div className="commander2_input">
                            <label htmlFor="">Pays</label>
                            <input type="text" />
                        </div>
                        <div className="commander2_input">
                            <label htmlFor="">Téléphone (facultatif)</label>
                            <input type="text" />
                        </div>
                        <div className="commander2_input">
                            <label htmlFor="">E-mail</label>
                            <input type="text" />
                        </div>
                    </div>
                    <hr />
                    <div className="commander2_wrapper2">
                        <h3>Mode de paiement</h3>
                        <p>Vous pourrez saisir les informations de votre carte de crédit à l’étape suivante</p>
                    </div>
                    <div className="radio_wrapper">
                        <div className="radio_input">
                            <input type="radio" />
                            <label htmlFor=""><p>Facture</p></label>
                        </div>
                        <div className="radio_input">
                            <input type="radio" />
                            <label htmlFor=""><p>Carte de crédit</p></label>
                        </div>
                    </div>
                    <hr />
                    <div className="commander2_wrapper2">
                        <h3>Pro+</h3>
                        <span style={{width:'18%'}}><p style={{display:'inline'}}>(12 x CHF 115,00)</p>CHF 1 380,00</span>
                    </div>
                    <hr />
                    <h3 style={{textAlign:'right'}}>Total pour l'année prochaine: CHF 1 380,00</h3>
                    <p style={{textAlign:'right'}}>tous les prix s’entendent hors TVA</p>




                </div>
                <div className="button_wrapper_commander2">
                    <Link to="/command1">Etape précédente</Link>
                    <Link to="/commander3">Etape suivante</Link>
                </div>
            </div>
        </>
    );
}

export default Commander2;
