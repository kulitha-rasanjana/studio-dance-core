import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const PersonProfileCard = ({ name, roles, imageUrl, instagramUrl, facebookUrl, tiktokUrl, youtubeUrl, isReversed }) => {
  return (
    <>
      <div className={`flex flex-col items-center p-6 sm:p-8 md:p-10 md:flex-row md:items-center md:justify-center md:space-x-8 lg:space-x-16 bg-gray-100 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 ${isReversed ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
        {/* Profile Image Wrapper - Contains the pop-up card */}
        <div className="mb-8 md:mb-0 md:flex-shrink-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-pointer group">
            {/* Front of the card - Now acts as the main image that pops up */}
            <a
              href={instagramUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name}'s Instagram`}
              className="block"
            >
              <img
                src={imageUrl}
                alt={`${name} - Profile`}
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl"
              />
            </a>
          </div>
        </div>

        {/* Details Card */}
        <div className="p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg text-gray-800">
          <h2 className={`font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight ${isReversed ? 'md:text-right' : ''}`}>
            {name}
          </h2>
          <div className={`space-y-2 sm:space-y-3 ${isReversed ? 'md:text-right' : ''}`}>
            {roles.map((role, index) => (
              <p key={index} className="text-lg sm:text-xl tracking-widest uppercase" style={{ fontFamily: 'Bebas Neue', color: '#c7c7c7ff' }}>
                {role}
              </p>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className={`flex justify-center mt-6 ${isReversed ? 'md:justify-end' : 'md:justify-start'}`}>
            <div className="flex space-x-4">
              {instagramUrl && (
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}'s Instagram`}>
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-600 hover:text-pink-500 transition-colors duration-300" />
                </a>
              )}
              {facebookUrl && (
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}'s Facebook`}>
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                </a>
              )}
              {tiktokUrl && (
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}'s TikTok`}>
                  <FontAwesomeIcon icon={faTiktok} className="text-2xl text-gray-600 hover:text-black transition-colors duration-300" />
                </a>
              )}
              {youtubeUrl && (
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}'s YouTube`}>
                  <FontAwesomeIcon icon={faYoutube} className="text-2xl text-gray-600 hover:text-red-600 transition-colors duration-300" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonProfileCard;