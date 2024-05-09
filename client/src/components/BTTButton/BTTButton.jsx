
import React, { useState, useEffect } from 'react';
import './BTTButton.css';
import {IoIosArrowUp} from "react-icons/io";
const BTTButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`bottom-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp size={30}/>
    </button>
  );
};

export default BTTButton;
