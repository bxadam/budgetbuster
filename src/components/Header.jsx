import React from "react";
import "./Header.css";

function Header() {
  return (
    <div class="header">
      <button class="header__add-expense-button" type="button">
        add expenses +
      </button>
      <section class="header__budget-title">
        <h1 class="header__title" id="title">
          Budget Buster
        </h1>
        <div class="header__month-selector">
          <button class="header__previous-button"></button>
          <p class="header__current-month">January</p>
          <button class="header__next-button"></button>
        </div>
        <p class="header__budget-total">BUDGET: $2600</p>
      </section>
      <section class="header__profile">
        <img
          class="header__profile-avatar"
          src="/src/images/avatar.jpg"
          alt=""
        />
        <button class="header__login-button" type="button">
          Log In
        </button>
      </section>
    </div>
  );
}

export default Header;
