import React from 'react';
import NavBar from '../components/NavBar';
import Jayaruwan from '../assets/images/profiles/jayaruwan.jpg';

// Use this component to display the profile of a single artist.
const ArtistProfile = ({ imageUrl, name, description }) => {
  return (
    <div className="relative group w-full aspect-square md:w-auto overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
      {/* The main image element with a rounded border to mimic a frame */}
      {/* This URL is a placeholder. You can replace it with a direct URL to your image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover transition-opacity duration-300 rounded-xl group-hover:opacity-80 border-4 border-yellow-500"
      />
      {/* A dark overlay that appears on hover, containing the artist's name and description */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl font-bold font-serif text-center">{name}</h3>
        {/* A simple description to be displayed on hover */}
        <p className="mt-2 text-sm text-center italic">{description}</p>
      </div>
    </div>
  );
};

// This new component, ArtistsPage, contains the full layout for the artist section.
const ArtistsPage = () => {
  // A list of artists with their image URLs, names, and descriptions.
  // You should replace these with your actual artist data.
  const artists = [
    { id: 1, name: "Jayaruwan", description: "Sculptor", imageUrl: Jayaruwan },
    { id: 2, name: "Artist Two", description: "Painter", imageUrl: "https://placehold.co/400x400/94a3b8/e2e8f0?text=Artist+2" },
    { id: 3, name: "Artist Three", description: "Photographer", imageUrl: "https://placehold.co/400x400/94a3b8/e2e8f0?text=Artist+3" },
    { id: 4, name: "Artist Four", description: "Designer", imageUrl: "https://placehold.co/400x400/94a3b8/e2e8f0?text=Artist+4" },
    { id: 5, name: "Artist Five", description: "Musician", imageUrl: "https://placehold.co/400x400/94a3b8/e2e8f0?text=Artist+5" },
    { id: 6, name: "Artist Six", description: "Illustrator", imageUrl: "https://placehold.co/400x400/94a3b8/e2e8f0?text=Artist+6" },
    { id: 7, name: "Artist Seven", description: "Filmmaker", imageUrl: "https://placehold.co/400x400/94a3b8/e2e8f0?text=Artist+7" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white font-sans">
      <div className="container mx-auto">
        {/* Main title of the page */}
        <h1 className="text-center text-5xl md:text-6xl font-serif tracking-widest uppercase mb-12" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#EFD09E' }}>
          Artists
        </h1>
        
        {/* Grid layout for the artist profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Mapping through the artists array to create a profile for each artist */}
          {artists.map(artist => (
            <ArtistProfile
              key={artist.id}
              imageUrl={artist.imageUrl}
              name={artist.name}
              description={artist.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
