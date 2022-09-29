import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import ToDoList from './components/ToDoList'
import NewToDo from './components/NewToDo'
import todos from './data/mock-todos.json'

function App() {

  const [toDoList, setToDoList] = useState(todos);

  const toggle = (id) => {
    let newToDoList = toDoList.map(todo => {
      return todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
    })
    setToDoList(newToDoList)
  }

  return (
    <div className="App">
      <Title />
      <ToDoList toDoList={toDoList} toggle={toggle} />
      <NewToDo toDoList={toDoList} />
    </div>
  );
}

export default App;