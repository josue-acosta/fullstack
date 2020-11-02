import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../../actions'

// components
import OrderTableRow from './OrderTableRow'

// styles
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class OrderTable extends Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Order No.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Flavor 1</TableCell>
                                <TableCell>Flavor 2</TableCell>
                                <TableCell>Size</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>View</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {this.state?.weekOrders.map(order =>
                                <CakeOrder {...order} key={order.order_number} />
                            )} */}
                            {this.props.orders.map(order =>
                                <OrderTableRow {...order} key={order._id} />
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        );
    }
}

const mapStateToProps = ({ orders }) => {
    return { orders }
}

export default connect(mapStateToProps, { fetchOrders })(OrderTable);