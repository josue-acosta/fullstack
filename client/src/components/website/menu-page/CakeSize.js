import React from 'react';


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
        width: 150,
        height: 150
    },
    table: {
        width: '100%'
    }
}));

const FlavorList = () => {
    const classes = useStyles();

    const flavors = [
        {
            size: '8"',
            servings: 15,
            price: '$31'
        },
        {
            size: '10"',
            servings: 25,
            price: '$43'
        },
        {
            size: '12"',
            servings: 35,
            price: '$57'
        },
        {
            size: 'Half Sheet',
            servings: 55,
            price: '$80'
        },
        {
            size: 'Full Sheet',
            servings: 70,
            price: '$100'
        },
    ];

    return (
        <>
            <Typography variant="h5" component="h1">
                Cake Orders
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

            <Typography variant="p">
                The final price is based on the final design. Changes to the order after it's placed is subject to change.
            </Typography>
        </>
    );
}

export default FlavorList;