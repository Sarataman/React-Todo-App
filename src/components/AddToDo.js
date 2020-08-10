import React, { Component } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import FireBase from './firebase'


class AddToDo extends Component {
    state = {item: ''};

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(this.state.item === '') return;
    //     this.props.onFormSubmit(this.state.item);
    //     this.setState({item: ''});
    // };
    handleSubmit = list => {
        let messageRef = FireBase.database().ref('messages').orderByKey().limitToLast(100);
        FireBase.database().ref('messages').set(this.state.lists);
        this.setState({lists: [...this.state.lists, list]});
    }


    handleChange = e => {
        this.setState({
            item: e.target.value
        })
    }
    render() {
        return (
            <form className="add-form" onSubmit={this.handleSubmit}>
                <FormControl>
                    <InputLabel>Add Item</InputLabel>
                    <Input
                        className="input" 
                        placeholder= "Enter Todo item" 
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                </FormControl>
                <Button disabled={!this.state.item} type="submit" className="add-button" variant="contained" color="primary">
                    Add
                </Button>
            </form>
        )    
    }
}

  
export default AddToDo