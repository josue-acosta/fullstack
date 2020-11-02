import React, { Component } from 'react';
import { reduxForm } from 'redux-form'

// components
import OrderForm from './OrderForm'
import OrderFormReview from './OrderFormReview'

class OrderNew extends Component {
    state = {
        showFormReview: false
    }

    handleOnOrderSubmit = () => {
        this.setState(prevState => ({
            showFormReview: !prevState.showFormReview
        }))
    }

    render() {
        return (
            <>
                {
                    this.state.showFormReview ?
                        <OrderFormReview onOrderSubmit={this.handleOnOrderSubmit} /> :
                        <OrderForm onOrderSubmit={this.handleOnOrderSubmit} />
                }
            </>
        );
    }
}

export default reduxForm({ form: 'orderForm' })(OrderNew);