import React from "react";


function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="loading-spinner animate-spin h-16 w-16 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014 12H0c0 6.627 5.373 12 12 12v-4a7.962 7.962 0 01-6-2.709zm10 2.709A7.962 7.962 0 0112 20v4c6.627 0 12-5.373 12-12h-4a8.001 8.001 0 01-5.291 2.291z"
        ></path>
      </svg>
    </div>
  );
}

export default LoadingSpinner;