"use client"
import React, { useState } from "react";
import ParametersSection from "./parameters";
import CompensationSection from "./CompensationSection";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showCompensationSection, setShowCompensationSection] = useState(false);

  const handleButtonClick = (button) => {
    if (activeButton === button) {
      setActiveButton(null);
      setShowCompensationSection(false);
    } else {
      setActiveButton(button);
      if (button === "compensation") {
        setShowCompensationSection(true);
      }
    }
  };

  const handleCloseParameters = () => {
    setActiveButton(null);
  };

  const handleCloseCompensation = () => {
    setShowCompensationSection(false);
    setActiveButton(null);
  };

  return (
    <div className= "flex w-full">
      <aside className="bg-gray-700 h-full w-8 flex flex-col justify-start">
        <button
          className={`nav-button rounded-md mr-0 text-xs my-2 ${
            activeButton === "arrow" ? "" : "hover:bg-gray-600"
          }`}
          onClick={() => handleButtonClick("arrow")}
        >
          <center>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/fluency/48/000000/double-right.png"
              alt="double-right"
            />
          </center>
        </button>
        <button
          className={`nav-button rounded-md mr-0 py-3 my-10 transform -rotate-90 text-xs ${
            activeButton === "parameters" ? "text-yellow-300" : "text-white hover:text-yellow-300"
          }`}
          onClick={() => handleButtonClick("parameters")}
        >
          Parameters
        </button>
        <button
          className={`nav-button rounded-md mr-0 py-2 my-8 transform -rotate-90 text-xs ${
            activeButton === "compensation" ? "text-yellow-300" : "text-white hover:text-yellow-300"
          }`}
          onClick={() => handleButtonClick("compensation")}
        >
          Compensation
        </button>
      </aside>
      <div className="flex-grow">
        {activeButton === "parameters" && (
          <ParametersSection onClose={handleCloseParameters} />
        )}
        {activeButton === "compensation" && (
          <CompensationSection onClose={handleCloseCompensation} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;