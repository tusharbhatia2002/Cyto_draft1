import React, { useState } from "react";

const HeaderProfileNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={handleDropdownToggle}
        className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
          A
        </span>
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          id="dropdown"
          className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        >
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Annie Green</div>
            <div class="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Homepage
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderProfileNav;
