import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import db from './firebase';
import firebase from 'firebase'

function AddToDo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
       db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => doc.data().todo))
        })
    }, []);

    const setTodo = (e) => {
        e.preventDefault();
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }
//setTodos([...todos, input]);
    return (
        <form className="add-form">
            <FormControl>
                <InputLabel>✅Add Item</InputLabel>
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
  
    //add items to database
    // FireBase.database.collection('todos').add({
    //     todo: this.state.item,
    //     timestamp: Firebase.firestore.FieldValue.serverTimestamp()
    // })
       

export default AddToDo