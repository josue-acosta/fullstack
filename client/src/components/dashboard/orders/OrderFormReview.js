import React from 'react';
import { withRouter } from 'react-router-dom'
import { Field } from 'redux-form';
import { connect } from 'react-redux'
import * as actions from '../../../actions'

import { sizes, flavors, fillings } from '../../../data/OrderFormOptions'

// components
import FormTextField from '../../formFields/FormTextField'
import FormSelectField from '../../formFields/FormSelectField'
import FormCheckBox from '../../formFields/FormCheckBox'
import FormDatePicker from '../../formFields/FormDatePicker'

// styles
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    spacer: {
        marginTop: 20
    }
});

const OrderFormReview = ({ onOrderSubmit, formValues, submitOrder, history }) => {
    const classes = useStyles();

    return (
        <Grid container justify="center" >
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Field
                                name='name'
                                label='Name'
                                disabled
                                value={formValues.name}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Field
                                name='phoneNumber'
                                label='Phone Number'
                                disabled
                                value={formValues.phoneNumber}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Field
                                name='dateTime'
                                label='Date &amp; Time'
                                disabled
                                value={formValues.dateTime}
                                component={FormDatePicker}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Field
                                name='cakeSize'
                                label='Cake Size'
                                disabled
                                value={formValues.cakeSize}
                                component={FormSelectField}
                                fullWidth
                                options={sizes}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Field
                                name='flavor1'
                                label='Flavor 1'
                                disabled
                                value={formValues.flavor1}
                                component={FormSelectField}
                                fullWidth
                                options={flavors}
                            />

                            <Field
                                name='flavor2'
                                label='Flavor 2'
                                disabled
                                value={formValues.flavor2}
                                component={FormSelectField}
                                fullWidth
                                className={classes.spacer}
                                options={flavors}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Field
                                name='filling'
                                label='Filling'
                                disabled
                                value={formValues.filling}
                                component={FormSelectField}
                                fullWidth
                                options={fillings}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Field
                                name='decoration'
                                label='Decoration'
                                disabled
                                value={formValues.decoration}
                                component={FormTextField}
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Field
                                name='printOut'
                                label='Print Out'
                                disabled
                                value={formValues.printOut}
                                component={FormCheckBox}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Field
                                name='celebratedName'
                                label='Celebrated Name'
                                disabled
                                value={formValues.celebratedName}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Field
                                name='celebratedAge'
                                label='Celebrated Age'
                                disabled
                                value={formValues.celebratedAge}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Field
                                name='celebratedText'
                                label='Celebrated Text'
                                disabled
                                value={formValues.celebratedText}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Field
                                name='price'
                                label='Price'
                                disabled
                                value={formValues.price}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions>
                    <Button
                        color='primary'
                        onClick={onOrderSubmit}>
                        Back
                    </Button>

                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => submitOrder(formValues, history)}
                    >
                        Save
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return { formValues: state.form.orderForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(OrderFormReview));