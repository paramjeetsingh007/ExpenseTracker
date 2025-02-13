import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

function Main({ addTransaction }) {
  const [Transaction, setTransaction] = useState({
    amount: "",
    description: "",
    type: "",
  });

  const AddValue = (e) => {
    const { name, value, type } = e.target;
    const inputValue = type === "number" ? parseFloat(value) : value;

    setTransaction({
      ...Transaction,
      [name]: inputValue,
    });
  };

  const handleAddTransaction = () => {
    if (!Transaction.amount || !Transaction.description || !Transaction.type) {
      alert("All fields are required!");
      return;
    }
    const newTransaction = {
      ...Transaction,
      amount: Number(Transaction.amount) || 0,
    };

    setTransaction({
      amount: "",
      description: "",
      type: "",
    });

    addTransaction(newTransaction);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-white mb-5">
          Add Transaction
        </h2>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Enter Amount"
            name="amount"
            value={Transaction.amount}
            onChange={AddValue}
            className="w-full px-4 py-3 text-lg rounded-lg border border-gray-600 bg-gray-900 text-white outline-none focus:ring-2 focus:ring-orange-500"
            min="0"
            required
          />
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            value={Transaction.description}
            onChange={AddValue}
            className="w-full px-4 py-3 text-lg rounded-lg border border-gray-600 bg-gray-900 text-white outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Radio Buttons */}
        <div className="flex justify-around items-center mt-5">
          <label className="flex items-center gap-2 text-white">
            <input
              type="radio"
              name="type"
              value="expense"
              checked={Transaction.type === "expense"}
              onChange={AddValue}
              className="w-5 h-5 text-orange-500 focus:ring-orange-500"
            />
            <span className="text-red-400 font-semibold">Expense</span>
          </label>

          <label className="flex items-center gap-2 text-white">
            <input
              type="radio"
              name="type"
              value="income"
              checked={Transaction.type === "income"}
              onChange={AddValue}
              className="w-5 h-5 text-green-500 focus:ring-green-500"
            />
            <span className="text-green-400 font-semibold">Income</span>
          </label>
        </div>

        {/* Add Transaction Button */}
        <button
          className="w-full flex items-center justify-center gap-2 mt-6 px-4 py-3 bg-orange-600 text-white font-semibold text-lg rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-md"
          onClick={handleAddTransaction}
        >
          <FiPlusCircle className="text-2xl" />
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default Main;
