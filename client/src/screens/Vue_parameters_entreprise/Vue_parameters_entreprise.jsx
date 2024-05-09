import React from 'react';
import './Vue_parameters_entreprise.css';
import Footer from "../../components/footer_dash/FooterDash";
import Navbar from "../../components/navbar_dash/NavbarDash";

const VueParametersEntreprise = () => {
    return (
        <>
        <Navbar/>
            <div className="parameters_entreprise ">
                <h2>Vue d’ensemble des paramètres - Mon entreprise - Paramètres de base</h2>
                <div className="parameters_entreprise_content">
                    <div className="entreprise_content1">
                        <h3>Paramètres de base</h3>
                        <hr />
                        <div className='input_settings'>
                            <label htmlFor="select1">Monnaie standard:</label>
                            <select name="select1" id="">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="text1">Emplacement par défaut: (pour traitement de texte, par ex.)</label>
                            <input type="text" name='text1' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="text1">Unité par défaut pour l’importation de saisie de temps/prestations:</label>
                            <input type="text" name='text1' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="text1">Formatage par défaut pour les adresses:</label>
                            <input type="text" name='text1' />
                        </div>
                        <hr />
                        <h3>Police d’écriture</h3>
                        <hr />
                        <div className='input_settings'>
                            <label htmlFor="select1">Police de caractères par défaut</label>
                            <select name="select1" id="">
                                <option value="" disabled selected>Helvetica</option>
                            </select>
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="text1">Taille de police pour les titres en px (11 par défaut):</label>
                            <input type="text" name='text1' placeholder='11.0' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="text1">Taille de police en px (9 par défaut)</label>
                            <input type="text" name='text1' placeholder='9.0' />
                        </div>


                        <a href="/">Enregistrer</a>

                    </div>
                    
                    <div className="entreprise_content2">
                        <h3>Dépense</h3>
                        <hr />
                        <div className='input_settings'>
                            <label htmlFor="select1">Valeur par défaut pour «Charges compensables»</label>
                            <select name="select1" id="">
                                <option value="" disabled selected>Oui/Non</option>
                            </select>
                        </div>
                        <hr />
                        <h3>Prestation</h3>
                        <hr />
                        <div className='input_settings'>
                            <label htmlFor="select1">Type d'arrondi par défaut</label>
                            <select name="select1" id="">
                                <option value="" disabled selected>Aucun arrondi</option>
                            </select>
                        </div>
                        <hr />
                        <h3>Exportation</h3>
                        <hr />
                        <div className='input_settings'>
                            <label htmlFor="text1">Séparateur CSV:</label>
                            <input type="text" name='text1' placeholder=':' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="select1">Codage de texte</label>
                            <select name="select1" id="">
                                <option value="" disabled selected>UTF-8</option>
                            </select>
                        </div>



                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default VueParametersEntreprise;
