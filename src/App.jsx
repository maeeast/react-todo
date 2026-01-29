import React, { useEffect, useMemo, useState } from "react";
import Todo from "./Todo.jsx";
import "./App.css";

const STORAGE_KEY = "jenn_todos_v1";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setTodos(Array.isArray(parsed) ? parsed : []);
    } catch {
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const canSubmit = useMemo(() => input.trim().length > 0, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = input.trim();
    if (!title) return;

    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, createdAt: Date.now() },
    ]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <div className="notepad">
        <div className="lines" />
        <div className="header">
          <h1>What do I need to do?</h1>

          <form className="todo-input" onSubmit={handleSubmit}>
            <input
              className="input-box"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add a task…"
              aria-label="Add a task"
            />
            <button className="submit-btn" disabled={!canSubmit} type="submit">
              + Add
            </button>
          </form>
        </div>

        {todos
          .slice()
          .sort((a, b) => a.createdAt - b.createdAt)
          .map((todo) => (
            <Todo
              key={todo.id}
              title={todo.title}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
