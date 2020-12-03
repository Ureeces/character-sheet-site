import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Signup from '../Signup/Signup';

import Nav from '../Nav/Nav';

export default class Signin extends Component {
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
                <h1>Login</h1>
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
                <Link to='/register'>Don't have an account? Register here</Link>
            </div>
        )
    }
}
