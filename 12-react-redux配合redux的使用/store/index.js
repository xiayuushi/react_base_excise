import { createStore, combineReducers } from 'redux'
import { userReducer, countReducer } from './reducer'
const rootReducer = combineReducers({ userReducer, countReducer })

const store = createStore(rootReducer)

export default store
