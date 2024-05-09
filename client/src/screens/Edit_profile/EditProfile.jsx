import React from 'react';
import './EditProfile.css';
import img_import from '../../assets/mise en page/logo import.svg';
import Navbar3 from '../../components/navbar3_dash/Navbar3Dash';


const EditProfile = () => {
    return (
        <>
            <Navbar3/>
            <div className="pw_change settings">
                <div className="pw_header">
                    <h1>Modifier le profil et la langue</h1>
                    <a href="/">Retour à l’aperçu</a>
                </div>
                <form action="">
                    <div className="pw_form settings_input">
                        <div className='input_settings'>
                            <label htmlFor="appel">Formule d'appel <b style={{ color: 'red' }}>*</b></label>
                            <input type="text" name='appel' placeholder='Madame/Monsieur' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="pnom">Prénom <b style={{ color: 'red' }}>*</b></label>
                            <input type="text" name='pnom' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="nom">Nom de famille <b style={{ color: 'red' }}>*</b></label>
                            <input type="text" name='nom' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="mail">Adresse e-mail <b style={{ color: 'red' }}>*</b></label>
                            <input type="text" name='mail' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="langue">Langue</label>
                            <select name="langue" id="">
                                <option value="">Français</option>
                                <option value="">Deutsch (schweiz)</option>
                                <option value="">Deutsch (Deutschland)</option>
                                <option value="">Deutsch (Osterreich)</option>
                                <option value="">English</option>
                                <option value="">Italiano</option>
                            </select>
                        </div>

                    </div>

                    <div className="change_profile_image">
                    <div className="import_logo">
                            <img src={img_import} alt="img" />
                            <p><b>LOGO</b></p>
                        </div>
                        <p>Modifier l’image du profil</p>

                    </div>
<button className='submit' style={{marginLeft:"5%"}}>Enregistrer</button>
<br /><br />
                </form>
            </div>
        </>
    );
}

export default EditProfile;
