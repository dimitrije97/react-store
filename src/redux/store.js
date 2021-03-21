import { createStore, combineReducers } from 'redux'
import { warehouseReducer } from './reducer'

const store = combineReducers({
    warehouseStore: warehouseReducer
})

export default createStore(store)