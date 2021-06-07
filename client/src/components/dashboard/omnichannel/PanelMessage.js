import React from 'react';

// styles
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
            <ListItemText primary={`Message ${index + 1}`} />
        </ListItem>
    );
}

const PanelMessage = () => {
    const classes = useStyles();

    return (
        <Grid item xs={9}>
            <div className={classes.root}>
                <FixedSizeList height={475} itemSize={46} itemCount={200}>
                    {renderRow}
                </FixedSizeList>
            </div>
        </Grid>
    );
}

export default PanelMessage;