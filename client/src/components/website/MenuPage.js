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
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    marginTop: {
        marginTop: '4rem'
    }
}));

export default function MenuPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HeaderBar />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth='md'>
                        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                            Menu
                        </Typography>

                        <Typography variant='h3' align='center' color='textSecondary' paragraph >
                            In-store Pickup
                        </Typography>
                        <MiniCakeList />

                        <Typography variant='h3' align='center' color='textSecondary' paragraph className={classes.marginTop}>
                            Custom Cakes
                        </Typography>
                        <FlavorList />
                        <CakeSize />

                    </Container>
                </div>
            </main>

            {/* Footer */}
            <FooterBar />
            {/* End footer */}
        </React.Fragment >
    );
}