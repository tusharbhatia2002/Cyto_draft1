import React from "react";

const MenuBar = () => {
   
  return (
    <div className="bg-gray-200 flex">
      <div className="flex items-center justify-between h-30">

        {/* div1 */}
        <div className="bg-gradient-to-b from-gray-300 to-gray-200 flex flex-col justify-between h-full rounded-lg text-xs">
          <div className="flex items-center justify-center gap-2 h-30 text-xs">
          <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <center><img
                className="custom-icon"
                width="28" height="28"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-histogram-data-analytics-flaticons-lineal-color-flat-icons.png"
                alt="histogram"
              /></center>
              Histogram
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img
                className="custom-icon"
                width="28" height="28"
                src="https://img.icons8.com/stickers/100/scatter-plot.png"
                alt="scatter-plot"
              />
              Dot
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/ultraviolet/52/bar-chart.png" alt="bar-chart" />
              Tree
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/office/52/radar-plot.png" alt="radar-plot" />
              Radar
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/doodle/52/heat-map.png" alt="heat-map" />
              Density
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/plasticine/48/area-chart.png" alt="area-chart" />
              Contour
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/plasticine/48/area-chart.png" alt="area-chart" />
              Overlay
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/stickers/50/graph.png" alt="graph" /></center>
              Comparison
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/flat-round/50/synchronize.png" alt="synchronize" /></center>
              Cell cycle
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/stickers/100/combo-chart.png" alt="combo-chart" /></center>
              Add all plots
            </button>
          </div>
          <div className="text-center">
            <div className="text-white font-semibold bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-xs">Plots</div>
          </div>
        </div>

        {/* vertical line */}
        <div className="h-full w-px bg-gray-700 bg-opacity-70"></div>

        {/* div2 */}
        <div className="bg-gradient-to-b from-gray-300 to-gray-200 flex flex-col justify-between h-full rounded-lg text-xs">
          <div className="flex items-center justify-center gap-2 h-30 w-25 text-xs">
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <center><img className="custom-con" width="28" height="28" src="https://img.icons8.com/color-glass/50/statistics.png" alt="statistics" /></center>
              Gate Statistics
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/stickers/100/user-manual.png" alt="user-manual" /></center>
              Information
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/fluency/50/settings.png" alt="settings" /></center>
              CytoSettings
            </button>
          </div>

          <div className="text-white text-center font-semibold bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-xs">Tables</div>
        </div>

        {/* vertical line */}
        <div className="h-full w-px bg-gray-700 bg-opacity-70"></div>

        {/* div3 */}
        <div className="bg-gradient-to-b from-gray-300 to-gray-200 flex flex-col justify-between h-full rounded-lg text-xs w-25">
          <div className="flex items-center justify-center gap-2 h-30 text-xs w-25">
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/fluency/48/image.png" alt="image" />
              Image
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/color/48/align-cell-content-left.png" alt="align-cell-content-left" />
              Text
            </button>
            {/* Add other buttons */}
          </div>
          <div className="text-center">
            <div className="text-white font-semibold bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-xs">Sheet Items</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

