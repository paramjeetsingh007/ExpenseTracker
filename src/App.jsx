import React, { useState } from "react";
import Balance from "./Components/Balance";
import Main from "./Components/Main";
import Amount from "./Components/Amount";
import History from "./Components/History";
import Header from "./Components/Header";
import ChartComponent from "./Components/ChartComponent";
import Dashboard from "./Components/Dashboard";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [showMain, setShowMain] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);

  // Function to switch from dashboard to application
  const startApplication = () => {
    setShowDashboard(false);
  };

  // Function to go back to the dashboard
  const goToDashboard = () => {
    setShowDashboard(true);
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const toggleMain = () => {
    setShowMain(!showMain);
  };

  const calculateTotals = () => {
    let totalIncome = 0;
    let totalExpenses = 0;

    transactions.forEach((transaction) => {
      const amount = Number(transaction.amount);
      if (transaction.type === "income") {
        totalIncome += amount;
      } else if (transaction.type === "expense") {
        totalExpenses += amount;
      }
    });

    return {
      totalIncome: totalIncome.toFixed(2),
      totalExpenses: totalExpenses.toFixed(2),
      balance: (totalIncome - totalExpenses).toFixed(2),
    };
  };

  const { totalIncome, totalExpenses, balance } = calculateTotals();

  return (
    <div>
      {showDashboard ? (
        <Dashboard onStart={startApplication} />
      ) : (
        <>
          <Header goToDashboard={goToDashboard} />
          <Balance totalIncome={totalIncome} balance={balance} toggleMain={toggleMain} showMain={showMain} />
          {showMain && <Main addTransaction={addTransaction} />}
          <Amount data={transactions} />
          <History data={transactions} />
          {/* Pie Chart for Income vs Expense */}
          <ChartComponent totalIncome={totalIncome} totalExpenses={totalExpenses} />
        </>
      )}
    </div>
  );
}

export default App;
