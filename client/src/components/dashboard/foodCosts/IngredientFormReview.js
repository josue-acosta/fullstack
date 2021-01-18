import React from 'react';
import { withRouter } from 'react-router-dom'
import { Field } from 'redux-form';
import { connect } from 'react-redux'
import * as actions from '../../../actions'


// data
import { unitsOfMeasurement } from '../../../data/OrderFormOptions'

// components
import FormTextField from '../../formFields/FormTextField'
import FormSelectField from '../../formFields/FormSelectField'

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

const IngredientFormReview = ({ onIngredientSubmit, formValues, submitIngredient, history }) => {
    const classes = useStyles();

    return (
        <Grid container justify="center" >
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Field
                                name='ingredient'
                                label='Ingredient Name'
                                disabled
                                value={formValues.ingredient}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Field
                                name='supplier'
                                label='Supplier'
                                disabled
                                value={formValues.supplier}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Field
                                name='brand'
                                label='Brand'
                                disabled
                                value={formValues.brand}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Field
                                name='asPurchasedCost'
                                label='As Purchased Cost'
                                disabled
                                value={formValues.asPurchasedCost}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <Field
                                name='numberOfPackages'
                                label='Number of Packages'
                                disabled
                                value={formValues.numberOfPackages}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <Field
                                name='amountPerPackage'
                                label='Amount Per Package'
                                disabled
                                value={formValues.amountPerPackage}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <Field
                                name='amountPerPackageUnit'
                                label='Amount Per Package Unit'
                                disabled
                                value={formValues.amountPerPackageUnit}
                                component={FormSelectField}
                                fullWidth
                                options={unitsOfMeasurement}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <Field
                                name='yieldPercent'
                                label='Yield Percent'
                                disabled
                                value={formValues.yieldPercent}
                                component={FormTextField}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions>
                    <Button
                        color='primary'
                        onClick={onIngredientSubmit}>
                        Back
                    </Button>

                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => submitIngredient(formValues, history)}
                    >
                        Save
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return { formValues: state.form.ingredientForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(IngredientFormReview));