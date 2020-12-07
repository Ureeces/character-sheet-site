import React from 'react';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import '../CharacterSheet.css';

const TextInput = (props) => {

    let { label, name } = props;

    return (
        <div className="text-input-item">
            <span style={{backgroundColor: 'black', color: 'white'}}>
                {label}<br />
                 Modifier
            </span>

            <TextareaAutosize
                area-label="minimum height"
                rowsMax={3}
                className="text-input-item"
            />
        </div>
    )
};

export default TextInput;
