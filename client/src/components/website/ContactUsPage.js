import React from 'react';

// components
import HeaderBar from './HeaderBar'
import FooterBar from './footer/FooterBar'

// styles
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


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
    }
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HeaderBar />
            <main>
                <h1>Hello from Contact Us Page</h1>
            </main>

            {/* Footer */}
            <FooterBar />
            {/* End footer */}
        </React.Fragment >
    );
}