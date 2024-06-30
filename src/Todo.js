import React from "react";
import { useState } from "react";
const Todo = () => {
  const [addTask, setAddTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setAddTask([...addTask, inputValue.trim()]);
      setInputValue("");
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const deleteHandler = (index) => {
    const newTodos = addTask.filter((task, i) => i !== index);
    setAddTask(newTodos);
  };
  return (
    <div className="container">
      <h1>Todo-application</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Enter Your Task"
        />
        <button type="submit" id="btn-input">AddTask</button>
        <ul>
          {addTask.map((todo, index) => (
            <li key={index}>
              {todo}{" "}
              <button id="delete" onClick={() => deleteHandler(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};
export default Todo;
