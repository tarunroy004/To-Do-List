import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ text: task, time });
    setTask("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-6">
      <input
        type="text"
        placeholder="What is your task?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoInput;
