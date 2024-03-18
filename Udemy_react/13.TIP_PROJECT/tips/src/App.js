import { useState } from "react";

function App() {
  const [pay, setPay] = useState(0);
  const [selectPay, setSelectPay] = useState("5%");
  const [friendSelectPay, setFriendSelectPay] = useState("5%");
  let sel, frien;
  if (selectPay === "5%") {
    sel = 0.05;
  } else if (selectPay === "10%") {
    sel = 0.1;
  } else {
    sel = 0.2;
  }
  if (friendSelectPay === "5%") {
    frien = 0.05;
  } else if (friendSelectPay === "10%") {
    frien = 0.1;
  } else {
    frien = 0.2;
  }

  let sum = (sel + frien) / 2;

  function onReset() {
    setSelectPay("5%");
    setFriendSelectPay("5%");
    setPay(0);
  }
  return (
    <div className="App">
      <BillSet pay={pay} setPay={setPay}></BillSet>
      <ServiceSet selectPay={selectPay} setSelectPay={setSelectPay}>
        How did you like the service?
      </ServiceSet>
      <ServiceSet selectPay={friendSelectPay} setSelectPay={setFriendSelectPay}>
        How did your friend like the serivce?
      </ServiceSet>
      <Payment pay={pay} sum={sum} onReset={onReset}></Payment>
    </div>
  );
}

export default App;

function BillSet({ pay, setPay }) {
  return (
    <>
      <p>How much was the bill?</p>
      <input
        type="number"
        value={pay}
        onChange={(e) => setPay(e.target.value)}
      ></input>
    </>
  );
}
function ServiceSet({ children, selectPay, setSelectPay }) {
  return (
    <>
      <p>{children}</p>
      <select value={selectPay} onChange={(e) => setSelectPay(e.target.value)}>
        <option value={"5%"}>It was neat (5%)</option>
        <option value={"10%"}>It was good (10%)</option>
        <option value={"20%"}>It was excellent (20%)</option>
      </select>
    </>
  );
}
function Payment({ pay, sum, onReset }) {
  return (
    <>
      <p>
        You pay {Number(pay) + Number(pay * sum)} (${pay} + ${Number(pay * sum)}
        ) tip
      </p>
      <button onClick={onReset}>Reset</button>
    </>
  );
}
