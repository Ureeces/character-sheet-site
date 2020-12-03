import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';

import './Signup.css';

export default class Signup extends Component {
    state = {
        email: '',
        password: ''
    };

    handleEmailOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handlePasswordOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
    };

    render() {
        return (
            <div>
                <Nav />
                <h1>Register</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={this.handleEmailOnChange}
                    /> <br />

                    <input 
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={this.handlePasswordOnChange}
                    /> <br />

                    <button>Submit</button>
                </form>

                <Link to="/login">Already Have an account?</Link>
            </div>
        )
    }
}
