import { FETCH_ORDER } from '../actions/types';

const orderReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ORDER:
            return action.payload;
        default:
            return state;
    }
}

export default orderReducer;