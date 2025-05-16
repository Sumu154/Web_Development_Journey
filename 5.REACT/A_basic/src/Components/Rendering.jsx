// Rendering.jsx
import React, { useState, useEffect } from 'react';

const Rendering = () => {
  // initial rendering
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // re-rendering
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="heading" tabIndex={0}>
      <span className="text">Hello {currentTime}</span>
    </h1>
  );
};

export default Rendering;



