"use client"
import React, { useState } from "react";

const CompensationSection = ({ onClose }) => {
  const closeCompensationSection = () => {
    onClose();
  };

  const channelNames = [
    "Cell_length",
    "DNA1",
    "DNA1",
    "DNA1",
    "DNA1",
    "DNA1",
    "DNA1",
    "DNA1",
    "DNA1"
  ]; // Add the channel names from the parameter section

  // Create an initial spillover matrix with 0 values
  const initialMatrix = channelNames.reduce((acc, channel) => {
    acc[channel] = channelNames.reduce((innerAcc, innerChannel) => {
      innerAcc[innerChannel] = 0;
      return innerAcc;
    }, {});
    return acc;
  }, {});

  const [spilloverMatrix, setSpilloverMatrix] = useState(initialMatrix);

  return (
    <div className="border border-gray-700 flex flex-col rounded bg-gray-200 p-4 mx-0 my-0 py-0 px-0 h-full resize-horizontal overflow-hidden" style={{ resize: "horizontal" }}>
      <div className="flex justify-between items-center bg-gradient-to-b from-gray-400 to-gray-500 p-0 mx-0 my-0">
        <h6 className="text-xs font-semibold text-white flex-grow">
          Compensation
        </h6>
        <button
          className="text-l text-white hover:bg-yellow-300 focus:outline-none px-2"
          onClick={closeCompensationSection}
        >
          X
        </button>
      </div>

      <h4 className="text-s mb-4">Dataset: fcsdata</h4>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          {/* Buttons */}
          <button className="p-2" title="open">
            <img
              src="https://img.icons8.com/offices/30/folder-invoices.png"
              alt="folder-invoices"
              width="25"
              height="25"
            />
          </button>
          <button className="p-2" title="save">
            <img
              src="https://img.icons8.com/office/16/save.png"
              alt="save"
              width="25"
              height="25"
            />
          </button>
          <button className="p-2" title="close">
            <img
              src="https://img.icons8.com/fluency/48/delete-sign.png"
              alt="delete-sign"
              width="25"
              height="25"
            />
          </button>
        </div>
      </div>

      {/* Render the spillover matrix */}
      <div className="flex mt-2 overflow-x-auto">
        <div className="flex-auto mt-6 mx-2">
          <table className="table-auto bg-white w-50 text-xs">
            <thead>
              <tr>
                <th className="px-2 py-1 border border-gray-500 bg-gray-300"></th>
                {channelNames.map((channel) => (
                  <th
                    key={channel}
                    className="px-2 py-1 border border-gray-500 bg-gray-300"
                  >
                    {channel}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {channelNames.map((rowChannel) => (
                <tr key={rowChannel}>
                  <td className="px-2 py-1 font-medium border border-gray-500">
                    {rowChannel}
                  </td>
                  {channelNames.map((colChannel) => (
                    <td
                      key={colChannel}
                      className="px-2 py-1 border border-gray-500"
                    >
                      {spilloverMatrix[rowChannel][colChannel]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompensationSection;







