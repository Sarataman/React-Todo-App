import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import ToDoListPage from './components/ToDoListPage'
import ToDoTasksPage from './components/ToDoTasksPage'

class App extends Component {
  render () {
    return (
      <div>
          <Switch>
            <Route exact path="/"component={Login} />
            <Route exact path="/signup"component={SignUp} />
            <Route path="/todolistpage"component={ToDoListPage} />
            <Route path="/todotaskspage"component={ToDoTasksPage} />
            <Route component={Error} />
          </Switch>
      </div>
    );  
  }
}

export default App;
