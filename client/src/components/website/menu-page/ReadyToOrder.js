import React from 'react';
import { NavLink } from 'react-router-dom'

// styles
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        marginTop: '2rem',
        textAlign: 'center'
    },
    navButtonPrimary: {
        marginTop: '1rem',
        width: '100%'
    },
    navLinkPrimary: {
        color: 'white',
        textDecoration: 'none',
    },
}));

const ReadyToOrder = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="h1" className={classes.title} >
                        Ready to Order?
                    </Typography>
                    <Button variant='contained' color='primary' className={classes.navButtonPrimary}>
                        <NavLink to='/cake-order-form' className={classes.navLinkPrimary}>Cake Order Form</NavLink>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default ReadyToOrder;