import { NEWS_GETLIST } from '../../contants/actionType'

const newsReducer = (state = [], action) => {
  if (action.type === NEWS_GETLIST) {
    return action.payload
  }
  return state
}

export default newsReducer
