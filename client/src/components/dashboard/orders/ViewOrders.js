import React from 'react';

// style
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton';

const ViewOrders = () => {
    const loading = true

    return (
        <Grid container wrap='nowrap'>
            <Box width='100%'>
                <Typography variant='h1'>
                    {loading ? <Skeleton /> : 'View Orders'}
                </Typography>

                <Typography variant='h3'>
                    {loading ? <Skeleton /> : 'Table Header'}
                </Typography>

                <Skeleton height={400} style={{ transform: 'scale(1)' }} />
            </Box>
        </Grid>
    );
}

export default ViewOrders;