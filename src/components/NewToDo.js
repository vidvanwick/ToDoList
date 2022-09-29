import React, { useRef } from 'react'

const NewToDo = ({ addNew }) => {

    function handleClick(){
        addNew();
    }

    return (
        <div className={ 'todo' } onClick={handleClick}>
            +
        </div>
    )
}

export default NewToDo;