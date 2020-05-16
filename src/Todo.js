import React from 'react';
import "./Todo.css";

const Todo = (props)  => {
    return (
        <div className="todo">
            <div className="title">{props.title}</div>
            <button
                className="delete-btn"
                value={props.value}
                onClick={props.deleteTodo}
            >
                Delete
            </button>
        </div>
    );

};

export default Todo