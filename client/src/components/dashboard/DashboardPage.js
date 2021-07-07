import React, { Component } from 'react';
import { connect } from 'react-redux'

// components
import Layout from './Layout'

// styles
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class DashboardPage extends Component {
    renderContent() {
        switch (this.props.auth) {
            case false:
                // return <Typography variant='h2'>Not Authorized</Typography>
                return <Layout />
            default:
                return <Layout />
        }
    }

    render() {
        return (
            <>
                <CssBaseline />
                {this.renderContent()}
            </>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(DashboardPage));