import { CHANNEL_GETLIST, CHANNEL_GETID } from '../../contants/actionType'

const initState = {
  list: [],
  id: 0,
}
const channelReducer = (state = initState, action) => {
  if (action.type === CHANNEL_GETLIST) {
    return {
      ...state,
      list: action.payload,
    }
  }

  if (action.type === CHANNEL_GETID) {
    return {
      ...state,
      id: action.id,
    }
  }
  return state
}

export default channelReducer
