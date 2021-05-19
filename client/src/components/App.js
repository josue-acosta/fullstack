import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

// components
import HomePage from './website/HomePage'
import MenuPage from './website/MenuPage'
import ContactUsPage from './website/ContactUsPage'
import DashboardPage from './dashboard/DashboardPage'


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/menu' component={MenuPage} />
                    <Route exact path='/contact-us' component={ContactUsPage} />
                    <Route path='/dashboard' component={DashboardPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);