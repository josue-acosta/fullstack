import React from 'react';

// images
import cakeWedding from '../../../images/wedding-cake.jpg'
import cakeForestWedding from '../../../images/forest-wedding-cake.jpeg'
import cakeFruit from '../../../images/fruit-cake.jpeg'
import cakeFancy from '../../../images/fancy-cake.jpg'
import cakeFancy01 from '../../../images/fancy-cake-01.jpeg'
import quinceCake from '../../../images/quince-cake.jpeg'

// styles
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const tileData = [
    {
        img: cakeWedding,
        title: 'Image',
        author: 'author',
    },
    {
        img: cakeFancy,
        title: 'Image',
        author: 'author',
    },
    {
        img: cakeFruit,
        title: 'Image',
        author: 'author',
    },
    {
        img: cakeForestWedding,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: cakeFancy01,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: quinceCake,
        title: 'Image',
        author: 'author',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={360} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}