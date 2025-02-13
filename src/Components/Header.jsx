import React from "react";

function Header({ goToDashboard }) {
  return (
    <header className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 shadow-md flex justify-between items-center px-6">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
        MyTracker
      </h1>
      <button
        onClick={goToDashboard}
        className="bg-white text-orange-500 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition"
      >
        Back to Dashboard
      </button>
    </header>
  );
}

export default Header;
