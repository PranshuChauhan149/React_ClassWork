import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const handleCLick = () => {
    if (input == "") {
      alert("Enter Your task");
    }
    setTask((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  const handleDelete = (id) => {
    const f = task.filter((item) => item.id !== id);
    setTask(f);
  };

  const handleCompelte = (id) => {
    setTask((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="enter your task.."
      />
      {"   "}
      <button onClick={handleCLick}>add</button>

      <div>
        {task.map((item, index) => (
          <div>
            <p key={index}>{item.text}</p>
            <button onClick={() => handleDelete(item.id)}>delete</button>{" "}
            <button onClick={() => handleCompelte(item.id)}>
              {item.completed ? "done" : "not done"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
// dsdfd

export default TodoList;
