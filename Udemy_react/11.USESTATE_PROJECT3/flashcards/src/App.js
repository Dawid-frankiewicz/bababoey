import { useState } from "react";
import "./index.css";

const questions = [
  {
    id: 3457,
    question: "what language react is based on?",
    answer: "Javascript",
  },
  {
    id: 7336,
    question: "what language react is based on?",
    answer: "Javascript",
  },
  {
    id: 8832,
    question: "what language react is based on?",
    answer: "Javascript",
  },
  {
    id: 1111,
    question: "what language react is based on?",
    answer: "Javascript",
  },
];

function App() {
  return (
    <div className="App">
      <FlashCards></FlashCards>
    </div>
  );
}

export default App;

function FlashCards() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleClick = (id) => {
    setSelectedQuestion(id !== selectedQuestion ? id : null);
  };

  return (
    <div className="flash">
      {questions.map((item) => (
        <div
          key={item.id}
          className={selectedQuestion === item.id ? "elementActive" : "element"}
          onClick={() => handleClick(item.id)}
        >
          {selectedQuestion === item.id ? item.answer : item.question}
        </div>
      ))}
    </div>
  );
}
