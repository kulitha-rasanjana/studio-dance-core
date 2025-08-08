import React from "react";
import manoloka1 from "../assets/images/manoloka-description-01.webp";
import manoloka2 from "../assets/images/manoloka-description-02.webp";
import NavBar from "../components/NavBar";
import manoloka from '../assets/images/manoloka_theBeginning.webp';
import thePodcast from '../assets/images/thepodcast.webp';
import soon2 from '../assets/images/SOON.webp';
import soon3 from '../assets/images/SOON.webp';
import soon4 from '../assets/images/SOON.webp';
import soon5 from '../assets/images/SOON.webp';


const VideoCard = ({ imageUrl, title, videoUrl }) => (
  <a
    href={videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full h-40 sm:h-52 md:h-60 lg:h-72 overflow-hidden group flex items-end p-2 sm:p-3
               hover:shadow-xl transition-shadow duration-300 rounded-xl" // Adjusted height and padding
    aria-label={`View ${title}`}
  >
    <img
      src={imageUrl}
      alt={title || 'Coming Soon'}
      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold line-clamp-2 px-2 pb-1 sm:px-3 sm:pb-2"> {/* Responsive font size and padding */}
        {title}
      </h3>
    </div>
  </a>
);


const Manoloka = () => {
    const videos = [
      { id: 'manoloka-01', imageUrl: manoloka, title: 'Manoloka Episode 01 - THE BEGINNING', videoUrl: 'https://youtu.be/4B_bPZ_9v2o'},
      { id: 'thePodcast', imageUrl: thePodcast, title: 'The Podcast - Episode 01', videoUrl: 'https://youtu.be/mzWVjaS893U?si=8EkuvQxfj0Up5qHZ'},
      { id: 'soon-02', imageUrl: soon2, title: 'Coming Soon: Production 2'},
      { id: 'soon-03', imageUrl: soon3, title: 'Coming Soon: Production 3'},
      { id: 'soon-04', imageUrl: soon4, title: 'Coming Soon: Production 4'},
      { id: 'soon-05', imageUrl: soon5, title: 'Coming Soon: Production 5'},
    ];

    return (
        <section className="bg-black">
          <div className="sticky top-0 z-50 w-full">
            <NavBar setActivePage='manoloka' />
          </div>
          {/* Responsive images for manoloka description */}
          <img src={manoloka1} alt="manoloka description 1" className="w-full h-auto" />
          <img src={manoloka2} alt="manoloka description 2" className="w-full h-auto" />

          <section className="container mx-auto p-4 sm:p-6 md:p-8 w-full bg-black text-white min-h-[500px] md:h-[913px] rounded-xl"> {/* Adjusted padding and min-height */}
              {/* Custom CSS for scrollbar */}
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
              
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-left uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#FFDBBB' }}> {/* Responsive font size for Playlist title */}
                    Playlist
                </h2>
                <div className="w-full md:w-auto flex-grow overflow-y-auto pr-2 sm:pr-4 h-[500px] md:h-[720px] custom-scrollbar rounded-xl"> {/* Adjusted height and padding-right */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> {/* Responsive grid columns */}
                        {videos.map((video) => (
                        <VideoCard key={video.id} imageUrl={video.imageUrl} title={video.title} videoUrl={video.videoUrl}/>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Manoloka;