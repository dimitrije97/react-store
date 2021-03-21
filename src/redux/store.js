import { createStore, combineReducers } from 'redux'
import { itemsReducer } from './reducer'

const store = combineReducers({
    itemsStore: itemsReducer
})

export default createStore(store)