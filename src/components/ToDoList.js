import React from 'react'
import Todo from './ToDo'

const ToDoList = (props) => {
    const todos = props.lists.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })
    return (
        <div className="list-wrapper">
            {todos}
        </div>
    )
}

export default ToDoList