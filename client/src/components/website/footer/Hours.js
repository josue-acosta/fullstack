import React from 'react';

// styles
import Typography from '@material-ui/core/Typography'

const Hours = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Monday: Closed<br />
            Tuesday - Sunday: 9AM - 7PM
        </Typography>
    );
}

export default Hours;