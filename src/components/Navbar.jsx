

import { Link } from "react-router-dom";
import logoBlack from "../assets/logowbg.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar font-bold py-0 float fixed z-30 bg-[#B0E4D9]  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#home">Home </a>
              </li>
              <li>
                <a href="#model">Model</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="pl-4 ">
            <img src={logoBlack} className="w-16 h-auto " alt="Logo" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home">Home </a>
            </li>
            <li>
             <Link to='/aboutUs'>About</Link>
            </li>

            <li>
              <a href="#model">Business model</a>
            </li>
            <li>
              <a href="">Publication</a>
            </li>

            <li>
              <a href="">Services </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#236A68] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4">
            Sign In
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
