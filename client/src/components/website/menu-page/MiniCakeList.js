import React from 'react';


// styles
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    media: {
        width: 150,
        height: 150
    },
}));

const FlavorList = () => {
    const classes = useStyles();

    const flavors = [
        {
            name: '3 Leches',
            price: '$3.50'
        },
        {
            name: 'Red Velvet',
            price: '$3.75'
        },
        {
            name: 'Strawberry',
            price: '$3.50'
        },
        {
            name: 'Chocolate Raspberry',
            price: '$3.50'
        },
        {
            name: 'Champagne',
            price: '$3.75'
        },
        {
            name: 'Chocolate',
            price: '$3.50'
        },
        {
            name: 'Vanilla',
            price: '$3.50'
        },
        {
            name: 'Pecan',
            price: '$3.50'
        },
        {
            name: 'Piña Colada',
            price: '$3.50'
        },
        {
            name: 'Coconut',
            price: '$3.50'
        },
        {
            name: 'Lemon',
            price: '$3.50'
        },
    ];

    return (
        <>
            <Typography variant="h5" component="h1">
                Mini-Cakes
            </Typography>

            <Grid container spacing={3}>
                {flavors.map((flavor) =>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root} >
                            <CardMedia
                                className={classes.media}
                                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-210210-mini-chocolate-cake-001-ab-1613155622.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    {flavor.name}
                                </Typography>
                                {flavor.price}
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>
    );
}

export default FlavorList;