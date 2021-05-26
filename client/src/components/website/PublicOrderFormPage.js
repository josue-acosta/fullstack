import React, { Component } from 'react';
import { reduxForm } from 'redux-form'

// components
import HeaderBar from './HeaderBar'
import FooterBar from './footer/FooterBar'
import PublicOrderForm from './public-order-form-page/PublicOrderForm'
import PublicOrderFormReview from './public-order-form-page/PublicOrderFormReview'

// styles
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';

const styles = theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    }
});

class PublicOrderFormPage extends Component {
    state = {
        showFormReview: false
    }

    handleOnOrderSubmit = () => {
        this.setState(prevState => ({
            showFormReview: !prevState.showFormReview
        }))
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <HeaderBar />
                <main>
                    <div className={classes.heroContent}>
                        <Container maxWidth='md'>
                            <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                                Cake Order Form
                            </Typography>
                            {
                                this.state.showFormReview ?
                                    <PublicOrderFormReview onOrderSubmit={this.handleOnOrderSubmit} /> :
                                    <PublicOrderForm onOrderSubmit={this.handleOnOrderSubmit} />
                            }
                        </Container>
                    </div>
                </main>

                {/* Footer */}
                <FooterBar />
                {/* End footer */}
            </React.Fragment >
        );
    }
}

export default withStyles(styles, { withTheme: true })(reduxForm({
    form: 'publicOrderForm'
})(PublicOrderFormPage))

// ?viewkey=ph5c3d426eed9e4