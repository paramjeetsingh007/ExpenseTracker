import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function ChartComponent({ totalIncome, totalExpenses }) {
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [totalIncome, totalExpenses],
        backgroundColor: ["#22c55e", "#ef4444"], // Green for income, Red for expense
        hoverBackgroundColor: ["#16a34a", "#dc2626"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto mt-6 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-center text-xl font-semibold mb-4 text-gray-700">
        Income vs Expense
      </h2>
      <div className="flex justify-center">
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default ChartComponent;
