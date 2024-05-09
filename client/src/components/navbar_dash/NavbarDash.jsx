import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarDash.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu,AiOutlineSetting } from "react-icons/ai";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

import home from "../../assets/navbar/Home.svg";
import salaries from "../../assets/navbar/salaries.svg";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";

export default function Navbar() {
  const navRef = useRef();
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (event) => {
    setDropdown((current) => !current);
  };
  const [dropdown1, setDropdown1] = useState(false);
  const handleDropdown1 = (event) => {
    setDropdown1((current) => !current);
  };
  const [dropdown2, setDropdown2] = useState(false);
  const handleDropdown2 = (event) => {
    setDropdown2((current) => !current);
  };
  const [dropdown3, setDropdown3] = useState(false);
  const handleDropdown3 = (event) => {
    setDropdown3((current) => !current);
  };
  const [dropdown4, setDropdown4] = useState(false);
  const handleDropdown4 = (event) => {
    setDropdown4((current) => !current);
  };
  const [dropdown5, setDropdown5] = useState(false);
  const handleDropdown5 = (event) => {
    setDropdown5((current) => !current);
  };
  const [dropdown6, setDropdown6] = useState(false);
  const handleDropdown6 = (event) => {
    setDropdown6((current) => !current);
  };
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
      closeModal2();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);
  useEffect(() => {
    if (isModalOpen2) {
      document.body.classList.add("modal-open2");
    } else {
      document.body.classList.remove("modal-open2");
    }
  }, [isModalOpen2]);
  
  return (
    <div className="nav1_dash">
      <div className="info_wrapper">
        <div className="info">
          <div className="info_phone">
            <Link to="/dash">
              <img src={logo} alt="img" />
            </Link>
          </div>

          <div className="info_list">
           
            <Link onClick={openModal} className="info_link">
              <BsFillPersonFill color="white" className="user" /> User Name{" "}
              <GoTriangleDown color="white" />
            </Link>{" "}
            <Link onClick={openModal2} className="info_link">
              <AiOutlineSetting color="white" className="settin" /> Paramètres{" "}
              <GoTriangleDown color="white" />
            </Link>{" "}
         
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="User Menu"
            className="modal-content"
            ariaHideApp={false}
          >
            <div className="modal-content-inner">
              {/* Add your modal content here */}
              <Link to="/passwordedit">Modifier le mot de passe</Link>
              <hr />
              <Link to="/profileedit">Modifier le profil et la langue</Link>
              <hr />
              <Link to="/security">Sécurité</Link>
              <hr />
              <Link to="">Déconnexion</Link>
            </div>
          </Modal>
        </div>
      )}
      {isModalOpen2 && (
         <div className="modal-overlay" onClick={handleOverlayClick}>
         <Modal
           isOpen={isModalOpen2}
           onRequestClose={closeModal2}
           contentLabel="User Menu"
           className="modal-content"
           ariaHideApp={false}
         >
           <div className="modal-content-inner">
             {/* Add your modal content here */}
             <Link to="/vueparameters">Vue d’ensemble des paramètres</Link>
             <hr />
             <Link to="/settings">Profil de l’entreprise</Link>
             <hr />
             <Link to="/vuemodifier">Modèles de document</Link>
             <hr />
             <Link to="/vuepackages">Pack/ Apps/ Utilisateurs</Link>
             <hr />
             <Link to="/dataimport">Importation / Exportation</Link>
             <hr />
             <Link to="/vuecategorie">Catégories de contact</Link>
             <hr />
             <Link to="/commercialactivity">Activités commerciales</Link>
           </div>
         </Modal>
       </div>
      )}
      <>
        <nav ref={navRef}>
          <ul className="navbar__menu navbar_menu1 ">
            <div className="navbar__menu navbar_menu2">
              <li>
                <Link className="navbar__link" to="/dash">
                  <img src={home} alt="img" />
                </Link>
              </li>
              <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                <Link
                  style={{ width: "125%" }}
                  className="navbar__link"
                  to="/contacttous"
                >
                  Contact
                  {dropdown ? (
                    <GoTriangleUp className="dropdown__icon" />
                  ) : (
                    <GoTriangleDown className="dropdown__icon" />
                  )}
                </Link>
                {dropdown && (
                  <ul className="dropdown">
                    <div className="col border">
                      <li>
                        <Link className="navbar__link" to="/contacttous">
                          Tous
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link noborder" to="/contacttous">
                          Archivé
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link noborder" to="/showdetails">
                          Show Details
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>
              <li onMouseEnter={handleDropdown1} onMouseLeave={handleDropdown1}>
                <Link className="navbar__link" to="/offres">
                  Ventes
                  {dropdown1 ? (
                    <GoTriangleUp className="dropdown__icon" />
                  ) : (
                    <GoTriangleDown className="dropdown__icon" />
                  )}
                </Link>
                {dropdown1 && (
                  <ul className="dropdown">
                    <div className="col border">
                      <li>
                        <Link className="navbar__link" to="/offres">
                          Offres
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link " to="/ventescomm">
                          Commandes clients
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link " to="/ventes">
                          Factures
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link " to="/credits">
                          Crédit
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link " to="/analysevente2">
                          Analyse
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="navbar__link noborder"
                          to="/analysevente"
                        >
                          Autres
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>

              <li
                onMouseEnter={handleDropdown2}
                onMouseLeave={handleDropdown2}
                className="menu__item"
              >
                <Link className="navbar__link" to="/projets">
                  Projets
                  {dropdown2 ? (
                    <GoTriangleUp className="dropdown__icon" />
                  ) : (
                    <GoTriangleDown className="dropdown__icon" />
                  )}
                </Link>
                {dropdown2 && (
                  <ul className="dropdown">
                    <div className="col border">
                      <li>
                        <Link className="navbar__link" to="/projets">
                          Projet
                        </Link>
                      </li>

                      <li>
                        <Link className="navbar__link noborder" to="/projets2">
                          Temps
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={handleDropdown3}
                onMouseLeave={handleDropdown3}
                className="menu__item"
              >
                <Link className="navbar__link" to="/produits">
                  Produits
                  {dropdown3 ? (
                    <GoTriangleUp className="dropdown__icon" />
                  ) : (
                    <GoTriangleDown className="dropdown__icon" />
                  )}
                </Link>
                {dropdown3 && (
                  <ul className="dropdown">
                    <div className="col border">
                      <li>
                        <Link className="navbar__link" to="/produits">
                          Produit
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link" to="/produits2">
                          Entrées/Sortie
                        </Link>
                      </li>

                      <li>
                        <Link className="navbar__link noborder" to="/produits3">
                          Niveaux de stocks
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={handleDropdown4}
                onMouseLeave={handleDropdown4}
                className="menu__item"
              >
                <Link className="navbar__link" to="/achatcomm">
                  Achats
                  {dropdown4 ? (
                    <GoTriangleUp className="dropdown__icon" />
                  ) : (
                    <GoTriangleDown className="dropdown__icon" />
                  )}
                </Link>
                {dropdown4 && (
                  <ul className="dropdown">
                    <div className="col border">
                      <li>
                        <Link className="navbar__link" to="/achatcomm">
                          Commandes
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link" to="/achatfact">
                          Factures fournisseurs
                        </Link>
                      </li>

                      <li>
                        <Link className="navbar__link noborder" to="/achatdep">
                          Dépenses
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>
              <li className="menu__item">
                <Link className="navbar__link" to="/bankingdash">
                  Banking
                </Link>
              </li>
              <li
                onMouseEnter={handleDropdown5}
                onMouseLeave={handleDropdown5}
                className="menu__item"
              >
                <Link className="navbar__link" to="/comptabilite">
                  Comptabilité
                  {dropdown5 ? (
                    <GoTriangleUp className="dropdown__icon" />
                  ) : (
                    <GoTriangleDown className="dropdown__icon" />
                  )}
                </Link>
                {dropdown5 && (
                  <ul className="dropdown">
                    <div className="col border">
                      <li>
                        <Link className="navbar__link noborder" to="/comptabilite">
                          Configurer la comptabilité
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={handleDropdown6}
                onMouseLeave={handleDropdown6}
                className="menu__item"
              >
                <Link className="navbar__link" to="/boite">
                  Apps
                  {dropdown6 ? (
                    <GoTriangleUp className="dropdown__icon" />
                  ) : (
                    <GoTriangleDown className="dropdown__icon" />
                  )}
                </Link>
                {dropdown6 && (
                  <ul className="dropdown">
                    <div className="col border">
                      <li>
                        <Link className="navbar__link " to="/boite">
                          Boite de réception
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link noborder" to="/tasks">
                          Taches
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>
              <li className="menu__item">
                <Link className="navbar__link" to="/salaires">
                  Salaires
                  <img src={salaries} alt="img" />{" "}
                </Link>
              </li>
            </div>

            <div className="search_navbar">
              <input type="text" placeholder="Recherche" />
            </div>
            <button className="navbar__btn close" onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
        </nav>
        <div className="row">
          <Link to="/dash" className="home">
            <img src={logo} alt="img" />
          </Link>
          <button className="navbar__btn open " onClick={showNavbar}>
            <AiOutlineMenu />
          </button>
        </div>
      </>
    </div>
  );
}
