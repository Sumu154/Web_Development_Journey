// ** conditional rendering -> 
import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? ( <h1>Welcome back, user!</h1> ) : ( <h1>Please log in.</h1> )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

export default ConditionalRendering;