import {
  COUNT_SUB,
  COUNT_ADD,
  COUNT_SUBMORE,
  COUNT_ADDMORE,
} from '../../contant/actionType'

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNT_SUB:
      return state - 1
    case COUNT_ADD:
      return state + 1
    case COUNT_SUBMORE:
      return state - action.payload
    case COUNT_ADDMORE:
      return state + action.payload
    default:
      return state
  }
}

export default countReducer
