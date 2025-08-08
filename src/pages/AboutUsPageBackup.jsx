import React from 'react';
import person1Image from '../assets/images/logo.jpeg'; // Adjust path for person 1
import person2Image from '../assets/images/logo.jpeg'; // Adjust path for person 2, or use the same as person1Image if you only have one

const personsData = [
  {
    id: 1,
    image: person1Image,
    name: 'Kasun Rathnayaka',
    title: 'Founder / Lead Choreographer',
    description: 'Kasun is the visionary behind Studio Dance Core, bringing years of experience in contemporary dance and a passion for fostering new talent. His innovative choreographies define the studio\'s unique style.'
  },
  {
    id: 2,
    image: person2Image,
    name: 'Amali Perera',
    title: 'Co-Founder / Artistic Director',
    description: 'Amali is the creative force guiding the artistic direction of the studio. With a background in traditional and modern dance forms, she ensures a rich and diverse learning environment for all students.'
  }
];

// Reusable component for displaying a person's details
const PersonCard = ({ image, name, title, description }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10 w-full max-w-4xl bg-gray-50 p-6 rounded-lg shadow-md">
    {/* Person's Image (Left Side) */}
    <div className="flex-shrink-0">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#FFDBBB] shadow-lg"
      />
    </div>

    {/* Person's Details (Right Side) */}
    <div className="text-center md:text-left flex-grow">
      <h3 className="text-3xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-lg text-[#3b3b3b] font-medium mb-3">{title}</p>
      <p className="text-base text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);


const AboutUsPage = () => (
  <section className="container mx-auto p-8 my-12 bg-white flex flex-col items-center">
    <h2 className="text-5xl font-extrabold text-gray-800 mb-10 text-center"
        style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: 'black' }}>
      About Us
    </h2>

    {/* Iterate over personsData to display each person */}
    {personsData.map(person => (
      <PersonCard
        key={person.id}
        image={person.image}
        name={person.name}
        title={person.title}
        description={person.description}
      />
    ))}

    <button
      className="px-10 py-4 mt-8 bg-black text-white text-lg font-semibold rounded-full shadow-lg flex items-center justify-center
                 hover:bg-[#FFDBBB] transform hover:scale-105 transition-all duration-300 border border-white"
    >
      See More
    </button>
  </section>
);

export default AboutUsPage;