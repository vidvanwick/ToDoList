import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDoList, edit, saveName, setDone }) => {
    return (
        <div>
            {
                toDoList.map(todo => {
                    return (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            edit={edit}
                            saveName={saveName}
                            setDone={setDone}
                        />
                    )
                })
            }
        </div>
    )
}

export default ToDoList;