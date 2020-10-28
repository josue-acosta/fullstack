import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

// styles
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const styles = theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
});

class Hero extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                {/* Hero */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Dashboard
                    </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident possimus distinctio quis vero, labore natus illum suscipit, at illo autem.
                    </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Main call to action
                                </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                {/* End Hero */}
            </React.Fragment>
        );
    }
}

// export default connect(null, actions)(Hero);
export default withStyles(styles, { withTheme: true })(connect(null, actions)(Hero));