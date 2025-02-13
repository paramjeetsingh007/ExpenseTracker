import React from "react";

function History({ data }) {
  return (
    <div className="w-full px-4 mt-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Transaction History
      </h2>
      <div className="max-w-[600px] mx-auto space-y-3">
        {data.map((ele, index) => {
          const isExpense = ele.type === "expense";
          return (
            <div
              key={index}
              className={`flex justify-between items-center w-full p-4 rounded-lg shadow-md ${
                isExpense ? "bg-red-100 border-l-4 border-red-500" : "bg-green-100 border-l-4 border-green-500"
              }`}
            >
              <h2 className="text-lg font-medium text-gray-800">{ele.description}</h2>
              <h3
                className={`text-lg font-semibold ${
                  isExpense ? "text-red-700" : "text-green-700"
                }`}
              >
                Rs {ele.amount}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;
