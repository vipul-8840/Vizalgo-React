import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Control = ({ handleNewArray, userInputArray, setUserInputArray,setSpeed,isSorting}) => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="relative flex items-center">
        <input
          type="text"
          value={userInputArray}
          onChange={(e) => setUserInputArray(e.target.value)}
          placeholder="Enter your array between 1-500"
          className="px-3 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />

        {/* Info Icon with Hover Tooltip */}
                <div className="ml-2 relative group">
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="text-blue-600 dark:text-blue-300 cursor-pointer"
                    />
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-60 text-sm text-white bg-black rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Provide your array as comma-separated integers (e.g., 10, 30, 55)
                    </span>
                </div>
      </div>

      <button
        onClick={handleNewArray}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Generate New Array
      </button>
      <label>
    Speed:
    <input
        type="range"
        min="100"
        max="200"
        className="speedControl"
        onChange={(e) => {
          console.log(e.target.value)
          setSpeed(200-e.target.value)}}
        disabled={isSorting}
    />
</label>
    </div>
  );
};

export default Control;
