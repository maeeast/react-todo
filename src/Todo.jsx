import React from "react";
import "./Todo.css"

const Todo = ({ title, onDelete }) => {
  return (
    <div className="todo">
      <div className="title">{title}</div>
      <button className="delete-btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
