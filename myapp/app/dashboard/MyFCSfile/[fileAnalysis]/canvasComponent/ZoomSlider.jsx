import React from 'react';

const ZoomSlider = ({ zoomLevel, onZoomChange }) => {
  const handleZoomChange = (event) => {
    let newZoomLevel = parseFloat(event.target.value);
    onZoomChange(newZoomLevel);
  };

  const formatZoomPercentage = (zoomLevel) => {
    const zoomPercentage = zoomLevel * 100;
    return `${zoomPercentage.toFixed(0)}%`;
  };

  return (
    <div className="flex items-center text-gray-700">
      <button
        className="w-6 h-6 text-base flex justify-center items-center bg-gray-500 text-white rounded-full focus:outline-none hover:bg-gray-600"
        onClick={() => onZoomChange(parseFloat(zoomLevel) - 0.1)}
        disabled={zoomLevel <= 1} // Disable button when zoom level is already at the minimum
      >
        -
      </button>
      <input
        type="range"
        min="1"
        max="2"
        step="0.1"
        value={zoomLevel}
        onChange={handleZoomChange}
        className="w-36 h-1 appearance-none bg-gray-300 rounded-full focus:outline-none focus:bg-gray-500"
      />
      <button
        className="w-6 h-6 text-base flex justify-center items-center bg-gray-500 text-white rounded-full focus:outline-none hover:bg-gray-600"
        onClick={() => onZoomChange(parseFloat(zoomLevel) + 0.1)}
        disabled={zoomLevel >= 2} // Disable button when zoom level is already at the maximum
      >
        +
      </button>
      <div className="ml-2">{formatZoomPercentage(zoomLevel)}</div>
    </div>
  );
};

export default ZoomSlider;
