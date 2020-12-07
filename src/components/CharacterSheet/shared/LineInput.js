import React from 'react';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

// import '../CharacterSheet.css';

const attributeInput = (props) => {
    let { label, name, value, handleOnChange } = props;

    return (
        <TextField
            id="standard-helperText"
            helperText={label}
            placeholder={value}
            onChange={handleOnChange}
        />
    );
}

export default attributeInput;