import React from 'react';
import { NavLink } from 'react-router-dom'

// style
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add'; // new order
import ViewListIcon from '@material-ui/icons/ViewList'; // view sale
import ReceiptIcon from '@material-ui/icons/Receipt'; // gross sales
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; // food cost
import DonutLargeIcon from '@material-ui/icons/DonutLarge'; // revenue streams
import MultilineChartIcon from '@material-ui/icons/MultilineChart'; // break even point
import DescriptionIcon from '@material-ui/icons/Description'; // balance sheet
import ExposureIcon from '@material-ui/icons/Exposure'; // profit and loss
import TrendingUpIcon from '@material-ui/icons/TrendingUp'; // cash flow
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';


export const mainListItems = (
    <div>
        <ListItem button component={NavLink} to="/dashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={NavLink} to="/new-order" >
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary="New Order" />
        </ListItem>

        <ListItem button component={NavLink} to="/view-orders" >
            <ListItemIcon><ViewListIcon /></ListItemIcon>
            <ListItemText primary="View Orders" />
        </ListItem>

        <ListItem button component={NavLink} to="/gross-sales" >
            <ListItemIcon><ReceiptIcon /></ListItemIcon>
            <ListItemText primary="Gross Sales" />
        </ListItem>

        <ListItem button component={NavLink} to="/food-cost" >
            <ListItemIcon><AddShoppingCartIcon /></ListItemIcon>
            <ListItemText primary="Food Cost" />
        </ListItem>
    </div>
);

export const terciaryListItems = (
    <div>
        <ListItem button component={NavLink} to="/revenue-streams" >
            <ListItemIcon><DonutLargeIcon /></ListItemIcon>
            <ListItemText primary="Revenue Streams" />
        </ListItem>

        <ListItem button component={NavLink} to="/break-even-point" >
            <ListItemIcon><MultilineChartIcon /></ListItemIcon>
            <ListItemText primary="Break Even Point" />
        </ListItem>

        <ListItem button component={NavLink} to="/balance-sheet" >
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary="Balance Sheet" />
        </ListItem>

        <ListItem button component={NavLink} to="/profit-and-loss" >
            <ListItemIcon><ExposureIcon style={{ transform: 'rotate(180deg)' }} /></ListItemIcon>
            <ListItemText primary="Profit &amp; Loss" />
        </ListItem>

        <ListItem button component={NavLink} to="/cash-flow" >
            <ListItemIcon><TrendingUpIcon /></ListItemIcon>
            <ListItemText primary="Cash Flow" />
        </ListItem>
    </div>
)

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button component={NavLink} to="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Go home" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>


    </div>
);