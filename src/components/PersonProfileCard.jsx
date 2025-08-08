// src/components/PersonProfileCard.jsx
import React from 'react';

const PersonProfileCard = ({ name, roles, imageUrl, instagramUrl }) => {
  return (
    <>
      <div className="flex flex-col items-center p-6 sm:p-8 md:p-10
                      md:flex-row md:items-center md:justify-center md:space-x-8 lg:space-x-16"> {/* Adjusted padding and space-x */}
        {/* Profile Image Wrapper - Contains the pop-up card */}
        <div className="mb-8 md:mb-0 md:flex-shrink-0"> {/* Adjusted margin-bottom */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-pointer group"> {/* Adjusted image sizes */}
            {/* Front of the card - Now acts as the main image that pops up */}
            {instagramUrl ? (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}'s Instagram`}>
                <img
                  src={imageUrl}
                  alt={`${name} - Profile`}
                  className="absolute inset-0 w-full h-full rounded-lg shadow-lg
                             transition-transform duration-300 ease-out
                             group-hover:scale-105 group-hover:shadow-2xl"
                />
              </a>
            ) : (
              <img
                src={imageUrl}
                alt={`${name} - Profile`}
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg
                           transition-transform duration-300 ease-out
                           group-hover:scale-105 group-hover:shadow-2xl"
              />
            )}
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-[#EFD09E] p-6 sm:p-8 rounded-xl shadow-xl text-[#272727] w-full max-w-sm sm:max-w-md md:max-w-lg"> {/* Adjusted padding and max-width */}
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-[#272727]"> {/* Responsive font sizes and margin */}
            {name}
          </h2>
          <div className="space-y-2 sm:space-y-3"> {/* Adjusted space-y */}
            {roles.map((role, index) => (
              <p key={index} className="text-xl sm:text-2xl tracking-widest uppercase" style={{fontFamily:'Bebas Neue', color:'#272727'}}> {/* Responsive font size */}
                {role}
              </p>
            ))}
          </div>
        </div>
      </div>

      
    </>
  );
};

export default PersonProfileCard;