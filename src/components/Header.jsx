import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { RiMenu4Fill , RiCloseFill } from "react-icons/ri";


const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleLinkClick = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.tagName === 'A') {
      setActiveLink(target.getAttribute('href'));
      setIsMenuOpen(false);
    }
  };

  const linkClass = (href) => `
    font-bold no-underline hover:text-primary transition-colors duration-200
    ${activeLink === href ? 'text-active font-bold' : 'text-white'}
  `;

  return (
    <nav className="h-[100px] xl:w-full w-[90vw]">
      <div className="container mx-4 xl:mx-auto xl:px-10 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center flex-shrink-0 text-white">
            <img src={logo} className="w-40 h-auto lg:w-48 lg:h-auto" alt="Logo" />
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#Home" className={`${linkClass('#Home')} hover:text-active`} onClick={handleLinkClick}>Home</a>
            <a href="#About" className={`${linkClass('#About')} hover:text-active`} onClick={handleLinkClick}>About</a>
            <a href="#Product" className={`${linkClass('#Product')} hover:text-active`} onClick={handleLinkClick}>Product</a>
            <a href="#Specification" className={`${linkClass('#Specification')} hover:text-active`} onClick={handleLinkClick}>Specification</a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <RiCloseFill size={30} /> : <RiMenu4Fill size={30} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#Home"
            className={`${linkClass('#Home')} hover:text-active`}
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#About"
            className={`${linkClass('#About')} hover:text-active`}
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#Product"
            className={`${linkClass('#Product')} hover:text-active`}
            onClick={handleLinkClick}
          >
            Product
          </a>
          <a
            href="#Specification"
            className={`${linkClass('#Specification')} hover:text-active`}
            onClick={handleLinkClick}
          >
            Specification
          </a>
        </div>
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-4xl hover:text-active"
        >
          &times;
        </button>
      </div>
    </nav>
  );
};

export default Header;