import React from 'react';

// componets
import Description from './Description'

// images
import tresLeches from '../../../images/mini-cakes-photos/mini-cake-tres-leches.jpg'
import strawberry from '../../../images/mini-cakes-photos/mini-cake-strawberry.jpg'
import chocolateRaspberry from '../../../images/mini-cakes-photos/mini-cake-chocolate-raspberry.jpg'
import champange from '../../../images/mini-cakes-photos/mini-cake-champange.jpg'
import pecan from '../../../images/mini-cakes-photos/mini-cake-pecan.jpg'
import coconut from '../../../images/mini-cakes-photos/mini-cake-coconut.jpg'
import lemon from '../../../images/mini-cakes-photos/mini-cake-lemon.jpg'

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
    spacing: {
        marginTop: 50,
        marginBottom: 20
    }
}));

const FlavorList = () => {
    const classes = useStyles();

    const flavors = [
        {
            name: 'Red Velvet',
            price: '$3.75'
        },
        {
            name: '3 Leches',
            price: '$3.50',
            img: tresLeches
        },
        {
            name: 'Strawberry',
            price: '$3.50',
            img: strawberry
        },
        {
            name: 'Chocolate Raspberry',
            price: '$3.50',
            img: chocolateRaspberry
        },
        {
            name: 'Champagne',
            price: '$3.75',
            img: champange
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
            price: '$3.50',
            img: pecan
        },
        {
            name: 'Piña Colada',
            price: '$3.50'
        },
        {
            name: 'Coconut',
            price: '$3.50',
            img: coconut
        },
        {
            name: 'Lemon',
            price: '$3.50',
            img: lemon
        },
    ];

    return (
        <>
            <Typography variant="h5" component="h1" className={classes.spacing} >
                Mini-Cakes
            </Typography>

            <Description description="A personal cake can make an ordinay occasion feel extra special. Pick any one of our 11 flavor we carry every day." />

            <Grid container spacing={3}>
                {flavors.map((flavor) =>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root} >
                            <CardMedia
                                className={classes.media}
                                image={flavor.img}
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