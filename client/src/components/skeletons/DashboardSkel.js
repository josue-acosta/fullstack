import React from 'react';

// style
import Skeleton from '@material-ui/lab/Skeleton';

const DashboardSkel = () => {
    return (
        <>
            <Skeleton variant="text" />
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="rect" width={210} height={118} />
        </>
    );
}

export default DashboardSkel;