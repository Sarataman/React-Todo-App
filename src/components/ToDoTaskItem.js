import React from 'react'
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const ToDoTaskItem = (props) => {
    return(
        <div className="task-item">
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                        <ListItemText primary={props.content} secondary="Delete completed tasks✅" />
                </ListItem>
            </List>
            <DeleteForeverIcon className="delete" onClick={() => {props.onDelete(props.id)}} />
        </div>
    )
}

export default ToDoTaskItem