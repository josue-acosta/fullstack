import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer'
import surveysReducer from './surveysReducer'
import orderReducer from './orderReducer'
import ordersReducer from './ordersReducer'


export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
    order: orderReducer,
    orders: ordersReducer,
})