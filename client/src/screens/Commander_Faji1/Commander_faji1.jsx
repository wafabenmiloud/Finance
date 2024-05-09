import React from 'react';
import './Commander_faji1.css';
import { Link } from 'react-router-dom';
import Navbar3 from '../../components/navbar3_dash/Navbar3Dash';

const CommanderFaji1 = () => {
    return (
        <>
            <Navbar3 />
            <div className="commander_faji1">
                <h1>Commander Faji</h1>
                <div className="commander1_section1">
                    <h2>Mode de facturation</h2>
                    <div className="section1_wrapper_commander">
                        <ul className="radio_commander">
                            <li><input type="radio" selected /><p>Facturation mensuelle</p> </li>
                            <li><input type="radio" /><p>Facturation  annuelle</p> </li>

                        </ul>
                        <p>* Avec la facturation annuelle, profitez de CHF 120.– de rabais sur le prix standard.</p>
                    </div>
                </div>
                <div className="commander1_section2">
                    <div className="section2_white_bg">
                        <h3>Starter</h3>
                        <hr />
                        <p>Avec offres, factures, comptabilité, et gestion des contacts et des produits</p>
                        <hr />
                        <h4>CHF 35.00  .- /mois¹</h4>  
                        <p><b>1 utilisateur <br /> e-banking inclus</b></p>
                        <p>Facturation annuelle</p>
                    </div>
                    <div className="section2_blue_bg">
                        <h3>Pro</h3>
                        <hr />
                        <p>Avec saisie des temps, gestion des projets et gestion des stocks</p>
                        <hr />
                        <h4>CHF 65.00  .- /mois¹</h4>
                        <p><b>3 utilisateurs <br /> e-banking inclus</b></p>
                        <p>Facturation annuelle</p>

                    </div>
                    <div className="section2_white_bg">
                        <h3>Pro+</h3>
                        <hr />
                        <p>Intègre l’ensemble des fonctionnalités, y compris la comptabilité des salaires (jusqu’à 25 collaborateurs)</p>
                        <hr />
                        <h4>CHF 115.00 .- /mois¹</h4>
                        <p><b>25 utilisateurs <br />  e-banking et comptabilité des salaires inclus <br /> CHF 115,00 / mois</b></p>
                        <p>Facturation annuelle</p>

                    </div>

                </div>
                <div className="commander1_section3">
                    <ul className='wrapper1_section3'>
                        <li><h3>Choisir des options  </h3><p>Jusqu’à 25 collaborateurs pris en charge dans le package Pro+</p></li>
                        <li>
                        <ul className="radio_commander">
                            <li><input type="checkbox" selected />Comptabilité des salaires </li>

                        </ul>
                        <p>inclus dans le package</p>
                        </li>
                    </ul>
                    <hr />
                    <ul>
                        <li><h3>Code de réduction</h3></li>
                        <li>Vous avez un code promotionnel? Saisissez-le ici:</li>
                        <li><input type="text" /></li>
                    </ul>
                    <hr />
                    <ul>
                        <li><h3>Pro+</h3><li><p>(12 x CHF 115,00) </p> &nbsp;&nbsp;CHF 1 380,00</li> </li>
                        <p className='facture_section3'>Total pour l'année prochaine: CHF 1 380,00</p>
                        <p className='facture_section3'>tous les prix s’entendent hors TVA</p>
                    </ul>

                </div>
                <Link className='next_to_faji2' to="/commander2">Etape suivante</Link><br />

            </div>
        </>
    );
}

export default CommanderFaji1;
