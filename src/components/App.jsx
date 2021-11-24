import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputItem from "./InputItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    console.log(id);
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={addItem}> */}
      <InputItem
        funcHandleChange={handleChange}
        funcAdd={addItem}
        text={inputText}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              func={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
