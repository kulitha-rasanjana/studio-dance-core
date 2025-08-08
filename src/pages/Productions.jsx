// src/pages/Productions.jsx
import React, { forwardRef } from 'react';

// Corrected paths: video files are in '../assets/videos/' relative to src/pages/
import productionsBannerVideoMp4 from '../assets/videos/manoloka.mp4'; // Reverted path
import productionsBannerVideoWebm from '../assets/videos/Manoloka.webm'; // Reverted path

// Import your local images
import manoloka from '../assets/images/manoloka_theBeginning.webp';
import thePodcast from '../assets/images/thepodcast.webp';
import soon2 from '../assets/images/SOON.webp';
import soon3 from '../assets/images/SOON.webp';
import soon4 from '../assets/images/SOON.webp';
import soon5 from '../assets/images/SOON.webp';


// Reusable component for a video card
const VideoCard = ({ imageUrl, title, videoUrl }) => (
  <a
    href={videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full aspect-video overflow-hidden group flex items-end p-2 sm:p-3
               hover:shadow-xl transition-shadow duration-300 rounded-xl"
    aria-label={`View ${title || 'video'}`}
  >
    <img
      src={imageUrl}
      alt={title || 'Coming Soon'}
      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold line-clamp-2 px-2 pb-1 sm:px-3 sm:pb-2">
        {title || 'Coming Soon'}
      </h3>
    </div>
  </a>
);

const Productions = forwardRef((props, ref) => {
  const videos = [
    { id: 'manoloka-01', imageUrl: manoloka, title: 'Manoloka Episode 01 - THE BEGINNING', videoUrl: 'https://youtu.be/4B_bPZ_9v2o'},
    { id: 'thePodcast', imageUrl: thePodcast, title: 'The Podcast - Episode 01', videoUrl: 'https://youtu.be/mzWVjaS893U?si=8EkuvQxfj0Up5qHZ'},
    { id: 'soon-02', imageUrl: soon2, title: 'Coming Soon: Production 2'},
    { id: 'soon-03', imageUrl: soon3, title: 'Coming Soon: Production 3'},
    { id: 'soon-04', imageUrl: soon4, title: 'Coming Soon: Production 4'},
    { id: 'soon-05', imageUrl: soon5, title: 'Coming Soon: Production 5'},
  ];

  return (
    <section ref={ref} className="p-4 sm:p-6 md:p-8 w-full bg-[#272727] text-white min-h-[600px] md:h-[913px] flex flex-col">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
          
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 20px;
        border: 2px solid transparent;
        }
 
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
      
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-center uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#EFD09E' }}>
        Productions
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-grow overflow-x-hidden">
        <div className="w-full md:w-1/2 flex-shrink-0 aspect-[4/3] md:h-full">
          <a href="/manoloka" className="block h-full">
            <div className="bg-orange-200 rounded-xl overflow-hidden h-full flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                title="Manoloka"
              >
                <source src={productionsBannerVideoWebm} type="video/webm" />
                <source src={productionsBannerVideoMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>
        </div>

        <div className="w-full md:w-1/2 flex-grow overflow-y-auto pr-2 sm:pr-4 h-[400px] md:h-full custom-scrollbar rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                imageUrl={video.imageUrl}
                title={video.title}
                videoUrl={video.videoUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 639px) {
          .aspect-video {
            aspect-ratio: 16/6 !important;
          }
        }
      `}</style>
    </section>
  );
});

export default Productions;