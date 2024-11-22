import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons"; 

//Displays the side naviagtion menu
const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function that handles the menu visibillity
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className=" z-50">
      <div className="text-center">
        <button
          onClick={handleClick}
          className=" h-[50px] ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          aria-controls="drawer-navigation"
        >
          Menu
        </button>
      </div>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <button
          type="button"
          onClick={handleClick}
          aria-controls="drawer-navigation"
          className="font-medium text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li className="text-black hover:bg-gray-500 hover:p-2 transition ease-in-out duration-100">
              <Link to="/">
                <span><FontAwesomeIcon icon={faHouseChimney}/> Home</span>
              </Link>
            </li>
            <li className="text-black hover:bg-gray-500 hover:p-2 transition ease-in-out duration-100">
              <Link to="/contact">
                <span><FontAwesomeIcon icon={faMessage}/> Contact Me</span>
              </Link>
            </li>
            <li className="text-black hover:bg-gray-500 hover:p-2 transition ease-in-out duration-100">
              <Link to="/about">
              <span><FontAwesomeIcon icon={faInfo}/> About Me</span>
              </Link>
            </li>
            {/* Add more navigation items here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;