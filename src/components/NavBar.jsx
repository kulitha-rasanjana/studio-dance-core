import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersRound, UserRound, Newspaper, Menu, X, School, Shirt, Video} from 'lucide-react';
import logo from '../assets/images/logo.webp';

const NavBar = ({ setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 md:px-8 md:py-4 bg-[#272727] backdrop-blur-none relative z-50">
      <div className="flex items-center">
        <Link to="/" aria-label="Go to Home Page" className="block w-[80px] md:w-[100px] h-auto">
          <img src={logo} alt="Studio Dance Core Logo" className="max-w-full h-auto" />
        </Link>
      </div>

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

      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <Link
          to="/classes"
          className="flex items-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to Classes Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/about-us'); }}
        >
          <School className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
          Classes
        </Link>
        <Link
          to="/productions"
          className="flex items-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to Productions Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/about-us'); }}
        >
          <Video className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
          Productions
        </Link>
        <Link
          to="/store"
          className="flex items-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to Store Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/about-us'); }}
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
          to="/login"
          className="flex items-center px-4 py-2 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to Login Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
        >
          <UserRound className="h-5 w-5 mr-1 group-hover:text-white transition-transform" />
          Log In
        </Link>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-6 space-y-6 animate-fade-in-down">
          <Link
            to="/about-us"
            className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
            aria-label="Go to About Us Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={() => {
              setActivePage('/about-us');
              setIsMobileMenuOpen(false);
            }}
          >
            <UsersRound className="h-7 w-7 mr-2" />
            Who We Are?
          </Link>
          <Link
            to="/news"
            className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
            aria-label="Go to News Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={() => {
              setActivePage('/news');
              setIsMobileMenuOpen(false);
            }}
          >
            <Newspaper className="h-7 w-7 mr-2" />
            News
          </Link>
          <Link
            to="/login"
            className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
            aria-label="Go to Login Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            <UsersRound className="h-7 w-7 mr-2" />
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
