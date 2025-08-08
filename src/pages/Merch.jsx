import React, { useRef, useEffect, forwardRef } from 'react'; // Import forwardRef

// Placeholder images - In a real application, you would use actual image paths
import merchTshirt from "../assets/images/tshirt.webp";
import merchScarf from "../assets/images/scarf_soon.webp";

// Reusable component for a Merch Card
const MerchCard = ({ item, url }) => (
  // The outer div no longer has the hover:scale-105
  <div className="flex-shrink-0 w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-75 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex flex-col justify-between items-center text-center mx-2 sm:mx-3 md:mx-4  transition-transform duration-300 ease-in-out hover:scale-105 transform-gpu">
    {/* The <a> tag now has the scaling effect, allowing it to "break out" of the parent's overflow clipping */}
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${item.name}`}
      className="block w-full h-full flex flex-col justify-between items-center text-center" // Added transform-gpu for performance
    >
      <img
        src={item.image}
        alt={item.name}
        className="max-h-[70%] sm:max-h-[80%] w-auto object-contain mb-2 rounded"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/F0F0F0/333333?text=Image+Error"; }}
      />
      <p className="text-black text-base sm:text-lg font-semibold">{item.name}</p>
      <p className="text-gray-600 text-xs sm:text-sm">Rs.{item.price}</p>
    </a>
  </div>
);

// Use forwardRef to allow HomePage to pass a ref to this component
const Merch = forwardRef((props, ref) => { // 'ref' is the second argument from forwardRef
  // Create a ref to attach to the scrollable container for horizontal scrolling
  const merchContainerRef = useRef(null);

  const merchItems = [
    { id: 'tshirt', name: 'Studio T-Shirt', price: '2699.00', image: merchTshirt, url:'https://docs.google.com/forms/d/e/1FAIpQLSf_KSj1Mwu-8qHwq0vvSz-HC5wDiNJcqh-nUGEea-FqHwZbBQ/viewform?usp=dialog' },
    { id: 'scarf', name: 'Signature Scarf', price: 'COMING SOON', image: merchScarf, url: '#' },
  ];

  useEffect(() => {
    const merchContainer = merchContainerRef.current;

    if (merchContainer) {
      const handleWheelScroll = (event) => {
        event.preventDefault();
        merchContainer.scrollLeft += event.deltaY * 2.0; // Adjust scroll speed if needed
      };

      merchContainer.addEventListener('wheel', handleWheelScroll);

      return () => {
        merchContainer.removeEventListener('wheel', handleWheelScroll);
      };
    }
  }, []);

  return (
    // Attach the forwarded ref 'ref' to the outermost section element
    // Increased min-height to provide more vertical room for content
    <section ref={ref} className="w-full p-4 sm:p-6 md:p-8 bg-[#D4AA7D] text-white min-h-[500px] md:min-h-[600px] flex flex-col justify-center">
      <style>{`
        /* Webkit browsers (Chrome, Safari, Edge) */
        .merch-scroll-container::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }

        .merch-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .merch-scroll-container::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 2px;
          transition: background-color 0.3s ease-in-out;
        }

        /* Show scrollbar thumb on hover of the container */
        .merch-scroll-container:hover::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5); /* Gray-400 with 50% opacity */
        }

        /* Firefox */
        .merch-scroll-container {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
          scroll-behavior: smooth;
        }

        /* Show scrollbar thumb on hover for Firefox */
        .merch-scroll-container:hover {
          scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
        }
      `}</style>

      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 sm:mb-8 text-center sm:text-center uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#272727' }}>
        Merch
      </h2>
      <div
        ref={merchContainerRef} // This ref is for horizontal scrolling within the Merch component
        // Increased vertical padding (py-12) to ensure enough space for scaled cards
        className="flex overflow-x-auto **py-12** merch-scroll-container flex-grow items-center justify-start sm:justify-center"
      >
        {merchItems.length > 0 ? (
          merchItems.map((item) => (
            <MerchCard key={item.id} item={item} url={item.url || '#'} />
          ))
        ) : (
          <p className="text-lg text-gray-300 text-center w-full">More awesome merch coming soon!</p>
        )}
      </div>
    </section>
  );
});

export default Merch;