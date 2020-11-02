import React, { Component } from 'react';


// components


// style
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        width: "100%",
    }
});

class NewOrder extends Component {
    render() {
        const { classes } = this.props;

        return (
            <>
                <Typography variant="h3" component="h1">New Order</Typography>

                <Typography variant="body1">Hola Mundo</Typography>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewOrder);
// export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(DashboardPage));