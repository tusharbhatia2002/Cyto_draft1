"use client"
import React, { useState } from "react";
import Canvas from "./Canvas";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import Sidebar from "./Sidebar";

const CanvasPage = () => {
    const [showMenuBar, setShowMenuBar] = useState(false);

    const onPlotsTablesClick = () => {
        setShowMenuBar(true);
      };

    return (
        <div className="bg-gray-100 flex flex-col h-screen">
          <div className="flex flex-grow">
            <Sidebar />
            <div className="flex flex-col flex-grow">
              <Navbar onPlotsTablesClick={onPlotsTablesClick} />
              <div className="border border-2 border-black flex-grow">
                {showMenuBar && <MenuBar/>}
                <Canvas />
              </div>
            </div>
          </div>
        </div>
      );
     };

export default CanvasPage