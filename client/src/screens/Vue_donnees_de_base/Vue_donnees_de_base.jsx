import React from 'react';
import './Vue_donnees_de_base.css';
import Navbar from '../../components/navbar_dash/NavbarDash';
import Footer from '../../components/footer_dash/FooterDash';
import { Link } from 'react-router-dom';

const VueDonneesDeBase = () => {
    return (
        <>
            <Navbar />
            <div className="vue_entreprise">
                <h2>Vue d’ensemble des paramètres - Données de base</h2>
                <div className="vue_entreprise_content">
                    <h3>Données de base</h3>
                    <hr />
                    <Link to="/commercialactivity">Activités commerciales</Link> 
                    <Link to="/vueunite">Unités de produit</Link>
                    <hr />
                    <h3>Carnet d'adresses (contacts)</h3>
                    <hr />
                    <Link to="/vuecategorie">Catégories</Link>
                    <Link to="/vuesecteur">Secteurs d’activité</Link>
                    <Link to="/vuetitre">Titre</Link>
                    <Link to="/vueformule">Formules d'appel</Link>
                    <hr />
                    <h3>Autres modules</h3>
                    <hr />
                    <Link to="#">Tâches: Catégories</Link>
                    <Link to="/vuestatut">Projets: Sous-statuts</Link>
                    <Link to="#">Projets: Paramètres des documents</Link>
                    <Link to="/vueprojet">Projets: Taux horaire par utilisateur</Link>
                    <Link to="/vuestockage">Produits: Lieux de stockage</Link>
                    <Link to="/vueemplacement">Produits: Emplacements de stockage</Link>
                    <Link to="/vuegroupeproduit">Produits: Groupes</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default VueDonneesDeBase;
