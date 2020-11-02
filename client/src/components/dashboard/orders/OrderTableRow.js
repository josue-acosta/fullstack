import React from 'react';
import { NavLink } from 'react-router-dom'

// Styles
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button'

const CakeOrder = ({ _id, orderNumber, name, flavor1, flavor2, cakeSize, dateTime, price }) => {
    const cakeSizes = ["Full Sheet", "Half Sheet"]
    return (
        <TableRow>
            <TableCell>{orderNumber}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{flavor1}</TableCell>
            <TableCell>{flavor2}</TableCell>
            <TableCell>{cakeSize}{cakeSizes.includes(cakeSize) ? null : "\""}</TableCell>
            <TableCell>{dateTime}</TableCell>
            <TableCell>${price}</TableCell>
            <TableCell>
                <Button variant="outlined" color="primary" component={NavLink} to={`/dashboard`} >View</Button>
            </TableCell>
        </TableRow >
    );
}

export default CakeOrder;