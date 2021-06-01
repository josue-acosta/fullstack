import React from 'react';

// componets
import Description from './Description'

// images
import redVelvet from '../../../images/mini-cakes-photos/mini-cake-red-velvet.jpg'
import tresLeches from '../../../images/mini-cakes-photos/mini-cake-tres-leches.jpg'
import strawberry from '../../../images/mini-cakes-photos/mini-cake-strawberry.jpg'
import chocolateRaspberry from '../../../images/mini-cakes-photos/mini-cake-chocolate-raspberry.jpg'
import champange from '../../../images/mini-cakes-photos/mini-cake-champange.jpg'
import vanilla from '../../../images/mini-cakes-photos/mini-cake-vanilla.jpg'
import chocolate from '../../../images/mini-cakes-photos/mini-cake-chocolate.jpg'
import pinaColada from '../../../images/mini-cakes-photos/mini-cake-pina-colada.jpg'
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
            price: '$4.50',
            img: redVelvet,
            title: 'Red Velvet Mini Cake'
        },
        {
            name: '3 Leches',
            price: '$4.25',
            img: tresLeches,
            title: 'Tres Leches Mini Cake'
        },
        {
            name: 'Strawberry',
            price: '$4.25',
            img: strawberry,
            title: 'Strawberry Mini Cake'
        },
        {
            name: 'Chocolate Raspberry',
            price: '$4.25',
            img: chocolateRaspberry,
            title: 'Chocolate Mini Cake'
        },
        {
            name: 'Champagne',
            price: '$4.50',
            img: champange,
            title: 'Champange Mini Cake'
        },
        {
            name: 'Chocolate',
            price: '$4.25',
            img: chocolate,
            title: 'Chocolate Mini Cake'
        },
        {
            name: 'Vanilla',
            price: '$4.25',
            img: vanilla,
            title: 'Vanilla Mini Cake'
        },
        {
            name: 'Pecan',
            price: '$4.25',
            img: pecan,
            title: 'Pecan Mini Cake'
        },
        {
            name: 'Piña Colada',
            price: '$4.25',
            img: pinaColada,
            title: 'Pina Colada Mini Cake'
        },
        {
            name: 'Coconut',
            price: '$4.25',
            img: coconut,
            title: 'Coconut Mini Cake'
        },
        {
            name: 'Lemon',
            price: '$4.25',
            img: lemon,
            title: 'Lemon Mini Cake'
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
                                component='img'
                                className={classes.media}
                                image={flavor.img}
                                title={flavor.title}
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    {flavor.name}
                                </Typography>
                                {flavor.price}<br />
                                Serves 1
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>
    );
}

export default FlavorList;