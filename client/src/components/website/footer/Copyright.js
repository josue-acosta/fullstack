import React from 'react';

// styles
import Typography from '@material-ui/core/Typography'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {`Copyright © Mi Casa Cake Shop ${new Date().getFullYear()}`}
        </Typography>
    );
}

export default Copyright;