import React from 'react';
import NavBar from '../components/NavBar';
import NewsCard from '../components/NewsCard.jsx';

// Import your news item images
import freeDanceWorkshopImage from '../assets/images/events/event-1.webp';
import freeDanceWorkshopImage2 from '../assets/images/events/event-2.jpeg';
import julyIntake from '../assets/images/events/julyIntake.webp';
import augestIntake from '../assets/images/events/audust-new-intake.webp';

// Import your background image
import backgroundImage from '../assets/images/bg.webp'; // Make sure this path is correct

const NewsPage = () => {
  const newsItems = [
    {
      id: 'news-4',
      imageUrl: augestIntake,
      title: 'Augest Intake',
      description: 'Augest Intake for New Students is now open!\n' +
      'Join us for an exciting journey in dance. Enroll now to secure your spot!\n'+
      'Every Saturday - 10:00 AM to 12:00 PM\n'+
      'Location: Studio Dance Core, Shelidian International School, wava Road, Malabe\n'+
      'Admission Fee: Rs. 1000\n'+
      'Mothly Fee: Rs. 2000',
    },
    {
      id: 'news-3',
      imageUrl: julyIntake,
      title: 'July Intake',
      description: 'July Intake for New Students is now open!\n' +
      'Join us for an exciting journey in dance. Enroll now to secure your spot!\n'+
      'Every Saturday - 10:00 AM to 12:00 PM\n'+
      'Location: Studio Dance Core, Shelidian International School, wava Road, Malabe\n'+
      'Admission Fee: Rs. 1000\n'+
      'Mothly Fee: Rs. 2000',
    },
    {
      id: 'news-1',
      imageUrl: freeDanceWorkshopImage2,
      title: 'FREE DAY',
      description: 'Every Month Last Day - Free Day\n' +
      'Date: June 28, 2025\n' +
      'Time: 10:00 AM - 12:00 PM\n' +
      'Location: Studio Dance Core, Shelidian International School, wava Road, Malabe\n',
    },
    {
      id: 'news-2',
      imageUrl: freeDanceWorkshopImage,
      title: 'Free Dance Workshop!',
      description: 'Join us for a fantastic free dance workshop this Saturday, July 5, 2025, at our Kalutara studio!\n'+
      'Learn basic choreography and meet our instructors. All skill levels welcome.\n' +
      'date: May 16, 2025\n' +
      'time: 02:00 PM - 05:00 PM\n' +
      'Location: Studio Dance Core, Kalutara',
    }
  ];

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage='about-us' />
      </div>
      <main
        className="min-h-screen text-gray-400 p-4 sm:p-6 md:p-8 flex flex-col items-center relative" // Added relative for pseudo-element (if using) or if needed for child positioning
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Keeps background fixed while content scrolls
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // This creates the direct overlay on the main background
          backgroundBlendMode: 'multiply' // Optional: blends the background image with the color
        }}
      >
        {/* All content goes directly inside main, no extra overlay div needed if using rgba background-color */}
        {/* If you remove the rgba background-color and want a separate overlay:
        <div className="absolute inset-0 bg-black opacity-70"></div>
        */}

        <div className="relative z-10 w-full flex flex-col items-center"> {/* z-10 ensures content is above the pseudo-element or rgba background */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center text-white">Studio Dance Core News</h1>
          <div className="max-w-xl sm:max-w-2xl md:max-w-4xl text-center mb-6 sm:mb-8 px-2">
            <p className="text-base sm:text-lg mb-3">
              Welcome to our News page! This is where we share all the latest updates, events, and exciting announcements from Studio Dance Core.
            </p>
            <p className="text-sm sm:text-base">
              Stay tuned for upcoming performances, workshop schedules, student achievements, and more!
            </p>
          </div>

          <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl space-y-8 sm:space-y-10">
            {newsItems.map(item => (
              <NewsCard
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                date={item.date}
                time={item.time}
                location={item.location}
              />
            ))}
            {newsItems.length === 0 && (
              <p className="text-xl text-gray-400 text-center mt-10">No news updates at the moment. Please check back later!</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default NewsPage;