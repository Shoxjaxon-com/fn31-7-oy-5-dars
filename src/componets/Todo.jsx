import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";

function Todo() {
  const { todo, addTodo, removeTodo, toggleComplete } = useTodoStore();
  const [task, setTask] = useState("");

  function handleSave() {
    if (task.trim() === "") return;
    addTodo(task);
    setTask("");
  }

  return (
    <div className="shadow-md p-5 rounded-md flex items-center flex-col justify-center w-[500px]">
        <h2 className="mt-2 mb-3">2-topshiriq</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border-2 border-blue-700 rounded-md p-3 w-full"
        type="text"
        placeholder="Enter your todo ..."
      />
      <button onClick={handleSave} className="border p-3 border-blue-700 rounded-md mt-3">
        Save
      </button>
      <br />

      <div className="shadow-md p-3 w-full">
        <ul>
          {todo.map((item, index) => (
            <li key={index} className="flex items-center justify-between border-b p-2">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(index)}
                className="mr-2 cursor-pointer"
              />
              <span className={`cursor-pointer flex-1 ${item.completed ? "line-through text-gray-500" : ""}`}>
                {item.text}
              </span>

              <button
                onClick={() => removeTodo(index)}
                className="border border-red-700 bg-red-700 text-white p-2 rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
