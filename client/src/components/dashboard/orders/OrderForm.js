import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';


// components
import FormTextField from '../surveys/FormTextField'

// styles
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
    button: {
        marginTop: 20
    }
});

class OrderForm extends Component {
    render() {
        const { classes } = this.props;

        return (
            <>
                <Typography variant="h5" >New Order</Typography>
                <Box className={classes.root} p={2}>
                    <form onSubmit={this.props.handleSubmit(this.props.onOrderSubmit)} >
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Field
                                    name='name'
                                    label='Name'
                                    component={FormTextField}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <Field
                                    name='phoneNumber'
                                    label='Phone Number'
                                    component={FormTextField}
                                    fullWidth
                                />
                            </Grid>

                            {/* 
                            <Grid item xs={12}>
                                <Field
                                    name='dateTime'
                                    label='Date &amp; Time'
                                    component={TODO_DATE_TIME_FIELD}
                                    fullWidth
                                /> 
                            </Grid>
                            */}

                            {/*
                            <Grid item xs={4}>
                                <Field
                                    name='cakeSize'
                                    label='Cake Size'
                                    component={TODO_SELECT_FIELD}
                                    fullWidth
                                /> 
                            </Grid>
                            */}

                            {/* 
                            <Grid item xs={4}>
                                <Field
                                    name='flavor1'
                                    label='Flavor 1'
                                    component={TODO_SELECT_FIELD}
                                    fullWidth
                                /> 

                                <Field
                                    name='flavor2'
                                    label='Flavor 2'
                                    component={TODO_SELECT_FIELD}
                                    fullWidth
                                />
                            </Grid>
                            */}

                            { /* 
                            <Grid item xs={4}>
                                <Field
                                    name='filling'
                                    label='Filling'
                                    component={TODO_SELECT_FIELD}
                                    fullWidth
                                /> 
                            </Grid>
                            */}

                            { /* 
                            <Grid item xs={12}>
                                <Field
                                    name='printOut'
                                    label='Prnt Out'
                                    component={TODO_CHECKBOX_FIELD}
                                    fullWidth
                                /> 
                            </Grid>
                            */}

                            <Grid item xs={4}>
                                <Field
                                    name='celebratedName'
                                    label='Celebrated Name'
                                    component={FormTextField}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <Field
                                    name='celebratedAge'
                                    label='Celebrated Age'
                                    component={FormTextField}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <Field
                                    name='celebratedText'
                                    label='Celebrated Text'
                                    component={FormTextField}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    name='price'
                                    label='Price'
                                    component={FormTextField}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <Button
                                    color='primary'
                                    className={classes.button}
                                    component={Link}
                                    to='/dashboard'>
                                    Cancel
                                </Button>
                            </Grid>

                            <Grid item xs={6} >
                                <Button
                                    type='submit'
                                    variant='contained'
                                    color='primary'
                                    className={classes.button}>
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </>
        );
    }
}

// const validate = (values) => {
//     const errors = {}
//     const requiredFields = [
//         'name',
//         'phoneNumber'
//     ]

//     requiredFields.forEach(field => {
//         if (!values[field]) {
//             errors[field] = 'Required'
//         }
//     })

//     return errors;
// }

// export default withStyles(styles, { withTheme: true })(reduxForm({
//     validate,
//     form: 'surveyForm',
//     destroyOnUnmount: false
// })(SurveyForm));

export default withStyles(styles, { withTheme: true })(reduxForm({
    // validate,
    form: 'orderForm',
    destroyOnUnmount: false
})(OrderForm))