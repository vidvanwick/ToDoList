import React from 'react'

const ToDo = ({ todo, toggle }) => {
    
const handleClick = (e) => {
    e.preventDefault()
    toggle(e.currentTarget.id)
}

var classes = ['todo']
if(todo.done) classes.push('complete')

    return (
        <div className={ classes.join(' ') } onClick={handleClick} id={todo.id}>
            {todo.todo}
        </div>
    )
}

export default ToDo;