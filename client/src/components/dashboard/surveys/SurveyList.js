import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../../actions'

// style
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '1rem'
    }
});

class SurveyList extends Component {
    state = {}

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        const { classes } = this.props;

        return this.props.surveys.map(survey => {
            return (
                <Card key={survey._id} className={classes.root}>
                    <CardContent>
                        <Typography>{new Date(survey.dateSent).toLocaleDateString()}</Typography>
                        <Typography>{survey.title}</Typography>
                        <Typography>{survey.subject}</Typography>
                        <Typography>{survey.body}</Typography>
                    </CardContent>
                </Card>
            )
        })
    }

    render() {
        return (
            <>
                <h1>Survey list</h1>
                {this.renderSurveys()}
            </>
        );
    }
}

const mapStateToProps = ({ surveys }) => {
    return { surveys }
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, { fetchSurveys })(SurveyList));