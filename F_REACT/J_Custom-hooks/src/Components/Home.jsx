import React from 'react';
import useToggle from '../Utils/Hooks/useToggle';

const Home = () => {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {isVisible && <p>Hello! This is a toggled message.</p>}
    </div>
  );
};

export default Home;
