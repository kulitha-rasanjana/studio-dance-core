// src/components/MerchsPage.jsx
import React, { forwardRef } from 'react';
import { bg } from '../utils/config';
import NavBar from '../components/NavBar';
// Placeholder images - In a real application, you would use actual image paths
import merchTshirt from "../assets/images/tshirt.webp";
import merchScarf from "../assets/images/scarf_soon.webp";

// Reusable component for a Merch Card
const MerchCard = ({ item, url }) => (
  <div className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-5 flex flex-col justify-between items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 transform-gpu">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${item.name}`}
      className="block w-full h-full flex flex-col justify-between items-center text-center"
    >
      <img
        src={item.image}
        alt={item.name}
        className="max-h-[75%] sm:max-h-[80%] w-auto object-contain mb-3 rounded"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/F0F0F0/333333?text=Image+Error"; }}
      />
      <p className="text-black text-lg sm:text-xl font-semibold">{item.name}</p>
      <p className="text-gray-600 text-sm sm:text-base">{item.price}</p>
    </a>
  </div>
);

// Use forwardRef to allow HomePage to pass a ref to this component
const MerchsPage = forwardRef((props, ref) => {
  const merchItems = [
    { id: 'tshirt', name: 'Studio T-Shirt', price: 'LKR 2699.00', image: merchTshirt, url: 'https://docs.google.com/forms/d/e/1FAIpQLSf_KSj1Mwu-8qHwq0vvSz-HC5wDiNJcqh-nUGEea-FqHwZbBQ/viewform?usp=dialog' },
    { id: 'scarf', name: 'Signature Scarf', price: 'COMING SOON', image: merchScarf, url: '#' },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-black w-full">
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage='merchs' />
      </div>
      <main
        className="min-h-screen w-full text-gray-400 p-4 sm:p-6 md:p-8 flex flex-col items-center relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'multiply'
        }}
      >
        <section className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent text-white flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 uppercase text-center" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#ffffffff' }}>
            Merchs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {merchItems.length > 0 ? (
              merchItems.map((item) => (
                <MerchCard key={item.id} item={item} url={item.url || '#'} />
              ))
            ) : (
              <p className="text-lg text-gray-200 text-center col-span-full">More awesome merch coming soon!</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
});

export default MerchsPage;