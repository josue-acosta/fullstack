import React from 'react';

// componets
import Description from './Description'

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
        textAlign: 'center'
    },
    spacing: {
        marginBottom: 20
    }
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
        'Pineapple',
        'Coconut',
        'Lemon',
        'Almond',
        'Orange'
    ];

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h1" className={classes.spacing} >
                Cake Flavors
            </Typography>

            <Description description="We are offer a variety of flavors. And what's even better, you don't have to chose just one. Combine any two flavors to make your cake extra&nbsp;personalized." />

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