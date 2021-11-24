import React from "react";

function ToDoItem(props) {
  // var clicked = false;
  // function handleChange() {
  //   clicked = !clicked;
  //   console.log(clicked);
  // }

  const [isDone, setIsDone] = React.useState();
  function handleChange() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div
      onClick={() => {
        props.func(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
