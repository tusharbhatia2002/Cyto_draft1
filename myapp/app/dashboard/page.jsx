"use client"
import React, { useEffect } from 'react';
import { FaHome, FaFileAlt, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import HeaderProfileNav from './HeaderProfileNav.jsx';
import Link from "next/Link";

const Dashboard = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      // Redirect to the login page if not logged in
      window.location.href = "/login";
    }

    // Handle the "back" button pressed on the browser
    window.onpopstate = () => {
      if (confirm("Your progress may be lost. Are you sure you want to go back?")) {
        window.location.href = "/login";
      } else {
        // Restore the history to prevent going back
        window.history.pushState(null, document.title, window.location.href);
      }
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white">
        <div className="flex items-center justify-between p-4 text-3xl font-extrabold ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
            CytoUI
          </span>
        </div>
        <nav className="mt-8">
          <div className="px-4">
            <h2 className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Navigation</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/dashboard" className="flex items-center text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
                  <FaHome className="mr-2" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/MyFCSfile" className="flex items-center text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
                  <FaFileAlt className="mr-2" />
                  My FCS File
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-8 px-4">
            <h2 className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Admin</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="flex items-center text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
                  <FaUsers className="mr-2" />
                  Members
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
                  <FaCog className="mr-2" />
                  Settings
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
                  <FaSignOutAlt className="mr-2" />
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <div className="bg-white shadow">
        <div className="flex items-center justify-between px-4 py-2">
            <h1 className="text-xl font-bold text-black">Dashboard</h1>
            {/* Profile button */}
            <HeaderProfileNav />
        </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 bg-gradient-to-r from-cyan-100 to-blue-300">
          {/* Add your content here */}
          <div className="shadow-lg rounded-xl h-1/3 md:w-4/12 mt-8 md:ml-2 p-4 bg-white bg-white text-gray-700 relative overflow-hidden">
            <a href="#" className="w-full h-full block">
              <div className="w-full">
                <p className="text-black text-bold text-2xl font-light mb-4">
                  Task Progress
                </p>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <p>Total FCS Files Loaded</p>
                  <p>3/8</p>
                </div>
                <div className="w-full h-2 bg-green-100 rounded-full mb-4">
                  <div className="w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full" />
                </div>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <p>Visualization</p>
                  <p>6/10</p>
                </div>
                <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
                  <div className="w-2/3 h-full text-center text-xs text-white bg-indigo-400 rounded-full" />
                </div>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <p>Average Parameters</p>
                  <p>2/8</p>
                </div>
                <div className="w-full h-2 bg-blue-100 rounded-full mb-4">
                  <div className="w-1/4 h-full text-center text-xs text-white bg-blue-400 rounded-full" />
                </div>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <p>Graphs Plotted</p>
                  <p>8/8</p>
                </div>
                <div className="w-full h-2 bg-pink-100 rounded-full">
                  <div className="w-full h-full text-center text-xs text-white bg-pink-400 rounded-full" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;