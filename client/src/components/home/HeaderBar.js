import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// components
import LoginButton from '../LoginButton'

// styles
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1
    },
    logo: {
        color: "white",
        textDecoration: "none"
    }
});

class HeaderBar extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return <Button key="dashboard" color="inherit" component={NavLink} to='/dashboard'>Dashboard</Button>
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <NavLink to='/' className={classes.logo} >Mi Sistema</NavLink>
                        </Typography>
                        {this.renderContent()}
                        <LoginButton auth={this.props.auth} />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(HeaderBar));
