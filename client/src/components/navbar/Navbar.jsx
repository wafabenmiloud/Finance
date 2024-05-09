import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { BsTelephoneFill, BsFillPersonFill } from "react-icons/bs";

import logo from "../../assets/logo.svg";
export default function Navbar() {
  const navRef = useRef();
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (event) => {
    setDropdown((current) => !current);
  };
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };
  const location = useLocation();

  // Use the location pathname to set the initial active link
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (
    <div className="nav1">
      <div className="info_wrapper">
        <div className="info">
          <div className="info_phone hoverDiv">
            <Link to="" className="info_link">
              {" "}
              <BsTelephoneFill color="white" style={{ marginRight: "5px" }} />
              +216 71 808 862
            </Link>
          </div>
          <div className="info_list">
            <Link to="/campus" className={`info_link ${
                    activeLink === "/campus" ? "active_info_link" : ""
                  }`} onClick={() => handleLinkClick("/campus")}>
              Campus
            </Link>
            <Link to="/market" className={`info_link ${
                    activeLink === "/market" ? "active_info_link" : ""
                  }`} onClick={() => handleLinkClick("/market")}>
              App marketplace
            </Link>
            <Link to="/comptable" className={`info_link ${
                    activeLink === "/comptable" ? "active_info_link" : ""
                  }`} onClick={() => handleLinkClick("/comptable")}>
              Trouvez un comptable{" "}
            </Link>
            <Link to="/quisommesnous" className={`info_link ${
                    activeLink === "/quisommesnous" ? "active_info_link" : ""
                  }`} onClick={() => handleLinkClick("/quisommesnous")}>
              Qui sommes Nous
            </Link>
            <Link to="/contact" className={`info_link ${
                    activeLink === "/contact" ? "active_info_link" : ""
                  }`} onClick={() => handleLinkClick("/contact")}>
              Contact
            </Link>
          </div>
          <div className="hoverDiv">
            <Link to="/signin" className="info_link">
              {" "}
              <BsFillPersonFill
                color="white"
                style={{ paddingTop: "1.5px", marginRight: "5px" }}
              />
              Login
            </Link>
          </div>
        </div>
      </div>

      <>
        <nav ref={navRef}>
          <ul className="navbar__menu navbar_menu1 ">
            <div className="home">
              <Link to="/">
                <img src={logo} alt="img" />
              </Link>
            </div>
            <div className="navbar__menu navbar_menu2">
              <li>
                <Link
                  className={`navbar__link ${
                    activeLink === "/functions" ? "active_navbar__link" : ""
                  }`}
                  to="/functions"
                  onClick={() => handleLinkClick("/functions")}
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  className={`navbar__link ${
                    activeLink === "/pricing" ? "active_navbar__link" : ""
                  }`}
                  to="/pricing"
                  onClick={() => handleLinkClick("/pricing")}
                >
                  Prix
                </Link>
              </li>
              <li
                className="menu__item"
                onMouseEnter={handleDropdown}
                onMouseLeave={handleDropdown}
              >
                <Link
                  className={`navbar__link ${
                    activeLink === "/advantages" ? "active_navbar__link" : ""
                  }`}
                  to="/advantages"
                  onClick={() => handleLinkClick("/advantages")}
                >
                  Avantages Faji&nbsp;&nbsp;
                  {dropdown ? (
                    <MdKeyboardArrowUp className="dropdown__icon" />
                  ) : (
                    <MdKeyboardArrowDown className="dropdown__icon" />
                  )}
                </Link>
                {dropdown && (
                  <ul className="submenu">
                    <div className="col border">
                      <li>
                        <Link className="navbar__link" to="/market">
                          App marketplace
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link" to="/academy">
                          Academy
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link" to="/activity">
                          Secteur d'activités
                        </Link>
                      </li>
                    </div>
                    <div className="col">
                      <li>
                        <Link className="navbar__link" to="/quisommesnous">
                          Equipe solide
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar__link" to="/advantages">
                          Faji en 1 minute
                        </Link>
                      </li>

                      <li>
                        <Link className="navbar__link" to="/demarrage">
                          Aide au démarrage
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>
              <li className="menu__item">
                <Link
                  className={`navbar__link ${
                    activeLink === "/support" ? "active_navbar__link" : ""
                  }`}
                  to="/support"
                  onClick={() => handleLinkClick("/support")}
                >
                  Assistance
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  className={`navbar__link ${
                    activeLink === "/comptables" ? "active_navbar__link" : ""
                  }`}
                  to="/comptables"
                  onClick={() => handleLinkClick("/comptables")}
                >
                  Pour les comptables
                </Link>
              </li>
            </div>

            <div className="cta">
              <Link to="/trial" className="btn">
                Testez gratuitement
              </Link>
            </div>
            <button className="navbar__btn close" onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
        </nav>
        <div className="row">
          <Link to="/" className="home">
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
