import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <button className="header__add-expense-button" type="button">
        add expenses +
      </button>
      <section className="header__budget-title">
        <h1 className="header__title" id="title">
          Budget Buster
        </h1>
        <div className="header__month-selector">
          <button className="header__previous-button"></button>
          <p className="header__current-month">January</p>
          <button className="header__next-button"></button>
        </div>
        <p className="header__budget-total">BUDGET: $2600</p>
      </section>
      <section className="header__profile">
        <img
          className="header__profile-avatar"
          src="/src/images/avatar.jpg"
          alt=""
        />
        <button className="header__login-button" type="button">
          Log In
        </button>
      </section>
    </div>
  );
}

export default Header;
