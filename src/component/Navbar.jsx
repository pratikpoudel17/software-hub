import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-amber-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300">
          SocioHub
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink to="/login" className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`}>
            LogIn
          </NavLink>

          <NavLink to="/register" className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`}>
            Register
          </NavLink>

          <NavLink to="/profile" className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`}>
            Profile
          </NavLink>

          <NavLink to="/post" className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`}>
            Post
          </NavLink>

          <NavLink to="/bookmark" className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`}>
            Bookmark
          </NavLink>

          <NavLink to="/settings" className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`}>
            Settings
          </NavLink>
        </div>

        
        <button
          className="md:hidden text-2xl hover:text-yellow-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-amber-600 px-6 py-4 space-y-4">
          <NavLink to="/" onClick={toggleMenu} className="block hover:text-yellow-300">
            Home
          </NavLink>
          <NavLink to="/login" onClick={toggleMenu} className="block hover:text-yellow-300">
            LogIn
          </NavLink>
          <NavLink to="/register" onClick={toggleMenu} className="block hover:text-yellow-300">
            Register
          </NavLink>
          <NavLink to="/profile" onClick={toggleMenu} className="block hover:text-yellow-300">
            Profile
          </NavLink>
          <NavLink to="/post" onClick={toggleMenu} className="block hover:text-yellow-300">
            Post
          </NavLink>
          <NavLink to="/bookmark" onClick={toggleMenu} className="block hover:text-yellow-300">
            Bookmark
          </NavLink>
          <NavLink to="/settings" onClick={toggleMenu} className="block hover:text-yellow-300">
            Settings
          </NavLink>
        </div>
      )}
    </nav>
  );
};
