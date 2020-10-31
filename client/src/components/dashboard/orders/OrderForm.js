import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';


// data
import { sizes, flavors, fillings } from '../../formFields/OrderFormOptions'

// components
import FormTextField from '../../formFields/FormTextField'
import FormSelectField from '../../formFields/FormSelectField'
import FormCheckBox from '../../formFields/FormCheckBox'
import FormDatePicker from '../../formFields/FormDatePicker'

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

                            <Grid item xs={12}>
                                <Field
                                    name='dateTime'
                                    label='Date &amp; Time'
                                    component={FormDatePicker}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <Field
                                    name='cakeSize'
                                    label='Cake Size'
                                    component={FormSelectField}
                                    fullWidth
                                    options={sizes}
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <Field
                                    name='flavor1'
                                    label='Flavor 1'
                                    component={FormSelectField}
                                    fullWidth
                                    options={flavors}
                                />

                                <Field
                                    name='flavor2'
                                    label='Flavor 2'
                                    component={FormSelectField}
                                    fullWidth
                                    options={flavors}
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <Field
                                    name='filling'
                                    label='Filling'
                                    component={FormSelectField}
                                    fullWidth
                                    options={fillings}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    name='printOut'
                                    label='Print Out'
                                    component={FormCheckBox}
                                />
                            </Grid>

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

export default withStyles(styles, { withTheme: true })(reduxForm({
    // validate,
    form: 'orderForm',
    destroyOnUnmount: false
})(OrderForm))