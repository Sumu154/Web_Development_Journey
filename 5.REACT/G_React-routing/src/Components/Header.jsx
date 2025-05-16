import { Link, Navigate, NavLink } from "react-router-dom";
import './style.css';

const Header = () => {



  return (
    <div className="bg-red-600">
      <h2 className="text-indigo-900 font-bold text-2xl"> Header portion </h2>
      <nav className="flex gap-4">
        {/* <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/users">Users </Link> */}
        {/* navLink use korbo jate active route ta bojhate pari */}
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
        <NavLink to="/contact"> Contact </NavLink>
        <NavLink to="/users"> Users </NavLink>
      </nav>
    </div>
  );
};

export default Header;