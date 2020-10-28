import React, { Component } from 'react';
import { connect } from 'react-redux'

// components
import Hero from './dashbaord/Hero'

// styles
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class Dashboard extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return <Typography variant="h2">Skeleton?</Typography>;
            case false:
                return <Typography variant="h2">Not Authorized</Typography>
            default:
                return <Hero />
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

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(Dashboard));