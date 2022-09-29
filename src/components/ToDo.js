import React, { useRef } from 'react'

const ToDo = ({ todo, edit, editName }) => {
    
    const classes = ['todo']
    const todoRef = useRef();
    function handleClick(){
        // trigger edit mode
        edit(todo.id);

    }

    function handleButtonOnClick(){
        const name = todoRef.current.value;
        // not allow to save when name is empty
        if(name === "") return;
        editName(todo.id, name);
    }

    return (
        todo.edit? // if edit mode === true
        (<div className={ classes.join(' ') } id={todo.id}>
            <input className={ classes.join(' ') } ref={todoRef} type="text"/>
            <button style={{ marginLeft: "1rem" }} onClick={handleButtonOnClick}>Save</button>
        </div>)
        : // else if edit mode === false
        (<div className={ classes.join(' ') } onClick={handleClick} id={todo.id}>
            {todo.todo}
        </div>)
    )
}

export default ToDo;