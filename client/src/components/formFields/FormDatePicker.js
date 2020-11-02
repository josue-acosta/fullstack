import React from 'react';

// style
import TextField from '@material-ui/core/TextField';

const FormDatePicker = ({ input, label, fullwidth, meta: { touched, error }, ...custom }) => {
    return (
        <TextField
            type="datetime-local"
            label={label}
            error={touched && error ? true : false}
            helperText={touched && error}
            InputLabelProps={{
                shrink: true,
            }}
            {...input}
            {...custom}
        />
    )
};

export default FormDatePicker