import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

// components
import HeaderBar from './HeaderBar'
import Landing from './Landing'
import Dashboard from './Dashboard'


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <HeaderBar />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);