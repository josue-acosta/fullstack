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


export const submitSurvey = values => async dispatch => {
    console.log('submitSurvey values:')
    console.log(values)

    const res = await axios.post('/api/surveys', values)
    console.log(res)

    return { type: "submit_survey" }
    // dispatch({ type: FETCH_USER, payload: res.data })
}