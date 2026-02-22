import React, { useState, useEffect } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Load from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodos(savedTodos);
  }, []);

  // ✅ Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className={`min-h-screen flex items-center justify-center transition duration-500 ${
      darkMode
        ? "bg-gray-900"
        : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    }`}>

      <div className={`p-8 rounded-2xl shadow-2xl w-full max-w-md transition duration-500 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white/20 backdrop-blur-lg text-white"
      }`}>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">✨ Todo App</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-black/30 px-3 py-1 rounded-lg"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Input */}
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 px-4 py-2 rounded-lg text-black"
          />
          <button
            onClick={addTodo}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white active:scale-95 transition"
          >
            Add
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-4">
          {["all", "completed", "pending"].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded-lg capitalize transition ${
                filter === type
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {filteredTodos.map(todo => (
            <li
              key={todo.id}
              className={`flex justify-between items-center px-4 py-2 rounded-lg shadow-md transition ${
                darkMode ? "bg-gray-700" : "bg-white text-black"
              }`}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-6 text-center">
          Total: {todos.length}
        </div>

      </div>
    </div>
  );
};

export default Todo;