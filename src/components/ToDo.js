import React from 'react'
import { List, ListItem, ListItemText} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Link} from 'react-router-dom';

const ToDo = (props) => {

    return(
        <div className="list-item">
            <List>
                <ListItem>
                    <span>
                        <i  class="far fa-circle"></i>
                        {/* <i  class="fas fa-check-circle"></i> */}
                    </span>
                    <Link to="/todotaskspage" className="link">
                        <ListItemText className= "item" primary={props.content} secondary="Click to add tasks to your list 📑" />
                    </Link>
                </ListItem>
            </List>
            <DeleteForeverIcon className="delete" onClick={() => {props.onDelete(props.id)}} />
        </div>
    )
}

export default ToDo