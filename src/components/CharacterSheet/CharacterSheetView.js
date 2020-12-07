import React from "react";
import { Link } from "react-router-dom";
// import { FormControl } from "@material-ui/core";

// import PropTypes from 'prop-types';

import pathfinder_logo from "../../assets/images/pathfinder_logo.png";

import LineInput from "./shared/LineInput";
import TextInput from "./shared/TextInput";
import "./CharacterSheet.css";

const CharacterSheetView = (props) => {
  return (
    <div>
      <div id="sheet-container">
        {/* <form> */}
        {/* Start line input container */}
        <div>
          <img
            src={pathfinder_logo}
            alt="logo_here"
            className="logo"
            id="logo"
          />
          <ul id="line-inputs-list">
            {Object.keys(props.charInfo).map((attr) => {
              return (
                <li>
                  <LineInput
                    label={attr[0].toUpperCase() + attr.slice(1)}
                    name={attr}
                    onChange={props.handleOnChange}
                    value={props.charInfo[attr]}
                  />
                </li>
              );
            })}
          </ul>
          {/* End line input container */}
          {/* Start input container */}
          <ul id="text-inputs-container">
            {Object.keys(props.abilityScores).map((attr) => {
              return (
                <li>
                  <TextInput label={attr.toUpperCase()} name={attr} />
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div style={{ textAlign: "center" }}>
          <button id="submit-character" onClick={props.handleOnSubmit}>
            Submit my character sheet
          </button>
        </div>
        {/* </form> */}
      </div>

      <Link to="/">Go Home</Link>
    </div>
  );
};

export default CharacterSheetView;
