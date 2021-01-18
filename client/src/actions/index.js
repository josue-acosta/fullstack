import axios from 'axios'
import { FETCH_USER, FETCH_ORDER, FETCH_ORDERS, FETCH_INGREDIENT, FETCH_INGREDIENTS } from './types'

// AUTHORIZATION
// function fetchUser returns a function with the argument dispatch
export const fetchUser = () => async dispatch => {
    // wait for axios response
    const res = await axios.get('/api/current-user');

    // dispatch with an object once req is complete
    dispatch({ type: FETCH_USER, payload: res.data });
}


// ORDERS
export const submitOrder = (values, history) => async dispatch => {
    const res = await axios.post('/api/submit-order', values);

    history.push('/dashboard/orders')
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchOrder = orderID => async dispatch => {
    const res = await axios.get(`/api/order/${orderID}`);

    dispatch({ type: FETCH_ORDER, payload: res.data });
}


export const fetchOrders = () => async dispatch => {
    const res = await axios.get('/api/orders');

    dispatch({ type: FETCH_ORDERS, payload: res.data });
}


// INGREDIENTS
export const submitIngredient = (values, history) => async dispatch => {
    const res = await axios.post('/api/submit-ingredient', values);

    history.push('/dashboard/ingredients')
    dispatch({ type: FETCH_USER, payload: res.data });
}

// export const fetchIngredient = ingredientID => async dispatch => {
//     const res = await axios.get(`/api/ingredient/${ingredientID}`);

//     dispatch({ type: FETCH_INGREDIENT, payload: res.data });
// }


// export const fetchIngridients = () => async dispatch => {
//     const res = await axios.get('/api/ingredients');

//     dispatch({ type: FETCH_INGREDIENTS, payload: res.data });
// }