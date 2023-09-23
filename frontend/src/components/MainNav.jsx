import React, { useState } from "react";
import logo from '../assets/SanRakshak_logo.jpg'
// import { useNavigate } from "react-router-dom";

export default function MainNav() {
  const [display, setDisplay] = useState(false);
//   const navigate = useNavigate();
  const dropDownHandler = () => {
    setDisplay((display) => {
      console.log(display);
      return !display;
    });
  };
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center mr-4">
            <img src={logo} className="h-16 mr-3" alt="SanRakshak Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              SanRakshak
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <div onClick={dropDownHandler}>
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={logo} alt="user photo" />
              </button>
            </div>
            {/* <!-- Dropdown menu --> */}

            <div
              className={`z-50 ${display ? 'block' : 'hidden'} absolute top-14 right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-end">
          <div
            className="items-center  hidden w-full mr-8 md:flex md:w-auto "
            id="navbar-user"
          >
            <ul className="flex  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className="text-lg block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Alerts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Statistics
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
          <div className="flex gap-4">
            <button onClick={()=> window.location.href = '/userlogin'} className="cursor-pointer p-2 bg-green-400 rounded-full">User Login</button>
            <button onClick={()=> window.location.href = '/OrgLogin'}className="cursor-pointer p-2 bg-red-400 rounded-full">Partner Login</button>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
