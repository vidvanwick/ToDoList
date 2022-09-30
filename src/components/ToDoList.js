import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDoList, edit, editName, setDone }) => {
    return (
        <div>
            {
                toDoList.map(todo => {
                    return (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            edit={edit}
                            editName={editName}
                            setDone={setDone}
                        />
                    )
                })
            }
        </div>
    )
}

export default ToDoList;