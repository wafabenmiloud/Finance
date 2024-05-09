import React from 'react';
import './Vue_parametres.css';
import icon1 from '../../assets/Parameters/1.svg'
import icon2 from '../../assets/Parameters/2.svg'
import icon3 from '../../assets/Parameters/3.svg'
import icon4 from '../../assets/Parameters/4.svg'
import icon5 from '../../assets/Parameters/5.svg'
import icon6 from '../../assets/Parameters/6.svg'
import icon7 from '../../assets/Parameters/7.svg'
import icon8 from '../../assets/Parameters/8.svg'

import Navbar from "../../components/navbar_dash/NavbarDash";
import { Link } from 'react-router-dom';

const VueParametres = () => {
    return (
        <>
            <Navbar />
            <div className="analyse_ventes">
                <h2>Vue d’ensemble des paramètres</h2>
                <div className="analyse_ventes_section">
                    <Card
                        icon={icon1}
                        title="Mon entreprise"
                        body="Modifiez les données de votre entreprise et définissez votre logo, vos modèles de documents ainsi que la monnaie et le taux de TVA par défaut."
                        className="ventes_light_bg"
                        link="/vueentreprise"
                    />
                    <Card
                        icon={icon2}
                        title="Données de base"
                        body="Gérez les unités de produit, les activités et les données d'entreprise spécifiques à certaines fonctions comme les statuts ou catégories."
                        className="ventes_dark_bg"
                        link="/vuedonneesdebase"
                    />

                    <Card
                        icon={icon3}
                        title="Centre d'envoi"
                        body="Suivez vos documents envoyés et consultez les informations relatives aux types d'envoi et aux statuts."
                        className="ventes_light_bg"
                        link="/vuecentreenvoi"
                    />
                    <Card
                        icon={icon4}
                        title="Packages, options et utilisateurs"
                        body="Personnalisez votre package en ajoutant des fonctionnalités spécifiques, intégrez des options comme la comptabilité des salaires et gérez les utilisateurs ainsi que les autorisations."
                        className="ventes_dark_bg"
                        link="/vuepackages"
                    />
                    <Card
                        icon={icon5}
                        title="Apps et API"
                        body="Configurez vos apps et intégrations, et générez une clé API pour connecter des applications externes."
                        className="ventes_light_bg"
                        link="/vueappsapi"
                    />
                    <Card
                        icon={icon6}
                        title="Comptabilité"
                        body="Enregistrez votre plan comptable et les paramètres de TVA, et définissez les taux de TVA."
                        className="ventes_dark_bg"
                        link="/vuecompt"
                    />
                    <Card
                        icon={icon7}
                        title="Fonctions et modules"
                        body="Définissez les paramètres par défaut de vos documents (langue, monnaie, TVA, tranches de numéros, délais de paiement, niveaux de relance, etc.)"
                        className="ventes_light_bg "
                        link="/vuefonctions"
                    />
                    <Card
                        icon={icon8}
                        title="Importation / Exportation"
                        body="Importez vos données existantes (contacts et produits, par ex.) ou exportez des données depuis Faji pour un traitement ultérieur dans des systèmes externes (Excel, CSV)."
                        className="ventes_dark_bg none"
                        link="/dataimport"
                    />
                </div>

            </div>
        </>
    );
}

export default VueParametres;
const Card = ({ icon, title, body, className,link}) => {
    return (<Link
        to={link}
    > <div className={className}>
        <div className="ventes_card_col1">
            <img src={icon} alt="img" />
        </div>

        <div className="ventes_card_col2">
            <h5>{title}</h5>
            <h6>{body}</h6>
        </div>
    </div></Link>

    );
};
