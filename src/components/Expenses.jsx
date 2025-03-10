import React from "react";
import "./Expenses.css";

function Expenses() {
  return (
    <div className="content">
      <div className="content__expenses">
        <h2 className="content__expenses-title">Expense List</h2>
        <ul className="content__expenses-list">
          <li className="content__expenses-item">Expense 1</li>
          <li className="content__expenses-item">Expense 2</li>
          <li className="content__expenses-item">Expense 3</li>
        </ul>
      </div>
      <div className="content__summary">
        <h2 className="content__summary-title">Summary</h2>
        <p className="content__summary-description">
          This is a Summary of all of the content__expenses
        </p>
      </div>
      <div className="piechart">
        <img
          className="piechart__placeholder"
          src="/src/images/piechart placeholder.png"
        />
      </div>
    </div>
  );
}

export default Expenses;
