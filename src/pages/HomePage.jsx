import React, { useEffect, useRef, useState } from 'react';
import heroVideoMp4 from '../assets/videos/home.mp4';
import heroVideoWebm from '../assets/videos/Home.webm';
import { logo, classesandevents, merch, headlogo, bg, lession, productions } from '../utils/config';
import NavBar from '../components/NavBar';

import { useNavigate, useLocation } from 'react-router-dom';
// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HomePage = ({ setActivePage }) => {
  // Refs for scrolling to sections
  const productionsRef = useRef(null);
  const merchRef = useRef(null);
  // The ref for the Classes section has been removed
  const aboutUsRef = useRef(null);
  // Note: The classVideosRef was not defined in the original component, so it has been removed from the useEffect.

  const navigate = useNavigate();
  const location = useLocation();
  const [notFoundMessage, setNotFoundMessage] = useState(null);

  // Navigate to the About Us page
  const navigateToAboutUsPage = () => {
    navigate('/about-us');
  };

  // Navigate to the Classes page
  const navigateToClassesPage = () => {
    navigate('/classes');
  };

  // Navigate to the Merch page
  const navigateToMerchPage = () => {
    navigate('/merchs');
  };

  // Navigate to the Productions page
  const navigateToProductionsPage = () => {
    navigate('/productions');
  };

  // Navigate to the Lession page
  const navigateToLessionPage = () => {
    navigate('/lessons');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent w-screen">
      {/* Sticky NavBar and Not Found Message */}
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage={setActivePage} />
        {notFoundMessage && (
          <div className="w-full bg-red-800 text-white p-4 text-center text-lg md:text-xl font-semibold">
            {notFoundMessage}
          </div>
        )}
      </div>
      <main
        className="min-h-screen w-full text-gray-400 flex flex-col items-center relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'multiply'
        }}
      >
        {/* Hero Video Section */}
        <section
          className="relative w-screen h-screen flex justify-center mt-0 pt-0"
        >
          <video
            className="absolute w-full h-full object-cover opacity-100"
            autoPlay
            loop
            muted
            playsInline
            title="Studio Dance Core"
            poster={logo} // Poster image for video before it loads
          >
            {/* WebM first for potentially smaller file size */}
            <source src={heroVideoWebm} type="video/webm" />
            {/* MP4 as a fallback for broader compatibility */}
            <source src={heroVideoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Productions & Classes Section - Flex container for side-by-side layout */}
        <div className="flex flex-col md:flex-row gap-4 w-screen mx-auto py-1">
          {/* Productions Section */}
          <section
            id="productions-section"
            className="w-full md:w-1/2 bg-transparent flex flex-col items-center"
          >
            <div
              onClick={navigateToProductionsPage}
              className="relative w-full cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={productions}
                alt="An image representing dance classes"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          </section>

          {/* Classes Section */}
          <section
            id="classes-section"
            className="w-full md:w-1/2 bg-transparent flex flex-col items-center"
          >
            <div
              onClick={navigateToClassesPage}
              className="relative w-full cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={classesandevents}
                alt="An image representing dance classes"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          </section>
        </div>

        {/* Spacer for theme */}
        < section ref={aboutUsRef} className="p-8 w-full bg-black flex flex-col items-center" >
          <h2 className="text-4xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Bebas Neue'", letterSpacing: '0.1em', color: '#EFD09E' }}>
            We Bring ART to
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Bebas Kai'", letterSpacing: '0.1em', color: '#EFD09E' }}>
            NEXT LEVEL
          </h1>
        </section >

        {/* Merch & Lessons Section - Flex container for side-by-side layout */}
        < div className="flex flex-col md:flex-row gap-4 w-screen mx-auto py-1" >
          {/* Merch Section */}
          < section
            id="merch-section"
            className="w-full md:w-1/2 bg-transparent flex flex-col items-center"
          >
            <div
              onClick={navigateToMerchPage}
              className="relative w-full cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={merch}
                alt="An image representing merchandise"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          </section >

          {/* Lessons Section */}
          < section
            id="lession-section"
            className="w-full md:w-1/2 bg-transparent flex flex-col items-center"
          >
            <div
              onClick={navigateToLessionPage}
              className="relative w-full cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={lession}
                alt="An image representing lessons"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          </section >
        </div >

        {/* About Us Section */}
        < section ref={aboutUsRef} className="p-8 w-full bg-gray-100 flex flex-col items-center" >
          <div className="flex flex-col md:flex-row items-center">
            {/* Placeholder for the image */}
            <div className="w-full md:w-1/4 p-4">
              <img
                src={headlogo}
                alt="An image representing Studio Dance Core"
                className="w-full h-auto"
              />
            </div>
            {/* The paragraph on the right side */}
            <div className="w-full md:w-3/4">
              <h2 className="p-4 text-4xl md:text-4xl font-bold text-gray-800" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#272727' }}>
                About Us
              </h2>
              <p
                className="font-sans text-base md:text-lg text-gray-600 text-justify p-6"
              >
                Studio Dance Core is a vibrant hub for artistic expression located in the heart of Sri Lanka. We are passionate about creating unique, high-quality video content that showcases our innovative ideas and talent. Our professional dance classes are specifically tailored for young Sri Lankan students and teenagers, providing a nurturing environment where they can develop their skills and creativity. Beyond the studio, we are dedicated to producing meaningful and enjoyable projects for our audience.
              </p>

              <div className='px-8 py-3 md:px-10 md:py-4'>
                {/* Contact Information */}
                <p className="text-base md:text-lg text-gray-600 text-center flex-grow text-justify max-w-2xl">
                  <FontAwesomeIcon icon={faEnvelope} />{' '}
                  <a
                    href="mailto:studiodancecore@gmail.com"
                    className="text-blue-500 hover:underline"
                    aria-label="Send email to studiodancecore@gmail.com"
                  >
                    info@studiodancecore.lk
                  </a>
                </p>

                <p className="text-base md:text-lg text-gray-600 text-center flex-grow text-justify max-w-2xl">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />{' '}
                  <a
                    href="https://wa.me/94713161550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    aria-label="Chat on WhatsApp with 0713161550"
                  >
                    0713161550
                  </a>
                </p>
                <br />
                <br />

                {/* See More Button */}
                <button
                  className="px-6 py-3 md:px-10 md:py-4 bg-[#272727] text-white text-base md:text-lg font-semibold rounded-full shadow-lg flex items-center justify-center
                          hover:bg-[#EFD09E] transform hover:scale-105 transition-all duration-300 hover:text-[#272727]"
                  onClick={navigateToAboutUsPage}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </section >
      </main >
    </div >
  );
};

export default HomePage;