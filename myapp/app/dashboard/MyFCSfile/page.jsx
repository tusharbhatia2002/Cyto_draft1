"use client"
import React from 'react';
import { FaHome, FaFileAlt, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from "next/Link";
import HeaderProfileNav from '../HeaderProfileNav.jsx';
const MyFCSfile = () => {
  const fcsFiles = [
    { name: 'File 1', patient: 'Patient 1', tags: ['Tag 1', 'Tag 2'], panel: 'Panel 1', events: 1000, size: '10 MB' },
    { name: 'File 2', patient: 'Patient 2', tags: ['Tag 3', 'Tag 4'], panel: 'Panel 2', events: 2000, size: '20 MB' },
    { name: 'File 3', patient: 'Patient 3', tags: ['Tag 5', 'Tag 6'], panel: 'Panel 3', events: 3000, size: '30 MB' },
    { name: 'File 4', patient: 'Patient 4', tags: ['Tag 7', 'Tag 8'], panel: 'Panel 4', events: 4000, size: '40 MB' },
    { name: 'File 5', patient: 'Patient 5', tags: ['Tag 9', 'Tag 10'], panel: 'Panel 5', events: 5000, size: '50 MB' },
    { name: 'File 6', patient: 'Patient 6', tags: ['Tag 11', 'Tag 12'], panel: 'Panel 6', events: 6000, size: '60 MB' },
    { name: 'File 7', patient: 'Patient 7', tags: ['Tag 13', 'Tag 14'], panel: 'Panel 7', events: 7000, size: '70 MB' },
    { name: 'File 8', patient: 'Patient 8', tags: ['Tag 15', 'Tag 16'], panel: 'Panel 8', events: 8000, size: '80 MB' },
    { name: 'File 9', patient: 'Patient 9', tags: ['Tag 17', 'Tag 18'], panel: 'Panel 9', events: 9000, size: '90 MB' },
    { name: 'File 10', patient: 'Patient 10', tags: ['Tag 19', 'Tag 20'], panel: 'Panel 10', events: 10000, size: '100 MB' },
  ];

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
                <Link href="/MyFCSfile" className="flex items-center text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
                  <FaFileAlt className="mr-2" />
                  My FCS File
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-10 px-4">
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
            <h1 className="text-xl font-bold text-black">My FCS File</h1>
            {/* Profile button */}
            <HeaderProfileNav />
        </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 bg-gradient-to-r from-cyan-100 to-blue-300">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-black font-bold">List of FCS Files</h2>
            <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FaFileAlt className="mr-2" />
            Add FCS File
            </button>
        </div>
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-black">File Name</th>
                <th className="py-2 px-4 border-b text-black">Patient Name</th>
                <th className="py-2 px-4 border-b text-black">Tags</th>
                <th className="py-2 px-4 border-b text-black">Panel</th>
                <th className="py-2 px-4 border-b text-black">Events</th>
                <th className="py-2 px-4 border-b text-black">Size</th>
              </tr>
            </thead>
            <tbody>
              {fcsFiles.map((file, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-r">
                    <Link
                      href="/dashboard/MyFCSfile/1"
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      {file.name}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b border-r text-black">{file.patient}</td>
                  <td className="py-2 px-4 border-b border-r text-black">{file.tags.join(', ')}</td>
                  <td className="py-2 px-4 border-b border-r text-black">{file.panel}</td>
                  <td className="py-2 px-4 border-b border-r text-black">{file.events}</td>
                  <td className="py-2 px-4 border-b text-black">{file.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFCSfile;
