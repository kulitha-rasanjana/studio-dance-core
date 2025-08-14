// src/components/Classes.jsx
import React, { useState, useEffect, useMemo, forwardRef, useRef } from 'react'; // Import forwardRef
import classSchedules from '../utils/classSchedules'; // Ensure this path is correct
import { bg } from '../utils/config';
// Import your section components
// The Productions component is now its own page, so we don't import it here.
import ClassVideos from './ClassVideos';
// Import NavBar component
import NavBar from '../components/NavBar';
// Import the LoginPage component from its new file
import LoginPage from './LoginPage';
// Import the event images
import freeDanceWorkshopImage from '../assets/images/events/event-1.webp';
import freeDanceWorkshopImage2 from '../assets/images/events/event-2.jpeg';

// Use forwardRef to allow HomePage to pass a ref to this component
const ClassesPage = forwardRef((props, ref) => { // 'ref' is the second argument from forwardRef
  const classVideosRef = useRef(null);
  // Use useMemo to memoize 'locations' array
  const locations = useMemo(() => Object.keys(classSchedules), []);

  const daysOfWeek = useMemo(() => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], []);

  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [showLogin, setShowLogin] = useState(false); // State to control the login form visibility

  // Define your event data here
  const events = useMemo(() => [ // Memoize events array too, as it's static
    {
      id: 2,
      imageUrl: freeDanceWorkshopImage2,
      status: 'closed'
    },
    {
      id: 1,
      imageUrl: freeDanceWorkshopImage,
      status: 'closed' // Set status to 'closed' as it's already done
    },
  ], []); // Empty dependency array means it's created once


  // Effect to update filtered classes whenever selections change
  useEffect(() => {
    let currentFilteredClasses = [];

    // Only filter if at least one selection is made
    if (selectedPlace || selectedDay) {
      // Case 1: Both place and day selected
      if (selectedPlace && selectedDay) {
        currentFilteredClasses = classSchedules[selectedPlace]?.[selectedDay] || [];
      }
      // Case 2: Only place selected
      else if (selectedPlace) {
        for (const day of daysOfWeek) {
          const classesForDay = classSchedules[selectedPlace]?.[day] || [];
          currentFilteredClasses = currentFilteredClasses.concat(classesForDay.map(cls => ({
            ...cls,
            day: day, // Add day information for display
            location: selectedPlace // Add location information
          })));
        }
      }
      // Case 3: Only day selected
      else if (selectedDay) {
        for (const place of locations) {
          const classesForDay = classSchedules[place]?.[selectedDay] || [];
          currentFilteredClasses = currentFilteredClasses.concat(classesForDay.map(cls => ({
            ...cls,
            day: selectedDay, // Add day information
            location: place // Add location information
          })));
        }
      }
    }
    // If no selection is made, set filteredClasses to empty to show the prompt
    setFilteredClasses(currentFilteredClasses);
  }, [selectedPlace, selectedDay, locations, daysOfWeek]);

  const getHeaderText = () => {
    if (selectedPlace && selectedDay) {
      return `${selectedDay} Classes at ${selectedPlace}`;
    } else if (selectedPlace) {
      return `All Classes at ${selectedPlace}`;
    } else if (selectedDay) {
      return `All Classes on ${selectedDay}`;
    } else {
      return 'Select a Place and/or Day to View Schedule';
    }
  };

  const getEmptyMessage = () => {
    if (selectedPlace === '' && selectedDay === '') {
      return 'Please make your selections to see the class schedule.';
    } else if (selectedPlace && selectedDay) {
      return `No classes scheduled for ${selectedDay} at ${selectedPlace}.`;
    } else if (selectedPlace) {
      return `No classes found at ${selectedPlace}.`;
    } else if (selectedDay) {
      return `No classes found on ${selectedDay}.`;
    }
    return 'No classes found based on your selection.';
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black w-full">
      {/* Sticky NavBar */}
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage='classes' />
      </div>
      <main
        className="min-h-screen w-full text-gray-400 p-4 sm:p-6 md:p-8 flex flex-col items-center relative" // Added relative for pseudo-element (if using) or if needed for child positioning
        style={{
          backgroundImage: `url(${bg})`, // Corrected syntax here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Keeps background fixed while content scrolls
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // This creates the direct overlay on the main background
          backgroundBlendMode: 'multiply' // Optional: blends the background image with the color
        }}
      >
        {/* Attach the forwarded ref 'ref' to the outermost section element */}
        <section>
          <div className="mt-8 text-center text-[#EFD09E]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 uppercase text-center" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em' }}>
              Classes / Events
            </h2>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-7xl mx-auto">
              {/* Left Column: Selection Controls + Class Schedule */}
              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <div className="max-w-sm mx-auto w-full md:max-w-none md:mx-0 flex flex-col space-y-4">
                  {/* Select Place */}
                  <select
                    id="place-select"
                    className="p-2 sm:p-3 rounded-md bg-white text-black focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-md text-sm sm:text-base"
                    value={selectedPlace}
                    onChange={(e) => setSelectedPlace(e.target.value)}
                  >
                    <option value="">Select a Place</option>
                    {locations.map((place) => (
                      <option key={place} value={place}>{place}</option>
                    ))}
                  </select>

                  {/* Select Day */}
                  <select
                    id="day-select"
                    className="p-2 sm:p-3 rounded-md bg-white text-black focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-md text-sm sm:text-base"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                  >
                    <option value="">Select a Day</option>
                    {daysOfWeek.map((day) => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>

                  {/* Class Schedule Display */}
                  <div className="w-full bg-white rounded-xl p-3 sm:p-4 overflow-y-auto shadow-lg mt-4" style={{ maxHeight: '400px' }}>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-black">
                      {getHeaderText()}
                    </h3>
                    {filteredClasses.length > 0 ? (
                      <ul className="space-y-3">
                        {filteredClasses.map((cls, index) => (
                          <li key={index} className="bg-gray-800 p-3 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-md">
                            <div>
                              <p className="text-base sm:text-lg font-medium text-white">{cls.name}</p>
                              <p className="text-xs sm:text-sm text-gray-300">{cls.time}</p>
                            </div>
                            <div className="mt-2 sm:mt-0 text-right">
                              <p className="text-sm text-gray-400">Instr: {cls.instructor}</p>
                              {!(selectedPlace && selectedDay) && (
                                <p className="text-xs text-gray-500 mt-1">{cls.day} at {cls.location}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-400">
                        {getEmptyMessage()}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Events Card */}
              <div className="w-full md:w-1/2 bg-white rounded-xl p-3 sm:p-4 shadow-lg flex flex-col space-y-4" style={{ maxHeight: '500px' }}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-black">
                  Events
                </h3>
                <div className="overflow-y-auto space-y-4">
                  {events.map(event => (
                    <div key={event.id} className="relative rounded-md overflow-hidden shadow-sm">
                      <img
                        src={event.imageUrl}
                        alt={event.name || 'Event Image'}
                        className="w-full h-auto object-cover"
                      />
                      {event.status === 'closed' && (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                          <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider">CLOSED</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Our Classes Videos Section */}
          <div className="mt-8 text-center">
            <div className='border-t border-gray-700 pt-4' />
            <ClassVideos ref={classVideosRef} />
          </div>
        </section>
      </main>
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </div>
  );
});

export default ClassesPage;