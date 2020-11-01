import React from 'react';

// style
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'

const FormSelectField = ({ input, label, fullwidth, meta: { touched, error }, options, ...custom }) => {
    return (
        <>
            <TextField
                select
                label={label}
                error={touched && error ? true : false}
                {...input}
                {...custom}
            >
                {options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );
}

export default FormSelectField;