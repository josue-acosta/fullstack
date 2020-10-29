import React from 'react';

// styles
import Button from '@material-ui/core/Button';

const LoginButton = ({ auth }) => {
    switch (auth) {
        case null:
            return null;
        case false:
            return <Button key="login" color="inherit" href='/auth/google'>Login</Button>
        default:
            return <Button key="logout" color="inherit" href='/api/logout'>Logout</Button>
    }
}

export default LoginButton;
