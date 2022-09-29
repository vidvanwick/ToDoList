import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDoList, edit, editName }) => {
    return (
        <div>
            {
                toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} key={todo.id} edit={edit} editName={editName}/>
                    )
                })
            }
        </div>
    )
}

export default ToDoList;