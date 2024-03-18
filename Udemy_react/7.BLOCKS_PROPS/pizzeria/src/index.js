import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast react Pizza </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>lorem ipsum cos tam nbie wiem</p>
      <ul>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizzaObj }) {
  const pizzas = pizzaData;
  return (
    <>
      {pizzas ? (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
          <img src={pizzaObj.name} alt="pizza" />
          <h2>{pizzaObj.name}</h2>
          <p>{pizzaObj.ingredients}</p>
          <p>{pizzaObj.soldOut ? "sold out" : pizzaObj.price + 10}</p>
        </li>
      ) : null}
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const closed = 23;
  const check = hour >= open && hour <= closed;

  return <footer className="footer">{check && <p>open</p>}</footer>;
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App></App>);
