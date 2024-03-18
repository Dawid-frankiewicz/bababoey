import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [exist, setExist] = useState(true);

  function handleExist() {
    setExist(!exist);
    console.log(exist);
  }
  function Close() {
    return (
      <>
        <button
          onClick={handleExist}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          X
        </button>
      </>
    );
  }

  function handlePrevious() {
    setStep((step) => step - 1);
    if (step <= 1) {
      setStep(1);
    }
  }
  function handleNext() {
    setStep(step + 1);
    if (step >= 3) {
      setStep(3);
    }
  }

  return (
    <>
      {exist ? (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">step {step + " " + messages[0]}</p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>nie</p>
      )}
      <Close></Close>;
    </>
  );
}

export default App;
