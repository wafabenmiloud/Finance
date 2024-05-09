import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import "./Api.css";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Api  ()  {
    return (
        <>
            <Navbar/>
            <div className="api_title">
                <h1>API</h1>
            <p>L'API de Faji permet aux développeurs de connecter leur logiciel à Faji.</p>
            </div>
            
            <div className="api_section">
                <h2><span>Vous trouverez d'autres informations dans la </span>documentation sur l'API.</h2>
            </div>
            <BTTButton/>

            <Footer/>
        </>
    );
}
