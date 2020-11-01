import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../../../actions'

// components
import OrderViewCard from './OrderViewCard'

// styles
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class OrderView extends Component {
    componentDidMount() {
        this.props.fetchOrder(this.props.match.params.orderID);
    }

    render() {
        return (
            <>
                <Card>
                    <CardActions>
                        <Button variant="contained" color="primary" >Print</Button>
                    </CardActions>

                    <CardContent>
                        <OrderViewCard {...this.props.order} />
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