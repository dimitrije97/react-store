import * as type from './actionTypes'

export const setItems = (items) => {
    return {
        type: type.SET_ITEMS,
        payload: items
    }
}