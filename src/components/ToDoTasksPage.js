import React, { Component } from 'react'
// import FireBase from './firebase'
import ToDoTasks from './ToDoTasks';
import AddToDo from './AddToDo';

class ToDoTasksPage extends Component {
    state = {
        tasks: []
      };
    
    handleDelete = (index) => {
        const newArray = [...this.state.tasks];
        newArray.splice(index, 1);
        this.setState({tasks: newArray})
    }
    
    render() {
        return(
            <div className="wrapper">
                <div className = "App card frame">
                    <AddToDo onFormSubmit={this.handleSubmit} />
                    <ToDoTasks tasks={this.state.tasks} onDelete={this.handleDelete} />
                </div>
            </div>
        )
    }
}

export default ToDoTasksPage;
