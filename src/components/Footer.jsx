import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="bg-[#272727] text-white p-6 md:p-8 shadow-inner">
    <div className="container mx-auto text-center">
      <p className="mb-3 text-sm md:text-base">© {new Date().getFullYear()} Studio Dance Core. All rights reserved.</p>
      <div className="flex justify-center space-x-4 md:space-x-6 text-xl md:text-2xl">
        {/* Facebook Icon */}
        <a href="https://www.facebook.com/share/1Gb77cwMaG" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        {/* Instagram Icon */}
        <a href="https://www.instagram.com/jayaruwan.official?igsh=YmRsaHN6NWs0cTlq" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition duration-300" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* TikTok Icon */}
        <a href="https://www.tiktok.com/@_jayaruwan_" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition duration-300" aria-label="TikTok">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        {/* YouTube Icon */}
        <a href="https://www.youtube.com/@StudioDanceCore" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition duration-300" aria-label="YouTube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
    <div className="container mx-auto text-center mt-4">
      <div className="border-t border-gray-700 pt-4">
        <p className="text-sm md:text-base">Developed By <a href ="https://elements-wine.vercel.app" className="underline hover:text-[#FFDBBB] transition-colors duration-300">Elements</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;