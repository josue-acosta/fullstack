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
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
    desktopCardMedia: {
        width: 200,
    },
    mobileCardMedia: {
        margin: 'auto',
        width: '75%'
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

    const matches = useMediaQuery('(min-width:600px)');

    const flavors = [
        {
            size: '8"',
            servings: '12-15 Servings',
            price: '$31',
            tresLechesPrice: '$34',
            img: eightInchCake,
            title: 'Eight inch cake'
        },
        {
            size: '10"',
            servings: '20-25 Servings',
            price: '$43',
            tresLechesPrice: '$48',
            img: tenInchCake,
            title: 'Ten inch cake'
        },
        {
            size: '12"',
            servings: '30-35 Servings',
            price: '$57',
            tresLechesPrice: '$61',
            img: twelveInchCake,
            title: 'Twelve inch cake'
        },
        {
            size: 'Half Sheet',
            servings: '50-55 Servings',
            price: '$80',
            tresLechesPrice: '$96',
            img: halfSheetCake,
            title: 'Half sheet cake'
        },
        {
            size: 'Full Sheet',
            servings: '70-75 Servings',
            price: '$100',
            tresLechesPrice: '$135',
            img: fullSheetCake,
            title: 'Full sheet cake'
        },
    ];

    return (
        <>
            <Typography variant="h5" component="h1" className={classes.spacing} >
                Cake Orders
            </Typography>

            <Description description="We love a good challenge but please allow a 3 day notice. The prices listed below are the starting price. The final price of the cake is based on the final design. And is subject to change if changes are made after the order is placed." />

            <Grid container spacing={3}>
                {flavors.map((flavor) =>
                    <Grid item xs={12}>
                        <Card className={matches ? classes.root : ''} >
                            <CardMedia
                                component={matches ? 'div' : 'img'}
                                className={matches ? classes.desktopCardMedia : classes.mobileCardMedia}
                                image={flavor.img}
                                title={flavor.title}
                            />
                            <CardContent className={classes.table}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Size</TableCell>
                                            <TableCell>Servings</TableCell>
                                            <TableCell>Starting Price</TableCell>
                                            <TableCell>Starting 3 Leches Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{flavor.size}</TableCell>
                                            <TableCell>{flavor.servings}</TableCell>
                                            <TableCell>{flavor.price}</TableCell>
                                            <TableCell>{flavor.tresLechesPrice}</TableCell>
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