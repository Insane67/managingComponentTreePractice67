import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => props.onChange(event)}
        type="text"
        value={props.value}
      />
      <button onClick={() => props.onClick()}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
