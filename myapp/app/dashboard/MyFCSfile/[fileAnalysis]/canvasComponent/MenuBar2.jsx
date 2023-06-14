import React from "react";

const MenuBar2 = () => {
    return (
        <div className="bg-gray-200 flex">
            <div className="flex items-center justify-between h-30">

            {/* div1 */}
        <div className="bg-gradient-to-b from-gray-300 to-gray-200 flex flex-col justify-between h-full rounded-lg text-xs w-25">
          <div className="flex items-center justify-center gap-2 h-30 w-25 text-xs">
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className = "custom-icon" width="28" height="28" src="https://img.icons8.com/color/48/cursor--v1.png" alt="cursor--v1"/></center>
              Select
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img
                className="custom-icon"
                width="28" height="28"
                src="https://img.icons8.com/plasticine/100/pencil.png" 
                alt="pencil"
              /></center>
              Annotation
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/external-becris-lineal-becris/28/external-shapes-coding-programming-becris-lineal-becris.png" alt="external-shapes-coding-programming-becris-lineal-becris" /></center>
              Shapes
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/glyph-neue/28/000000/chisel-tip-marker.png" alt="chisel-tip-marker" /></center>
              Overlay Marker
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/color/48/000000/zoom-in--v1.png" alt="zoom-in--v1" />
              Zoom in
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/color/48/000000/zoom-out.png" alt="zoom-out" />
              Zoom out
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/100/000000/external-direction-maps-navigation-kmg-design-basic-outline-kmg-design-3.png" alt="external-direction-maps-navigation-kmg-design-basic-outline-kmg-design-3" />
              Pan
            </button>
          </div>
          <div className="text-center">
            <div className="text-white font-semibold bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-xs">Tools</div>
          </div>
        </div>
        {/* vertical line */}
        <div className="h-full w-px bg-gray-700 bg-opacity-70"></div>

        <div></div>

        {/* div2 */}
        <div className="bg-gradient-to-b from-gray-300 to-gray-200 flex flex-col justify-between h-full rounded-lg text-xs">
          <div className="flex items-center justify-center gap-2 h-30 w-25 text-xs">
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-con" width="28" height="28" src="https://img.icons8.com/ios-filled/28/000000/thick-vertical-line.png" alt="thick-vertical-line" />
              Linear
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/ios-filled/50/000000/split-horizontal.png" alt="split-horizontal" />
              Divider
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/fluency/48/quadrant-dark.png" alt="quadrant-dark" />
              Quadrant
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/fluency/50/settings.png" alt="settings" />
              Hinged
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/ios/50/000000/polygone.png" alt="polygone" />
              Polygon
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/android/24/rectangle-stroked.png" alt="rectangle-stroked" /></center>
              Rectangle
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/ios-glyphs/100/000000/ellipse-stroked.png" alt="ellipse-stroked"/>
              Ellipse
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/color/48/000000/query-inner-join-left.png" alt="query-inner-join-left" /></center>
              Boolean
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <img className="custom-icon" width="28" height="28" src="https://img.icons8.com/ios-glyphs/30/000000/squiggly-line.png" alt="squiggly-line" />
              Autogate
            </button>
          </div>

          <div className="text-white text-center font-semibold bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-xs">Gates</div>
        </div>

        {/* vertical line */}
        <div className="h-full w-px bg-gray-700 bg-opacity-70"></div>

        {/* div3 */}
        <div className="bg-gradient-to-b from-gray-300 to-gray-200 flex flex-col justify-between h-full rounded-lg text-xs w-25">
          <div className="flex items-center justify-center gap-2 h-30 text-xs w-25">
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/fluency/48/000000/speedometer.png" alt="speedometer" /></center>
              Compensation
            </button>
          </div>
          <div className="text-center">
            <div className="text-white font-semibold bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-xs">Plot Sliders</div>
          </div>
        </div>
        

            </div>
        </div>
    );
};

export default MenuBar2;