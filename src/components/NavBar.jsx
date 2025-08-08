import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsersRound, Newspaper, Search, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.webp';

const NavBar = ({ setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    if (lowerCaseSearchTerm === 'merch') {
      navigate('/#merch-section');
    } else if (lowerCaseSearchTerm === 'manoloka') {
      navigate('/manoloka');
    } else if (lowerCaseSearchTerm === 'productions' || lowerCaseSearchTerm === 'production') {
      navigate('/#productions-section');
    } else if (lowerCaseSearchTerm === 'classes' || lowerCaseSearchTerm === 'class') {
      navigate('/#classes-section');
    } else if (lowerCaseSearchTerm.includes('about us') || lowerCaseSearchTerm.includes('who we are') || lowerCaseSearchTerm === 'about') { // MODIFIED: Added 'lowerCaseSearchTerm === 'about''
        navigate('/#about-us-section');
    } else if (lowerCaseSearchTerm === 'class videos' || lowerCaseSearchTerm === 'class video') {
      navigate('/#class-videos-section');
    }
    else {
      navigate(`/?notFound=${encodeURIComponent(searchTerm)}`);
    }

    setSearchTerm('');
    setIsMobileMenuOpen(false);
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
          to="/news"
          className="flex items-center text-white hover:text-[#EFD09E] transition-colors duration-200 text-base lg:text-lg font-medium group"
          aria-label="Go to News Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/news'); }}
        >
          <Newspaper className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" />
          News
        </Link>

        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1.5 pl-9 rounded-full bg-opacity-20 bg-gray-600 text-white placeholder-white outline-none focus:ring-2 focus:ring-[#EFD09E] transition-all duration-200 w-36 md:w-48 text-sm"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-white" aria-label="Submit search">
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-6 space-y-6 animate-fade-in-down">
          <form onSubmit={handleSearch} className="relative flex items-center w-full max-w-xs px-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 pl-10 rounded-full bg-opacity-20 bg-gray-600 text-white placeholder-white outline-none focus:ring-2 focus:ring-[#FFDBBB] transition-all duration-200 w-full text-base"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute left-7 top-1/2 transform -translate-y-1/2 text-white" aria-label="Submit search">
              <Search className="h-5 w-5" />
            </button>
          </form>

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
        </div>
      )}
    </nav>
  );
};

export default NavBar;