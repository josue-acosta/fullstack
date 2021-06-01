import React from 'react';

// components
import Hours from './Hours'
import Copyright from './Copyright'
import Address from './Address'

// styles
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const FooterBar = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>
                Come Visit Us!
            </Typography>
            <Hours />
            <Address />
            <Copyright />
        </footer>
    );
}

export default FooterBar;