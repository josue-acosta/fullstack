import React, { Component } from 'react';
import { reduxForm } from 'redux-form'

// components
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
    state = {
        showFormReview: false
    }

    handleOnSurveySubmit = () => {
        this.setState(prevState => ({
            showFormReview: !prevState.showFormReview
        }))
    }

    render() {
        return (
            <>
                {
                    this.state.showFormReview ?
                        <SurveyFormReview onSurveySubmit={this.handleOnSurveySubmit} /> :
                        <SurveyForm onSurveySubmit={this.handleOnSurveySubmit} />
                }
            </>
        );
    }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew);