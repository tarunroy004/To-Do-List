import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import CompletedList from "./components/CompletedList";

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.text.trim() === "") return;
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const markCompleted = (index) => {
    const completedTask = todos[index];
    setCompletedTodos([...completedTodos, completedTask]);
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen px-4 bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          To-Do Manager
        </h1>

        <TodoInput addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          markCompleted={markCompleted}
        />

        <CompletedList completedTodos={completedTodos} />
      </div>
    </div>
  );
}

export default App;
