import React from 'react';
import './Security.css'
import shield from '../../assets/security/shield.svg';
import { Link } from 'react-router-dom';
import Navbar3 from '../../components/navbar3_dash/Navbar3Dash';

const Security = () => {
    return (
        <>
            <Navbar3 />
            <div className="security_dashboard settings">
                <div className="pw_header">
                    <h1>Sécurité</h1>
                    <a href="/">Retour à l’aperçu</a>
                </div>
                <div className="security_content">
                    <div className="security_image">
                        <img src={shield} alt="img" />
                    </div>
                    <div className="security_text">
                        <h2>Google Authenticator</h2>
                        <p>Renforcez la sécurisation de l’accès à votre compte grâce à l’authentification à deux facteurs.</p>
                        <Link to="/authenticator">activer</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Security;
