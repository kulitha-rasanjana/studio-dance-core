import React from 'react';
import NavBar from '../components/NavBar';
import PersonProfileCard from '../components/PersonProfileCard';

// Import unique images for each person (front and back)
// ASSUME THESE PATHS AND FILENAMES ARE CORRECT IN YOUR PROJECT
import jayaruwanFront from '../assets/images/profiles/jayaruwan-prabodya.webp';
import sandevFront from '../assets/images/profiles/sandev.webp';
import hasinduFront from '../assets/images/profiles/hasindu.webp';
import hiviruFront from '../assets/images/profiles/dilneth.webp';
import tasinduFront from '../assets/images/profiles/tasindu.webp';
import shivaFront from '../assets/images/profiles/shiva.webp';

// Import your background image
import backgroundImage from '../assets/images/bg.webp'; // <--- IMPORTANT: Update this path to your background image

const AboutUsPage = () => (
  // Apply background image styles to the outermost div
  <div
    className="text-white bg-cover bg-center bg-no-repeat min-h-screen" // Added bg-cover, bg-center, bg-no-repeat, and min-h-screen
    style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image here
  >
    <div className="sticky top-0 z-50 w-full">
      <NavBar setActivePage='about-us' />
    </div>

    <div className="py-4 sm:py-5 text-center bg-[#D4AA7D]"> {/* Added bg-opacity to make text readable over background */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-widest md:text-6xl lg:text-7xl" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#272727', fontWeight: 'bold' }}>
        DANCE CORE HIGHER FAMILY
      </h1>
    </div>

    <div className="py-8 sm:py-10 space-y-12 sm:space-y-16 md:space-y-20 bg-opacity-70"> {/* Added bg-opacity to make text readable over background */}
      {/* Person 1: JAYARUWAN PRABODYA PREMACHANDRA */}
      <PersonProfileCard
        name="JAYARUWAN PRABODYA PREMACHANDRA"
        roles={[
          "DIRECTOR",
          "WRITER",
          "DANCING TEACHER",
          "CHOREOGRAPHER",
          "FOUNDER OF STUDIO DANCE CORE"
        ]}
        imageUrl={jayaruwanFront}
        instagramUrl="https://www.instagram.com/jayaruwan.official?igsh=M3VkYjdjb3p5bjU2"
      />

      {/* Person 2: SANDEV UBEYSEKARA */}
      <PersonProfileCard
        name="SANDEV UBEYSEKARA"
        roles={[
          "DIRECTOR",
          "WRITER"
        ]}
        imageUrl={sandevFront}
        instagramUrl="https://www.instagram.com/sandev_ubeysekara?igsh=MXZndWdjcG9vNThqNg=="
      />

      {/* Person 3: HASINDU PRASANJAYA */}
      <PersonProfileCard
        name="HASINDU PRASANJAYA"
        roles={[
          "DIRECTOR",
          "WRITER"
        ]}
        imageUrl={hasinduFront}
        instagramUrl="https://www.instagram.com/hasindugeekiyanage?igsh=MWkzcjVwN2xic3Zneg=="
      />

      {/* Person 4: HIVIRU DILNETH */}
      <PersonProfileCard
        name="HIVIRU DILNETH"
        roles={[
          "CINEMATOGRAPHER"
        ]}
        imageUrl={hiviruFront}
        instagramUrl="https://www.instagram.com/_hivzzz_?igsh=OWF5dDIwdHU4a201&utm_source=qr"
      />

      {/* Person 5: TASINDU WIKRAMASINGHE */}
      <PersonProfileCard
        name="TASINDU WIKRAMASINGHE"
        roles={[
          "CINEMATOGRAPHER"
        ]}
        imageUrl={tasinduFront}
        instagramUrl="https://www.instagram.com/taziii_2004?igsh=MW41YjVrbmJoNDV5Zw=="
      />

      {/* Person 6: SHIVANKARA ARAVINDA */}
      <PersonProfileCard
        name="SHIVANKARA ARAVINDA"
        roles={[
          "HOST"
        ]}
        imageUrl={shivaFront}
        instagramUrl="https://www.instagram.com/shivankara_aravinda?igsh=MThjNDB6NHBldnpsbg%3D%3D&utm_source=qr"
      />
    </div>
  </div>
);

export default AboutUsPage;