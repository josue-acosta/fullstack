import { FETCH_INGREDIENT } from '../actions/types';

const ingredientReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_INGREDIENT:
            return action.payload;
        default:
            return state;
    }
}

export default ingredientReducer;