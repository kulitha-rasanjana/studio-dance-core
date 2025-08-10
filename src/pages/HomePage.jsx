import React, { useEffect, useRef, useState } from 'react';
import heroVideoMp4 from '../assets/videos/home.mp4';
import heroVideoWebm from '../assets/videos/Home.webm';
import { logo, classesandevents, merch, productions, headlogo, bg } from '../utils/config';

// Import NavBar component
import NavBar from '../components/NavBar';

// React Router hooks
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

  const navigate = useNavigate();
  const location = useLocation();
  const [notFoundMessage, setNotFoundMessage] = useState(null);

  // Effect to scroll to sections based on URL hash or display 'not found' message
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const notFoundQuery = params.get('notFound');

    setNotFoundMessage(null); // Clear any previous message first
    let timeoutId;

    const scrollOptions = { behavior: 'smooth', block: 'start' };

    if (location.hash === '#merch-section' && merchRef.current) {
      merchRef.current.scrollIntoView(scrollOptions);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (location.hash === '#productions-section' && productionsRef.current) {
      productionsRef.current.scrollIntoView(scrollOptions);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (location.hash === '#class-videos-section' && classVideosRef.current) {
      classVideosRef.current.scrollIntoView(scrollOptions);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (location.hash === '#about-us-section' && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView(scrollOptions);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (notFoundQuery) {
      setNotFoundMessage(`"${decodeURIComponent(notFoundQuery)}" not found.`);
      timeoutId = setTimeout(() => {
        setNotFoundMessage(null);
      }, 10000); // Message disappears after 10 seconds
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [location.hash, location.search]);

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

  return (
    <div className="flex flex-col items-center justify-center bg-transperant w-screen">
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
        className="min-h-screen text-gray-400 flex flex-col items-center relative" // Added relative for pseudo-element (if using) or if needed for child positioning
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Keeps background fixed while content scrolls
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // This creates the direct overlay on the main background
          backgroundBlendMode: 'multiply' // Optional: blends the background image with the color
        }}
      >

        {/* Hero Video Section */}
        <section
          className="relative w-screen h-[calc(100vw*3/4)] md:h-[80vh] lg:h-[60vh] flex justify-center mt-0 pt-0"
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

        {/* Productions Section */}
        <section
          id="productions-section"
          className="p-1 w-full bg-transperant flex flex-col items-center"
        >
          <div
            onClick={navigateToProductionsPage}
            className="relative w-full max-w-4xl cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={productions}
              alt="An image representing productions"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
          </div>
        </section>

        {/* Merch Section */}
        <section
          id="merch-section"
          className="p-1 w-full bg-transperant flex flex-col items-center"
        >
          <div
            onClick={navigateToMerchPage}
            className="relative w-full max-w-4xl cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={merch}
              alt="An image representing merchandise"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
          </div>
        </section>

        {/* Our Classes Section */}
        <section
          id="classes-section"
          className="p-1 w-full bg-transperant flex flex-col items-center"
        >
          <div
            onClick={navigateToClassesPage}
            className="relative w-full max-w-4xl cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {/* Using a placeholder image. You should replace this with your actual image */}
            <img
              src={classesandevents}
              alt="An image representing dance classes"
              className="w-full h-auto"
            />
            {/* Optional overlay for a more polished look */}
            <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
          </div>
        </section>

        {/* About Us Section */}
        <section ref={aboutUsRef} className="p-8 w-full bg-gray-100 flex flex-col items-center">
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
              <h2 className="p-4 text-4xl md:text-4xl font-bold text-gray-800 text-center" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#272727' }}>
                About Us
              </h2>
              <p
                className="font-sans text-base md:text-lg text-gray-600 text-justify"
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
        </section>
      </main>
    </div>
  );
};

export default HomePage;
