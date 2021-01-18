import React, { Component } from 'react';
import { reduxForm } from 'redux-form'

// components
import IngredientForm from './IngredientForm'
import IngredientFormReview from './IngredientFormReview'

class IngredientNew extends Component {
    state = {
        showFormReview: false
    }

    handleOnIngredientSubmit = () => {
        this.setState(prevState => ({
            showFormReview: !prevState.showFormReview
        }))
    }

    render() {
        return (
            <>
                {
                    this.state.showFormReview ?
                        <IngredientFormReview onIngredientSubmit={this.handleOnIngredientSubmit} /> :
                        <IngredientForm onIngredientSubmit={this.handleOnIngredientSubmit} />
                }
            </>
        );
    }
}

export default reduxForm({ form: 'ingredientForm' })(IngredientNew);