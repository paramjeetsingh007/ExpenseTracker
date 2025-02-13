import React from "react";

function Balance({ totalIncome, balance, toggleMain, showMain }) {
  return (
    <div className="flex flex-col items-center w-full mt-6 mb-5">
      <div className="w-[90%] sm:w-[400px] md:w-[600px] flex justify-between items-center px-6 py-4 bg-gray-900 text-white rounded-2xl shadow-lg">
        <h2 className="text-lg sm:text-xl font-semibold">
          Balance: <span className="text-green-400 font-bold">Rs {balance}</span>
        </h2>
        <button
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md"
          onClick={toggleMain}
        >
          {showMain ? "Cancel" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default Balance;
