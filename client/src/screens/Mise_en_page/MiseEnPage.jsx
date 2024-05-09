import React, { useState } from 'react';
import './MiseEnPage.css';
import Navbar from '../../components/navbar_dash/NavbarDash';
import Footer from '../../components/footer_dash/FooterDash';
import img_import from '../../assets/mise en page/logo import.svg';
import dropdown from '../../assets/mise en page/DropDown.svg';
import img1 from '../../assets/mise en page/1.png';
import img2 from '../../assets/mise en page/2.png';
import img3 from '../../assets/mise en page/3.png';
import img4 from '../../assets/mise en page/4.png';

const MiseEnPage = () => {
    const [activeDropdown, setActiveDropdown] = useState({
        dropdown_color: false,
        dropdown_modele: false,
        dropdown_bg: false,
        dropdown_police: false,
        dropdown_marge: false,
        dropdown_adresse: false,
        dropdown_entete: false,
        dropdown_colonne: false,
        dropdown_colonne2: false,
        dropdown_colonne3: false,
        dropdown_colonne4: false,
        dropdown_colonne5: false,
        dropdown_colonne6: false,
        dropdown_page1: false,
        dropdown_page2: false,
        dropdown_page3: false,
        dropdown_page4: false,
        dropdown_page5: false,
        dropdown_entete2: false,
        dropdown_entete3: false,
        dropdown_entete4: false,
        dropdown_entete5: false,
        dropdown_entete6: false,
        dropdown_entete7: false,
        dropdown_pied: false,
    });

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prevState) => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName],
        }));
    };

    return (
        <>
            <Navbar />
            <div className="mise_en_page">
                <h1>Modèles de document</h1>
                <div className="editor_wrapper">
                    <div className="page_editor">
                        <p>PNG, JPG ou GIF, 1 Mo max.</p>
                        <div className="import_logo">
                            <img src={img_import} alt="img" />
                            <p><b>LOGO</b></p>
                        </div>

                        <a className='import_button' href="/">Importer votre logo</a>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_color')}
                            className={`dropdown_editor dropdown_color ${activeDropdown.dropdown_color ? 'active' : ''}`}
                        >
                            <h4>Couleurs</h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_color ? 'color_active' : 'color_hidden'}`}>
                            <div className="editor_color">
                                <p>Titre</p>
                                <div className="color_div"></div>
                            </div>
                            <div className="editor_color">
                                <p>Lignes</p>
                                <div className="color_div"></div>
                            </div>
                            <div className="editor_color">
                                <p>Texte</p>
                                <div className="color_div"></div>
                            </div>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_modele')}
                            className={`dropdown_editor dropdown_color ${activeDropdown.dropdown_modele ? 'active' : ''}`}
                        >
                            <h4>Éléments du modèle</h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_modele ? 'modele_active' : 'modele_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Afficher l'adresse de votre entreprise</p></li>
                                <li><input type="checkbox" /> <p>Afficher le logo de votre entreprise</p></li>
                                <li><input type="checkbox" /> <p>Insérer une ligne entre les positions</p></li>
                                <li>
                                    <input type="checkbox" /> <p>Afficher les numéros de page <br /> <span>Ex: Page 1 sur 3. Si votre document ne comporte qu’une seule page, le numéro de page ne sera pas affiché.</span> </p>
                                </li>
                                <li><input type="checkbox" /> <p>Afficher les en-tête de colonne uniquement sur la première page </p></li>
                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_bg')}
                            className={`dropdown_editor dropdown_bg ${activeDropdown.dropdown_bg ? 'active' : ''}`}
                        >
                            <h4>Papier à entête et arrière-plan </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_bg ? 'bg_active' : 'bg_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Définir l'arrière-plan du document</p></li>
                                <li><input type="checkbox" /> <p>Définir l'arrière-plan des pages suivantes</p></li>
                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_police')}
                            className={`dropdown_editor dropdown_police ${activeDropdown.dropdown_police ? 'active' : ''}`}
                        >
                            <h4>Polices de caractères </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_police ? 'police_active' : 'police_hidden'}`}>
                            <ul>
                                <li><p>Police</p> <span className='police_dropdown'><p>Arial</p> <img src={dropdown} alt="img" /> </span><span className='police_dropdown'><p>Regular</p> <img src={dropdown} alt="img" /> </span></li>
                                <li><p>Taille</p> <span className='size_editor'><p style={{ width: '40px', borderRight: '1px solid #959799' }}>14</p> <p style={{ width: '20px' }}>px</p> </span></li>
                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_marge')}
                            className={`dropdown_editor dropdown_marge ${activeDropdown.dropdown_marge ? 'active' : ''}`}
                        >
                            <h4>Marges </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_marge ? 'marge_active' : 'marge_hidden'}`}>
                            <ul>

                                <li>
                                    <div className="marges_wrapper"><p>Marge supérieure</p> <span className='size_editor'><p style={{ width: '40px', borderRight: '1px solid #959799' }}>20</p> <p style={{ width: '', fontSize: '10px' }}>mm</p> </span>
                                    </div>
                                    <div className="marges_wrapper"><p>Marge inférieure</p> <span className='size_editor'><p style={{ width: '40px', borderRight: '1px solid #959799' }}>20</p> <p style={{ width: '', fontSize: '10px' }}>mm</p> </span>
                                    </div>

                                </li>
                                <li><div className="marges_wrapper"><p>Marge gauche</p> <span className='size_editor'><p style={{ width: '40px', borderRight: '1px solid #959799' }}>20</p> <p style={{ width: '', fontSize: '10px' }}>mm</p> </span>
                                </div>
                                    <div className="marges_wrapper"><p>Marge droite</p> <span className='size_editor'><p style={{ width: '40px', borderRight: '1px solid #959799' }}>20</p> <p style={{ width: '', fontSize: '10px' }}>mm</p> </span>
                                    </div>
                                </li>
                                <li><input type="checkbox" /> <p>Marges spécifiques pour la première page</p></li>
                                <li><p>Espace par rapport à l’en-tête</p> <span className='size_editor'><p style={{ width: '40px', borderRight: '1px solid #959799' }}>20</p> <p style={{ width: '20px' }}>mm</p> </span></li>
                                <li><input type="checkbox" /> <p>Affichage compact</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_adresse')}
                            className={`dropdown_editor dropdown_adresse ${activeDropdown.dropdown_adresse ? 'active' : ''}`}
                        >
                            <h4>Adresse du destinaire </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_adresse ? 'adresse_active' : 'adresse_hidden'}`}>
                            <ul>


                                <li><p>Destinaire</p></li>
                                <li><input type="radio" /> <p>Marges spécifiques pour la première page</p></li>
                                <li><input type="radio" /> <p>Affichage compact</p></li>
                                <li><p>Positionnement de l'adresse (gauche/droite)</p> <span className='size_editor'><p style={{ width: '40px', borderRight: '1px solid #959799' }}>20</p> <p style={{ width: '20px' }}>mm</p> </span></li>
                                <li><p>Positionnement de l'adresse (haut/bas)</p> <span className='size_editor'><p style={{ width: '40px', borderRight: '1px solid #959799' }}>20</p> <p style={{ width: '20px' }}>mm</p> </span></li>

                            </ul>
                        </div>
                        <hr />
                        <li><input type="checkbox" /> <p>Afficher l'adresse de l'expéditeur</p></li>
                        <hr />
                        <h2>Paramètres pour Factures</h2>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_entete')}
                            className={`dropdown_editor dropdown_entete ${activeDropdown.dropdown_entete ? 'active' : ''}`}
                        >
                            <h4>Options d'en-tête  </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_entete ? 'entete_active' : 'entete_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Afficher la date</p></li>
                                <li><input type="checkbox" /> <p>Afficher «Payable jusqu'au»</p></li>
                                <li><input type="checkbox" /> <p>Afficher l’interlocuteur</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le nom du projet</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de commande client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de TVA</p></li>
                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_colonne')}
                            className={`dropdown_editor dropdown_colonne ${activeDropdown.dropdown_colonne ? 'active' : ''}`}
                        >
                            <h4>Options de colonne  </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_colonne ? 'colonne_active' : 'colonne_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Afficher le numéro de position</p></li>
                                <li><input type="checkbox" /> <p>Afficher la quantité</p></li>
                                <li><input type="checkbox" /> <p>Afficher le prix unitaire</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_page1')}
                            className={`dropdown_editor dropdown_page1 ${activeDropdown.dropdown_page1 ? 'active' : ''}`}
                        >
                            <h4>Options de page </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_page1 ? 'page1_active' : 'page1_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Nom et adresse de l'entreprise </p></li>
                                <li><input type="checkbox" /> <p>Adresse e-mail de l'entreprise</p></li>
                                <li><input type="checkbox" /> <p>Téléphone</p></li>
                                <li><input type="checkbox" /> <p>Coordonnées bancaires</p></li>
                                <li><input type="checkbox" /> <p>Nº de TVA</p></li>
                                <li><input type="checkbox" /> <p>Nº d’identification TVA</p></li>
                                <li><input type="checkbox" /> <p>Mobile</p></li>
                                <li><input type="checkbox" /> <p>Fax</p></li>
                                <li><input type="checkbox" /> <p>Site web</p></li>

                            </ul>
                        </div>
                        <hr />
                        <li><input type="checkbox" /> <p>Joindre un PDF à toutes les factures</p></li>
                        <li><input type="checkbox" /> <p>Afficher BV sur une page séparée</p></li>
                        <hr />
                        <h2>Paramètres pour Relevé de compte</h2>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_entete2')}
                            className={`dropdown_editor dropdown_entete2 ${activeDropdown.dropdown_entete2 ? 'active' : ''}`}
                        >
                            <h4>Options d'en-tête  </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_entete2 ? 'entete2_active' : 'entete2_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Afficher la date </p></li>
                                <li><input type="checkbox" /> <p>Afficher l’interlocuteur</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de TVA</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_pied')}
                            className={`dropdown_editor dropdown_pied ${activeDropdown.dropdown_pied ? 'active' : ''}`}
                        >
                            <h4>Options d'en-tête  </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_pied ? 'pied_active' : 'pied_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Nom et adresse de l'entreprise  </p></li>
                                <li><input type="checkbox" /> <p>Adresse e-mail de l'entreprise</p></li>
                                <li><input type="checkbox" /> <p>Téléphone</p></li>
                                <li><input type="checkbox" /> <p>Coordonnées bancaires</p></li>
                                <li><input type="checkbox" /> <p>Nº de TVA</p></li>
                                <li><input type="checkbox" /> <p>Nº d’identification TVA</p></li>
                                <li><input type="checkbox" /> <p>Mobile</p></li>
                                <li><input type="checkbox" /> <p>Fax</p></li>
                                <li><input type="checkbox" /> <p>Site web</p></li>

                            </ul>
                        </div>
                        <hr />
                        <h2>Paramètres pour Offres</h2>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_entete3')}
                            className={`dropdown_editor dropdown_entete3 ${activeDropdown.dropdown_entete3 ? 'active' : ''}`}
                        >
                            <h4>Options d'en-tête   </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_entete3 ? 'entete3_active' : 'entete3_hidden'}`}>
                            <ul>
                            <li><input type="checkbox" /> <p>Afficher la date</p></li>
                                <li><input type="checkbox" /> <p>Afficher «Payable jusqu'au»</p></li>
                                <li><input type="checkbox" /> <p>Afficher l’interlocuteur</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le nom du projet</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de commande client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de TVA</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_colonne2')}
                            className={`dropdown_editor dropdown_colonne2 ${activeDropdown.dropdown_colonne2 ? 'active' : ''}`}
                        >
                            <h4>Options de colonne  </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_colonne2 ? 'colonne2_active' : 'colonne2_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Afficher le numéro de position</p></li>
                                <li><input type="checkbox" /> <p>Afficher la quantité</p></li>
                                <li><input type="checkbox" /> <p>Afficher le prix unitaire</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_page2')}
                            className={`dropdown_editor dropdown_page2 ${activeDropdown.dropdown_page2 ? 'active' : ''}`}
                        >
                            <h4>Options de page </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_page2 ? 'page2_active' : 'page2_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Nom et adresse de l'entreprise </p></li>
                                <li><input type="checkbox" /> <p>Adresse e-mail de l'entreprise</p></li>
                                <li><input type="checkbox" /> <p>Téléphone</p></li>
                                <li><input type="checkbox" /> <p>Coordonnées bancaires</p></li>
                                <li><input type="checkbox" /> <p>Nº de TVA</p></li>
                                <li><input type="checkbox" /> <p>Nº d’identification TVA</p></li>
                                <li><input type="checkbox" /> <p>Mobile</p></li>
                                <li><input type="checkbox" /> <p>Fax</p></li>
                                <li><input type="checkbox" /> <p>Site web</p></li>

                            </ul>
                        </div>
                        <hr />
                        <h2>Paramètres pour Commandes clients </h2>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_entete4')}
                            className={`dropdown_editor dropdown_entete4 ${activeDropdown.dropdown_entete4 ? 'active' : ''}`}
                        >
                            <h4>Options d'en-tête   </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_entete4 ? 'entete4_active' : 'entete4_hidden'}`}>
                            <ul>
                            <li><input type="checkbox" /> <p>Afficher la date</p></li>
                                <li><input type="checkbox" /> <p>Afficher «Payable jusqu'au»</p></li>
                                <li><input type="checkbox" /> <p>Afficher l’interlocuteur</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le nom du projet</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de commande client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de TVA</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_colonne3')}
                            className={`dropdown_editor dropdown_colonne3 ${activeDropdown.dropdown_colonne3 ? 'active' : ''}`}
                        >
                            <h4>Options de colonne  </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_colonne3 ? 'colonne3_active' : 'colonne3_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Afficher le numéro de position</p></li>
                                <li><input type="checkbox" /> <p>Afficher la quantité</p></li>
                                <li><input type="checkbox" /> <p>Afficher le prix unitaire</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_page3')}
                            className={`dropdown_editor dropdown_page3 ${activeDropdown.dropdown_page3 ? 'active' : ''}`}
                        >
                            <h4>Options de page </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_page3 ? 'page3_active' : 'page3_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Nom et adresse de l'entreprise </p></li>
                                <li><input type="checkbox" /> <p>Adresse e-mail de l'entreprise</p></li>
                                <li><input type="checkbox" /> <p>Téléphone</p></li>
                                <li><input type="checkbox" /> <p>Coordonnées bancaires</p></li>
                                <li><input type="checkbox" /> <p>Nº de TVA</p></li>
                                <li><input type="checkbox" /> <p>Nº d’identification TVA</p></li>
                                <li><input type="checkbox" /> <p>Mobile</p></li>
                                <li><input type="checkbox" /> <p>Fax</p></li>
                                <li><input type="checkbox" /> <p>Site web</p></li>

                            </ul>
                        </div>
                        <hr />
                        <h2>Paramètres pour Bulleteins de livraison </h2>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_entete5')}
                            className={`dropdown_editor dropdown_entete5 ${activeDropdown.dropdown_entete5 ? 'active' : ''}`}
                        >
                            <h4>Options d'en-tête   </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_entete5 ? 'entete5_active' : 'entete5_hidden'}`}>
                            <ul>
                            <li><input type="checkbox" /> <p>Afficher la date</p></li>
                                <li><input type="checkbox" /> <p>Afficher «Payable jusqu'au»</p></li>
                                <li><input type="checkbox" /> <p>Afficher l’interlocuteur</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le nom du projet</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de commande client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de TVA</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_colonne4')}
                            className={`dropdown_editor dropdown_colonne4 ${activeDropdown.dropdown_colonne4 ? 'active' : ''}`}
                        >
                            <h4>Options de colonne  </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_colonne4 ? 'colonne4_active' : 'colonne4_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Afficher le numéro de position</p></li>
                                <li><input type="checkbox" /> <p>Afficher la quantité</p></li>
                                <li><input type="checkbox" /> <p>Afficher le prix unitaire</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_page4')}
                            className={`dropdown_editor dropdown_page4 ${activeDropdown.dropdown_page4 ? 'active' : ''}`}
                        >
                            <h4>Options de page </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_page4 ? 'page4_active' : 'page4_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Nom et adresse de l'entreprise </p></li>
                                <li><input type="checkbox" /> <p>Adresse e-mail de l'entreprise</p></li>
                                <li><input type="checkbox" /> <p>Téléphone</p></li>
                                <li><input type="checkbox" /> <p>Coordonnées bancaires</p></li>
                                <li><input type="checkbox" /> <p>Nº de TVA</p></li>
                                <li><input type="checkbox" /> <p>Nº d’identification TVA</p></li>
                                <li><input type="checkbox" /> <p>Mobile</p></li>
                                <li><input type="checkbox" /> <p>Fax</p></li>
                                <li><input type="checkbox" /> <p>Site web</p></li>

                            </ul>
                        </div>
                        <hr />
                        <h2>Paramètres pour Notesde crédit </h2>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_entete6')}
                            className={`dropdown_editor dropdown_entete6 ${activeDropdown.dropdown_entete6 ? 'active' : ''}`}
                        >
                            <h4>Options d'en-tête   </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_entete6 ? 'entete6_active' : 'entete6_hidden'}`}>
                            <ul>
                            <li><input type="checkbox" /> <p>Afficher la date</p></li>
                                <li><input type="checkbox" /> <p>Afficher «Payable jusqu'au»</p></li>
                                <li><input type="checkbox" /> <p>Afficher l’interlocuteur</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le nom du projet</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de commande client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de TVA</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_colonne5')}
                            className={`dropdown_editor dropdown_colonne5 ${activeDropdown.dropdown_colonne5 ? 'active' : ''}`}
                        >
                            <h4>Options de colonne  </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_colonne5 ? 'colonne5_active' : 'colonne5_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Afficher le numéro de position</p></li>
                                <li><input type="checkbox" /> <p>Afficher la quantité</p></li>
                                <li><input type="checkbox" /> <p>Afficher le prix unitaire</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_page5')}
                            className={`dropdown_editor dropdown_page5 ${activeDropdown.dropdown_page5 ? 'active' : ''}`}
                        >
                            <h4>Options de page </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_page5 ? 'page5_active' : 'page5_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Nom et adresse de l'entreprise </p></li>
                                <li><input type="checkbox" /> <p>Adresse e-mail de l'entreprise</p></li>
                                <li><input type="checkbox" /> <p>Téléphone</p></li>
                                <li><input type="checkbox" /> <p>Coordonnées bancaires</p></li>
                                <li><input type="checkbox" /> <p>Nº de TVA</p></li>
                                <li><input type="checkbox" /> <p>Nº d’identification TVA</p></li>
                                <li><input type="checkbox" /> <p>Mobile</p></li>
                                <li><input type="checkbox" /> <p>Fax</p></li>
                                <li><input type="checkbox" /> <p>Site web</p></li>

                            </ul>
                        </div>
                        <hr />
                        <h2>Paramètres pour Commandes </h2>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_entete7')}
                            className={`dropdown_editor dropdown_entete7 ${activeDropdown.dropdown_entete7 ? 'active' : ''}`}
                        >
                            <h4>Options d'en-tête   </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_entete7 ? 'entete7_active' : 'entete7_hidden'}`}>
                            <ul>
                            <li><input type="checkbox" /> <p>Afficher la date</p></li>
                                <li><input type="checkbox" /> <p>Afficher «Payable jusqu'au»</p></li>
                                <li><input type="checkbox" /> <p>Afficher l’interlocuteur</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le nom du projet</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de commande client</p></li>
                                <li><input type="checkbox" /> <p>Afficher le numéro de TVA</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_colonne6')}
                            className={`dropdown_editor dropdown_colonne6 ${activeDropdown.dropdown_colonne6 ? 'active' : ''}`}
                        >
                            <h4>Options de colonne  </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_colonne6 ? 'colonne6_active' : 'colonne6_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Afficher le numéro de position</p></li>
                                <li><input type="checkbox" /> <p>Afficher la quantité</p></li>
                                <li><input type="checkbox" /> <p>Afficher le prix unitaire</p></li>

                            </ul>
                        </div>
                        <hr />
                        <div
                            onClick={() => toggleDropdown('dropdown_page6')}
                            className={`dropdown_editor dropdown_page6 ${activeDropdown.dropdown_page6 ? 'active' : ''}`}
                        >
                            <h4>Options de page </h4>
                            <img src={dropdown} alt="img" />
                        </div>
                        <div className={` ${activeDropdown.dropdown_page6 ? 'page6_active' : 'page6_hidden'}`}>
                            <ul>
                                <li><input type="checkbox" /> <p>Nom et adresse de l'entreprise </p></li>
                                <li><input type="checkbox" /> <p>Adresse e-mail de l'entreprise</p></li>
                                <li><input type="checkbox" /> <p>Téléphone</p></li>
                                <li><input type="checkbox" /> <p>Coordonnées bancaires</p></li>
                                <li><input type="checkbox" /> <p>Nº de TVA</p></li>
                                <li><input type="checkbox" /> <p>Nº d’identification TVA</p></li>
                                <li><input type="checkbox" /> <p>Mobile</p></li>
                                <li><input type="checkbox" /> <p>Fax</p></li>
                                <li><input type="checkbox" /> <p>Site web</p></li>

                            </ul>
                        </div>

                        
                        

                    </div>
                    <div className="page_document">
                        <img src={img1} alt="img" />
                        <img src={img4} alt="img" />
                        <img src={img3} alt="img" />
                        <img src={img2} alt="img" />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MiseEnPage;
