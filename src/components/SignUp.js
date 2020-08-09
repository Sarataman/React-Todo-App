import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    constructor(){
        super();
        this.state= {
            fullName: '',
            email: '',
            password:'',
            re_pass: ''
        };
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return(
            <div className="container">
                <div className="signup-content">
                    <form onSubmit={this.handleSubmit}>
                    <h1 className="heading">ToDo App</h1>
                    <br/>
                    <br/>
                    <h2>SIGN UP</h2>
                        <div className="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} className="form-input" placeholder="Your Name" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input  type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-input" placeholder="Your Email" required/>
                        </div>
                        <div className="form-group">
                            <label for="pass">Password</label>
                            <input  type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-input" placeholder="Password" required/>
                        </div>
                        <div className="form-group">
                            <label for="re-pass">Repeat Password</label>
                            <input type="password" name="re_pass" value={this.state.re_pass} onChange={this.handleChange} className="form-input" placeholder="Repeat your password" required/>
                        </div>
                        <div className="form-group">
                            <Link to="/todolistpage">
                                <button 
                                    disabled={!this.state.fullName || !this.state.email || !this.state.password || !this.state.re_pass} className="form-submit">
                                Sign Up
                                </button>
                            </Link>
                        </div>
                    </form>
                    <div>
                        <p>
                            <strong>Already have an account? 
                                <Link to="/" > Log in here.</Link>
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;