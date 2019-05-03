import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
        email: '',
        password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        return (
            <div className="login-wrapper">
                <form className="login">
                    <div className="form-wrapper">
                        <div class="form-group">
                            <span for="exampleInputEmail1" className="form-span">
                                Email address:
                            </span>
                            <input 
                                value={this.state.email} 
                                onChange={this.handleChange} 
                                type="email" 
                                name="email" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email" 
                            />
                        </div>
                        <div class="form-group">
                            <span for="exampleInputPassword1" className="form-span">Password:</span>
                            <input 
                                value={this.state.password} 
                                onChange={this.handleChange} 
                                type="password" 
                                name="password" 
                                class="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password" />
                        </div>
                    </div>
                    <div className="btn-wrapper">
                        <button 
                            type="submit" 
                            onClick={this.login} 
                            class="btn btn-primary"
                        >
                            Login
                        </button>
                        <button 
                            onClick={this.signup}
                            style={{marginLeft: '25px'}} 
                            className="btn btn-success"
                        >
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;