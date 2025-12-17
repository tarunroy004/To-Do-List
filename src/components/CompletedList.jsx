import React from "react";

const CompletedList = ({ completedTodos }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-green-700">
        Completed Tasks
      </h2>

      {completedTodos.length === 0 ? (
        <p className="text-gray-400 italic">No completed tasks yet</p>
      ) : (
        <ul className="space-y-2">
          {completedTodos.map((todo, index) => (
            <li
              key={index}
              className="bg-green-50 border border-green-200 rounded-lg p-3"
            >
              <p className="line-through text-gray-600 font-medium">
                {todo.text}
              </p>
              <p className="text-sm text-gray-500">
                Time: {todo.time || "Not set"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedList;
