import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDoList, toggle }) => {
    return (
        <div>
            {
                toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} toggle={toggle} key={todo.id} />
                    )
                })
            }
        </div>
    )
}

export default ToDoList;