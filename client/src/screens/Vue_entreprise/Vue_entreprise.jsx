import React from 'react';
import Navbar from '../../components/navbar_dash/NavbarDash';
import Footer from '../../components/footer_dash/FooterDash';
import './Vue_entreprise.css';
import { Link } from 'react-router-dom';


const VueEntreprise = () => {
    return (
        <>
            <Navbar />
            <div className="vue_entreprise">
                <h2>Vue d’ensemble des paramètres - Mon entreprise</h2><br />
                <div className="vue_entreprise_content">
                    <h3>Informations relatives à l’entreprise</h3>
                    <hr />
                    <Link to="/settings">Profil de l’entreprise</Link> 
                    <Link to="/vueparametersentreprise">Paramètres de base</Link>
                    <hr />
                    <h3>Logo</h3>
                    <hr />
                    <Link to="/downloadlogo">Logo pour l’identification dans Faji</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default VueEntreprise;
