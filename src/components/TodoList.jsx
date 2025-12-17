import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, markCompleted }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-700">
        Pending Tasks
      </h2>

      {todos.length === 0 ? (
        <p className="text-gray-400 italic">No pending tasks</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              deleteTodo={deleteTodo}
              markCompleted={markCompleted}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
