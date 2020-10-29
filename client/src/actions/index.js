import axios from 'axios'
import { FETCH_USER, FETCH_ORDERS } from './types'

// function fetchUser returns a function with the argument dispatch
export const fetchUser = () => async dispatch => {
    // wait for axios response
    const res = await axios.get('/api/current-user');

    // dispatch with an object once req is complete
    dispatch({ type: FETCH_USER, payload: res.data });
}


// function fetchOrders returns a function with the argument dispatch
export const fetchOrders = () => async dispatch => {
    const res = await axios.get('/api/orders');

    dispatch({ type: FETCH_ORDERS, payload: res.data });
}


// function submitSurvey returns a function with the argument dispatch
export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values)

    history.push('/dashboard')
    dispatch({ type: FETCH_USER, payload: res.data })
}