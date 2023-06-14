import React from "react";

const MenuBar3 = () => {
    return (
        <div className="bg-gray-200 flex">
            <div className="flex items-center justify-between h-30">

            {/* div1 */}
        <div className="bg-gradient-to-b from-gray-300 to-gray-200 flex flex-col justify-between h-full rounded-lg text-xs w-25">
          <div className="flex items-center justify-center gap-2 h-30 w-25 text-xs">
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className = "custom-icon" width="28" height="28" src="https://img.icons8.com/color/48/000000/barber-scissors.png" alt="barber-scissors"/></center>
              Cut
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img
                className="custom-icon"
                width="28" height="28"
                src="https://img.icons8.com/carbon-copy/100/copy.png" alt="copy"/></center>
              Copy
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/wired/28/000000/paste.png" alt="paste"/></center>
              Paste
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/emoji/28/000000/link-emoji.png" alt="link-emoji" /></center>
              Paste as Link
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
              <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/color/48/000000/delete-forever.png" alt="delete-forever"/></center>
              Delete
            </button>
          </div>
          <div className="text-center">
            <div className="text-white font-semibold bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-xs">Clipboard</div>
          </div>
        </div>
        {/* vertical line */}
        <div className="h-full w-px bg-gray-700 bg-opacity-70"></div>

        <div></div>

        {/* div2 */}
        <div className="bg-gradient-to-b from-gray-300 to-gray-200 flex flex-col justify-between h-full rounded-lg text-xs">
          <div className="flex items-center justify-center gap-2 h-30 w-25 text-xs">
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className="custom-con" width="28" height="28" src="https://img.icons8.com/glyph-neue/64/000000/select-all.png" alt="select-all"/></center>
              Select All
            </button>
            <button className="py-2 px-2 rounded-md hover:bg-yellow-200 active:bg-yellow-200">
            <center><img className="custom-icon" width="28" height="28" src="https://img.icons8.com/ios/28/000000/invert-selection.png" alt="invert-selection" /></center>
              Clear Selection
            </button>
          </div>

          <div className="text-center">
            <div className="text-white font-semibold bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg text-xs">Selection</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar3;