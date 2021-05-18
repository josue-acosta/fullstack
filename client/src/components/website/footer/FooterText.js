import React from 'react';

// styles
import Typography from '@material-ui/core/Typography'

const Footer = () => {
    return (
        <>
            <Typography variant='h6' align='center' gutterBottom>
                Come Visit Us!
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                <address>
                    3306 Indianola Ave, Des Moines IA, 50315
                </address>
            </Typography>
        </>
    );
}

export default Footer;