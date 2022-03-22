import { FILTERS_CHANGE_FILTER_CONDITION } from '../contants/actionType'

export const filters_changeFilterCondition = (condition) => ({
  type: FILTERS_CHANGE_FILTER_CONDITION,
  condition,
})
