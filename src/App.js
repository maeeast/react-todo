import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';

function App() {
  function deleteTodo(e) {
    e.preventDefault();
    let index = e.target.value;
    todos.splice(index,1);
    setTodos([...todos]);
  }
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="app">
      <div className="notepad">
      <div className="lines"></div>
        <div className="header">
          <h1>What do I need to do?</h1>
          <form className="todo-input">
            <input
              className="input-box" 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              type="text" 
            />
            <button className="submit-btn" disabled={!input} type="submit" onClick={handleSubmit}>
              + Add
            </button>
          </form>
        </div> 
        
        {todos.map((todo,index) => (
            <Todo 
              key={index}
              value={index}
              title={todo}
              deleteTodo={deleteTodo}
             />
        ))}
        
      </div>
    </div>
  );
}

export default App;
