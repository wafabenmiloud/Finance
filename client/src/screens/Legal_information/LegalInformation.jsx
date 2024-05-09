import React from 'react';
import './LegalInformation.css';
import laptopImg from '../../assets/images/advantages laptop.png';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BTTButton from "../../components/BTTButton/BTTButton";


const LegalInformation = () => {
    return (
        <>
        <Navbar/>
            <div className="legalinformation">
                <div className="section1">
                    <div className="text">
                        <div className="rectangle"></div>
                        <h2>Editeur: <span style={{ color: '#25A7FF' }}> Faji AG</span></h2>
                        <p>+216 71 808 862 </p>
                        <p>contact@faji.com.tn</p>
                        <p>FAJI Finance – 71 , Rue Alain Savary, 1003 Tunis, Tunisie.</p>

                    </div>
                    <img className="image" src={laptopImg} alt="img" />
                </div>
            </div>      <BTTButton/>
<br /><br />
            <Footer/>
        </>
    );
}

export default LegalInformation;
