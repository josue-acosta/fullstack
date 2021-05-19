import React from 'react';

// components
import HeaderBar from './HeaderBar'
import FooterBar from './footer/FooterBar'
import FlavorList from './menu-page/FlavorList'
import MiniCakeList from './menu-page/MiniCakeList'
import CakeSize from './menu-page/CakeSize'

// styles
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
    // 
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomePage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HeaderBar />
            <main>
                <Typography variant="h1" component="h1">
                    Menu
                </Typography>
                <FlavorList />
                <MiniCakeList />
                <CakeSize />
            </main>

            {/* Footer */}
            <FooterBar />
            {/* End footer */}
        </React.Fragment >
    );
}