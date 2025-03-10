import React from "react";
import "./Expenses.css";

function Expenses() {
  return (
    <div class="content">
      <div class="content__expenses">
        <h2 class="content__expenses-title">Expense List</h2>
        <ul class="content__expenses-list">
          <li class="content__expenses-item">Expense 1</li>
          <li class="content__expenses-item">Expense 2</li>
          <li class="content__expenses-item">Expense 3</li>
        </ul>
      </div>
      <div class="content__summary">
        <h2 class="content__summary-title">Summary</h2>
        <p class="content__summary-description">
          This is a Summary of all of the content__expenses
        </p>
      </div>
      <div class="piechart">
        <image
          class="piechart__placeholder"
          src="/src/images/piechart placeholder.png"
        />
      </div>
    </div>
  );
}

export default Expenses;
