import React, { Component } from "react";

import CharacterSheetView from "./CharacterSheetView";

export default class CharacterSheet extends Component {
  state = {
    charInfo: {
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
      eyes: "",
    },

    abilityScores: {
      strength: "",
      dexterity: "",
      intelligence: "",
      constitution: "",
      wisdom: "",
      charisma: "",
      fortitude: "",
      reflex: "",
      will: "",
      hP: "",
      initiative: "",
    },
  };

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    console.log(this.state);
  };

  render() {
    const { charInfo, abilityScores } = this.state;

    return (
      <CharacterSheetView
        charInfo={charInfo}
        abilityScores={abilityScores}
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}
      />
    );
  }
}
