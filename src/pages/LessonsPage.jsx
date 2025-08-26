// src/components/Classes.jsx
import React, { useState, useEffect, useMemo, forwardRef } from 'react'; // Import forwardRef
import classSchedules from '../utils/classSchedules'; // Ensure this path is correct
import { bg } from '../utils/config';
// Import NavBar component
import NavBar from '../components/NavBar';
// Import the LoginPage component from its new file
import LoginPage from './LoginPage';

// Correct import for your new lessons.js file
import { lessonsData, paidLessonsData } from '../utils/lessons';



// Use forwardRef to allow HomePage to pass a ref to this component
const LessonsPage = forwardRef((props, ref) => { // 'ref' is the second argument from forwardRef
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to store user data
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false); // State to control the login form visibility

  // Effect to simulate checking for a logged-in user
  useEffect(() => {
    // In a real application, you would check for a user session here,
    // for example, using Firebase Auth or a token from an API.
    // We'll use a placeholder for now.
    const checkLoginStatus = () => {
      // Placeholder logic: A user is considered logged in if there's a stored user object
      const storedUser = JSON.parse(localStorage.getItem('currentUser'));
      if (storedUser) {
        setIsLoggedIn(true);
        setUser(storedUser);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    checkLoginStatus();
  }, []);

  // Function to handle successful login
  const handleLoginSuccess = (loggedInUser) => {
    // In a real app, you would save user data to localStorage or a global state
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
    setIsLoggedIn(true);
    setUser(loggedInUser);
    setShowLogin(false);
  };
  
  // Use useMemo to memoize 'locations' array
  const locations = useMemo(() => Object.keys(classSchedules), []);

  const daysOfWeek = useMemo(() => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], []);

  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [filteredClasses, setFilteredClasses] = useState([]);

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

  const lessonsToDisplay = isLoggedIn ? [...lessonsData, ...paidLessonsData] : lessonsData;

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
          <div className="mt-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#ffffffff' }}>
              Lessons
            </h2>
            <div className='border-t border-gray-700 pt-4' />
            <p className="text-lg sm:text-md text-gray-300 mb-4">
              Explore our wide range of dance lessons designed for all skill levels. Whether you're a beginner or an experienced dancer, we have classes that suit your needs.
            </p>
            <div className="mt-12 w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {lessonsToDisplay.map((lesson, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-black">
                    <h3 className="text-xl font-semibold mb-4 text-center">{lesson.title}</h3>
                    <p className="text-center text-gray-400 mb-6">Downloadable PDF to learn proper dance.</p>
                    <a href={lesson.file} download className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200">
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {!isLoggedIn && (
            <div className="mt-8 text-center">
              <p className="text-sm sm:text-base text-gray-400">For more lessons, please sign up</p>
              <button
                //onClick={() => setShowLogin(true)}
                className='mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200'>
                Sign Up Here
              </button>
            </div>
          )}
        </section>
      </main>
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} onSuccess={handleLoginSuccess} />}
    </div>
  );
});

export default LessonsPage;