import * as type from './actionTypes'

export const warehouseReducer = (state = {}, action) => {
    switch (action.type) {
        case type.SET_ITEMS:
            return {...state, items: action.payload};
        default:
            return state;
    }
}