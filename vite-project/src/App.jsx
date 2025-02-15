import { useState } from "react";
import "./App.css";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.category),
    datasets: [
      {
        label: "Expense",
        data: UserData.map((data) => data.amount),
      },
    ],
  });

  return (
    <div className="App">
      <h1>BudgetBuster</h1>
      <div style={{ width: 400 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
