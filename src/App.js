import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';

function App() {
  const handleDelete = (e) => {
    e.preventDefault();
    // let index = e.target.value;
    // todos.splice(index,1);
    // setTodos([...todos]);
    let index = parseInt(e.target.value);
    let deleteId = '';

    console.log(typeof index);

    db.collection("todos").where("index", "==", index)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log("DocID= " + doc.id);
          deleteId = doc.id;
          console.log(doc.id, " => ", doc.data());
        });
    })
    .then(() =>{
      db.collection('todos').doc(deleteId).delete().then(() =>{
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    })
  }

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

useEffect(() => {
  db.collection('todos').orderBy("index", "asc").onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => doc.data()));
  })
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTodos([...todos, input]);
    db.collection('todos').add({
      title: input,
      index: Date.now(),
    });

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
        
        {todos.map((todo) => (
            <Todo 
              key={todo.index}
              value={todo.index}
              title={todo.title}
              deleteTodo={handleDelete}
             />
        ))}
        
      </div>
    </div>
  );
}

export default App;
