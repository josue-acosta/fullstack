import React from 'react';

// componets
import Description from './Description'

// images
import eightInchCake from '../../../images/8-inch-cake.jpg'
import tenInchCake from '../../../images/10-inch-cake.jpg'
import twelveInchCake from '../../../images/12-inch-cake.jpg'
import halfSheetCake from '../../../images/half-sheet-cake.jpg'
import fullSheetCake from '../../../images/full-sheet-cake.jpg'

// styles
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    media: {
        width: 200
    },
    table: {
        width: '100%'
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
            size: '8"',
            servings: 15,
            price: '$31',
            img: eightInchCake
        },
        {
            size: '10"',
            servings: 25,
            price: '$43',
            img: tenInchCake
        },
        {
            size: '12"',
            servings: 35,
            price: '$57',
            img: twelveInchCake
        },
        {
            size: 'Half Sheet',
            servings: 55,
            price: '$80',
            img: halfSheetCake
        },
        {
            size: 'Full Sheet',
            servings: 70,
            price: '$100',
            img: fullSheetCake
        },
    ];

    return (
        <>
            <Typography variant="h5" component="h1" className={classes.spacing} >
                Cake Orders
            </Typography>

            <Description description="We love a good challenge but please allow a 2 day notice. We may be able to accommodate your order in 1 day or overnight on some occasions. The prices lested below are the starting price. The final price of the cake is based on the final design. And is subject to change if changes are made after the order is placed." />

            <Grid container spacing={3}>
                {flavors.map((flavor) =>
                    <Grid item xs={12}>
                        <Card className={classes.root} >
                            <CardMedia
                                className={classes.media}
                                image={flavor.img}
                                title="Contemplative Reptile"
                            />
                            <CardContent className={classes.table}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Size</TableCell>
                                            <TableCell>Servings</TableCell>
                                            <TableCell>Starting Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{flavor.size}</TableCell>
                                            <TableCell>{flavor.servings}</TableCell>
                                            <TableCell>{flavor.price}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>
    );
}

export default FlavorList;