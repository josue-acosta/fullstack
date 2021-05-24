import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// components
import LoginButton from './LoginButton'

// styles
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        marginRight: '2em',
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
                return <Button key='dashboard' color='inherit' component={NavLink} to='/dashboard'>Dashboard</Button>
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position='static'>
                    <Toolbar>
                        <NavLink to='/' className={classes.navLink} >Home</NavLink>
                        <NavLink to='/menu' className={classes.navLink} >Menu</NavLink>
                        <NavLink to='/cake-order-form' className={classes.navLink} >Cake Order Form</NavLink>
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