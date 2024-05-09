import React from 'react';
import './DataImport.css';
import Navbar from '../../components/navbar_dash/NavbarDash';
import Footer from '../../components/footer_dash/FooterDash';

const DataImport = () => {
    return (
        <>
            <Navbar />
            <div className="importation">
                <h1>Importation / Exportation</h1>
                <div className="import_wrap">
                    <div className="import">
                        <h2>Importation</h2>
                        <hr />
                        <label htmlFor="import_contact">Importer des contacts (.xlsx)</label>
                        <input type="text" name='import_contact' />

                    </div>
                    <div className="export">
                        <h2>Exportation</h2>
                        <hr />
                        <p>Pour toutes les exportations, il est recommandé d’utiliser la fonction «Exporter la liste actuelle» dans les listes individuelles. Pour en savoir plus sur cette fonction, merci de bien vouloir consulter notre portail d'assistance.</p>
                        <h2>Contacts</h2>
                        <div className="import_links">
                            <a href="/">Liste de contacts (.csv)</a>
                            <a href="/">Publipostage (.csv)</a>
                            <a href="/">Publipostage (.xlsx)</a>
                        </div>
                        <h2>Ventes</h2>
                        <div className="import_links">

                        <a href="/">Assistant d'exportation pour Excel et CSV</a>
                        </div>

                        <h2>Produits</h2>
                        <div className="import_links">

                            <a href="/">Produits en stock (.csv)</a>
                            <a href="/">Mouvement de stock (.csv)</a>
                        </div>
                        <h2>Tâches</h2>
                        <div className="import_links">

                        <a href="/">Liste de tâches (.csv)</a>
                        </div>

                        <h2>Temps</h2>
                        <div className="import_links">

                        <a href="/">Entrées de saisie de temps (.csv)</a>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default DataImport;
