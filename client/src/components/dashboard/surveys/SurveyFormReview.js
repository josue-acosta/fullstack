import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

// styles
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

const SurveyFormReview = ({ onSurveySubmit, formValues, submitSurvey, history }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>Survey Title</TableCell>
                            <TableCell>{formValues.title}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Email Subject Line</TableCell>
                            <TableCell>{formValues.subject}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Email Body</TableCell>
                            <TableCell>{formValues.body}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Recipients</TableCell>
                            <TableCell>{formValues.recipients}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Button
                variant='contained'
                color='primary'
                onClick={() => submitSurvey(formValues, history)}
            >
                Save
            </Button>
            <Button
                color='primary'
                onClick={onSurveySubmit}>
                Back
            </Button>
        </>
    );
}

const mapStateToProps = (state) => {
    return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));