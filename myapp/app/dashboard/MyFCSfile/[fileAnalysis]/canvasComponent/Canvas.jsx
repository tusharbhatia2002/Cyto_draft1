"use client"
import React, { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import ZoomSlider from './ZoomSlider';

const Canvas = ({ selectedPlot }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomChange = (newZoomLevel) => {
    // Limit the zoom range between 1 and 2
    if (newZoomLevel < 1) {
      newZoomLevel = 1;
    } else if (newZoomLevel > 2) {
      newZoomLevel = 2;
    }
    setZoomLevel(newZoomLevel);
  };

  const canvasWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const canvasHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  return (
    <div className="canvas-container w-full overflow-hidden bg-white">
      <Stage
        width={canvasWidth}
        height={canvasHeight}
        scaleX={zoomLevel}
        scaleY={zoomLevel}
      >
        <Layer>
          <Rect
            x={0}
            y={0}
            width={canvasWidth}
            height={canvasHeight}
            fill="#ffffff"
            stroke="#000000"
            strokeWidth={1 / zoomLevel}
          />

          {/* Background Grid Lines */}
          <Rect width={canvasWidth} height={canvasHeight} fill="#eeeeee" />
          {[...Array(Math.ceil(canvasWidth / 20)).keys()].map((i) => (
            <Rect
              key={i}
              x={i * 20}
              y={0}
              width={1}
              height={canvasHeight}
              fill="#ccc"
            />
          ))}
          {[...Array(Math.ceil(canvasHeight / 20)).keys()].map((i) => (
            <Rect
              key={i}
              x={0}
              y={i * 20}
              width={canvasWidth}
              height={1}
              fill="#ccc"
            />
          ))}
        </Layer>
      </Stage>
      <div className="zoom-slider-container bg-gray-800 py-2">
        <ZoomSlider zoomLevel={zoomLevel} onZoomChange={handleZoomChange} />
      </div>
    </div>
  );
};

export default Canvas;
