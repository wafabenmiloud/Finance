import React from "react";
import './advantages.css';
import laptopImg from '../../assets/images/advantages laptop.png'

const Advantages = () => {
    return (
        <main>

            <div className="section1">
                <div className="text">
                    <div className="rectangle"></div>
                    <h2>Pourquoi <span style={{ color: '#25A7FF' }}> Faji   ?</span></h2>
                    <p>Quelle est la valeur ajoutée de Faji   ? Pour la définir au mieux, nous avons posé la question à nos clients   .Plus de 60'000 utilisateurs ne peuvent pas mentir  . Voici les faits que nous avons rassemblés   .Les clients Faji économisent en moyenne près de 6'000 CHF par an</p>

                </div>
                <img className="image" src={laptopImg} alt="img" />
            </div>
            <div className="section2">
                <div className="cards_advantages">
                    <div className="card_advantages bike">
                        <div className="value">
                            <h3>UN GAIN DE TEMPS DE</h3>
                            <p>3,3h</p>
                        </div>
                        <div className="description">
                            <h4>Plus de temps libre !</h4>
                            <p>Grâce à Faji, nos clients réduisent leur travail administratif de 3,3 heures par semaine  !  </p>

                        </div>
                    </div>
                    <div className="card_advantages coins">
                        <div className="value">
                            <h3>UN DÉLAI DE PAIEMENT REDUITE</h3>
                            <p>26%</p>
                        </div>
                        <div className="description">
                            <h4>Pourquoi attendre longtemps  ?</h4>
                            <p>Le délai de paiement des factures émises par les utilisateurs de Faji est réduit de 26% en moyenne   .</p>

                        </div>
                    </div>
                    <div className="card_advantages clock">
                        <div className="value">
                            <p>38%</p>
                            <h3>MOIN D'EFFORT</h3>
                        </div>
                        <div className="description">
                            <h4>Adieu la perte de temps</h4>
                            <p>Faji permet de réduire la charge administrative de 38% en moyenne   .</p>

                        </div>
                    </div>
                    <div className="card_advantages rocket">
                        <div className="value">
                            <h3>UN TRAITEMENT DES COMMANDES</h3>
                            <p>39%</p>
                            <h3>PLUS RAPIDE</h3>
                        </div>
                        <div className="description">
                            <h4>La formule 1 des logiciels d'entreprise</h4>
                            <p>Grâce à Faji, le temps de traitement des commandes est réduit de 39%   .</p>

                        </div>
                    </div>
                    <div className="card_advantages calculator">
                        <div className="value">
                            <h3>UNE COMPTABILIÉ ACCÉLÉRÉE DE</h3>
                            <p>44%</p>
                        </div>
                        <div className="description">
                            <h4>Plus de temps pour ce que vous aimez vraiment faire</h4>
                            <p>Faji permet à ses utilisateurs de réduire le temps consacré à la comptabilité de 44%   .</p>

                        </div>
                    </div>
                    <div className="card_advantages money_box">
                        <div className="value">
                            <h3>DES FRAIS FIDUCIARES RÉDUITES DE</h3>
                            <p>33%</p>
                        </div>
                        <div className="description">
                            <h4>Alimentez votre tirelire</h4>
                            <p>Chaque année, les clients Faji réduisent les frais de comptable de 33%   .</p>

                        </div>
                    </div>
                    <div className="card_advantages group">
                        <div className="value">
                            <h3>VOTRE COMPTABILITÉ DE LA PAIE ACCÉLÉRÉE DE</h3>
                            <p>38%</p>
                        </div>
                        <div className="description">
                            <h4>That's how we (pay)roll !</h4>
                            <p>Grâce à la comptabilité des salaires de Faji, les utilisateurs du logiciel traitent leurs salaires 38% plus vite qu’auparavant en moyenne   .</p>

                        </div>
                    </div>
                    <div className="card_advantages handshake ">
                        <div className="value">
                            <p>29%</p>
                            <h3>DE TEMPS EN PLUS POUR LE SUIVI DE VOS CLIENTS</h3>
                        </div>
                        <div className="description">
                            <h4>Plus proche de vos clients</h4>
                            <p>Les clients Faji consacrent en moyenne 29% de temps en plus pour le suivi de leur clientèle   .</p>

                        </div>
                    </div>
                    <div className="card_advantages bank">
                        <div className="value">
                            <p>2,4h</p>
                            <h3>DE COMPTABILITÉ BONCAIRES EN MOIN</h3>
                        </div>
                        <div className="description">
                            <h4>Vive l'automatisation !</h4>
                            <p>Grâce aux interfaces mises en place par Faji avec diverses banques, le travail de saisie est réduit de 2,4 heures – chaque semaine   .</p>

                        </div>
                    </div>
                    <div className="card_advantages stocks">
                        <div className="value">
                            <h3>DE MEILLEURS RÉSULTATS POUR</h3>
                            <p>67%</p>
                            <h3>DE PME</h3>
                        </div>
                        <div className="description">
                            <h4>De meilleurs résultats pour les PME</h4>
                            <p>2 sur 3 des clients Faji ont de meilleurs résultats depuis qu'ils travaillent avec le logicielde comptabilité   .</p>

                        </div>
                    </div>


                </div>
            </div>

        </main>
    )
}
export default Advantages; 