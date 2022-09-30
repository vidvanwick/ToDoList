import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import ToDoList from './components/ToDoList'
import NewToDo from './components/NewToDo'
import items from './data/mock-todos.json'

function App() {

  const [toDoList, setToDoList] = useState(items);

  // random id generator
  // src from https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
  function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  function edit(id) {
    const newTodos = [...toDoList];
    const todo = newTodos.find(todo => todo.id === id);
    // not allow to edit if is done
    if(todo.done) return;
     // change the edit flag to true
    todo.edit = true;
    // only allow one edit at a time, toggle off others editing mode
    newTodos.forEach(todo => {
      if(todo.id !== id) todo.edit = false
    })
    setToDoList(newTodos);
  }

  function editName(id, name) {
    const newTodos = [...toDoList];
    const todo = newTodos.find(todo => todo.id === id)
    todo.todo = name;
    todo.edit = false
    setToDoList(newTodos);
  }

  function addNew(){
    const newTodos = [...toDoList];
    const todo = {
      id: generateUUID(),
      todo: null,
      done: false,
      edit: true
    }
    newTodos.push(todo);
    setToDoList(newTodos);
  }

  function setDone(id){
    const newTodos = [...toDoList];
    let todo = newTodos.find(item => item.id === id);
    todo.done = true;
    setToDoList(newTodos);
  }

  return (
    <div className="App">
      <Title />
      <ToDoList
        toDoList={toDoList}
        edit={edit}
        editName={editName}
        setDone={setDone}
      />
      <NewToDo
        addNew={addNew}
      />
    </div>
  );
}

export default App;