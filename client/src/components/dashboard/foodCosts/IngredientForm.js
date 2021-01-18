import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';


// data
import { unitsOfMeasurement } from '../../../data/OrderFormOptions'

// components
import FormTextField from '../../formFields/FormTextField'
import FormSelectField from '../../formFields/FormSelectField'

// styles
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        width: '100%',
    },
    spacer: {
        marginTop: 20
    }
});

class IngredientForm extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container justify="center" >
                <Card className={classes.root}>
                    <form onSubmit={this.props.handleSubmit(this.props.onIngredientSubmit)} >
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Field
                                        name='ingredient'
                                        label='Ingredient Name'
                                        component={FormTextField}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <Field
                                        name='supplier'
                                        label='Supplier'
                                        component={FormTextField}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <Field
                                        name='brand'
                                        label='Brand'
                                        component={FormTextField}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <Field
                                        name='asPurchasedCost'
                                        label='As Purchased Cost'
                                        component={FormTextField}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <Field
                                        name='numberOfPackages'
                                        label='Number of Packages'
                                        component={FormTextField}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <Field
                                        name='amountPerPackage'
                                        label='Amount Per Package'
                                        component={FormTextField}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <Field
                                        name='amountPerPackageUnit'
                                        label='Amount Per Package Unit'
                                        component={FormSelectField}
                                        fullWidth
                                        options={unitsOfMeasurement}
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <Field
                                        name='yieldPercent'
                                        label='Yield Percent'
                                        component={FormTextField}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>

                        <CardActions>
                            <Button
                                color='primary'
                                component={Link}
                                to='/dashboard'>
                                Cancel
                                </Button>

                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'>
                                Next
                                </Button>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        );
    }
}

const validate = (values) => {
    const errors = {}
    const requiredFields = [
        'ingredient',
        'supplier',
        'brand',
        'asPurchasedCost',
        'numberOfPackages',
        'amountPerPackage',
        'amountPerPackageUnit'
    ]

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })

    return errors;
}

export default withStyles(styles, { withTheme: true })(reduxForm({
    validate,
    form: 'ingredientForm',
    destroyOnUnmount: false
})(IngredientForm))