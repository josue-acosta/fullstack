import React from 'react';

// components
import Copyright from './Copyright'
import Footer from './FooterText'

// styles
import { makeStyles } from '@material-ui/core/styles';

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
            <Footer />
            <Copyright />
        </footer>
    );
}

export default FooterBar;