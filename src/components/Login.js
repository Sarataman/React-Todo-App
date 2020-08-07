import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();
        this.state= {
            email: '',
            password:''
        };
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="signup-content">
                    <form  onSubmit={this.handleSubmit}>
                        <h2>LOGIN</h2>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-input" name="email" onChange={this.handleChange} value={this.state.email} id="details" placeholder="Your Email" required/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-input" name="password" onChange={this.handleChange} value={this.state.password}  id="details" placeholder="Password" required/>
                        </div>
                        <div className="form-group">
                                <Link to="/todolistpage">
                                    <button 
                                        disabled={!this.state.email || !this.state.password} className="form-submit">
                                        Login
                                    </button>
                                </Link>
                        </div>
                    </form>
                    <p className="loginhere">
                        <strong> Don't have an account yet? 
                            <Link to="/signup" >Sign up here</Link>
                        </strong>
                    </p>
                </div>
            </div>
        )
    }
}

export default Login;