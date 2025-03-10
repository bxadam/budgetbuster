import { useState, useEffect } from "react";
import { Auth } from "../utils/auth";
import { UserData } from "./Data";
import { db } from "../utils/api";
import { getDocs, collection } from "firebase/firestore";

//Components
import PieChart from "./components/PieChart";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
      <Header />
      <Auth />
      <h1>BudgetBuster</h1>
      <div style={{ width: 400 }}>
        <PieChart chartData={userData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
