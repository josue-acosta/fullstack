import React from 'react';
import { Route } from 'react-router-dom'


// components
// ---- navigation
import NavAppBar from './NavAppBar'
import NavDrawer from './NavDrawer'

// ---- pages
import OrderNew from './orders/OrderNew'
import OrderTable from './orders/OrderTable'
import OrderView from './orders/OrderView'
import ChannelPage from './omnichannel/ChannelPage'

// styles
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavAppBar open={open} drawerOpen={handleDrawerOpen} />
            <NavDrawer open={open} drawerClose={handleDrawerClose} />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth='lg' className={classes.container}>
                    <Grid container spacing={3}>
                        <Route path='/dashboard/new-order' component={OrderNew} />
                        <Route path='/dashboard/orders' component={OrderTable} />
                        <Route path='/dashboard/order/:orderID' component={OrderView} />
                        <Route path='/dashboard/channels' component={ChannelPage} />
                    </Grid>
                </Container>
            </main>
        </div>
    );
}