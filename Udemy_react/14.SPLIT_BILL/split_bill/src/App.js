import { Children, useState } from "react";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  return (
    <div className="App">
      <div className="sidebar">
        <FriendsList></FriendsList>
        {showAddFriend && <FormFriend> </FormFriend>}
        <Button
          showAddFriend={showAddFriend}
          setShowAddFriend={setShowAddFriend}
        >
          {showAddFriend === true ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill></FormSplitBill>
    </div>
  );
}

export default App;

function FriendsList() {
  const friends = initialFriends;
  return (
    <>
      <ul>
        {friends.map((item, id) => (
          <Friend
            name={item.name}
            balance={item.balance}
            image={item.image}
            key={item.id}
          ></Friend>
        ))}
      </ul>
    </>
  );
}

function Friend({ name, balance, image }) {
  return (
    <>
      <li>
        {name}
        <img src={image} alt={name} />
        {balance < 0 && (
          <p className="red">
            You owe {name} {Math.abs(balance)} $
          </p>
        )}
        {balance > 0 && (
          <p className="green">
            {name} owe you {Math.abs(balance)} $
          </p>
        )}
        {balance === 0 && <p>You and {name} are even</p>}
        <Button>Select</Button>
      </li>
    </>
  );
}

function Button({ children, setShowAddFriend, showAddFriend }) {
  return (
    <button className="button" }>
      {children}
    </button>
  );
}

function FormFriend() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID,
    };
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-spli-bill">
      <h2>Split a bill with</h2>
      <label>Bill value</label>
      <input type="text"></input>

      <label>Your Expense</label>
      <input type="text"></input>

      <label>X Expense</label>
      <input type="text" disabled></input>

      <Button>Split bill</Button>
      <select>
        <option value="user">Your</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
}
