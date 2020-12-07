import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';

import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
            <Nav />
            <div id="main">
                <h1 id="title">Ultimate Character Creator</h1>
                <p>Welcome to the (self-proclaimed) greatest character sheet manager ever created!</p>
                <p>Create and save your character sheets from multiple games, all within one site!</p>
                
                <br />

                <div id="discussion">
                    <h1>Discussion Would Go Here</h1>
                </div>
            </div>
            </div>
        )
    }
}
