import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer'
import orderReducer from './orderReducer'
import ordersReducer from './ordersReducer'
import ingredientReducer from './ingredientReducer'


export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    order: orderReducer,
    orders: ordersReducer,
    ingredient: ingredientReducer
})