import React from "react";

function Header({ goToDashboard }) {
  return (
    <header className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 shadow-md flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6">
      {/* Logo / Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center sm:text-left">
        MyTracker
      </h1>

      {/* Dashboard Button */}
      <button
        onClick={goToDashboard}
        className="mt-3 sm:mt-0 bg-white text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-200"
      >
        Back to Dashboard
      </button>
    </header>
  );
}

export default Header;
