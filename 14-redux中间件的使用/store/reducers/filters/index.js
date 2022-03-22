import { FILTERS_CHANGE_FILTER_CONDITION } from '../../contants/actionType'

const filtersReducer = (state = 'All', action) => {
  if (action.type === FILTERS_CHANGE_FILTER_CONDITION) {
    return action.condition
  }
  return state
}

export default filtersReducer
