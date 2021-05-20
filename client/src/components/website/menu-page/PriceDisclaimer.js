import React from 'react';

// styles
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    spacing: {
        marginBottom: 20
    }
}));

const FlavorList = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} className={classes.spacing}>
                <Paper className={classes.paper}>
                    The final price of the cake is based on the final design. The price is subject to change if changes are made after the order is placed.
                </Paper>
            </Grid>
        </div>
    );
}

export default FlavorList;