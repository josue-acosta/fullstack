import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import { connect } from 'react-redux';
import { fetchOrder } from '../../../actions'

// components
import OrderViewCard from './OrderViewCard'

// styles
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import PrintIcon from '@material-ui/icons/Print';

class OrderView extends Component {
    componentDidMount() {
        this.props.fetchOrder(this.props.match.params.orderID);
    }

    render() {
        return (
            <>
                <Card>
                    <CardActions>
                        <ReactToPrint
                            trigger={() => {
                                return (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<PrintIcon />} >
                                        Print
                                    </Button>
                                )
                            }}
                            content={() => this.componentRef}
                        />
                    </CardActions>

                    <CardContent>
                        <OrderViewCard ref={el => (this.componentRef = el)} {...this.props.order} />
                    </CardContent>
                </Card>
            </>
        );
    }
}

const mapStateToProps = ({ order }) => {
    return { order }
}

export default connect(mapStateToProps, { fetchOrder })(OrderView);