import todos from './todos'
import filters from './filters'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todos,
  filters,
})

export default rootReducer
