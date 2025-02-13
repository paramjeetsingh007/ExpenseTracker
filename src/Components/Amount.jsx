import React from "react";

function Amount({ data }) {
  let totalExpenses = 0;
  let totalIncome = 0;

  data.forEach((transaction) => {
    const amount = Number(transaction.amount);
    transaction.type === "expense"
      ? (totalExpenses += amount)
      : (totalIncome += amount);
  });

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full px-4 mt-6">
      {/* Expense Card */}
      <div className="w-full sm:w-[280px] p-5 rounded-lg shadow-lg bg-red-100 border-l-4 border-red-600 text-center">
        <h1 className="text-2xl font-bold text-red-700">Expense</h1>
        <p className="text-xl font-semibold text-gray-800 mt-2">Rs {totalExpenses}</p>
      </div>

      {/* Income Card */}
      <div className="w-full sm:w-[280px] p-5 rounded-lg shadow-lg bg-green-100 border-l-4 border-green-600 text-center">
        <h1 className="text-2xl font-bold text-green-700">Income</h1>
        <p className="text-xl font-semibold text-gray-800 mt-2">Rs {totalIncome}</p>
      </div>
    </div>
  );
}

export default Amount;
