import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} />
    <StarRating maxRating={10} color="green" size={20} /> */}
    <Test></Test>
  </React.StrictMode>
);

function Test() {
  const [setRating, onSetRating] = useState(0);
  return (
    <>
      <StarRating onSetRating={onSetRating}></StarRating>
      <p>{setRating}</p>
    </>
  );
}
