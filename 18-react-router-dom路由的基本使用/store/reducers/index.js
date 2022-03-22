import { combineReducers } from 'redux'
import news from './news'
import channel from './channel'

const rootReducer = combineReducers({
  channel,
  news,
})

export default rootReducer
