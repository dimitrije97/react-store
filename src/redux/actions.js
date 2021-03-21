import * as type from './actionTypes'

export const setItems = (items) => {
    return {
        type: type.SET_ITEMS,
        payload: items
    }
}

export const pickItem = (item, number) => {
    return {
        type: type.PICK_ITEM,
        payload: {
            item: item,
            number: number
        }
    }
}

export const removePickedItem = (item) => {
    return {
        type: type.REMOVE_PICKED_ITEM,
        payload: {
            item: item
        }
    }
}