import React from 'react';
import { NavLink } from 'react-router-dom'

// styles
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import ViewListIcon from '@material-ui/icons/ViewList';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import DescriptionIcon from '@material-ui/icons/Description';
import ExposureIcon from '@material-ui/icons/Exposure';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HomeIcon from '@material-ui/icons/Home';


export const mainListItems = (
    <div>
        <ListItem button component={NavLink} to='/dashboard'>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary='Dashboard' />
        </ListItem>

        <ListItem button component={NavLink} to='/'>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='Go home' />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Cake Orders</ListSubheader>
        <ListItem button component={NavLink} to='/dashboard/new-order' >
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary='New Order' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/orders' >
            <ListItemIcon><ViewListIcon /></ListItemIcon>
            <ListItemText primary='View Orders' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/gross-sales' >
            <ListItemIcon><ReceiptIcon /></ListItemIcon>
            <ListItemText primary='Gross Sales' />
        </ListItem>
    </div>
);

export const terciaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button component={NavLink} to='//dashboardrevenue-streams' >
            <ListItemIcon><DonutLargeIcon /></ListItemIcon>
            <ListItemText primary='Revenue Streams' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/break-even-point' >
            <ListItemIcon><MultilineChartIcon /></ListItemIcon>
            <ListItemText primary='Break Even Point' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/balance-sheet' >
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary='Balance Sheet' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/profit-and-loss' >
            <ListItemIcon><ExposureIcon style={{ transform: 'rotate(180deg)' }} /></ListItemIcon>
            <ListItemText primary='Profit &amp; Loss' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/cash-flow' >
            <ListItemIcon><TrendingUpIcon /></ListItemIcon>
            <ListItemText primary='Cash Flow' />
        </ListItem>
    </div>
)

export const quaternaryListItems = (
    <div>
        <ListSubheader inset>Food Cost</ListSubheader>
        <ListItem button component={NavLink} to='/dashboard/new-ingredient' >
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary='New Ingredient' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/ingredients' >
            <ListItemIcon><ViewListIcon /></ListItemIcon>
            <ListItemText primary='View Ingredients' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/out-the-door-costs' >
            <ListItemIcon><ViewListIcon /></ListItemIcon>
            <ListItemText primary='View OTD Costs' />
        </ListItem>
    </div>
)