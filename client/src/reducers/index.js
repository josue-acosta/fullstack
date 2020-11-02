import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer'
import surveysReducer from './surveysReducer'
import ordersReducer from './ordersReducer'


export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
    orders: ordersReducer,
})