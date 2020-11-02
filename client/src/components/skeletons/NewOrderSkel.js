import React, { Component } from 'react';

// style
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton';

const styles = theme => ({
    root: {
        width: '100%',
    },
    tableHeader: {
        transform: 'scale(1)',
        marginBottom: '1rem'
    },
    tableBody: {
        transform: 'scale(1)'
    }
});

class NewOrderSkel extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Box className={classes.root}>
                <Typography variant='h3' component='h1' >
                    <Skeleton />
                </Typography>

                <Skeleton height={80} className={classes.tableHeader} />

                <Skeleton height={400} className={classes.tableBody} />
            </Box>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewOrderSkel);