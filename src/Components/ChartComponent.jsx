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
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[30%] sm:w-[600px] mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-lg font-bold mb-4">Income vs Expense</h2>
      <Doughnut data={data} />
    </div>
  );
}

export default ChartComponent;
