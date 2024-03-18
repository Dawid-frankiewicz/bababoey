import { useState } from "react";

function App() {
  const [day, setDay] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("june 21 2023");
  date.setDate(date.getDate() + day);
  return (
    <>
      <div className="App">
        <button onClick={() => setDay((day) => day + step)}>+</button>
        <p>Count: {day}</p>
        <button onClick={() => setDay((day) => day - step)}>-</button>
        <br></br>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
        <p>Step:: {step}</p>
        <button onClick={() => setStep((step) => step - 1)}>+</button>
      </div>
      <span>
        {day === 0
          ? "Today is"
          : day > 0
          ? `${day} dni od teraz jest`
          : `${day} dni temu bylo`}
      </span>
      <p>{date.toDateString()}</p>
    </>
  );
}

export default App;
