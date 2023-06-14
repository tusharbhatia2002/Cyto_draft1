"use client"
import React, { useState } from "react";
import MenuBar from "./MenuBar";
import MenuBar2 from "./MenuBar2";
import MenuBar3 from "./MenuBar3";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    if (activeButton === button) {
      setActiveButton(null);
    } else {
      setActiveButton(button);
    }
  };

  return (
    <nav className="bg-gray-700 py-1 w-full">
      <div className="flex justify-start">
        <button
          className={`${
            activeButton === "plots"
              ? "bg-gray-300 text-black"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          } py-0.5 px-1.5 rounded-md mr-1 text-xs`}
          onClick={() => handleButtonClick("plots")}
        >
          Plots & Tables
        </button>
        <button
          className={`${
            activeButton === "gates"
              ? "bg-gray-300 text-black"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          } py-0.5 px-1.5 rounded-md mr-1 text-xs`}
          onClick={() => handleButtonClick("gates")}
        >
          Gate & Tools
        </button>
        <button
          className={`${
            activeButton === "edit"
              ? "bg-gray-300 text-black"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          } py-0.5 px-1.5 rounded-md text-xs`}
          onClick={() => handleButtonClick("edit")}
        >
          Edit
        </button>
      </div>
      {activeButton === "plots" && <MenuBar />}
      {activeButton === "gates" && <MenuBar2 />}
      {activeButton === "edit" && <MenuBar3/>}
    </nav>
  );
};

export default Navbar;




