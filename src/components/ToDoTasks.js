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



// import React from 'react'
// import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import AddToDo from './AddToDo'

// const ToDoTasks = (props) => {
    
//     return (
//         <div className="list-item">
//             <List>
//                 <ListItem>
//                     <ListItemAvatar>
//                     </ListItemAvatar>
//                         <ListItemText primary={props.content} secondary="Deadline for task ⏰" />
//                 </ListItem>
//             </List>
//             <DeleteForeverIcon className="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}} />
//             <AddToDo onFormSubmit={this.handleSubmit} />
//         </div>
//     )
// }

// export default ToDoTasks