import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

// IMPORTANT: Import your custom TikTok thumbnail images here.
// Example:
import malabeClass1 from '../assets/images/malabeclass1.webp';
import malabeClass2 from '../assets/images/malabeclass2.webp';
import malabeClass3 from '../assets/images/malabeclass3.webp';

const ClassVideos = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const videos = [
    {
      id: 'insta-malabe-class1',
      type: 'instagram-link', // For videos that link directly to TikTok website
      videoUrl: 'https://www.instagram.com/reel/DLyzOstxQ8l/?utm_source=ig_web_copy_link&igsh=c2NrZzB2NWl3Z2Ru', // <<< IMPORTANT: Replace with your actual public TikTok video URL
      thumbnailSrc: malabeClass1, // <<< IMPORTANT: Use your imported thumbnail image
      title: 'Malabe Class',
    },
    {
      id: 'insta-malabe-class2',
      type: 'instagram-link', // For videos that link directly to TikTok website
      videoUrl: 'https://www.instagram.com/reel/DLy0sUXxAaa/?utm_source=ig_web_copy_link&igsh=NWR4bmduOXB1ZHZj', // <<< IMPORTANT: Replace with your actual public TikTok video URL
      thumbnailSrc: malabeClass2, // <<< IMPORTANT: Use your imported thumbnail image
      title: 'Malabe Class',
    },
    {
      id: 'insta-malabe-class3',
      type: 'instagram-link', // For videos that link directly to TikTok website
      videoUrl: 'https://www.instagram.com/reel/DLyyqqkx56I/?utm_source=ig_web_copy_link&igsh=aTF3YzUyZGh3ZDIy', // <<< IMPORTANT: Replace with your actual public TikTok video URL
      thumbnailSrc: malabeClass3, // <<< IMPORTANT: Use your imported thumbnail image
      title: 'Malabe Class',
    },
    // Add more video objects here as needed.
    // Ensure 'videoId' for YouTube embeds and 'videoUrl' for TikTok links are strings, not 'true'.
  ];

  // Function to handle button click
  const handleSeeMoreClick = () => {
    // Replace with the actual Instagram account URL
    window.open('https://www.instagram.com/jayaruwan.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };

  return (
    <section ref={ref} id="class-videos-section" className="p-8 w-full bg-[#272727] text-[#EFD09E] flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em' }}>
        Classes Videos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {videos.map((video) => (
          <div key={video.id} className="w-full bg-[#EFD09E] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            {video.type === 'youtube-embed' ? (
              // YouTube Embed (plays on site, but starts on click, not autoplay)
              <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  // Construct YouTube embed URL: `embed/{videoId}?autoplay=0&rel=0`
                  // autoplay=0: prevents auto-playback
                  // rel=0: attempts to prevent related videos from other channels after playback
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              
              <div className="relative w-full h-96 overflow-hidden group">
                <a
                  href={video.videoUrl} // The direct URL to the TikTok video
                  target="_blank" // Opens link in a new tab
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                  aria-label={`Watch ${video.title} on TikTok`}
                  className="absolute top-0 left-0 w-full h-full block group"
                >
                  <img
                    src={video.thumbnailSrc} // Your custom thumbnail image
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  
                </a>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#272727]">{video.title}</h3>
            </div>
          </div>
        ))}
      </div> {/* Close the grid div here */}
      {/* New div for centering the button */}
      <div className="flex justify-center w-full mt-8"> 
        <button
          className="px-8 py-3 md:px-10 md:py-4 bg-[#EFD09E] text-[#272727] text-base md:text-lg font-semibold rounded-full shadow-lg flex items-center justify-center
                     hover:bg-[#EFD09E] transform hover:scale-105 transition-all duration-300 hover:text-[#272727]"
          onClick={handleSeeMoreClick}
        >
          See More
        </button>
      </div>
    </section>
  );
});

export default ClassVideos;