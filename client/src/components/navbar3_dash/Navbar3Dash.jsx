import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import logo from "../../assets/logo.svg";
import bell from "../../assets/navbar2/bell.svg";
import btn from "../../assets/navbar2/btn.svg";
import Modal from "react-modal";
import "./Navbar3Dash.css";

const Navbar3 = () => {
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

  // Close the modal when the overlay is clicked
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
      closeModal2();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      // Add a class to the body to disable scrolling when the modal is open
      document.body.classList.add("modal-open");
    } else {
      // Remove the class to re-enable scrolling when the modal is closed
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);
  useEffect(() => {
    if (isModalOpen2) {
      // Add a class to the body to disable scrolling when the modal is open
      document.body.classList.add("modal-open2");
    } else {
      // Remove the class to re-enable scrolling when the modal is closed
      document.body.classList.remove("modal-open2");
    }
  }, [isModalOpen2]);

  return (
    <div className="nav3_dash">
      <div className="info_wrapper">
        <div className="info">
          <div className="info_phone">
            <Link to="/dash">
              <img src={logo} alt="img" />
            </Link>
          </div>
        
          <div className="info_list">
            <Link
              to=""
              onClick={openModal2}
              className="info_link"
              style={{ width: "15%" }}
            >
              2023 <GoTriangleDown color="white" />{" "}
            </Link>
            <Link to="/notif" > <img style={{paddingLeft:"15px"}} src={bell} alt="img" /> </Link>
            
            <Link onClick={openModal} className="info_link">
              <BsFillPersonFill color="white" className="username" /> User Name{" "}
              <GoTriangleDown color="white" />
            </Link>
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
            className="modal-content2"
            ariaHideApp={false}
          >
            <div className="modal-content-inner2">
              <h2>Gérer les exercices</h2>
              <div className="years">
                <div className="year">
                  <p>2022</p>
                  <a href="/">Ouvrir l'année</a>
                </div>
                <div className="year">
                  <p>
                    {" "}
                    <img src={btn} alt="img" />
                    2023
                  </p>
                  <a href="/">l'année est visible</a>
                </div>
              </div>
              <a onClick={closeModal2} className="close_year" href="/">
                Fermer
              </a>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Navbar3;
