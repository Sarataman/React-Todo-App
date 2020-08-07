import React from 'react'
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 're'

const ToDo = (props) => {
    return(
        <div className="list-item">
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <Link>
                        <ListItemText primary={props.content} secondary="Deadline for task ⏰" />
                    </Link>
                </ListItem>
            </List>
            <DeleteForeverIcon className="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}} />
        </div>
    )
}

export default ToDo