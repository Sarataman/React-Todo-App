import React, { Component } from 'react'
// import FireBase from './firebase';
import Header from './Header'
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

class ToDoListPage extends Component {
    state = {
        lists: ['Work', 'Family', 'Health'],
      };
    
    handleDelete = (index) => {
        const newArray = [...this.state.lists];
        newArray.splice(index, 1);
        this.setState({lists: newArray})
    }
    
    render() {
        return(
            <div className="wrapper">
                <div className = "App card frame">
                    <Header totalTodos = {this.state.lists.length} name = {this.state.fullName} />
                    <AddToDo />
                    <ToDoList lists={this.state.lists} onDelete={this.handleDelete} />
                </div>
            </div>
        )
    }
}

export default ToDoListPage;


 // handleSubmit = list => {
    //     let messageRef = FireBase.database().ref('messages').orderByKey().limitToLast(100);
    //     FireBase.database().ref('messages').set(this.state.lists);
    //     this.setState({lists: [...this.state.lists, list]});
    //}
