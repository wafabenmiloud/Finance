import React from 'react';
import './VosEntreprise.css';
import logo from '../../assets/vos entreprise/logo.svg';
import Navbar3 from '../../components/navbar3_dash/Navbar3Dash';
import { Link } from 'react-router-dom';


const VosEntreprise = () => {
    return (
        <>
        <Navbar3/>
            <div className="vos_entreprise">
                <h1>Vos entreprises</h1>
                <div className="company_name">
                    <div className="company_logo">
                        <img src={logo} alt="img" />
                        <b>LOGO</b>
                    </div>
                    <Link to="/userdash"> <div className="company_text">
                        <h2>Nom de l’entreprise</h2>
                        <p>Dernière utilisation le vendredi, 1 septembre 2023</p>
                    </div></Link>

                   

                </div>
            </div>
        </>
    );
}

export default VosEntreprise;
