import React from 'react'
import ToDoTaskItem from './ToDoTaskItem'

const ToDoTasks = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <ToDoTaskItem content={todo} key={index} id={index} onDelete={props.onDelete} />
    })
    return (
        <div className="list-wrapper">
            {todos}
        </div>
    )
}

export default ToDoTasks
