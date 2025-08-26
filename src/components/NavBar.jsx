import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UsersRound, UserRound, Newspaper, Menu, X, School, Shirt, Video, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo.webp';

const NavBar = ({ setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClassesDropdownOpen, setIsClassesDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsClassesDropdownOpen(false);
    }
  };

  const handleClassesDropdownToggle = () => {
    setIsClassesDropdownOpen(!isClassesDropdownOpen);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsClassesDropdownOpen(false);
  };

  // Close dropdown when clicking outside BOTH desktop and mobile dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideDesktop =
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target);
      const clickedOutsideMobile =
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target);

      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setIsClassesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handler for mobile link clicks
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsClassesDropdownOpen(false);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 md:px-8 md:py-4 bg-[#272727] backdrop-blur-none relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" aria-label="Go to Home Page" className="block w-[80px] md:w-[100px] h-auto">
          <img src={logo} alt="Studio Dance Core Logo" className="max-w-full h-auto" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {/* Classes Dropdown for Desktop */}
        <div className="relative" ref={desktopDropdownRef}>
          <button
            onClick={handleClassesDropdownToggle}
            className="flex items-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-base lg:text-lg font-medium group focus:outline-none"
            aria-label="Toggle Classes and Lessons Menu"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          >
            <School className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
            Classes & Lessons
            <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isClassesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {isClassesDropdownOpen && (
            <div className="absolute top-full mt-2 w-48 bg-black rounded-md shadow-lg py-2 z-50 animate-fade-in-down" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}>
              <Link
                to="/classes"
                className="block px-4 py-2 text-sm text-white hover:bg-[#EFD09E] hover:text-black transition-colors duration-200"
                onClick={() => { setActivePage('/classes'); setIsClassesDropdownOpen(false); }}
              >
                Classes
              </Link>
              <Link
                to="/lessons"
                className="block px-4 py-2 text-sm text-white hover:bg-[#EFD09E] hover:text-black transition-colors duration-200"
                onClick={() => { setActivePage('/lessons'); setIsClassesDropdownOpen(false); }}
              >
                Lessons
              </Link>
            </div>
          )}
        </div>

        {/* Other Desktop Links */}
        <Link
          to="/productions"
          className="flex items-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to Productions Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/productions'); }}
        >
          <Video className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
          Productions
        </Link>
        <Link
          to="/merchs"
          className="flex items-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to Store Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/merchs'); }}
        >
          <Shirt className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
          Merchs
        </Link>
        <Link
          to="/news"
          className="flex items-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to News Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/news'); }}
        >
          <Newspaper className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
          News
        </Link>
        <Link
          to="/about-us"
          className="flex items-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to About Us Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/about-us'); }}
        >
          <UsersRound className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
          Who We Are?
        </Link>
        <Link
          //to="/login"
          to = ""
          className="flex items-center px-4 py-2 rounded-full bg-white text-black hover:bg-[#EFD09E] hover:text-white transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to Login Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
        >
          <UserRound className="h-5 w-5 mr-1 group-hover:text-white transition-transform" />
          Log In
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-6 space-y-6 animate-fade-in-down">
          {/* Classes Dropdown for Mobile */}
          <div className="w-full flex flex-col items-center" ref={mobileDropdownRef}>
            <button
              onClick={handleClassesDropdownToggle}
              className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
              aria-label="Toggle Classes and Lessons Menu"
              style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            >
              <School className="h-7 w-7 mr-2" />
              Classes & Lessons
              <ChevronDown className={`h-5 w-5 ml-2 transition-transform ${isClassesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {isClassesDropdownOpen && (
              <div className="flex flex-col items-center mt-4 space-y-4 w-full">
                <Link
                  to="/classes"
                  className="w-1/2 text-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-lg font-medium"
                  onClick={handleMobileLinkClick}
                >
                  Classes
                </Link>
                <Link
                  to="/lessons"
                  className="w-1/2 text-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-lg font-medium"
                  onClick={handleMobileLinkClick}
                >
                  Lessons
                </Link>
              </div>
            )}
          </div>
          
          {/* Other Mobile Links */}
          <Link
            to="/productions"
            className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
            aria-label="Go to Productions Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={handleMobileLinkClick}
          >
            <Video className="h-7 w-7 mr-2" />
            Productions
          </Link>
          <Link
            to="/merchs"
            className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
            aria-label="Go to Merch Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={handleMobileLinkClick}
          >
            <Shirt className="h-7 w-7 mr-2" />
            Merchs
          </Link>
          <Link
            to="/news"
            className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
            aria-label="Go to News Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={handleMobileLinkClick}
          >
            <Newspaper className="h-7 w-7 mr-2" />
            News
          </Link>
          <Link
            to="/about-us"
            className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
            aria-label="Go to About Us Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={handleMobileLinkClick}
          >
            <UsersRound className="h-7 w-7 mr-2" />
            Who We Are?
          </Link>
          <Link
            to="/login"
            className="flex items-center px-4 py-2 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 text-base lg:text-lg font-medium group"
            aria-label="Go to Login Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={handleMobileLinkClick}
          >
            <UserRound className="h-7 w-7 mr-2" />
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
