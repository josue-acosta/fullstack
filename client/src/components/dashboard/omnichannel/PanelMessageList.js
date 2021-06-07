import React from 'react';

// styles
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 475,
        backgroundColor: theme.palette.background.paper,
    },
}));

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={`Messenger ${index + 1}`} />
        </ListItem>
    );
}

const PanelMessageList = () => {
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <div className={classes.root}>
                <FixedSizeList height={475} itemSize={46} itemCount={200}>
                    {renderRow}
                </FixedSizeList>
            </div>
        </Grid>
    );
}

export default PanelMessageList;