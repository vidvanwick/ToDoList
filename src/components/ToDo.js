import React, { useRef } from 'react'

const ToDo = ({ todo, edit, saveName, setDone }) => {
    
    const classes = ['todo']
    const todoRef = useRef();
    function handleClick(){
        // trigger edit mode
        edit(todo.id);

    }

    function handleSaveClick(){
        const name = todoRef.current.value;
        // not allow to save when name is empty
        if(name === "") return;
        saveName(todo.id, name);
    }

    function handleDoneClick(){
        setDone(todo.id);
    }

    return (
        todo.edit? // if edit mode === true
        <div
            className={ classes.join(' ') }
            id={todo.id}
        >
            <input
                className={ classes.join(' ') }
                style={{ width: "20%"}}
                ref={todoRef} type="text"
            />
            <button
                style={{ marginLeft: "1rem" }}
                onClick={handleSaveClick}
            >Save
            </button>
        </div>
        : // else if edit mode === false
        <div
            style={{display: "flex", flex: "1", flexDirection: "row"}}
        >
            <div
                className={ classes.join(' ') }
                onClick={handleClick}
                id={todo.id}
            >
                <p
                    style={todo.done ? { textDecoration: "line-through" } : {}}
                >{todo.todo}
                </p>
            </div>
            <button
                style={{ marginLeft: "2rem", width: "20%", borderRadius: "20%" }}
                onClick={handleDoneClick}
            >Done
            </button>
        </div>
    )
}

export default ToDo;