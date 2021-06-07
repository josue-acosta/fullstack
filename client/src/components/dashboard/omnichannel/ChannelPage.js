import React from 'react';

// components
import PanelMessageList from './PanelMessageList'
import PanelMessage from './PanelMessage'

// styles
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    // add style here
}));

const ChannelPage = () => {
    return (
        <Grid container justify="center" spacing={1}>
            <PanelMessageList />
            <PanelMessage />
        </Grid>
    );
}

export default ChannelPage;