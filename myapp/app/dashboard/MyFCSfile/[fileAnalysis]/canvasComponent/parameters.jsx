"use client"
import React from "react";
import {useState} from "react";

const ParametersSection = ({ onClose }) => {
    const [tableWidth, setTableWidth] = useState("w-full");

    const closeParametersSection = () => {
      onClose();
    };

    const handleResize = (event) => {
        const newWidth = event.clientX;
        setTableWidth(`${newWidth}px`);
      };

  const parameterData = [
    { name: 'Time', description: 'Description for Time' },
    { name: 'Cell_length', description: 'Description for Cell_length' },
    { name: 'DNA1', description: 'Description for DNA1' },
    { name: 'CD45RA', description: 'Description for CD45RA' },
    { name: 'CD133', description: 'Description for DNA1' },
    { name: 'CD19', description: 'Description for DNA1' },
    { name: 'CD22', description: 'Description for DNA1' },
    { name: 'CD11b', description: 'Description for DNA1' },
    { name: 'CD4', description: 'Description for DNA1' },
    { name: 'CD8', description: 'Description for DNA1' },
    { name: 'CD34', description: 'Description for DNA1' },
    { name: 'fit3', description: 'Description for DNA1' },
    { name: 'CD20', description: 'Description for DNA1' },
    { name: 'CXCR4', description: 'Description for DNA1' },
    { name: 'CD235ab', description: 'Description for CD235ab' },
    // Add more parameter objects as needed
  ];

  return (
    <div className="border border-gray-700 flex flex-col rounded bg-gray-200 p-4 mx-0 my-0 py-0 px-0 h-full">
      <div className="flex justify-between items-center bg-gradient-to-b from-gray-400 to-gray-500 p-0 mx-0 my-0">
        <h6 className="text-xs font-semibold text-white flex-grow">Parameters</h6>
        <button
          className="text-l text-white hover:bg-yellow-300 focus:outline-none px-2"
          onClick={closeParametersSection}
        >
          X
        </button>
      </div>
      <div className="mb-6 text-black border-b">
            <h4 className="text-s mb-4">Dataset: fcsdata</h4>
            <div className="max-h-[calc(100vh*0.9)] overflow-y-auto py-2 px-5">
            <table className={`${tableWidth} bg-white rounded-lg overflow-hidden shadow-md text-s`}>
                <thead className="bg-gray-300">
                  <tr>
                    <th className="py-2 px-4 border-b text-black text-xs">Channel Name</th>
                    <th className="py-2 px-4 border-b text-black text-xs">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {parameterData.map((parameter, index) => (
                    <tr className="hover:bg-gray-100" key={index}>
                      <td className="py-2 px-4 border-b border-r text-black text-xs">{parameter.name}</td>
                      <td className="py-2 px-4 border-b text-black text-xs">{parameter.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
        className="flex mt-4"
        style={{ cursor: "col-resize" }}
        onMouseDown={(e) => {
          document.addEventListener("mousemove", handleResize);
          document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", handleResize);
          });
        }}
      >
        <button className="flex items-center mr-4">
          <img
            className="custom-icon mr-2"
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/align-cell-content-left.png"
            alt="align-cell-content-left"
          />
        </button>
        <button className="flex items-center mr-4">
          <img
            className="custom-icon mr-2"
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/align-cell-content-left.png"
            alt="align-cell-content-left"
          />
        </button>
        <button className="flex items-center mr-4">
          <img
            className="custom-icon mr-2"
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/align-cell-content-left.png"
            alt="align-cell-content-left"
          />
        </button>
        <button className="flex items-center">
          <img
            className="custom-icon mr-2"
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/align-cell-content-left.png"
            alt="align-cell-content-left"
          />
        </button>
      </div>
    </div>
  );
};

export default ParametersSection;