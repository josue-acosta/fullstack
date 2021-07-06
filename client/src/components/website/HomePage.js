import React from 'react';
import { NavLink } from 'react-router-dom'

// components
import HeaderBar from './HeaderBar'
import FooterBar from './footer/FooterBar'
import ImageGrid from './home-page/ImageGrid'

// styles
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    navLinkPrimary: {
        color: 'white',
        textDecoration: 'none',
    },
    navLinkSecondary: {
        textDecoration: 'none',
    }
}));

export default function HomePage() {
    const classes = useStyles();
    const menuLink = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>)
    const cakeOrderFormLink = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>)

    return (
        <React.Fragment>
            <CssBaseline />
            <HeaderBar />
            <main>
                {/* Hero */}
                <div className={classes.heroContent}>
                    <Container maxWidth='sm'>
                        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                            Mi Casa Cake Shop
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            We're a Mexican bakery with years of experience making cakes for all occasions.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary' component={menuLink} to="/menu">
                                        Menu
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary' component={cakeOrderFormLink} to="/cake-order-form">
                                        Order a Cake
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                {/* End Hero */}

                {/* ImageGrid */}
                <Container className={classes.cardGrid} maxWidth='md'>
                    <ImageGrid />
                </Container>
                {/* End ImageGrid */}
            </main>

            {/* Footer */}
            <FooterBar />
            {/* End footer */}
        </React.Fragment >
    );
}