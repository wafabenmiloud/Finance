import React from 'react';
import Navbar from '../../components/navbar_dash/NavbarDash'
import './Settings.css'

const Settings = () => {
    return (
        <>
            <Navbar />
            <div className='settings'>
                <h1>Données de base</h1>
                <form action="">
                    <h2>Informations de base</h2>
                    <div className="settings_input">


                        <div className='input_settings'>
                            <label htmlFor="company_name">Nom de la société <b style={{ color: 'red' }}>*</b></label>
                            <input type="text" name='company_name' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="juridique">Forme juridique</label>
                            <select name="juridique" id="">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="name">Nom</label>
                            <input type="text" name='name' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="pname">Prénom</label>
                            <input type="text" name='pname' />
                        </div>
                    </div>
                    <hr />
                    <div className="settings_input">
                        <div className='input_settings'>

                            <label htmlFor="address">Adresse</label>
                            <input type="text" name='address' />
                        </div>

                        <div className='input_settings'>

                            <label htmlFor="address2">Complément d'adresse</label>
                            <input type="text" name='address2' />
                        </div>

                        <div className='input_settings'>

                            <label htmlFor="npa">NPA</label>
                            <input type="text" name='npa' />
                        </div>

                        <div className='input_settings'>

                            <label htmlFor="localisation">Localité</label>
                            <input type="text" name='localisation' />
                        </div>

                    </div>
                    <hr />
                    <h2>Coordonnées du contact</h2>
                    <hr />
                    <div className="settings_input">
                        <div className='input_settings'>

                            <label htmlFor="mail">E-mail</label>
                            <input type="email" name='mail' />
                        </div>

                        <div className='input_settings'>

                            <label htmlFor="mobile">Mobile</label>
                            <input type="phone" name='mobile' />
                        </div>

                        <div className='input_settings'>

                            <label htmlFor="phone">Téléphone</label>
                            <input type="phone" name='phone' />
                        </div>

                        <div className='input_settings'>

                            <label htmlFor="fax">Fax</label>
                            <input type="number" name='fax' />
                        </div>

                        <div className='input_settings'>

                            <label htmlFor="skype">Skype</label>
                            <input type="text" name='skype' />
                        </div>
                        <div className="social_media input_settings">
                            <label htmlFor="fb">Social media</label>
                            <div>
                                <input className='settings_fb' type="text" name='fb' placeholder='|' />
                                <input className='settings_x' type="text" name='x' placeholder='|' />
                            </div>

                        </div>
                    </div>
                    <hr />
                    <h2>E-mail pour la boîte de réception</h2>
                    <hr />
                    <div className="settings_input">
                        <div className='input_settings'>

                            <label htmlFor="boite">Code pour boîte de réception</label>
                            <input type="text" name='boite' />
                        </div>

                        <div className='input_settings'>

                            <label htmlFor="boite_mail">E-mail pour la boîte de réception</label>
                            <input type="text" name='boite_mail' />
                        </div>

                    </div>
                    <hr />
                    <h2>Informations supplémentaires</h2>
                    <hr />
                    <div className="settings_input">

                        <div className='input_settings'>

                            <label htmlFor="tva_intra">Numéro de TVA intracommunautaire</label>
                            <input type="number" name='tva_intra' />
                        </div>

                        <div className='input_settings'>

                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="" cols="30" rows="10"></textarea>
                        </div>

                    </div>
                    <button style={{marginLeft:"3%"}} className="submit">
                        Enregistrer
                    </button>
                    <br /><br />
                </form>

            </div>
        </>
    );
}

export default Settings;
