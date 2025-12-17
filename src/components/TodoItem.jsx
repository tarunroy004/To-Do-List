import React from "react";

function TodoItem({ todo, index, deleteTodo, markCompleted }) {
  return (
    <li className="flex justify-between items-center bg-gray-50 border rounded-lg p-3 shadow-sm hover:shadow transition">
      <div>
        <p className="font-semibold text-gray-800">{todo.text}</p>
        <p className="text-sm text-gray-500">
          ⏰ {todo.time || "No time set"}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => markCompleted(index)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
        >
          Done
        </button>

        <button
          onClick={() => deleteTodo(index)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
