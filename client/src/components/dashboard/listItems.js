import React from 'react';
import { NavLink } from 'react-router-dom'

// styles
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AddIcon from '@material-ui/icons/Add';
import ViewListIcon from '@material-ui/icons/ViewList';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';


export const mainListItems = (
    <div>
        <ListItem button component={NavLink} to='/dashboard'>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary='Dashboard' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/channels'>
            <ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
            <ListItemText primary='Conversations' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/new-order' >
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary='New Order' />
        </ListItem>

        <ListItem button component={NavLink} to='/dashboard/orders' >
            <ListItemIcon><ViewListIcon /></ListItemIcon>
            <ListItemText primary='View Orders' />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Account</ListSubheader>
        <ListItem button component={NavLink} to='/'>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='Home Page' />
        </ListItem>
    </div>
);

export const terciaryListItems = (
    <div>
        <ListItem button component={NavLink} to='/dashboard/food-cost' >
            <ListItemIcon><AddShoppingCartIcon /></ListItemIcon>
            <ListItemText primary='Food Cost' />
        </ListItem>
    </div>
)