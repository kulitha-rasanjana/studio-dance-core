import React from 'react';
import NavBar from '../components/NavBar';
import PersonProfileCard from '../components/PersonProfileCard';
import { bg } from '../utils/config';
// Import unique images for each person (front and back)
// ASSUME THESE PATHS AND FILENAMES ARE CORRECT IN YOUR PROJECT
import jayaruwanFront from '../assets/images/profiles/jayaruwan-prabodya.webp';
import sandevFront from '../assets/images/profiles/sandev.webp';
import hasinduFront from '../assets/images/profiles/hasindu.webp';
import hiviruFront from '../assets/images/profiles/dilneth.webp';
import tasinduFront from '../assets/images/profiles/tasindu.webp';
import shivaFront from '../assets/images/profiles/shiva.webp';


const AboutUsPage = () => (
  <>
    {/* Apply background image styles to a single div for consistency and better performance */}
    <div
      className="text-white min-h-screen bg-cover bg-center bg-fixed bg-blend-multiply"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Sticky NavBar and Not Found Message */}
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage='about-us' />
      </div>

      <main className="w-full text-gray-400 flex flex-col items-center relative py-12">
        {/* Page Title */}
        <div className="text-center w-full px-4 py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-widest text-white mb-4" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em' }}>
            DANCE CORE HIGHER FAMILY
          </h1>
        </div>

        {/* Profile Cards Section - Now using a single-column layout for a modern look */}
        <div className="py-8 px-4 sm:px-6 md:px-8 w-full">
          <div className="flex flex-col gap-8">
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
              facebookUrl="#" // Placeholder link
              youtubeUrl="#" // Placeholder link
              isReversed={false} // Default layout
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
              tiktokUrl="#" // Placeholder link
              isReversed={true} // Reversed layout
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
              isReversed={false} // Default layout
            />

            {/* Person 4: HIVIRU DILNETH */}
            <PersonProfileCard
              name="HIVIRU DILNETH"
              roles={[
                "CINEMATOGRAPHER"
              ]}
              imageUrl={hiviruFront}
              instagramUrl="https://www.instagram.com/_hivzzz_?igsh=OWF5dDIwdHU4a201&utm_source=qr"
              facebookUrl="#" // Placeholder link
              isReversed={true} // Reversed layout
            />

            {/* Person 5: TASINDU WIKRAMASINGHE */}
            <PersonProfileCard
              name="TASINDU WIKRAMASINGHE"
              roles={[
                "CINEMATOGRAPHER"
              ]}
              imageUrl={tasinduFront}
              instagramUrl="https://www.instagram.com/taziii_2004?igsh=MW41YjVrbmJoNDV5Zw=="
              isReversed={false} // Default layout
            />

            {/* Person 6: SHIVANKARA ARAVINDA */}
            <PersonProfileCard
              name="SHIVANKARA ARAVINDA"
              roles={[
                "HOST"
              ]}
              imageUrl={shivaFront}
              instagramUrl="https://www.instagram.com/shivankara_aravinda?igsh=MThjNDB6NHBldnpsbg%3D%3D&utm_source=qr"
              tiktokUrl="#" // Placeholder link
              youtubeUrl="#" // Placeholder link
              isReversed={true} // Reversed layout
            />
          </div>
        </div>
      </main>
    </div>
  </>
);

export default AboutUsPage;