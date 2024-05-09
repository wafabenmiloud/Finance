import React from 'react';
import Navbar from '../../components/navbar_dash/NavbarDash';
import Footer from '../../components/footer_dash/FooterDash';
import img_import from '../../assets/mise en page/logo import.svg';
import './Download_logo.css';


const DownloadLogo = () => {
    return (
        <>
        <Navbar/>
            <div className="parameters_entreprise">
                <h2>Vue d’ensemble des paramètres - Mon entreprise - Télécharger logo</h2>
                <div className="parameters_entreprise_content">
                    <div className="entreprise_content1">
                        <h3>Logo actuel</h3>
                        <hr />
                        <div className="logo_import">
                            <p>PNG, JPG ou GIF, 1 Mo max.</p>
                            <div className="logo_box">
                                <img src={img_import} alt="img" />
                                <p>LOGO</p>
                            </div>
                            <p>Aucun logo personnel disponible</p>
                        </div>



                    </div>
                    <div className="entreprise_content2">
                        <h3>Télécharger un logo</h3>
                        <hr />
                        <div className='input_settings'>
                            <label htmlFor="select1">Vous pouvez télécharger un fichier PNG ou JPG (taille max.: 1 Mo).</label>
                            <select name="select1" id="">
                                <option value="" disabled selected>Aucun fichier choisi</option>
                            </select>
                        </div>
                        <p>En cliquant sur «Enregistrer», vous confirmez avoir le droit d'utiliser cette photo et ne pas violer nos conditions d'utilisation.</p>

                    </div>
                </div>
                <div className='entreprise_btnns'><a className='save_logo'  href="/">Enregistrer</a>
                <a className='delete_logo' href="/">Supprimer le logo actuel</a></div>
                
            </div>
            <Footer/>
        </>
    );
}

export default DownloadLogo;
