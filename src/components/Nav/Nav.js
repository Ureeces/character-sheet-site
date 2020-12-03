import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div id="nav-main">
                <ul className="navbar">
                    <li className="nav-item">
                        <NavLink to="/login" bsClass="navLink">Login</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
