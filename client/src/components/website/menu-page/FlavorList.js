import React from 'react';

// styles
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
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
}));

const FlavorList = () => {
    const classes = useStyles();

    const flavors = [
        '3 Leches',
        'Red Velvet',
        'Chocolate Raspberry',
        'Strawberry',
        'Champagne',
        'Chocolate',
        'Vanilla',
        'Pecan',
        'Piña Colada',
        'Coconut',
        'Lemon'
    ];

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h1">
                Cake Flavors
            </Typography>

            <Grid container spacing={3}>
                {flavors.map((flavor) =>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>
                            {flavor}
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default FlavorList;