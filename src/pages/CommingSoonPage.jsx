import React from 'react';
import { useLocation } from 'react-router-dom';

const ComingSoonPage = () => {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop() || 'Page';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-10 rounded-xl shadow-2xl text-center max-w-lg w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-400 font-light mb-6">
          The <span className="text-[#EFD09E] font-semibold">{pageName}</span> page is currently under construction.
        </p>
        <p className="text-md text-gray-500 mt-2">
          We are working hard to bring you a great experience. Please check back later!
        </p>
        <div className="mt-8 flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-t-4 border-[#EFD09E] border-gray-600 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;