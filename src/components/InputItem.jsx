import React from "react";

function InputItem(props) {
  return (
    <div className="form">
      <input onChange={props.funcHandleChange} type="text" value={props.text} />
      <button onClick={props.funcAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputItem;
