import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import validateEmails from '../../../util/validateEmails';

// components
import FormTextField from '../../formFields/FormTextField'

// styles
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
    button: {
        marginTop: 20
    }
});

class SurveyForm extends Component {
    state = {}

    render() {
        const { classes } = this.props;

        return (
            <>
                <Box className={classes.root} p={2}>
                    <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
                        <Field
                            name='title'
                            label='Survey Title'
                            component={FormTextField}
                            fullWidth
                        />
                        <Field
                            name='subject'
                            label='Subject Line'
                            component={FormTextField}
                            fullWidth
                        />
                        <Field
                            name='body'
                            label='Email Body'
                            component={FormTextField}
                            fullWidth
                        />
                        <Field
                            name='recipients'
                            label='Recipients'
                            component={FormTextField}
                            fullWidth
                            multiline
                            rows={4}
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            className={classes.button}>
                            Next
                        </Button>
                        <Button
                            color='primary'
                            className={classes.button}
                            component={Link}
                            to='/dashboard'>
                            Cancel
                        </Button>
                    </form>
                </Box>
            </>
        );
    }
}

const validate = (values) => {
    const errors = {}
    const requiredFields = [
        'title',
        'subject',
        'body',
        'recipients'
    ]

    errors.recipients = validateEmails(values.recipients || '');

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })

    return errors;
}

export default withStyles(styles, { withTheme: true })(reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm));