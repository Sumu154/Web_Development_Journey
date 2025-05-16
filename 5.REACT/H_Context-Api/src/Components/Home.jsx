import React, { useContext } from 'react';


// ei file e ami context gula use korte chacchi..so shei file gula age impoer korte hbe
import { UserContext } from '../Contexts/UserContext';
import { ThemeContext } from '../Contexts/ThemeContext';

const Home = () => {
  // as ami ekhn use korte chacchi..useContext diye
  // context gula use er jonno upojogi korte hbe
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  
  return (
    <div>
      <h4> Hi, {user}! </h4>
      <p> The theme of this page {theme} </p>
    </div>
  );
};

export default Home;