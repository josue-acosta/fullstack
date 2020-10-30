import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../actions'


// styles
import Button from '@material-ui/core/Button'

const OrderFormReview = ({ onOrderSubmit, formValues, submitOrder, history }) => {
    return (
        <>
            <h1>Hello from OrderFormReview</h1>
            <strong>{formValues.name}</strong>
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

        </>
    );
}

const mapStateToProps = (state) => {
    return { formValues: state.form.orderForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(OrderFormReview));