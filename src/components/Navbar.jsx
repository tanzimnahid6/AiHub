import { Link, NavLink } from "react-router-dom";

import Logo5 from "../assets/logo5.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar font-bold py-0 fixed z-30 bg-[#0D9488]  ">
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
              <span className=" items-center flex py-2">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </span>

              <span className=" items-center flex py-2">
                <NavLink
                  to="/aboutUs"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                      : ""
                  }
                >
                  About
                </NavLink>
              </span>

              <span className=" items-center flex py-2">
                <NavLink
                  to="/model"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                      : ""
                  }
                >
                  Business model
                </NavLink>
              </span>
              <span className=" items-center flex py-2">
                <NavLink
                  to="/publication"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                      : ""
                  }
                >
                  Publication
                </NavLink>
              </span>
              <span className=" items-center flex py-2">
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                      : ""
                  }
                >
                  Contact US
                </NavLink>
              </span>
            </ul>
          </div>
          <div className="pl-4 ">
            <img src={Logo5} className="w-24 h-auto " alt="Logo" />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <span className=" items-center flex px-3">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                    : ""
                }
              >
                Home
              </NavLink>
            </span>

            <span className=" items-center flex px-3">
              <NavLink
                to="/aboutUs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                    : ""
                }
              >
                About
              </NavLink>
            </span>

            <span className=" items-center flex px-3">
              <NavLink
                to="/model"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                    : ""
                }
              >
                Business model
              </NavLink>
            </span>

            <span className=" items-center flex px-3">
              <NavLink
                to="/publication"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                    : ""
                }
              >
                Publication
              </NavLink>
            </span>

            <span className=" items-center flex py-2">
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black p-2 bg-[#A1D1C9] rounded-lg"
                    : ""
                }
              >
                Contact Us
              </NavLink>
            </span>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#236A68] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4">
              Log in
            </button>
          </Link>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;
