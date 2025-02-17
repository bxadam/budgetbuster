import { Auth } from "./components/Auth";
import { useState, useEffect } from "react";
import { UserData } from "./Data";
import { db } from "../utils/api";
import { getDocs, collection } from "firebase/firestore";
import PieChart from "./components/PieChart";

import "./App.css";

function App() {
  const [expenseList, setExpenseList] = useState([]);

  const expenseCategoryCollectionRef = collection(db, "Expense Category");

  useEffect(() => {
    const getExpenseList = async () => {
      // READ THE DATA
      // SET THE EXPENSE LIST
      try {
        const data = await getDocs(expenseCategoryCollectionRef);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    getExpenseList();
  }, []);

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
      <Auth />
      <h1>BudgetBuster</h1>
      <div style={{ width: 400 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
