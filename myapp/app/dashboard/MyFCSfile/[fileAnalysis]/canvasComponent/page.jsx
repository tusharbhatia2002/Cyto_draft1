"use client"
import React, { useState } from 'react';
import { FaHome, FaFileAlt, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import HeaderProfileNav from '../../../HeaderProfileNav.jsx';
import Link from "next/Link";
import CanvasPage from "./canvaspage";

const Page = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            <h1 className="text-xl font-bold text-black">Your Canvas</h1>
            {/* Profile button */}
            <HeaderProfileNav />
        </div>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-r from-cyan-100 to-blue-300 overflow-y-auto overflow-x-auto mt-0 px-0">
        <div className="mt-0 px-0 w-screen">
            <CanvasPage />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
