import React, { Component } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
// import firebase from 'firebase'

class AddToDo extends Component {
    state = {item: ''};

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.item === '') return;
        this.props.onFormSubmit(this.state.item);
        this.setState({item: ''});
    };
  
    //add items to database
    // FireBase.database.collection('todos').add({
    //     todo: this.state.item,
    //     timestamp: Firebase.firestore.FieldValue.serverTimestamp()
    // })
    render () {
        return (
            <form onSubmit={this.handleSubmit} className="add-form">
                <FormControl>
                    <InputLabel>✅Add Item</InputLabel>
                    <Input
                        type="text" 
                        className="input" 
                        placeholder= "Enter Todo item" 
                        value={this.state.item} 
                        onChange={(e) => this.setState({item: e.target.value})} 
                    />
                </FormControl>
                <Button disabled={!this.state.item} className="add-button" variant="contained" color="primary">
                    Add
                </Button>
            </form>
        )
    }
}

export default AddToDo