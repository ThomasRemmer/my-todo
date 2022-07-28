import { useState } from "react";
import { v4 as uuid } from "uuid";

const InputBox = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      text: input,
      id: uuid(),
    });

    setInput("");
  };

  return (
    <form className="todo-input-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your task here..."
        value={input}
        className="todo-input-box-input"
        onChange={handleChange}
      />
      <button className="todo-input-box-button">+</button>
    </form>
  );
};

export default InputBox;
