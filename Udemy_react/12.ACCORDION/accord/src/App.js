import { useState } from "react";

const faqs = [
  { title: "ile oczu ma pajak?1", text: "Lorem ipsum" },
  { title: "ile oczu ma pajak?2", text: "Lorem ipsum" },
  { title: "ile oczu ma pajak?3", text: "Lorem ipsum" },
  { title: "ile oczu ma pajak?4", text: "Lorem ipsum" },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs}></Accordion>
    </div>
  );
}

export default App;

function Accordion({ data }) {
  const [curreOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, id) => (
        <AccordionItem
          curreOpen={curreOpen}
          onOpen={setIsOpen}
          num={id}
          title={el.title}
          key={id}
        >
          {el.text} 😁
        </AccordionItem>
      ))}{" "}
      <AccordionItem
        curreOpen={curreOpen}
        onOpen={setIsOpen}
        num={22}
        title={"siemanko chore dzieci"}
        key={1}
      >
        <p>💕</p>
      </AccordionItem>
    </div>
  );
}
function AccordionItem({ num, title, children, curreOpen, onOpen }) {
  const isOpen = num === curreOpen;
  return (
    <div className="item">
      <p className="number">{num < 9 ? 0 + `$(num + 1)` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={() => onOpen(num)}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen === true && <p className="text">{children}</p>}
    </div>
  );
}
