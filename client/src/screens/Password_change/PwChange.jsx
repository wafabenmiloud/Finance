import React from 'react';
import './PwChange.css';
import Navbar3 from '../../components/navbar3_dash/Navbar3Dash';

const PwChange = () => {
    return (
        <>
            <Navbar3 />
            <div className="pw_change settings">
                <div className="pw_header">
                    <h1>Modifier le mot de passe</h1>
                    <a href="/">Retour à l’aperçu</a>
                </div>
                <form action="">
                    <div className="pw_form settings_input">
                        <div className='input_settings'>
                            <label htmlFor="company_name">Mot de passe actuel <b style={{ color: 'red' }}>*</b></label>
                            <input type="text" name='company_name' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="company_name">Nouveau mot de passe <b style={{ color: 'red' }}>*</b></label>
                            <input type="text" name='company_name' />
                        </div>
                        <div className='input_settings'>
                            <label htmlFor="company_name">Répéter le nouveau mot de passe <b style={{ color: 'red' }}>*</b></label>
                            <input type="text" name='company_name' />
                        </div>

                    </div>
                    <button className="submit" style={{marginLeft:"5%"}}>Modifier le mot de passe</button>
                    <br /><br />

                </form>
            </div>
        </>
    );
}

export default PwChange;
