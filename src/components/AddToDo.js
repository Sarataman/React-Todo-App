import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import FireBase from './firebase';
import firebase from 'firebase'

function AddToDo() {
    const db = FireBase.firestore();
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState();
    const result = [input, ...todos]
    // useEffect(() => {
    //     db.collection('todos').doc('Sarah').onSnapshot().then(setTodos(snapshot.val) )
    // }, []);
    const entry = (input) => {
        setInput(input)      
        db.collection('todos').doc(input.id).collection('todos').get()
        .then(response => {
            const results = [];
            response.forEach(document  => {
                const result = {
                    id:document.id,
                    ...document.data()
                };
                results.push(result)
            });
            setTodos(results);
        })
        .catch(error => {
            setError(error);
        });
    }

    const setTodo = (e) => {
        e.preventDefault();
        db.collection('todos').doc('Sarah').add({
            todo: result,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
        console.log(todos);
    }
    return (
        <form className="add-form" onSubmit={() => entry(input)}>
            <FormControl>
                <InputLabel>Add Item</InputLabel>
                <Input
                    className="input" 
                    placeholder= "Enter Todo item" 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                />
            </FormControl>
            <Button disabled={!input} type="submit" onClick={setTodo} className="add-button" variant="contained" color="primary">
                Add
            </Button>
        </form>
    )
}

// class AddToDo extends Component {
//     state = {item: ''};

//     handleSubmit = (e) => {
//         e.preventDefault();
//         if(this.state.item === '') return;
//         this.props.onFormSubmit(this.state.item);
//         this.setState({item: ''});
//     };
  
export default AddToDo