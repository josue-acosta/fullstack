import React from 'react';

// styles
import TextField from '@material-ui/core/TextField'

const FormTextField = ({ input, label, fullwidth, meta: { touched, error }, ...custom }) => {
    return (
        <TextField
            label={label}
            error={touched && error ? true : false}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    );
}

export default FormTextField;