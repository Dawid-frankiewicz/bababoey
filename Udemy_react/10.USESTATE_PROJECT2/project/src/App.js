import { useEffect, useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [quantity, setQuantity] = useState(1);
  const [tekst, setTekst] = useState("");
  const [initialItemsX, setInitialItemsX] = useState(initialItems);
  const [pakowany, setPakowany] = useState(false);

  const handlePakowany = (id) => {
    const updatedItems = initialItemsX.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setInitialItemsX(updatedItems);
    console.log(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = initialItemsX.filter((item) => item.id !== id);
    setInitialItemsX(updatedItems);
    console.log(updatedItems);
  };
  function handleClear() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setInitialItemsX([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form
        setInitialItemsX={setInitialItemsX}
        initialItemsX={initialItemsX}
        quantity={quantity}
        tekst={tekst}
        setQuantity={setQuantity}
        setTekst={setTekst}
        pakowany={pakowany}
      />
      <PackingList
        initialItemsX={initialItemsX}
        handlePakowany={handlePakowany}
        pakowany={pakowany}
        handleDelete={handleDelete}
        handleClear={handleClear}
      />
      <Stats initialItemsX={initialItemsX} />
    </div>
  );
}

export default App;

function Logo() {
  return <h1>Far Away ❤</h1>;
}

function Form({
  quantity,
  setQuantity,
  setTekst,
  tekst,
  setInitialItemsX,
  initialItemsX,
  pakowany,
}) {
  const handleSelectChange = (event) => {
    console.log(quantity);
    setQuantity(event.target.value);
  };

  const handleInputChange = (e) => {
    setTekst(e.target.value);
  };
  const Dodaj = () => {
    if (tekst !== "") {
      const newItem = {
        id: initialItemsX.length + 1,
        description: tekst,
        quantity: quantity,
        packed: false,
      };

      const updatedItems = [...initialItemsX, newItem];
      setInitialItemsX(updatedItems);
    }
  };

  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <select id="ile" onChange={handleSelectChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" onChange={handleInputChange}></input>
      <input
        type="submit"
        value={"ADD"}
        style={{ backgroundColor: "#ff3322" }}
        onClick={Dodaj}
      ></input>
    </div>
  );
}

function PackingList({
  initialItemsX,
  handlePakowany,
  handleDelete,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = initialItemsX;
  } else if (sortBy === "description") {
    sortedItems = initialItemsX
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = initialItemsX.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      {sortedItems.map((item) => (
        <div
          key={item.id}
          style={item.packed ? { textDecoration: "line-through" } : {}}
        >
          {item.description} {item.quantity}{" "}
          <input
            type="checkbox"
            onClick={() => handlePakowany(item.id)}
            checked={item.pakowany}
          ></input>
          <button onClick={() => handleDelete(item.id)}>X</button>
        </div>
      ))}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sorted by input</option>
          <option value="description">sorted by description</option>
          <option value="packed">sorted by packed status</option>
        </select>
        <button onClick={handleClear}>Clear List </button>
      </div>
    </div>
  );
}
function Stats({ initialItemsX }) {
  // const [itemCount, setItemCount] = useState(0);
  // const [ilePak, setIlePak] = useState(0);
  // useEffect(() => {
  //   const sum = initialItemsX.reduce(
  //     (acl, idies) => acl + idies.id / idies.id,
  //     0
  //   );
  //   setItemCount(sum);
  // }, [initialItemsX]);

  // useEffect(() => {
  //   const sum = initialItemsX
  //     .filter((items) => items.packed === true)
  //     .reduce((acl, packies) => acl + packies.id / packies.id, 0);
  //   setIlePak(sum);
  // }, [initialItemsX]);
  const numList = initialItemsX.length;
  const numPacked = initialItemsX.filter((items) => items.packed).length;

  return (
    <footer className="stats">
      <em>
        you have {numList} items on your lis{" "}
        {Math.round((numPacked / numList) * 10000) / 100}%
        {console.log(numPacked)}
      </em>
    </footer>
  );
}
