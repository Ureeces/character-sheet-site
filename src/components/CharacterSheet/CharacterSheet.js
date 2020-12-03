// This is gonna be big.
import React, { Component } from 'react'

import CharacterSheetView from './CharacterSheetView';

export default class CharacterSheet extends Component {
    state = {
        name: "",
        alignment: "",
        player: "",
        level: "",
        deity: "",
        homeland: "",
        race: "",
        size: "",
        gender: "",
        age: "",
        height: "",
        weight: "",
        hair: "",
        eyes: ""
    };

    handleInputOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const {
            name,
            alignment,
            player,
            level,
            deity,
            homeland,
            race,
            size,
            gender,
            age,
            height,
            weight,
            hair,
            eyes
        } = this.state;


        return (
            <div>
                <CharacterSheetView
                    // Vars
                    name = {name}
                    alignment = {alignment}
                    player = {player}
                    level = {level}
                    deity = {deity}
                    homeland = {homeland}
                    race = {race}
                    size = {size}
                    gender = {gender}
                    age = {age}
                    height = {height}
                    weight= {weight}
                    hair = {hair}
                    eyes = {eyes}
                    // Functions 
                    handleInputOnChange={this.handleInputOnChange}

                />        
            </div>
        )
    }
}
