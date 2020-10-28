import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// styles
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

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
                return <Button color="inherit" component={Link} href='/auth/google'>Login</Button>
            default:
                return [
                    <Button color="inherit" component={NavLink} to='/dashboard' >Dashboard</Button>,
                    <Button color="inherit" component={Link} href="/api/logout">Logout</Button>
                ]
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <NavLink to={this.props.auth ? '/dashboard' : '/'} className={classes.logo} >Mi Sistema</NavLink>
                        </Typography>
                        {this.renderContent()}
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
