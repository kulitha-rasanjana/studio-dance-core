import React, { useState, useEffect, useRef } from 'react';

// This component creates a falling rose animation in the background.
// It's designed to be a standalone component that you can place in your main layout.
const FallingRoseBackground = () => {
  // Number of roses to display on the screen. You can adjust this value.
  const numRoses = 50;

  // State to hold the position and properties of each rose.
  const [roses, setRoses] = useState([]);
  const animationFrameRef = useRef();

  // The animation loop is set up inside a useEffect hook.
  // This ensures it runs after the component mounts and is cleaned up when it unmounts.
  useEffect(() => {
    // Generate the initial array of roses with random properties.
    const initialRoses = Array.from({ length: numRoses }).map(() => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth, // Random starting x-position
      y: Math.random() * window.innerHeight, // Random starting y-position
      speed: Math.random() * 2 + 1, // Random falling speed
      rotation: Math.random() * 360, // Random starting rotation
      rotationSpeed: Math.random() * 2 - 1, // Random rotation speed
      size: Math.random() * 10 + 10, // Random size
      opacity: Math.random() * 0.5 + 0.5, // Random opacity
    }));
    setRoses(initialRoses);

    const animate = () => {
      // Update the position of each rose for the next frame.
      setRoses(prevRoses =>
        prevRoses.map(rose => {
          // Reset rose to the top if it falls off the bottom of the screen.
          if (rose.y > window.innerHeight) {
            return {
              ...rose,
              y: -50, // Start just above the viewport
              x: Math.random() * window.innerWidth, // New random x-position
              speed: Math.random() * 2 + 1, // New random speed
              rotation: Math.random() * 360, // New random rotation
            };
          }

          // Return the updated rose object.
          return {
            ...rose,
            y: rose.y + rose.speed, // Move down
            rotation: rose.rotation + rose.rotationSpeed, // Rotate
          };
        })
      );
      // Request the next animation frame.
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop.
    animate();

    // Cleanup function: cancel the animation frame when the component unmounts.
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {roses.map(rose => (
        <div
          key={rose.id}
          className="absolute text-red-500 animate-pulse" // Using a pulse animation for a nice touch
          style={{
            left: `${rose.x}px`,
            top: `${rose.y}px`,
            fontSize: `${rose.size}px`,
            opacity: rose.opacity,
            transform: `rotate(${rose.rotation}deg)`,
          }}
        >
          🌹
        </div>
      ))}
    </div>
  );
};

export default FallingRoseBackground;
