import React from 'react';
// import PropTypes from 'prop-types';

import './CharacterSheet.css';

const CharacterSheetView = (props) => {

    const handleInputOnChange = (event) => {
        props.handleInputOnChange(event);
    };

    return (
        <div>
            <div>
                <form>

                <img src=".././assets/images/pathfinder_logo.png" alt="logo_here" />
                
                <label for="name" className="line-label">Name
                <input 
                    className="line-input"
                    type="text" 
                    name="name"
                    onChange={(event) => handleInputOnChange(event)}
                    value={props.name}
                    />
                </label> 
                {" "}

                <label for="level" className="line-label">Alignment
                <input 
                    className="line-input"
                    type="text" 
                    name="level"
                    onChange={(event) => handleInputOnChange(event)}
                    value={props.level}
                    />
                </label>

                <input type="text" />
                </form>
            </div>
        </div>
    )
}

export default CharacterSheetView;