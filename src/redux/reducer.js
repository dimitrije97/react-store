import * as type from './actionTypes'

export const itemsReducer = (state = {}, action) => {
    switch (action.type) {
        case type.SET_ITEMS:
            return {...state, items: action.payload};
        case type.PICK_ITEM:
            return {...state, pickedItems: [...state.pickedItems, { item: action.payload.item, number: action.payload.number }]}
        case type.REMOVE_PICKED_ITEM:
            return {...state, pickedItems: state.pickedItems.filter(item => item.IDRecept !== action.payload.item.IDRecept)}
        default:
            return state;
    }
}